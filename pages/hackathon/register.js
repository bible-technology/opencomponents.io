import { useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import axios from 'axios'
import { setCookie, getCookie } from 'cookies-next'

import {
  useShortAnswerInput,
  useLongAnswerInput,
  useDropdownInput,
  useRadioInput,
  useGoogleForm,
  GoogleFormProvider,
} from 'react-google-forms-hooks'

import form from '../../GoogleForm.json'

import editor_black from '../../public/editor_black.svg'
import eten_logo from '../../public/eten_logo.png'

const ShortAnswerInput = ({ id }) => {
  const { register, label, required, description } = useShortAnswerInput(id)

  return (
    <>
      <label>
        <div className="block mb-2 font-bold">{label}</div>
        <div>{description}</div>
        <input
          className="p-4 w-full text-md bg-gray-100 rounded-lg placeholder:text-gray-700 focus:outline-none focus:bg-gray-200"
          type={label.toLocaleLowerCase() === 'email' ? 'email' : 'text'}
          {...register()}
          required={required}
        />
      </label>
    </>
  )
}

const LongAnswerInput = ({ id }) => {
  const { register, label, required, description } = useLongAnswerInput(id)

  return (
    <>
      <label>
        <div className="block mb-2 font-bold">{label}</div>
        <div>{description}</div>
        <textarea
          className="p-4 text-gray-700 border-0 w-full text-md bg-gray-100 rounded-lg placeholder:text-gray-700 focus:outline-none focus:bg-gray-200"
          {...register()}
          required={required}
        />
      </label>
    </>
  )
}

const RadioInput = ({ id }) => {
  const { options, customOption, error, label, description, required } = useRadioInput(id)

  return (
    <>
      <div className="block mb-2 font-bold">{label}</div>
      <div className="text-gray-600 text-sm">{description}</div>
      {options.map((o) => (
        <div key={o.id} className="flex space-x-2">
          <input type="radio" id={o.id} {...o.registerOption()} required={required} />
          <label htmlFor={o.id}>{o.label}</label>
        </div>
      ))}
      {customOption && (
        <div>
          <div className="flex space-x-2">
            <input type="radio" id={customOption.id} {...customOption.registerOption()} />
            <label htmlFor={customOption.id}>Your option</label>
          </div>
          <input
            className="p-4 block border-0 w-full text-md bg-gray-100 rounded-lg placeholder:text-gray-700 focus:outline-none focus:bg-gray-200"
            type="text"
            {...customOption.registerCustomInput()}
          />
        </div>
      )}
      <div>{error && 'This field is required'}</div>
    </>
  )
}

const DropdownInput = ({ id }) => {
  const { register, options, required, label, description } = useDropdownInput(id)

  return (
    <div className="w-full">
      <label className="block mb-2 font-bold">{label}</label>
      <div>{description}</div>
      <div
        className="appearance-none text-white inline-flex uppercase select-none font-thin relative whitespace-nowrap h-14 w-full outline-none overflow-hidden bg-white"
        style={{
          minWidth: '160px',
          borderRadius: '6px',
        }}
      >
        <select
          className="appearance-none border border-black border-solid cursor-default text-black w-full p-4 rounded-lg font-bold bg-white"
          style={{
            fontSize: '14px',
            fontFamily: 'inherit',
            wordSpacing: 'normal',
            transition: 'border-color 0.2s ease, background-color 0.2s ease',
          }}
          {...register()}
          required={required}
        >
          {options.map((o) => {
            return (
              <option className="bg-black text-white" key={o.label} value={o.label}>
                {o.label}
              </option>
            )
          })}
        </select>
        <div
          className="flex h-full right-0 pointer-events-none items-center absolute"
          style={{
            width: '30px',
            transition: 'border 0.2s ease 0s',
          }}
        >
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            shapeRendering="geometricPrecision"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </div>
  )
}

const getEmailId = () => {
  return form?.fields?.filter((res) => res.label.toLocaleLowerCase() === 'email')?.[0]?.id
}

const getNameId = () => {
  return form?.fields?.filter(
    (res) => res.label.toLocaleLowerCase() === 'first name'
  )?.[0]?.id
}

export default function Register() {
  const methods = useGoogleForm({ form })
  const [formState, setFormState] = useState('default')
  const [errorMsg, setErrorMsg] = useState('')
  const [currentUser, setCurrentUser] = useState(() => getCookie('user'))

  const onSubmit = async (data) => {
    setFormState('loading')
    if (!getEmailId() || !getNameId()) {
      setFormState('error')
      setErrorMsg('Form error. Contact the administrator.')
      return false
    }
    await methods.submitToGoogleForms(data)
    axios
      .post('/api/confirm', { email: data[getEmailId()], name: data[getNameId()] })
      .then((res) => {
        if (res.status !== 200) {
          setFormState('error')
          setErrorMsg(res?.error || 'Error! Please try again.')
        } else {
          setFormState('default')
          setCookie('user', data[getEmailId()])
        }
      })
      .catch((err) => {
        setFormState('error')
        setErrorMsg(err?.message ?? 'Error! Please try again.')
      })
  }

  const [continueReg, setContinueReg] = useState(false)
  return (
    <div className="flex flex-col gap-10 mx-4 xl:gap-12 mb-8">
      <Head>
        <title>Open Components 2023 Hackathon</title>
        <meta name="description" content="Open Components 2023 Hackathon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center">
        <div className="flex flex-row self-end mr-10 md:mr-20 lg:mr-48 xl:mr-64 2xl:mr-96">
          <Image src={editor_black} alt="editor_black" width="90" height="90" />
        </div>
        <div className="text-center mb-3 text-2xl font-bold text-primary-600 md:mb-8 md:text-3xl lg:text-4xl xl:text-5xl md:w-3/5">
          Open Components 2023 Hackathon
        </div>
        <div className="text-center text-lg mb-2 text-primary-600 md:text-2xl lg:mb-5">
          In partnership with <span className="font-bold">ETEN Innovation Lab</span>
        </div>
        {/* <Image src={eten_logo} alt="eten_logo" width="162" height="50" /> */}
        <br />
        {continueReg ? (
          <>
            <GoogleFormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Questions />
                <button
                  type="submit"
                  className="uppercase text-white py-2 px-4 mb-4 block mx-auto rounded-md bg-primary-600 disabled:bg-gray-400"
                  disabled={formState === 'loading'}
                >
                  {formState === 'loading' ? <>Loading</> : <>Register</>}
                </button>
                {formState === 'error' ? (
                  <p className="text-center text-red-600">{errorMsg}</p>
                ) : (
                  ''
                )}
              </form>
            </GoogleFormProvider>
          </>
        ) : (
          <>
            <div className="uppercase text-lg my-6 text-primary-600">
              <b>February 13 - 17, 2023</b> | Learnathon <br />
              <b>February 20 - 24, 2023</b> | Hackathon
            </div>
            <div className="flex mb-3">
              {/* <input
                type="email"
                placeholder="Enter email to register free"
                className="input p-3 text-gray-700"
              /> */}
              <button
                onClick={() => {
                  setContinueReg(true)
                }}
                className="uppercase text-white py-3 px-4 ml-2 rounded-md bg-primary-600"
              >
                {currentUser ? currentUser : 'Register Now'}
              </button>
            </div>
          </>
        )}
        <Link href="/hackathon/schedule">
          <a className="underline-custom">Learn More</a>
        </Link>
      </div>
    </div>
  )
}

const Questions = () => {
  return (
    <div>
      {form.fields.map((field) => {
        const { id } = field

        let questionInput = null
        switch (field.type) {
          case 'RADIO':
            questionInput = <RadioInput id={id} />
            break
          case 'SHORT_ANSWER':
            questionInput = <ShortAnswerInput id={id} />
            break
          case 'LONG_ANSWER':
            questionInput = <LongAnswerInput id={id} />
            break
          case 'DROPDOWN':
            questionInput = <DropdownInput id={id} />
            break
        }

        if (!questionInput) {
          return null
        }

        return (
          <div key={id} className="my-6">
            {questionInput}
          </div>
        )
      })}
    </div>
  )
}
