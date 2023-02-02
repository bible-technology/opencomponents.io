import { useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { getCookie } from 'cookies-next'

import RegistrationForm from '../../components/RegistrationForm'
import Ticket from '../../components/Ticket'
import BannerHackathon from '../../components/BannerHackathon'
import Partners from '../../components/Partners'

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
      {['form', 'default'].includes(stateRegistration) ? <BannerHackathon /> : ''}
      <div className="flex flex-col items-center">
        {stateRegistration === 'form' ? (
          <RegistrationForm
            setCurrentUser={setCurrentUser}
            setStateRegistration={setStateRegistration}
          />
        ) : stateRegistration === 'default' ? (
          <>
            <div className="grid grid-cols-1 gap-5 mb-5 md:grid-cols-2 lg:grid-cols-3 md:mb-10 xl:grid-cols-3 w-full">
              <div className="flex flex-row justify-between py-8 px-6 bg-primary-100 rounded-xl">
                <div className="flex-grow w-full">
                  <div>
                    <div className="line-clamp-1 uppercase text-primary-700 font-bold text-2xl">
                      Learnathon
                    </div>
                  </div>
                  <div className="pr-2 my-4 text-gray-700 flex items-center text-base">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 mr-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                      />
                    </svg>

                    <span>February 13 - 17, 2023</span>
                  </div>
                  <div className="pr-2 my-4 text-gray-700 flex items-center text-base">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 mr-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    <span>Online</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between py-8 px-6 bg-primary-100 rounded-xl">
                <div className="flex-grow w-full">
                  <div>
                    <div className="line-clamp-1 uppercase text-primary-700 font-bold text-2xl">
                      Hackathon
                    </div>
                  </div>
                  <div className="pr-2 my-4 text-gray-700 flex items-center text-base">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 mr-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                      />
                    </svg>
                    <span>February 20 - 24, 2023</span>
                  </div>
                  <div className="pr-2 my-4 text-gray-700 flex items-center text-base">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 mr-3 flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    <span>
                      Orlando&nbsp;-&nbsp;Florida&nbsp;|
                      Arlington&nbsp;-&nbsp;Texas&nbsp;| New&nbsp;Delhi&nbsp;|
                      Avignon&nbsp;-&nbsp;France&nbsp;| Online
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-start sm:justify-center lg:justify-end py-8 px-6 md:col-start-1 md:col-end-3 lg:col-end-auto lg:col-start-auto col-end-auto col-start-auto">
                <div className="flex items-center justify-center flex-wrap">
                  <div className="mr-3">
                    {currentUser ? (
                      <button
                        onClick={() => setStateRegistration('ticket')}
                        className="uppercase flex text-white py-3 px-4 rounded-md bg-primary-600"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                          />
                        </svg>
                        Show Ticket
                      </button>
                    ) : (
                      <button
                        onClick={() => setStateRegistration('form')}
                        className="uppercase flex text-white py-3 px-4 rounded-md bg-primary-600"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        Register Now
                      </button>
                    )}
                  </div>
                  <div className="pr-2 my-4 text-gray-700 text-sm">
                    <Link href="/hackathon/schedule">
                      <a className="font-bold text-primary-600 underline decoration-primary-600 decoration-2 underline-offset-4 flex items-center">
                        <span className="mr-2.5">Learn More</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-auto h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
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
        {['form', 'default'].includes(stateRegistration) ? <Partners /> : ''}
      </div>
    </div>
  )
}

export const getServerSideProps = ({ req, res }) => {
  const user = getCookie('user', { req, res }) ?? null

  return { props: { user } }
}
