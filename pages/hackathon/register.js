import { useEffect, useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { getCookie } from 'cookies-next'

import editor_black from '../../public/editor_black.svg'
//import eten_logo from '../../public/eten_logo.png'
import RegistrationForm from '../../components/RegistrationForm'
import crypto from 'crypto'
import Ticket from '../../components/Ticket'

export default function Register({ user }) {
  const [currentUser, setCurrentUser] = useState(user)
  const [stateRegistration, setStateRegistration] = useState('default')
  useEffect(() => {
    // const hmac = crypto.createHmac('sha1', '123456')
    // console.log(1, hmac)
    // hmac.update('test')
    // console.log(2, hmac)
    // const result = hmac.digest('hex')
    // console.log(3, result)
  }, [])
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

      <div className="flex flex-col items-center">
        <div className="flex flex-row self-end mr-10 md:mr-20 lg:mr-48 xl:mr-64 2xl:mr-96">
          <Image src={editor_black} alt="editor_black" width="90" height="90" />
        </div>
        <div className="text-center mb-3 text-2xl font-bold text-primary-600 md:mb-8 md:text-3xl lg:text-4xl xl:text-5xl md:w-3/5">
          Open Components <br /> Hackathon 2023
        </div>
        <div className="text-center text-lg mb-2 text-primary-600 md:text-2xl lg:mb-5">
          In partnership with <span className="font-bold">ETEN Innovation Lab</span>
        </div>
        {/* <Image src={eten_logo} alt="eten_logo" width="162" height="50" /> */}
        <br />
        {stateRegistration === 'form' ? (
          <RegistrationForm
            setCurrentUser={setCurrentUser}
            setStateRegistration={setStateRegistration}
          />
        ) : stateRegistration === 'default' ? (
          <>
            <div className="uppercase text-lg my-6 text-primary-600">
              <b>February 13 - 17, 2023</b> | Learnathon <br />
              <b>February 20 - 24, 2023</b> | Hackathon
            </div>
            <div className="flex mb-3">
              {/* <input
                type="email"
                placeholder="Enter email to register free"
                className="input p-3 text-gray-700"
              /> */}
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
          </>
        ) : (
          <Ticket email={currentUser} />
        )}
        <Link href="/hackathon/schedule">
          <a className="underline-custom">Learn More</a>
        </Link>
      </div>
    </div>
  )
}

export const getServerSideProps = ({ req, res }) => {
  const user = getCookie('user', { req, res }) ?? null

  return { props: { user } }
}
