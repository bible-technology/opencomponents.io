import Head from 'next/head'
import Link from 'next/link'

import HeaderStaticPage from '../../components/HeaderStaticPage'

export default function Hackathon2025() {
  const HeaderConfig = {
    title: 'Hackathon 2025',
    name: '',
    date: 'March 3 - 7, 2025',
  }

  const timeline = [
    {
      title: 'Registration',
      date: 'January 20 - February 23, 2025',
      description: 'Participants registered for the event and prepared to join teams.',
    },
    {
      title: 'Learnathon Kickoff',
      date: 'February 24, 2025',
      description: 'Teams introduced themselves and shared what they wanted to learn.',
    },
    {
      title: 'Learnathon Week',
      date: 'February 24 - 28, 2025',
      description:
        'Teams explored new technology together through collaborative learning sessions.',
    },
    {
      title: 'Hackathon Kickoff',
      date: 'March 3, 2025',
      description:
        'Teams introduced their problem statements and the hypotheses behind their ideas.',
    },
    {
      title: 'Hackathon Week',
      date: 'March 3 - 7, 2025',
      description: 'Participants built and refined solutions together across the week.',
    },
    {
      title: 'Demo Day',
      date: 'March 7, 2025',
      description:
        'Teams demonstrated their work and shared findings with the community.',
    },
  ]

  return (
    <div className="container mx-auto md:px-1 lg:px-2 2xl:px-4">
      <Head>
        <title>Hackathon 2025 - Events - Open Components Ecosystem</title>
        <meta
          name="description"
          content="Archive page for the 2025 Open Components Hackathon, including the theme, dates, and program timeline."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderStaticPage config={HeaderConfig} backButton={false} />
      <div className="mx-auto mb-12 text-lg leading-8 md:px-10 lg:px-20 2xl:px-40">
        <div className="rounded-2xl border border-primary-200 bg-primary-100 px-6 py-6">
          <p className="font-bold text-primary-700">Historical archive</p>
          <p className="mt-3 text-gray-700">
            This page preserves the 2025 hackathon as a past event. Looking for the
            current event? Visit{' '}
            <Link href="/hackathon">
              <a className="underline-custom">Hackathon 2026</a>
            </Link>
            .
          </p>
        </div>

        <div className="mt-10">
          <p>
            The 2025 Open Components Hackathon brought the community together for a two
            week sprint that combined a Learnathon and a Hackathon. Participants explored
            new approaches in Bible technology, worked in teams, and presented their ideas
            at the end of the event.
          </p>
          <p className="mt-6">
            The 2025 theme was{' '}
            <b>
              Exploring Theia to make Bible translation software development globally
              accessible
            </b>
            . Both the Learnathon and Hackathon were conducted online.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-xl bg-primary-100 px-6 py-8">
            <div className="text-2xl font-bold text-primary-700">Learnathon</div>
            <p className="mt-3 text-gray-700">February 24 - 28, 2025</p>
            <p className="mt-4 text-base text-gray-700">
              A week for teams to learn together, explore tools, and prepare for the build
              sprint.
            </p>
          </div>
          <div className="rounded-xl bg-primary-100 px-6 py-8">
            <div className="text-2xl font-bold text-primary-700">Hackathon</div>
            <p className="mt-3 text-gray-700">March 3 - 7, 2025</p>
            <p className="mt-4 text-base text-gray-700">
              A focused build week culminating in demo presentations and shared findings.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-primary-600">Program timeline</h2>
          <div className="mt-6 space-y-5">
            {timeline.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 px-6 py-5"
              >
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
                  <p className="text-base font-bold text-primary-700">{item.date}</p>
                </div>
                <p className="mt-3 text-base text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
