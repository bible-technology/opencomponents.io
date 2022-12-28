import Head from 'next/head'
import Image from 'next/image'

import editor_black from '../../public/editor_black.svg'
import Link from 'next/link'
import BannerHackathon from '../../components/BannerHackathon'

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
            <div className="mt-4 text-gray-500 text-xl">
              Components for the Translation Resource Ecosystem
            </div>
          </div>
          <div className="py-8 px-6 bg-primary-100 rounded-xl w-full flex flex-col justify-between">
            <div className="text-primary-700 font-bold text-2xl">Create a team</div>
            <div className="mt-4 text-gray-500 text-base">
              <a
                href="https://forms.gle/VbeTG472AKbhpLnw9"
                target="_blank"
                className="text-white bg-primary-600 cursor-pointer hover:bg-primary-700 py-2 px-3 rounded-md inline-block uppercase active:shadow-xl select-none active:shadow-primary-700/23"
                rel="noreferrer"
              >
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
                href="https://discord.gg/2zjFVgaw4E"
                className="text-white bg-primary-600 cursor-pointer hover:bg-primary-700 py-2 px-3 rounded-md inline-block uppercase active:shadow-xl select-none active:shadow-primary-700/23"
                rel="noreferrer"
              >
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
                  href="https://discord.gg/2zjFVgaw4E"
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
