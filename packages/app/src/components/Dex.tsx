'use client'

import React, { useCallback, useState } from 'react'
import { Address, useAccount, useBalance, usePublicClient, useWalletClient } from 'wagmi'
import { getUsdc, nonfungiblePositionManagerABI, usdcABI, writeNonfungiblePositionManager } from '@/abis'
import { formatEther, getContractAddress, parseEther, parseUnits } from 'viem'
import { getBlockNumber, getTransactionCount } from 'viem/actions'
import { BigNumber, BigNumberish } from 'ethers'
import bn from 'bignumber.js'

bn.config({ EXPONENTIAL_AT: 999999, DECIMAL_PLACES: 40 })

export function encodePriceSqrt(reserve1: BigNumberish, reserve0: BigNumberish): BigNumber {
  return BigNumber.from(
    new bn(reserve1.toString())
      .div(reserve0.toString())
      .sqrt()
      .multipliedBy(new bn(2).pow(96))
      .integerValue(3)
      .toString()
  )
}

export const getMinTick = (tickSpacing: number) => Math.ceil(-887272 / tickSpacing) * tickSpacing
export const getMaxTick = (tickSpacing: number) => Math.floor(887272 / tickSpacing) * tickSpacing

export enum FeeAmount {
  LOW = 500,
  MEDIUM = 3000,
  HIGH = 10000,
}

export const TICK_SPACINGS: { [amount in FeeAmount]: number } = {
  [FeeAmount.LOW]: 10,
  [FeeAmount.MEDIUM]: 60,
  [FeeAmount.HIGH]: 200,
}

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

  async function addLiquidity() {
    console.log('Approving tokens before adding liquidity')

    if (walletClient != undefined && address != undefined) {
      //check allowance of the USDC ERC20 token and approve if needed

      const allowance = await publicClient.readContract({
        account: address,
        abi: usdcABI,
        address: token1Address as Address,
        functionName: 'allowance',
        args: [address, nonfungiblePositionManager],
      })

      console.log('Allowance of token1: ' + allowance)

      const allowance2 = await publicClient.readContract({
        account: address,
        abi: usdcABI,
        address: token1Address as Address,
        functionName: 'allowance',
        args: [address, nonfungiblePositionManager],
      })

      console.log('Allowance of token2: ' + allowance2)

      if (allowance < parseUnits(token1Input.toString(), 6)) {
        const { request: approve1 } = await publicClient.simulateContract({
          account: address,
          abi: usdcABI,
          address: token1Address as Address,
          functionName: 'approve',
          args: [nonfungiblePositionManager, parseUnits(token1Input.toString(), 6)],
        })
        walletClient.writeContract(approve1)
      }

      if (allowance2 < parseUnits(token2Input.toString(), 6)) {
        const { request: approve2 } = await publicClient.simulateContract({
          account: address,
          abi: usdcABI,
          address: token2Address as Address,
          functionName: 'approve',
          args: [nonfungiblePositionManager, parseUnits(token2Input.toString(), 6)],
        })
        walletClient.writeContract(approve2)
      }

      console.log('Adding liquidity')

      const poolFee = 3000
      const sqrtPrice = encodePriceSqrt(1, 1)

      const { request: createPool } = await publicClient.simulateContract({
        account: address,
        abi: nonfungiblePositionManagerABI,
        address: nonfungiblePositionManager as Address,
        functionName: 'createAndInitializePoolIfNecessary',
        args: [token1Address as Address, token2Address as Address, poolFee, sqrtPrice],
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

      <button onClick={addLiquidity} className='btn btn-secondary mr-4'>
        Add Liquidity
      </button>

      <button className='btn btn-primary'>Swap</button>
    </>
  )
}
