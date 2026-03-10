import Head from 'next/head'
import Link from 'next/link'

import {
  currentHackathonHubUrl,
  currentHackathonTitle,
  currentHackathonYear,
} from '../../utils/helper'

export default function Hackathon2026() {
  return (
    <div className="mx-4 mb-12 flex flex-col gap-8 xl:gap-10">
      <Head>
        <title>{`${currentHackathonTitle} - Open Components Ecosystem`}</title>
        <meta
          name="description"
          content="Learn about the Open Bible Tech Community Hackathon 2026 and continue registration in the Hackathon Hub."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="rounded-3xl bg-secondary-400 px-6 py-10 md:px-10 lg:px-14 lg:py-14">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary-700">
            Upcoming Community Event
          </p>
          <h1 className="text-4xl font-bold text-gray-800 lg:text-6xl">
            {currentHackathonTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-700">
            Join the Open Bible Tech Community for the {currentHackathonYear} hackathon
            April 27-May 1, virtually or in-person. Visit the Hackathon Hub for
            registration, event details, and coordination.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={currentHackathonHubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-base font-bold text-white hover:bg-primary-700 active:shadow-xl active:shadow-primary-700/23"
            >
              Open Hackathon Hub
            </a>
            <Link href="/events/hackathon2025">
              <a className="inline-flex items-center justify-center rounded-lg border border-primary-600 px-6 py-3 text-base font-bold text-primary-600 hover:bg-primary-100 active:shadow-xl active:shadow-primary-700/23">
                View 2025 Archive
              </a>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-xl">
        <div className="rounded-2xl border border-dashed border-primary-300 px-6 py-8">
          <h2 className="text-2xl font-bold text-primary-700">Past events</h2>
          <p className="mt-4 text-base leading-7 text-gray-700">
            Looking for previous hackathons? The 2023, 2024, and 2025 events remain
            available in the site archive.
          </p>
          <Link href="/events/hackathon2025">
            <a className="mt-6 inline-flex items-center font-bold text-primary-600 underline decoration-2 underline-offset-4">
              Go to Hackathon 2025
            </a>
          </Link>
        </div>
      </section>
    </div>
  )
}
