import { useRouter } from 'next/router'

import Header from './Header'
import Footer from './Footer'
import { Hackathon } from './Hackathon'

export default function Layout({ fullwidth, children }) {
  const { route } = useRouter()
  return (
    <div className="flex flex-col min-h-screen">
      {!['/hackathon/register', '/hackathon/schedule'].includes(route) ? (
        <Hackathon />
      ) : (
        ''
      )}
      <Header />
      <main className={fullwidth ? '' : 'container mx-auto px-5 flex-grow'}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
