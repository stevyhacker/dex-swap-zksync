'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { Address, useAccount, useBalance, usePublicClient, useWalletClient } from 'wagmi'
import { getUsdc, nonfungiblePositionManagerABI, usdcABI, writeNonfungiblePositionManager } from '@/abis'
import { formatEther, getContractAddress, parseEther, parseUnits } from 'viem'
import { getBlockNumber, getTransactionCount } from 'viem/actions'
import { encodePriceSqrt, FeeAmount, getMaxTick, getMinTick, TICK_SPACINGS } from '@/utils'

export function Dex() {
  const { address, isConnecting, isDisconnected } = useAccount()
  const { data: walletClient, isError, isLoading } = useWalletClient()
  const publicClient = usePublicClient()

  const token1Address = '0x5B1F61B316baaE16E55b497258D40D62E222A049'
  const token2Address = '0xa72609480b99D71B29326F6267e7c0EC649de093'
  const uniswapRouter = '0x0BBDfB697D515EF154628d659724C58d8e0D5CDC'
  const nonfungiblePositionManager = '0xA87AA5CF925542436872207ffcDbFF792f388EA5'

  const [token1Input, setToken1Input] = useState(0)
  const [token2Input, setToken2Input] = useState(0)
  const [token1Allowance, setToken1Allowance] = useState(0n)
  const [token2Allowance, setToken2Allowance] = useState(0n)
  const [approveRequired, setApproveRequired] = useState(true)

  useEffect(() => {
    async function checkApprovals() {
      const allowance = await publicClient.readContract({
        account: address,
        abi: usdcABI,
        address: token1Address as Address,
        functionName: 'allowance',
        args: [address as Address, nonfungiblePositionManager],
      })
      setToken1Allowance(allowance)

      const allowance2 = await publicClient.readContract({
        account: address,
        abi: usdcABI,
        address: token1Address as Address,
        functionName: 'allowance',
        args: [address as Address, nonfungiblePositionManager],
      })
      setToken1Allowance(allowance2)

      if (allowance >= parseUnits(token1Input.toString(), 6) && allowance2 >= parseUnits(token2Input.toString(), 6)) {
        setApproveRequired(false)
      } else {
        setApproveRequired(true)
      }
    }

    checkApprovals()
  }, [address, publicClient, token1Input, token2Input, token1Allowance, token2Allowance])

  const handleToken1InputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToken1Input(Number(event.target.value))
  }

  const handleToken2InputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToken2Input(Number(event.target.value))
  }

  const token1Balance = useBalance({
    address: address,
    token: token1Address as Address,
    watch: true,
  })

  const token2Balance = useBalance({
    address: address,
    token: token2Address as Address,
    watch: true,
  })

  const mintToken:
    | React.MouseEventHandler<HTMLButtonElement>
    | ((index: number) => React.MouseEventHandler<HTMLButtonElement>) = useCallback(
    (index: number) => async () => {
      console.log('Minting ERC20 token')
      if (walletClient != undefined && address != undefined) {
        let tokenAddress = token1Address
        if (index == 2) tokenAddress = token2Address
        const { request } = await publicClient.simulateContract({
          account: address,
          abi: usdcABI,
          address: tokenAddress as Address,
          functionName: 'mint',
          args: [address, parseUnits('1000', 6)],
        })
        await walletClient.writeContract(request)
      } else {
        alert('Connect your wallet first')
      }
    },
    [publicClient, walletClient, address]
  )

  async function approveTokens() {
    console.log('Approving tokens')

    if (walletClient != undefined && address != undefined) {
      if (token1Allowance < parseUnits(token1Input.toString(), 6)) {
        const { request: approve1 } = await publicClient.simulateContract({
          account: address,
          abi: usdcABI,
          address: token1Address as Address,
          functionName: 'approve',
          args: [nonfungiblePositionManager, parseUnits(token1Input.toString(), 6)],
        })
        walletClient.writeContract(approve1)
        setToken1Allowance(parseUnits(token1Input.toString(), 6))
      }

      if (token2Allowance < parseUnits(token2Input.toString(), 6)) {
        const { request: approve2 } = await publicClient.simulateContract({
          account: address,
          abi: usdcABI,
          address: token2Address as Address,
          functionName: 'approve',
          args: [nonfungiblePositionManager, parseUnits(token2Input.toString(), 6)],
        })
        walletClient.writeContract(approve2)
        setToken2Allowance(parseUnits(token2Input.toString(), 6))
      }

      if (
        token1Allowance >= parseUnits(token1Input.toString(), 6) &&
        token2Allowance >= parseUnits(token2Input.toString(), 6)
      ) {
        setApproveRequired(false)
      }

      console.log('Tokens approved')
    }
  }

  async function addLiquidity() {
    if (token1Input == 0 || token2Input == 0) {
      alert('Please enter a value for both tokens')
      return
    }
    if (walletClient != undefined && address != undefined) {
      console.log('Adding liquidity')

      const poolFee = 3000
      const sqrtPrice = encodePriceSqrt(1, 1)

      const { request: createPool } = await publicClient.simulateContract({
        account: address,
        abi: nonfungiblePositionManagerABI,
        address: nonfungiblePositionManager as Address,
        functionName: 'createAndInitializePoolIfNecessary',
        args: [token1Address as Address, token2Address as Address, poolFee, BigInt(sqrtPrice.toString())],
      })
      walletClient.writeContract(createPool)

      const { request: addLiquidityPair } = await publicClient.simulateContract({
        account: address,
        abi: nonfungiblePositionManagerABI,
        address: nonfungiblePositionManager as Address,
        functionName: 'mint',
        args: [
          {
            token0: token1Address,
            token1: token2Address,
            fee: poolFee,
            tickLower: getMinTick(TICK_SPACINGS[FeeAmount.MEDIUM]),
            tickUpper: getMaxTick(TICK_SPACINGS[FeeAmount.MEDIUM]),
            amount0Desired: parseUnits(token1Input.toString(), 6),
            amount1Desired: parseUnits(token2Input.toString(), 6),
            amount0Min: BigInt(0),
            amount1Min: BigInt(0),
            recipient: address,
            deadline: BigInt(Math.floor(Date.now() / 1000) + 60 * 10),
          },
        ],
      })
      walletClient.writeContract(addLiquidityPair)

      console.log('Liquidity added')
    }
  }

  return (
    <>
      <br />
      <button onClick={mintToken(1)} className='btn btn-accent ml-4'>
        Mint Token 1
      </button>

      <button onClick={mintToken(2)} className='btn btn-accent ml-4'>
        Mint Token 2
      </button>

      <p className={'mt-4'}>Current Token 1 Balance: {token1Balance.data?.formatted}</p>
      <p>Current Token 2 Balance: {token2Balance.data?.formatted}</p>

      <p className='text-lg mt-4'>Token 1</p>

      <input type='text' value={token1Address} className='input input-bordered input-primary w-full max-w-md' />
      <input
        type='number'
        value={token1Input}
        placeholder='0.0'
        onChange={handleToken1InputChange}
        className='input input-bordered input-secondary w-full max-w-xs mt-2'
      />

      <br />
      <br />

      <p className='text-lg'>Token 2</p>
      <input type='text' value={token2Address} className='input input-bordered input-primary w-full max-w-md' />
      <input
        type='number'
        value={token2Input}
        placeholder='0.0'
        onChange={handleToken2InputChange}
        className='input input-bordered input-secondary w-full max-w-xs mt-2'
      />

      <br />
      <br />

      {approveRequired && (
        <button onClick={approveTokens} className='btn btn-accent mr-4'>
          Approve
        </button>
      )}

      <button onClick={addLiquidity} className='btn btn-secondary mr-4'>
        Add Liquidity
      </button>

      <button className='btn btn-primary'>Swap</button>
    </>
  )
}
