import Image from 'next/image'
import Link from 'next/link'

import button from '../public/button.png'

export function Hackathon() {
  return (
    <div className="bg-secondary-400 py-3 md:py-0">
      <div className="container mx-auto px-3">
        <div className="relative flex flex-col space-x-4 md:flex-row items-center justify-center overflow-hidden">
          <div className="text-center text-xl font-bold text-primary-600 mb-3 md:mb-0">
            Open Components Hackathon 2023
          </div>
          <Link href="/hackathon/register">
            <a className="w-36 text-white py-1 text-center rounded-lg bg-primary-600 hover:bg-primary-700 active:shadow-xl select-none font-bold active:shadow-primary-700/23 cursor-pointer">
              Register Now!
            </a>
          </Link>
          <div className="w-14 h-14 hidden md:block relative">
            <div className="w-16 h-16 -bottom-8 right-3 absolute">
              <Image
                src={button}
                alt="Open Components Hackathon 2023"
                width="90"
                height="90"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
