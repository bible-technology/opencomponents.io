import Image from 'next/image'
import Logo from '../public/logo.svg'

function Ticket({ email }) {
  return (
    <div className="text-white mb-6 w-full sm:w-2/3">
      <div className="relative">
        <div className="hidden lg:flex">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 650 330"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 0C8.95431 0 0 8.95431 0 20V138C14.9117 138 27 150.088 27 165C27 179.912 14.9117 192 0 192V310C0 321.046 8.9543 330 20 330H630C641.046 330 650 321.046 650 310V192C635.088 192 623 179.912 623 165C623 150.088 635.088 138 650 138V20C650 8.95431 641.046 0 630 0H20Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21 5C12.1634 5 5 12.1634 5 21V133.388C20.2981 135.789 32 149.028 32 165C32 180.972 20.2981 194.211 5 196.612V309C5 317.837 12.1634 325 21 325H629C637.837 325 645 317.837 645 309V196.612C629.702 194.211 618 180.972 618 165C618 149.028 629.702 135.789 645 133.388V21C645 12.1634 637.837 5 629 5H21Z"
              fill="#e7edf0"
            />
            {/* <path d="M512 5V326" stroke="#444444" strokeDasharray="6 6" /> */}
          </svg>
        </div>
        <div className="lg:hidden flex">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 330 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.9193e-06 540C3.40212e-06 551.046 8.95431 560 20 560L138 560C138 545.088 150.088 533 165 533C179.912 533 192 545.088 192 560L310 560C321.046 560 330 551.046 330 540L330 20C330 8.95427 321.046 -1.40334e-05 310 -1.35505e-05L192 -8.39259e-06C192 14.9117 179.912 27 165 27C150.088 27 138 14.9117 138 -6.03217e-06L20 -8.74228e-07C8.95428 -3.91405e-07 -2.41646e-05 8.95428 -2.36041e-05 20L2.9193e-06 540Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 539C5 547.837 12.1634 555 21 555L133.388 555C135.789 539.702 149.028 528 165 528C180.972 528 194.211 539.702 196.612 555L309 555C317.837 555 325 547.837 325 539L325 21C325 12.1634 317.837 4.99999 309 4.99999L196.612 4.99999C194.211 20.2981 180.972 32 165 32C149.028 32 135.789 20.2982 133.388 4.99999L21 5C12.1634 5 4.99998 12.1635 4.99998 21L5 539Z"
              fill="#e7edf0"
            />
            {/* <path d="M326 446H5" stroke="#444444" strokeDasharray="6 6" /> */}
          </svg>
        </div>
        <div className="absolute top-[10%] left-0 right-0 text-center w-full lg:left-[10%] lg:right-auto lg:w-[10%]">
          <Image
            src={Logo}
            alt="Open Components Ecosystem"
            width="120"
            height="176"
            className="w-12 lg:w-full"
          />
        </div>
        <div className="absolute top-[50%] sm:top-[40%] lg:top-[18%] left-0 lg:left-[26%] right-0 lg:right-auto text-center lg:text-left text-xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-text-800">
          OCE Hackathon 2023
        </div>
        <div className="absolute top-[60%] lg:top-[45%] left-0 right-0 text-center">
          <div className="uppercase text-base md:text-lg my-6 text-primary-600">
            <b>February&nbsp;13&nbsp;-&nbsp;17,&nbsp;2023</b> |&nbsp;Learnathon
            <br />
            <b>February&nbsp;20&nbsp;-&nbsp;24,&nbsp;2023</b> |&nbsp;Hackathon
          </div>
        </div>
        <div className="absolute bottom-[10%] left-0 right-0 text-center text-xl lg:text-2xl text-text-800">
          {email}
        </div>
      </div>
    </div>
  )
}

export default Ticket
