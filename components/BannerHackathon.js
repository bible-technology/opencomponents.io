import { useEffect, useState } from 'react'

import Image from 'next/image'

import slide1 from '../public/group.png'
import slide2 from '../public/group2.png'
import slide3 from '../public/hello_church_slider.png'
import eten_logo_dark from '../public/eten_logo_dark.png'

function BannerHackathon() {
  const [image, setImage] = useState(1)
  useEffect(() => {
    const interval = setInterval(() => {
      setImage((prev) => ++prev % 3)
    }, 5000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="flex flex-col lg:flex-row items-center rounded-xl bg-secondary-400 p-12">
      <div className="basis-0 shrink flex-grow-[3] mb-6 lg:mb-0">
        <div className="mb-6 md:mt-6 text-4xl font-bold text-gray-800 mt-12 md:mb-20 lg:text-5xl xl:text-6xl">
          Open Components <br /> Hackathon 2023
        </div>
        <div className="text-lg text-gray-700 md:text-xl">
          Presented by <span className="font-bold">ETEN&nbsp;Innovation&nbsp;Lab</span>
          <div className="mt-10">
            <a
              target="_blank"
              href="https://eten.bible/"
              className="cursor-pointer"
              rel="noreferrer"
            >
              <span className="bg-[#262626] inline-block py-2 px-4 rounded-md">
                <Image src={eten_logo_dark} alt="eten_logo" width="196" height="60" />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="basis-0 shrink flex-grow-[2] hidden lg:block">
        <div className={`${image === 1 ? 'flex' : 'hidden'} flex-row`}>
          <Image src={slide1} alt="groupImage" width="710" height="523" />
        </div>
        <div className={`${image === 2 ? 'flex' : 'hidden'} flex-row`}>
          <Image src={slide2} alt="groupImage" width="710" height="523" />
        </div>
        <div className={`${image === 0 ? 'flex' : 'hidden'} flex-row`}>
          <Image src={slide3} alt="groupImage" width="710" height="523" />
        </div>
      </div>
    </div>
  )
}

export default BannerHackathon
