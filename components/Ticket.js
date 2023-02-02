import Image from 'next/image'
import Link from 'next/link'

import party from '../public/party.svg'
import discord from '../public/discord.svg'

function Ticket({ email }) {
  return (
    <div className="text-white mb-6 w-full sm:w-2/3 mt-6">
      <div className="relative">
        <div
          className="bg-primary-100 rounded-2xl grid p-3 md:p-8 relative before:w-16 before:h-16 before:absolute before:top-[calc(50%_-_2rem)] before:rounded-full before:-left-8 before:bg-white after:w-16 after:h-16 after:absolute after:top-[calc(50%_-_2rem)] after:rounded-full after:-right-8 after:bg-white"
          style={{ gridAutoRows: '1fr' }}
        >
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 items-center justify-center border-b border-b-gray-400 border-dashed mx-3 text-center text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-primary-600 py-6">
            <div className="w-16 md:w-12 h-16 md:h-12 flex -scale-x-100">
              <Image src={party} alt="Congratulations" width="120" height="120" />
            </div>
            <span>
              Thank you for
              <br />
              registering
            </span>
            <div className="w-16 md:w-12 h-16 md:h-12 flex">
              <Image src={party} alt="Congratulations" width="120" height="120" />
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start justify-center mx-3 py-6 md:mx-10 text-text-500">
            <div className="text-center lg:text-left text-primary-700 text-base md:text-xl font-bold">
              {email}
            </div>
            <div className="flex flex-col flex-wrap mt-8 md:flex-row w-full">
              <div className="flex-1">
                <div className="uppercase text-primary-700 font-bold text-lg mb-4">
                  Learnathon
                </div>
                <div className="text-sm flex flex-row space-x-2 mb-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                  <span>February&nbsp;13&nbsp;-&nbsp;17,&nbsp;2023</span>
                </div>
                <div className="text-sm flex flex-row space-x-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
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

              <div className="flex-1 mt-6 lg:mt-0">
                <div className="uppercase font-bold text-primary-700 text-lg mb-4">
                  Hackathon
                </div>
                <div className="text-sm flex flex-row space-x-2 mb-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                  <span>February&nbsp;20&nbsp;-&nbsp;24,&nbsp;2023</span>
                </div>
                <div className="text-sm flex flex-row space-x-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
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
                    Orlando - Florida, Arlington - Texas, New Delhi, Avignon - France,
                    Online
                  </span>
                </div>
              </div>
              <div className="justify-between mt-6 xl:mt-0 flex flex-col">
                <Link href="/hackathon/schedule">
                  <a className="inline-flex whitespace-nowrap py-2 px-4 gap-2 text-base rounded-lg border border-primary-600 text-primary-600 hover:bg-secondary-400 active:shadow-xl active:shadow-primary-700/23 md:px-4 md:gap-1 lg:px-6 lg:gap-2 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                      />
                    </svg>
                    Schedule
                  </a>
                </Link>
                <Link href="https://discord.gg/jtTRhEMH4q">
                  <a
                    target="_blank"
                    className="inline-flex whitespace-nowrap py-2 px-4 gap-2 text-base rounded-lg border border-primary-600 text-primary-600 hover:bg-secondary-400 active:shadow-xl active:shadow-primary-700/23 md:px-4 md:gap-1 lg:px-6 lg:gap-2 mt-2"
                  >
                    <Image src={discord} alt="discord" width="24" height="23" />
                    Join Discord
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ticket
