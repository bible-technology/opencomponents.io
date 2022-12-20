import { useState } from 'react'

import axios from 'axios'
import { setCookie } from 'cookies-next'

import {
  useShortAnswerInput,
  useLongAnswerInput,
  useDropdownInput,
  useRadioInput,
  useGoogleForm,
  GoogleFormProvider,
} from 'react-google-forms-hooks'

import form from '../GoogleForm.json'

export default function RegistrationForm({ setCurrentUser, setStateRegistration }) {
  const methods = useGoogleForm({ form })
  const [formState, setFormState] = useState('default')
  const [errorMsg, setErrorMsg] = useState('')

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
          setCookie('user', data[getEmailId()], {
            maxAge: 60 * 60 * 24 * 180,
            SameSite: true,
          })
          setCurrentUser(data[getEmailId()])
          setStateRegistration('ticket')
        }
      })
      .catch((err) => {
        setFormState('error')
        setErrorMsg(err?.message ?? 'Error! Please try again.')
      })
  }

  return (
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
  )
}

const ShortAnswerInput = ({ id }) => {
  const { register, label, required, description } = useShortAnswerInput(id)

  return (
    <>
      <label>
        <div className="block mb-2 font-bold">{label}</div>
        <div>{description}</div>
        <input
          className="p-4 w-full text-md bg-gray-200 rounded-lg placeholder:text-gray-700 focus:outline-none focus:bg-gray-300"
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
          className="p-4 text-gray-700 border-0 w-full text-md bg-gray-200 rounded-lg placeholder:text-gray-700 focus:outline-none focus:bg-gray-300"
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
            className="p-4 block border-0 w-full text-md bg-gray-200 rounded-lg placeholder:text-gray-700 focus:outline-none focus:bg-gray-300"
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

const getEmailId = () => {
  return form?.fields?.filter((res) => res.label.toLocaleLowerCase() === 'email')?.[0]?.id
}

const getNameId = () => {
  return form?.fields?.filter(
    (res) => res.label.toLocaleLowerCase() === 'first name'
  )?.[0]?.id
}
