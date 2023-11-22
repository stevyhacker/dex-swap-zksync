import { SITE_DESCRIPTION } from '@/utils/site'
import { Dex } from '@/components/Dex'

export default function Home() {
  return (
    <>
      <h2 className='text-lg'>ZKSyncTestnet DEX</h2>
      <br />

      <div>
        <p>
          UniswapV3Factory
          <a
            className={'text-blue-400 underline'}
            href={'https://goerli.explorer.zksync.io/address/0x41fcE16a0Ccc749e3036F62f42a838c176A0D70F'}>
            <br />
            0x41fcE16a0Ccc749e3036F62f42a838c176A0D70F
          </a>
        </p>
        <br />
        <p>
          SwapRouter02
          <a
            className={'text-blue-400 underline'}
            href={'https://goerli.explorer.zksync.io/address/0x0BBDfB697D515EF154628d659724C58d8e0D5CDC'}>
            <br />
            0x0BBDfB697D515EF154628d659724C58d8e0D5CDC
          </a>
        </p>
        <br />
        <p>
          NonfungiblePositionManager
          <a
            className={'text-blue-400 underline'}
            href={'https://goerli.explorer.zksync.io/address/0xA87AA5CF925542436872207ffcDbFF792f388EA5'}>
            <br />
            0xA87AA5CF925542436872207ffcDbFF792f388EA5
          </a>
        </p>
      </div>

      <Dex />
    </>
  )
}
