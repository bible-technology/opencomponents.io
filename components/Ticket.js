import Image from 'next/image'
import Link from 'next/link'

import party from '../public/party.svg'
import discord from '../public/discord.svg'

function Ticket({ email }) {
  return (
    <div className="text-white mb-6 w-full sm:w-2/3">
      <div className="relative">
        <div
          className="bg-gray-200 rounded-2xl grid p-3 md:p-8 relative before:contents before:w-16 before:h-16 before:absolute before:top-[calc(50%_-_2rem)] before:rounded-full before:-left-8 before:bg-white after:contents after:w-16 after:h-16 after:absolute after:top-[calc(50%_-_2rem)] after:rounded-full after:-right-8 after:bg-white"
          style={{ gridAutoRows: '1fr' }}
        >
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 items-center justify-center border-b border-b-gray-400 border-dashed mx-3 text-center text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-primary-600 py-6">
            <div className="w-16 md:w-12 h-16 md:h-12 flex -scale-x-100">
              <Image src={party} alt="Congratulations" width="120" height="120" />
            </div>
            <span>
              Thank you for
              <br />
              registration
            </span>
            <div className="w-16 md:w-12 h-16 md:h-12 flex">
              <Image src={party} alt="Congratulations" width="120" height="120" />
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start justify-center mx-3 py-6 md:mx-10 text-text-500">
            <div className="text-center lg:text-left text-base md:text-xl font-bold">
              {email}
            </div>
            <div className="flex flex-col flex-wrap mt-8 md:flex-row w-full">
              <div className="flex-1">
                <div className="uppercase font-bold text-lg mb-4">Learnathon</div>
                <div className="text-sm flex flex-row space-x-2 mb-4">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    x="0px"
                    y="0px"
                    className="w-6 h-6"
                    viewBox="0 0 122.88 122.88"
                    style={{ enableBackground: 'new 0 0 122.88 122.88' }}
                  >
                    <g>
                      <path d="M81.61,4.73c0-2.61,2.58-4.73,5.77-4.73s5.77,2.12,5.77,4.73v20.72c0,2.61-2.58,4.73-5.77,4.73s-5.77-2.12-5.77-4.73V4.73 L81.61,4.73z M29.61,4.73c0-2.61,2.58-4.73,5.77-4.73s5.77,2.12,5.77,4.73v20.72c0,2.61-2.58,4.73-5.77,4.73s-5.77-2.12-5.77-4.73 V4.73L29.61,4.73z M6.4,45.32h110.08V21.47c0-0.8-0.33-1.53-0.86-2.07c-0.53-0.53-1.26-0.86-2.07-0.86H103 c-1.77,0-3.2-1.43-3.2-3.2c0-1.77,1.43-3.2,3.2-3.2h10.55c2.57,0,4.9,1.05,6.59,2.74c1.69,1.69,2.74,4.02,2.74,6.59v27.06v65.03 c0,2.57-1.05,4.9-2.74,6.59c-1.69,1.69-4.02,2.74-6.59,2.74H9.33c-2.57,0-4.9-1.05-6.59-2.74C1.05,118.45,0,116.12,0,113.55V48.53 V21.47c0-2.57,1.05-4.9,2.74-6.59c1.69-1.69,4.02-2.74,6.59-2.74H20.6c1.77,0,3.2,1.43,3.2,3.2c0,1.77-1.43,3.2-3.2,3.2H9.33 c-0.8,0-1.53,0.33-2.07,0.86c-0.53,0.53-0.86,1.26-0.86,2.07V45.32L6.4,45.32z M116.48,51.73H6.4v61.82c0,0.8,0.33,1.53,0.86,2.07 c0.53,0.53,1.26,0.86,2.07,0.86h104.22c0.8,0,1.53-0.33,2.07-0.86c0.53-0.53,0.86-1.26,0.86-2.07V51.73L116.48,51.73z M50.43,18.54 c-1.77,0-3.2-1.43-3.2-3.2c0-1.77,1.43-3.2,3.2-3.2h21.49c1.77,0,3.2,1.43,3.2,3.2c0,1.77-1.43,3.2-3.2,3.2H50.43L50.43,18.54z" />
                    </g>
                  </svg>
                  <span>February&nbsp;13&nbsp;-&nbsp;17,&nbsp;2023</span>
                </div>
                <div className="text-sm flex flex-row space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-6 h-6"
                    viewBox="0 0 92.53 122.88"
                  >
                    <path
                      style={{ fillRule: 'evenodd' }}
                      d="M46.27,24.08A22.75,22.75,0,1,1,23.52,46.83,22.75,22.75,0,0,1,46.27,24.08Zm1.36,91.62A82.87,82.87,0,0,0,64,101.81,85.44,85.44,0,0,0,84.56,62.23c2.81-13.67,1.5-27-4.75-37.34a36.74,36.74,0,0,0-6.63-8.06C65.62,9.93,57,6.64,48.23,6.56,39.07,6.49,29.77,10,21.55,16.5a38.54,38.54,0,0,0-8.63,9.56C7.15,35.15,5.41,46.43,7.31,58.24c1.94,12,7.66,24.61,16.77,36A102.46,102.46,0,0,0,47.63,115.7Zm21.24-9.46a89.32,89.32,0,0,1-19.33,16,3.28,3.28,0,0,1-3.71.13,109.25,109.25,0,0,1-26.9-24c-9.8-12.31-16-26-18.1-39.1C-1.33,45.89.7,33,7.36,22.53a45.3,45.3,0,0,1,10.1-11.18C26.85,3.87,37.6-.09,48.29,0,58.6.09,68.79,3.92,77.6,12a43.1,43.1,0,0,1,7.82,9.52c7.15,11.8,8.71,26.83,5.57,42.05a92.2,92.2,0,0,1-22.12,42.7Z"
                    />
                  </svg>
                  <span>Online</span>
                </div>
              </div>

              <div className="flex-1 mt-6 lg:mt-0">
                <div className="uppercase font-bold text-lg mb-4">Hackathon</div>
                <div className="text-sm flex flex-row space-x-2 mb-4">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    x="0px"
                    y="0px"
                    className="w-6 h-6"
                    viewBox="0 0 122.88 122.88"
                    style={{ enableBackground: 'new 0 0 122.88 122.88' }}
                  >
                    <g>
                      <path d="M81.61,4.73c0-2.61,2.58-4.73,5.77-4.73s5.77,2.12,5.77,4.73v20.72c0,2.61-2.58,4.73-5.77,4.73s-5.77-2.12-5.77-4.73V4.73 L81.61,4.73z M29.61,4.73c0-2.61,2.58-4.73,5.77-4.73s5.77,2.12,5.77,4.73v20.72c0,2.61-2.58,4.73-5.77,4.73s-5.77-2.12-5.77-4.73 V4.73L29.61,4.73z M6.4,45.32h110.08V21.47c0-0.8-0.33-1.53-0.86-2.07c-0.53-0.53-1.26-0.86-2.07-0.86H103 c-1.77,0-3.2-1.43-3.2-3.2c0-1.77,1.43-3.2,3.2-3.2h10.55c2.57,0,4.9,1.05,6.59,2.74c1.69,1.69,2.74,4.02,2.74,6.59v27.06v65.03 c0,2.57-1.05,4.9-2.74,6.59c-1.69,1.69-4.02,2.74-6.59,2.74H9.33c-2.57,0-4.9-1.05-6.59-2.74C1.05,118.45,0,116.12,0,113.55V48.53 V21.47c0-2.57,1.05-4.9,2.74-6.59c1.69-1.69,4.02-2.74,6.59-2.74H20.6c1.77,0,3.2,1.43,3.2,3.2c0,1.77-1.43,3.2-3.2,3.2H9.33 c-0.8,0-1.53,0.33-2.07,0.86c-0.53,0.53-0.86,1.26-0.86,2.07V45.32L6.4,45.32z M116.48,51.73H6.4v61.82c0,0.8,0.33,1.53,0.86,2.07 c0.53,0.53,1.26,0.86,2.07,0.86h104.22c0.8,0,1.53-0.33,2.07-0.86c0.53-0.53,0.86-1.26,0.86-2.07V51.73L116.48,51.73z M50.43,18.54 c-1.77,0-3.2-1.43-3.2-3.2c0-1.77,1.43-3.2,3.2-3.2h21.49c1.77,0,3.2,1.43,3.2,3.2c0,1.77-1.43,3.2-3.2,3.2H50.43L50.43,18.54z" />
                    </g>
                  </svg>
                  <span>February&nbsp;20&nbsp;-&nbsp;24,&nbsp;2023</span>
                </div>
                <div className="text-sm flex flex-row space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-6 h-6"
                    viewBox="0 0 92.53 122.88"
                  >
                    <path
                      style={{ fillRule: 'evenodd' }}
                      d="M46.27,24.08A22.75,22.75,0,1,1,23.52,46.83,22.75,22.75,0,0,1,46.27,24.08Zm1.36,91.62A82.87,82.87,0,0,0,64,101.81,85.44,85.44,0,0,0,84.56,62.23c2.81-13.67,1.5-27-4.75-37.34a36.74,36.74,0,0,0-6.63-8.06C65.62,9.93,57,6.64,48.23,6.56,39.07,6.49,29.77,10,21.55,16.5a38.54,38.54,0,0,0-8.63,9.56C7.15,35.15,5.41,46.43,7.31,58.24c1.94,12,7.66,24.61,16.77,36A102.46,102.46,0,0,0,47.63,115.7Zm21.24-9.46a89.32,89.32,0,0,1-19.33,16,3.28,3.28,0,0,1-3.71.13,109.25,109.25,0,0,1-26.9-24c-9.8-12.31-16-26-18.1-39.1C-1.33,45.89.7,33,7.36,22.53a45.3,45.3,0,0,1,10.1-11.18C26.85,3.87,37.6-.09,48.29,0,58.6.09,68.79,3.92,77.6,12a43.1,43.1,0,0,1,7.82,9.52c7.15,11.8,8.71,26.83,5.57,42.05a92.2,92.2,0,0,1-22.12,42.7Z"
                    />
                  </svg>
                  <span>Orlando, New Delhi, Online</span>
                </div>
              </div>
              <div className="self-center md:self-end mt-6 xl:mt-0">
                <Link href="https://discord.com/invite/auJb4H9ezx">
                  <a
                    target="_blank"
                    className="inline-flex whitespace-nowrap py-2 px-4 gap-2 text-base rounded-lg border border-primary-600 text-primary-600 hover:bg-secondary-400 active:shadow-xl active:shadow-primary-700/23 md:px-4 md:gap-1 lg:px-6 lg:gap-2"
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
