import Head from 'next/head'

import FeedbackForm from '../components/FeedbackForm'

function ContactUsPage() {
  return (
    <div className="px-2 md:px-5 lg:px-12 2xl:px-28">
      <Head>
        <title>Contact Us - Open Components Ecosystem</title>
        <meta
          name="description"
          content="Applications built on Open Components, which are the reusable building blocks of biblical technology"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pb-3 lg:pb-10">
        <div className="border-b-2 text-center border-dashed">
          <h1 className="pt-5 pb-10 font-bold text-3xl lg:text-4xl xl:text-5xl text-primary-600">
            Contact Us
          </h1>
        </div>
        <FeedbackForm />
      </div>
    </div>
  )
}

export default ContactUsPage
