import Layout from '../components/Layout'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout fullwidth={Component.fullwidth ?? false}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
