import Image from 'next/image'

import uw_logo from '../public/logo/unfoldingword.svg'
import tt_logo from '../public/logo/tt_logo.svg'
import bc_logo from '../public/logo/logo-white@2x.png'
import ip_logo from '../public/logo/idiomaspuentes-logo.svg'
import eten_logo from '../public/logo/eten_logo.png'

const orgs = [
  { logo: eten_logo, url: 'https://eten.bible/', w: 131 },
  { logo: uw_logo, url: 'https://unfoldingword.org', w: 228 },
  { logo: ip_logo, url: 'https://idiomaspuentes.org/', w: 208 },
  { logo: bc_logo, url: 'https://bridgeconn.com/', w: 112 },
  { logo: tt_logo, url: 'https://texttree.org', w: 145 },
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
