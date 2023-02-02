import Head from 'next/head'

const NotFound = () => {
  return (
    <div className="not-found container">
      <Head>
        <title>Error - Open Components Ecosystem</title>
        <meta name="description" content="That page cannot be found" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{ height: 'calc(100vh - 14rem)' }}
        className="max-w-full flex items-center justify-center mx-8"
      >
        <div className="text-4xl border-r-2 border-black pr-2 md:text-7xl md:pr-4">
          404
        </div>
        <div className="ml-2 text-base md:text-2xl md:ml-4">
          <p>Ooops...</p>
          <p>That page cannot be found :(</p>
        </div>
      </div>
    </div>
  )
}

export default NotFound
