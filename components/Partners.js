import Image from 'next/image'

import uw_logo from '../public/logo/unfoldingword.svg'
import tt_logo from '../public/logo/tt_logo.png'
import bc_logo from '../public/logo/logo-white@2x.png'
import ip_logo from '../public/logo/idiomaspuentes-logo.svg'
import eten_logo from '../public/logo/eten_logo.png'

const orgs = [
  { logo: uw_logo, url: 'https://unfoldingword.org', w: 228 },
  { logo: tt_logo, url: 'https://texttree.org', w: 145 },
  { logo: ip_logo, url: '', w: 208 },
  { logo: bc_logo, url: '', w: 112 },
  { logo: eten_logo, url: '', w: 131 },
]
function Partners() {
  return (
    <div className="self-start">
      <div className="uppercase font-bold text-xl text-primary-700 mt-4 mb-6">
        Partners
      </div>
      <div className="flex-wrap flex mt-6">
        {orgs.map((org) => (
          <div
            className="grayscale brightness-50 opacity-70 hover:opacity-100 hover:grayscale-0 hover:brightness-100 transition-all m-4"
            key={org.logo}
          >
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
