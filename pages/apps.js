import Head from 'next/head'
import { useState } from 'react'

import AppsList from '../components/AppsList'

function AppsPage() {
  const [total, setTotal] = useState()
  return (
    <div className="px-2 md:px-5 lg:px-12 2xl:px-28">
      <Head>
        <title>Apps - Open Components Ecosystem</title>
        <meta
          name="description"
          content="Applications built on Open Components, which are the reusable building blocks of biblical technology"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center pb-3 border-b-2 border-dashed lg:pb-10">
        <div className="text-2xl font-bold text-primary-600 md:text-3xl lg:text-4xl xl:text-5xl">
          Apps
        </div>
        <div className="text-lg mt-3 md:mt-8 text-text-800 md:text-2xl">
          <div className="inline-block">Repositories: {total}</div>
        </div>
      </div>
      <div>
        <AppsList setTotal={setTotal} />
      </div>
    </div>
  )
}

export default AppsPage
