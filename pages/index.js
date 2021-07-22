import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Open Components</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Open Components" />
        <p className="description">
          <code>Coming soon...</code>
        </p>
        <p><a href="/The Open Components Ecosystem - draft 4.pdf">Read the paper</a> | <a href="https://discord.gg/auJb4H9ezx">Join the Community</a></p>
      </main>

    </div>
  )
}
