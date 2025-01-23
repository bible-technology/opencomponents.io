import Image from 'next/image'

import uw_logo from '../public/logo/unfoldingword.svg'
import logo_hiscoder from '../public/logo/logo_hiscoder.svg'
import bc_logo from '../public/logo/logo-white@2x.png'
import ip_logo from '../public/logo/idiomaspuentes-logo.svg'
import ilab_logo from '../public/logo/ilab_logo_dark.png'

const orgs = [
  {
    logo: ilab_logo,
    url: 'https://etenlab.notion.site/',
    w: 68,
  },
  { logo: uw_logo, url: 'https://unfoldingword.org', w: 228 },
  { logo: ip_logo, url: 'https://idiomaspuentes.org/', w: 208 },
  { logo: bc_logo, url: 'https://bridgeconn.com/', w: 112 },
  { logo: logo_hiscoder, url: 'https://hiscoder.com/', w: 145 },
]
function Partners() {
  return (
    <div className="self-start">
      <div className="uppercase font-bold text-xl text-primary-700 mt-4 mb-6">
        Partners
      </div>
      <div className="flex-wrap flex mt-6">
        {orgs.map((org) => (
          <div className="m-4" key={org.url}>
            <a target="_blank" href={org.url} className="cursor-pointer" rel="noreferrer">
              <Image src={org.logo} alt={org.url} width={org.w} height="40" />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Partners
