import { useState } from 'react'

import axios from 'axios'

import { ChatBubbleLeftRightIcon } from '@heroicons/react/20/solid'

function FeedbackForm() {
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
          setFormState('sended')
        }
      })
      .catch((err) => {
        setFormState('error')
        setErrorMsg(err?.message ?? 'Error! Please try again.')
      })
  }

  return (
    <div className="text-md mt-3 md:mt-8 text-text-800 md:text-lg flex justify-center">
      {formState === 'sended' ? (
        <div className="my-6 mx-2 p-5 flex flex-col items-center text-2xl">
          <ChatBubbleLeftRightIcon
            className="h-24 w-24 md:h-56 md:w-56 text-primary-600"
            aria-hidden="true"
          />
          Thank you for taking the time to provide your valuable feedback!
        </div>
      ) : (
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
            {formState === 'loading' ? <>Sending...</> : <>Send</>}
          </button>
          {formState === 'error' ? (
            <p className="text-center text-red-600">{errorMsg}</p>
          ) : (
            ''
          )}
        </form>
      )}
    </div>
  )
}

export default FeedbackForm
