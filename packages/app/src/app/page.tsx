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
          <br />
          0x41fcE16a0Ccc749e3036F62f42a838c176A0D70F
        </p>
        <br />

        <p>
          SwapRouter02
          <br />
          0x0BBDfB697D515EF154628d659724C58d8e0D5CDC
        </p>
      </div>

      <Dex />
    </>
  )
}
