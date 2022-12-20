import Head from 'next/head'
import Image from 'next/image'

import editor_black from '../../public/editor_black.svg'

export default function Schedule() {
  return (
    <div className="flex flex-col gap-10 mx-4 xl:gap-12">
      <Head>
        <title>Open Components Ecosystem</title>
        <meta name="description" content="Open Components Ecosystem" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center">
        <div className="flex flex-row self-end mr-10 md:mr-20 lg:mr-48 xl:mr-64 2xl:mr-96">
          <Image src={editor_black} alt="editor_black" width="90" height="90" />
        </div>
        <div className="text-center mb-3 text-2xl font-bold text-primary-600 md:mb-8 md:text-3xl lg:text-4xl xl:text-5xl md:w-3/5">
          Join us for Open Components Hackathon 2023
        </div>
        <p className="text-lg leading-9 mx-4 mb-8">
          This event will be focused on identifying and developing solutions for
          challenges within Bible translation. We hope this hackathon will inspire
          breakthrough ideas that help accelerate the global Bible translation efforts.
          The vision of the Open Components Ecosystem is a global community of Bible
          technologists focused on creating open source modular and reusable Bible
          software. The reuse of Open components in a decentralized and collaborative
          model of development will lead to innovative and creative technologies that will
          further equip the global church to produce, distribute, and use Bible
          translations and biblical content in any language, on any technology, and in any
          format needed. We would love for you to join this growing community and explore
          Bible technology in collaboration with others.
        </p>
        <table className="table-auto border-collapse border border-slate-400">
          <thead>
            <tr>
              <th className="border border-slate-400 py-1 px-2 bg-gray-300"></th>
              <th className="border border-slate-400 py-1 px-2 bg-gray-300">
                Steps&nbsp;Involved
              </th>
              <th className="border border-slate-400 py-1 px-2 bg-gray-300">
                Important&nbsp;Dates
              </th>
              <th className="border border-slate-400 py-1 px-2 bg-gray-300">
                Start&nbsp;Time
              </th>
              <th className="border border-slate-400 py-1 px-2 bg-gray-300">
                End&nbsp;Time
              </th>
              <th className="border border-slate-400 py-1 px-2 bg-gray-300">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 py-1 px-2">1</td>
              <td className="border border-slate-300 py-1 px-2">Register</td>
              <td className="border border-slate-300 py-1 px-2">
                Dec&nbsp;2022&nbsp;- Feb&nbsp;6,&nbsp;2023
              </td>
              <td className="border border-slate-300 py-1 px-2"></td>
              <td className="border border-slate-300 py-1 px-2"></td>
              <td className="border border-slate-300 py-1 px-2">
                Click on the link to register
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 py-1 px-2">2</td>
              <td className="border border-slate-300 py-1 px-2">
                Join the Discord channel
              </td>
              <td className="border border-slate-300 py-1 px-2">
                Dec&nbsp;2022&nbsp;- Feb&nbsp;6,&nbsp;2023
              </td>
              <td className="border border-slate-300 py-1 px-2"></td>
              <td className="border border-slate-300 py-1 px-2"></td>
              <td className="border border-slate-300 py-1 px-2">
                Join the #oce-hackathon and introduce yourself to the Open Components
                community
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 py-1 px-2">3</td>
              <td className="border border-slate-300 py-1 px-2">Form teams</td>
              <td className="border border-slate-300 py-1 px-2">
                Dec&nbsp;2022&nbsp;- Feb&nbsp;6,&nbsp;2023
              </td>
              <td className="border border-slate-300 py-1 px-2"></td>
              <td className="border border-slate-300 py-1 px-2"></td>
              <td className="border border-slate-300 py-1 px-2">
                Join an existing team or form a new team and update your team information
                in https://discord.gg/2zjFVgaw4E
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 py-1 px-2">4</td>
              <td className="border border-slate-300 py-1 px-2">
                Create team channel in discord
              </td>
              <td className="border border-slate-300 py-1 px-2">
                Dec&nbsp;2022&nbsp;- Feb&nbsp;6,&nbsp;2023
              </td>
              <td className="border border-slate-300 py-1 px-2"></td>
              <td className="border border-slate-300 py-1 px-2"></td>
              <td className="border border-slate-300 py-1 px-2">
                Collaborate with the team online
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 py-1 px-2">5</td>
              <td className="border border-slate-300 py-1 px-2">
                Kickstart Learn-a-thon
              </td>
              <td className="border border-slate-300 py-1 px-2">
                Feb&nbsp;13,&nbsp;2023
              </td>
              <td className="border border-slate-300 py-1 px-2">09:00&nbsp;AM</td>
              <td className="border border-slate-300 py-1 px-2">11:00&nbsp;AM</td>
              <td className="border border-slate-300 py-1 px-2">
                Introduce teams and respective team learning goals
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 py-1 px-2">6</td>
              <td className="border border-slate-300 py-1 px-2">Learn with your team</td>
              <td className="border border-slate-300 py-1 px-2">
                Feb&nbsp;13,&nbsp;2023&nbsp;- Feb&nbsp;17,&nbsp;2023
              </td>
              <td className="border border-slate-300 py-1 px-2"></td>
              <td className="border border-slate-300 py-1 px-2"></td>
              <td className="border border-slate-300 py-1 px-2">
                {' '}
                Collaborate and learn a new technology together
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 py-1 px-2">7</td>
              <td className="border border-slate-300 py-1 px-2">Present your learning</td>
              <td className="border border-slate-300 py-1 px-2">
                Feb&nbsp;17,&nbsp;2023
              </td>
              <td className="border border-slate-300 py-1 px-2">09:00&nbsp;AM</td>
              <td className="border border-slate-300 py-1 px-2">11:00&nbsp;AM</td>
              <td className="border border-slate-300 py-1 px-2">
                Demonstrate your learning including a short summary of the topic, its
                application, pros and cons, etc.
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 py-1 px-2">8</td>
              <td className="border border-slate-300 py-1 px-2">Kickstart Hackathon</td>
              <td className="border border-slate-300 py-1 px-2">
                Feb&nbsp;20,&nbsp;2023
              </td>
              <td className="border border-slate-300 py-1 px-2">09:00&nbsp;AM</td>
              <td className="border border-slate-300 py-1 px-2">11:00&nbsp;AM</td>
              <td className="border border-slate-300 py-1 px-2">
                Introduce teams and respective problem statement.
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 py-1 px-2">9</td>
              <td className="border border-slate-300 py-1 px-2">
                Build and test your hypothesis
              </td>
              <td className="border border-slate-300 py-1 px-2">
                Feb&nbsp;20,&nbsp;2023&nbsp;- Feb&nbsp;24,&nbsp;2023
              </td>
              <td className="border border-slate-300 py-1 px-2"></td>
              <td className="border border-slate-300 py-1 px-2"></td>
              <td className="border border-slate-300 py-1 px-2">
                Hack a solution together.
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 py-1 px-2">10</td>
              <td className="border border-slate-300 py-1 px-2">
                Demo your POC/Prototype
              </td>
              <td className="border border-slate-300 py-1 px-2">
                Feb&nbsp;24,&nbsp;2023
              </td>
              <td className="border border-slate-300 py-1 px-2">09:00&nbsp;AM</td>
              <td className="border border-slate-300 py-1 px-2">11:00&nbsp;AM</td>
              <td className="border border-slate-300 py-1 px-2">
                Demonstrate your solution and findings.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
