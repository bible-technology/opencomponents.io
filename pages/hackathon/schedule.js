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

      <div className="flex flex-col items-center border-b-2 border-dashed">
        <div className="flex flex-row self-end mr-10 md:mr-20 lg:mr-48 xl:mr-64 2xl:mr-96">
          <Image src={editor_black} alt="editor_black" width="90" height="90" />
        </div>
        <div className="text-center mb-3 text-2xl font-bold text-primary-600 md:mb-8 md:text-3xl lg:text-4xl xl:text-5xl md:w-3/5">
          Open Components are Reusable Building Blocks for Bible Technology
        </div>
        <div className="text-center text-lg mb-3 text-primary-600 md:text-2xl lg:mb-10">
          <span className="font-bold">Collaborative Innovation</span> in Bible Technology
        </div>
        <p>
          Join us for Open Components Hackathon 2023 <br />
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
        <table>
          <tr>
            <td></td>
            <td>Steps Involved</td>
            <td>Important Dates</td>
            <td>Start Time</td>
            <td>End Time</td>
            <td>Description</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Register</td>
            <td>Dec 2022 - Feb 6, 2023</td>
            <td></td>
            <td></td>
            <td>Click on the link to register</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Join the Discord channel</td>
            <td>Dec 2022 - Feb 6, 2023</td>
            <td></td>
            <td></td>
            <td>
              Join the #oce-hackathon and introduce yourself to the Open Components
              community
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Form teams</td>
            <td>Dec 2022 - Feb 6, 2023</td>
            <td></td>
            <td></td>
            <td>
              Join an existing team or form a new team and update your team information in
              https://discord.gg/2zjFVgaw4E
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Create team channel in discord</td>
            <td>Dec 2022 - Feb 6, 2023</td>
            <td></td>
            <td></td>
            <td>Collaborate with the team online</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Kickstart Learn-a-thon</td>
            <td>Feb 13, 2023</td>
            <td>09:00 AM</td>
            <td>11:00 AM</td>
            <td>Introduce teams and respective team learning goals</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Learn with your team</td>
            <td>Feb 13, 2023 - Feb 17, 2023</td>
            <td></td>
            <td></td>
            <td> Collaborate and learn a new technology together</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Present your learning</td>
            <td>Feb 17, 2023</td>
            <td>09:00 AM</td>
            <td>11:00 AM</td>
            <td>
              Demonstrate your learning including a short summary of the topic, its
              application, pros and cons, etc.
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>Kickstart Hackathon</td>
            <td>Feb 20, 2023</td>
            <td>09:00 AM</td>
            <td>11:00 AM</td>
            <td>Introduce teams and respective problem statement.</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Build and test your hypothesis</td>
            <td>Feb 20, 2023 - Feb 24, 2023 </td>
            <td></td>
            <td></td>
            <td>Hack a solution together.</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Demo your POC/Prototype</td>
            <td>Feb 24, 2023</td>
            <td>09:00 AM</td>
            <td>11:00 AM</td>
            <td>Demonstrate your solution and findings.</td>
          </tr>
        </table>
      </div>
    </div>
  )
}
