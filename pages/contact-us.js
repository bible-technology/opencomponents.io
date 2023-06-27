import Head from 'next/head'
import { useState } from 'react'

import axios from 'axios'

function ContactUsPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [formState, setFormState] = useState('default')

  const onSubmit = (e) => {
    e.preventDefault()
    setFormState('loading')
    if (!email || !message || !name) {
      setFormState('error')
      setErrorMsg('All fields are required')
      return false
    }
    axios
      .post('/api/feedback', { email, name, message })
      .then((res) => {
        if (res.status !== 200) {
          setFormState('error')
          setErrorMsg(res?.error || 'Error! Please try again.')
        } else {
          setFormState('default')
        }
      })
      .catch((err) => {
        setFormState('error')
        setErrorMsg(err?.message ?? 'Error! Please try again.')
      })
  }

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
          <h1 className="pt-5 pb-10 text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-primary-600">
            Contact Us
          </h1>
        </div>
        <div className="text-md mt-3 md:mt-8 text-text-800 md:text-lg flex justify-center">
          <form onSubmit={onSubmit} className="w-[512px]">
            <div className="my-6">
              <label>
                <div className="block mb-2 font-bold">Name</div>
                <input
                  className="px-4 input"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className="my-6">
              <label>
                <div className="block mb-2 font-bold">Email</div>
                <input
                  className="px-4 input"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <div className="my-6">
              <label>
                <div className="block mb-2 font-bold">Message</div>
                <textarea
                  className="px-4 input"
                  required
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                  value={message}
                />
              </label>
            </div>
            <button
              type="submit"
              className="uppercase text-white py-2 px-4 mb-4 block mx-auto rounded-md bg-primary-600 disabled:bg-gray-400"
              disabled={formState === 'loading'}
            >
              {formState === 'loading' ? <>Loading</> : <>Send</>}
            </button>
            {formState === 'error' ? (
              <p className="text-center text-red-600">{errorMsg}</p>
            ) : (
              ''
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUsPage
