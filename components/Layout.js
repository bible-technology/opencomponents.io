import Image from 'next/image'

import { useRouter } from 'next/router'

import Header from './Header'
import Footer from './Footer'

import editor_black from '../public/editor_black.svg'

export default function Layout({ fullwidth, children }) {
  const { route } = useRouter()
  return (
    <div className="flex flex-col min-h-screen">
      {route !== '/hackathon/register' ? (
        <div className="bg-secondary-400 py-3 md:py-0">
          <div className="container mx-auto px-3">
            <div className="relative flex flex-col space-x-4 md:flex-row items-center justify-center overflow-hidden">
              <div className="text-center text-xl font-bold text-primary-600 mb-3 md:mb-0">
                Open Components Hackathon 2023
              </div>
              <div className="w-36 text-white py-1 text-center rounded-lg bg-primary-600 hover:bg-primary-700 active:shadow-xl select-none font-bold active:shadow-primary-700/23 cursor-pointer">
                Coming Soon!
              </div>
              <div className="w-14 h-14 hidden md:block relative">
                <div className="w-20 h-20 -bottom-8 absolute">
                  <Image src={editor_black} alt="editor_black" width="90" height="90" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
      <Header />
      <main className={fullwidth ? '' : 'container mx-auto px-5 flex-grow'}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
