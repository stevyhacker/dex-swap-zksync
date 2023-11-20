import { mainnet, sepolia, zkSync, zkSyncTestnet } from '@wagmi/core/chains'

export const ETH_CHAINS = [mainnet, sepolia, zkSync, zkSyncTestnet]

export function GetNetworkColor(chain?: string) {
  if (chain === 'homestead') return 'green'
  if (chain === 'zksync') return 'blue'
  if (chain === 'zksyncTestnet') return 'blue'
  if (chain === 'optimism') return 'red'
  if (chain === 'matic') return 'purple'

  return 'grey'
}
