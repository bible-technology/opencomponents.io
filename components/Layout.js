import Header from './Header'
import Footer from './Footer'

export default function Layout({ fullwidth, children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={fullwidth ? '' : 'container mx-auto px-5 flex-grow'}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
