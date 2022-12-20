import Head from 'next/head'
import Image from 'next/image'

import editor_black from '../../public/editor_black.svg'

export default function Register() {
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
      </div>
    </div>
  )
}
