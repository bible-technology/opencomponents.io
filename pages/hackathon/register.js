import { useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { getCookie } from 'cookies-next'

import groupImage from '../../public/group.png'
import eten_logo from '../../public/eten_logo.png'
import uw_logo from '../../public/unfoldingword.svg'
import tt_logo from '../../public/tt_logo.png'
import RegistrationForm from '../../components/RegistrationForm'
import Ticket from '../../components/Ticket'

export default function Register({ user }) {
  const [currentUser, setCurrentUser] = useState(user)
  const [stateRegistration, setStateRegistration] = useState('default')

  return (
    <div className="flex flex-col gap-10 mx-4 xl:gap-12 mb-8">
      <Head>
        <title>Open Components Hackathon 2023</title>
        <meta
          name="description"
          content="Open Components Hackathon 2023 In partnership with ETEN Innovation Lab"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col lg:flex-row items-center rounded-xl bg-[#ccc53f] px-12 py-6">
        <div className="basis-0 shrink flex-grow-[3]">
          <div className="mb-3 mt-12 text-2xl font-bold text-gray-800 md:mb-8 md:text-4xl lg:text-5xl xl:text-6xl">
            Open Components <br /> Hackathon 2023
          </div>
          <div className="text-lg mb-6 text-gray-700 md:text-xl lg:mb-5">
            In partnership with <span className="font-bold">ETEN Innovation Lab</span>
          </div>
          <div className="logos flex mt-12">
            <div className="grayscale brightness-50 mr-2">
              <Image src={eten_logo} alt="eten_logo" width="130" height="40" />
            </div>
            <div className="grayscale brightness-50 mx-2">
              <Image src={uw_logo} alt="uw_logo" width="228" height="40" />
            </div>
            <div className="grayscale brightness-50 mx-2">
              <Image src={tt_logo} alt="tt_logo" width="145" height="40" />
            </div>
          </div>
        </div>
        <div className="flex flex-row self-end basis-0 shrink flex-grow-[2]">
          <Image src={groupImage} alt="groupImage" width="710" height="523" />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <br />
        {stateRegistration === 'form' ? (
          <RegistrationForm
            setCurrentUser={setCurrentUser}
            setStateRegistration={setStateRegistration}
          />
        ) : stateRegistration === 'default' ? (
          <>
            <div className="grid grid-cols-1 gap-5 my-5 sm:grid-cols-1 md:grid-cols-2 md:my-10 xl:grid-cols-3 w-full">
              <div className="flex flex-row justify-between py-8 px-6 bg-primary-100 h-full sm:h-44 rounded-xl">
                <div className="flex-grow w-2/3">
                  <div className="mb-8">
                    <div className="line-clamp-1 uppercase font-bold text-xl">
                      Learnathon
                    </div>
                  </div>
                  <div className="pr-2 my-4 text-gray-500 text-sm line-clamp-3">
                    February 13 - 17, 2023
                  </div>
                </div>
                <div className="w-1/3 relative"></div>
              </div>
              <div className="flex flex-row justify-between py-8 px-6 bg-primary-100 h-full sm:h-44 rounded-xl">
                <div className="flex-grow w-2/3">
                  <div className="mb-8">
                    <div className="line-clamp-1 uppercase font-bold text-xl">
                      Hackathon
                    </div>
                  </div>
                  <div className="pr-2 my-4 text-gray-500 text-sm line-clamp-3">
                    February 20 - 24, 2023
                  </div>
                </div>
                <div className="w-1/3 relative"></div>
              </div>
              <div className="flex flex-row justify-end py-8 px-6 h-full sm:h-44">
                <div className="flex items-center">
                  <div className="mr-3">
                    {currentUser ? (
                      <button
                        onClick={() => setStateRegistration('ticket')}
                        className="uppercase text-white py-3 px-4 ml-2 rounded-md bg-primary-600"
                      >
                        Show my ticket
                      </button>
                    ) : (
                      <button
                        onClick={() => setStateRegistration('form')}
                        className="uppercase text-white py-3 px-4 ml-2 rounded-md bg-primary-600"
                      >
                        Register Now
                      </button>
                    )}
                  </div>
                  <div className="pr-2 my-4 text-gray-500 text-sm line-clamp-3">
                    <Link href="/hackathon/schedule">
                      <a className="font-bold text-primary-600 underline decoration-primary-600 decoration-2 underline-offset-4">
                        Learn More
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <Ticket email={currentUser} />
        )}
      </div>
    </div>
  )
}

export const getServerSideProps = ({ req, res }) => {
  const user = getCookie('user', { req, res }) ?? null

  return { props: { user } }
}
