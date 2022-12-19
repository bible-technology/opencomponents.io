import { useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

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
import axios from 'axios'

const ShortAnswerInput = ({ id }) => {
  const { register, label, required, description } = useShortAnswerInput(id)

  return (
    <>
      <label>
        <div>{label}</div>
        <div>{description}</div>
        <input
          className="p-4 w-80 text-md bg-gray-100 rounded-lg placeholder:text-gray-700 focus:outline-none focus:bg-gray-200"
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
        <div>{label}</div>
        <div>{description}</div>
        <textarea
          className="p-4 text-gray-700 border-0 w-80 text-md bg-gray-100 rounded-lg placeholder:text-gray-700 focus:outline-none focus:bg-gray-200"
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
      <div>{label}</div>
      <div>{description}</div>
      {options.map((o) => (
        <div key={o.id}>
          <input type="radio" id={o.id} {...o.registerOption()} required={required} />
          <label htmlFor={o.id}>{o.label}</label>
        </div>
      ))}
      {customOption && (
        <div>
          <input type="radio" id={customOption.id} {...customOption.registerOption()} />
          <label htmlFor={customOption.id}>Your option</label>
          <input
            className="p-4 block border-0 w-80 text-md bg-gray-100 rounded-lg placeholder:text-gray-700 focus:outline-none focus:bg-gray-200"
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
    <div className="w-80">
      <label>{label}</label>
      <div>{description}</div>
      <div
        style={{
          appearance: 'none',
          color: 'white',
          display: 'inline-flex',
          textTransform: 'uppercase',
          userSelect: 'none',
          fontWeight: '100',
          position: 'relative',
          whiteSpace: 'nowrap',
          lineHeight: '0',
          height: '56px',
          width: '100%',
          minWidth: '160px',
          outline: 'none',
          overflow: 'hidden',
          borderRadius: '6px',
          backgroundColor: '#fff',
        }}
      >
        <select
          style={{
            appearance: 'none',
            border: 'none',
            cursor: 'default',
            color: '#000',
            fontSize: '14px',
            fontFamily: 'inherit',
            width: '100%',
            wordSpacing: 'normal',
            padding: '16px 32px 16px 16px',
            transition: 'border-color 0.2s ease, background-color 0.2s ease',
            border: '1px solid black',
            borderRadius: '8px',
            fontWeight: '700',
            backgroundColor: 'white',
          }}
          {...register()}
          required={required}
        >
          {options.map((o) => {
            return (
              <option
                style={{ backgroundColor: 'black', color: '#fff' }}
                key={o.label}
                value={o.label}
              >
                {o.label}
              </option>
            )
          })}
        </select>
        <div
          style={{
            width: '30px',
            height: '100%',
            position: 'absolute',
            right: '0px',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
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
  return form.fields.filter((res) => res.label.toLocaleLowerCase() === 'email')[0].id
}

const getNameId = () => {
  return form.fields.filter((res) => res.label.toLocaleLowerCase() === 'name')[0].id
}

export default function Register() {
  const methods = useGoogleForm({ form })
  const [formState, setFormState] = useState('default')

  const onSubmit = async (data) => {
    setFormState('loading')
    console.log(data)
    await methods.submitToGoogleForms(data)
    axios
      .post('/api/confirm', { email: data[getEmailId()], name: data[getNameId()] })
      .then((res) => {
        if (!res.ok) {
          setFormState('error')
          setErrorMsg(err?.message ?? 'Error! Please try again.')
        } else {
          setPageState('ticket')
          setFormState('default')
        }
      })
      .catch((err) => {
        setFormState('error')
        setErrorMsg(err?.message ?? 'Error! Please try again.')
      })
  }

  const [continueReg, setContinueReg] = useState(false)
  return (
    <div className="flex flex-col gap-10 mx-4 xl:gap-12">
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
                  className="uppercase text-white py-2 px-4 rounded-md bg-primary-600 disabled:bg-gray-400"
                  disabled={formState === 'loading'}
                >
                  {formState === 'loading' ? <>Loading</> : <>Submit</>}
                </button>
                {formState === 'error' ? <p style={{ color: 'red' }}>{errorMsg}</p> : ''}
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
              <input
                type="email"
                placeholder="Enter email to register free"
                className="input p-3 text-gray-700"
              />
              <button
                onClick={() => {
                  setContinueReg(true)
                }}
                className="uppercase text-white py-3 px-4 ml-2 rounded-md bg-primary-600"
              >
                Register
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
