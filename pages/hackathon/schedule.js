import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import BannerHackathon from '../../components/BannerHackathon'

import discord from '../../public/discord.svg'

export default function Schedule() {
  return (
    <div className="flex flex-col gap-10 mx-4 xl:gap-12">
      <Head>
        <title>Open Components Ecosystem</title>
        <meta name="description" content="Open Components Ecosystem" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BannerHackathon />
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 gap-5 mb-5 md:grid-cols-2 lg:grid-cols-3 md:mb-10 xl:grid-cols-3 w-full">
          <div className="py-8 px-6 bg-primary-100 rounded-xl w-full flex flex-col justify-between md:col-start-1 md:col-end-3 lg:col-end-auto lg:col-start-auto col-end-auto col-start-auto">
            <div className="text-primary-700 font-bold text-2xl">Hackathon theme</div>
            <div className="mt-4 text-gray-700 text-xl">
              Components for the Translation Resource Ecosystem
            </div>
          </div>
          <div className="py-8 px-6 bg-primary-100 rounded-xl w-full flex flex-col justify-between">
            <div className="text-primary-700 font-bold text-2xl">Create a team</div>
            <div className="mt-4 text-gray-700 text-base">
              <a
                href="https://forms.gle/VbeTG472AKbhpLnw9"
                target="_blank"
                className="text-white inline-flex items-center bg-primary-600 cursor-pointer hover:bg-primary-700 py-2 px-3 rounded-md uppercase active:shadow-xl select-none active:shadow-primary-700/23"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                    clipRule="evenodd"
                  />
                  <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                </svg>
                Survey link
              </a>
            </div>
          </div>
          <div className="py-8 px-6 bg-primary-100 rounded-xl w-full flex flex-col justify-between">
            <div className="text-primary-700 font-bold text-2xl">
              Join an existing team
            </div>
            <div className="pr-2 mt-4">
              <a
                target="_blank"
                href="https://discord.gg/ryAcyRwJ"
                className="text-white inline-flex items-center bg-primary-600 cursor-pointer hover:bg-primary-700 py-2 px-3 rounded-md uppercase active:shadow-xl select-none active:shadow-primary-700/23"
                rel="noreferrer"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="none"
                  fill="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                </svg>
                Discord link
              </a>
            </div>
          </div>
        </div>
        <div className="text-lg lg:text-xl">
          <p className="my-5">
            Join us for a two week sprint where you have an opportunity to explore
            different solutions within the Bible technology space, learn new concepts and
            network with others in the Open Components Community.
          </p>
        </div>

        <table className="table-auto border-collapse border border-slate-400">
          <thead>
            <tr>
              <th className="border border-slate-400 py-2 px-3 bg-[#abbdc4]"></th>
              <th className="border border-slate-400 py-2 px-3 bg-[#abbdc4]">
                Steps&nbsp;Involved
              </th>
              <th className="border border-slate-400 py-2 px-3 bg-[#abbdc4]">
                Important&nbsp;Dates
              </th>
              <th className="border border-slate-400 py-2 px-3 bg-[#abbdc4]">Timing</th>
              <th className="border border-slate-400 py-2 px-3 bg-[#abbdc4]">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 py-2 px-3">1</td>
              <td className="border border-slate-300 py-2 px-3">Register</td>
              <td className="border border-slate-300 py-2 px-3">
                Jan&nbsp;6th&nbsp;-&nbsp;Feb&nbsp;6th
              </td>
              <td className="border border-slate-300 py-2 px-3"></td>
              <td className="border border-slate-300 py-2 px-3">
                You can register for the event at{' '}
                <Link href="/hackathon/register">
                  <a className="text-primary-500 hover:underline">register link</a>
                </Link>
                .
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 bg-primary-100 py-2 px-3">2</td>
              <td className="border border-slate-300 bg-primary-100 py-2 px-3">
                Create team or Join existing team
              </td>
              <td className="border border-slate-300 bg-primary-100 py-2 px-3"></td>
              <td className="border border-slate-300 bg-primary-100 py-2 px-3"></td>
              <td className="border border-slate-300 bg-primary-100 py-2 px-3">
                You&#39;ll be working in teams for the two weeks. We recommend the team
                size to be at least 3 and maximum 7 members. If you&#39;d like to create a
                new team, please{' '}
                <a
                  href="https://forms.gle/VbeTG472AKbhpLnw9"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary-500 cursor-pointer hover:underline"
                >
                  fill out a form here
                </a>
                . If you&#39;d like to join an existing team, please{' '}
                <a
                  target="_blank"
                  href="https://discord.gg/ryAcyRwJ"
                  className="text-primary-500 cursor-pointer hover:underline"
                  rel="noreferrer"
                >
                  reach out to other participants here
                </a>
                .
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 py-2 px-3">3</td>
              <td className="border border-slate-300 py-2 px-3">
                Join the OCE Community on Discord
              </td>
              <td className="border border-slate-300 py-2 px-3"></td>
              <td className="border border-slate-300 py-2 px-3"></td>
              <td className="border border-slate-300 py-2 px-3">
                We encourage you to join and be an active part of our online community on
                Discord as soon as you register.
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 bg-primary-100 py-2 px-3">4</td>
              <td className="border border-slate-300 bg-primary-100 py-2 px-3">
                Learnathon Kick off
              </td>
              <td className="border border-slate-300 bg-primary-100 py-2 px-3">
                Feb&nbsp;13th
              </td>
              <td className="border border-slate-300 bg-primary-100 py-2 px-3">
                9AM&nbsp;-&nbsp;11AM&nbsp;EST
              </td>
              <td className="border border-slate-300 bg-primary-100 py-2 px-3">
                Introduce your team and your team&#39;s learning goals.
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 py-2 px-3">5</td>
              <td className="border border-slate-300 py-2 px-3">Learn with your team</td>
              <td className="border border-slate-300 py-2 px-3">
                Feb&nbsp;13&nbsp;-&nbsp;Feb&nbsp;17th
              </td>
              <td className="border border-slate-300 py-2 px-3"></td>
              <td className="border border-slate-300 py-2 px-3">
                Collaborate and learn a new technology together.
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 bg-primary-100 py-2 px-3">6</td>
              <td className="border border-slate-300 bg-primary-100 py-2 px-3">
                Learning presentations
              </td>
              <td className="border border-slate-300 bg-primary-100 py-2 px-3">
                Feb&nbsp;14&nbsp;-&nbsp;Feb&nbsp;16th
              </td>
              <td className="border border-slate-300 bg-primary-100 py-2 px-3">
                9AM&nbsp;-&nbsp;11AM&nbsp;EST
              </td>
              <td className="border border-slate-300 bg-primary-100 py-2 px-3">
                Several 50 minute learnathon sessions will be conducted throughout the
                week. These sessions may be led by individuals or teams.
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 py-2 px-3">7</td>
              <td className="border border-slate-300 py-2 px-3">Hackathon Kick off</td>
              <td className="border border-slate-300 py-2 px-3">Feb&nbsp;20th</td>
              <td className="border border-slate-300 py-2 px-3">
                9AM&nbsp;-&nbsp;11AM&nbsp;EST
              </td>
              <td className="border border-slate-300 py-2 px-3">
                Introduce your team&#39;s problem statement and related hypothesis.
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 bg-primary-100 py-2 px-3">8</td>
              <td className="border border-slate-300 bg-primary-100 py-2 px-3">
                Hack with your team
              </td>
              <td className="border border-slate-300 bg-primary-100 py-2 px-3">
                Feb&nbsp;20&nbsp;-&nbsp;Feb&nbsp;23
              </td>
              <td className="border border-slate-300 bg-primary-100 py-2 px-3"></td>
              <td className="border border-slate-300 bg-primary-100 py-2 px-3">
                Hack a solution together.
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 py-2 px-3">9</td>
              <td className="border border-slate-300 py-2 px-3">Demo your Hack</td>
              <td className="border border-slate-300 py-2 px-3">Feb&nbsp;24th</td>
              <td className="border border-slate-300 py-2 px-3">
                9AM&nbsp;-&nbsp;11AM&nbsp;EST
              </td>
              <td className="border border-slate-300 py-2 px-3">
                Demonstrate your solution and findings.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
