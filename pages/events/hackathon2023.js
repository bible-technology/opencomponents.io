import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import HeaderStaticPage from '../../components/HeaderStaticPage'

import Download from '../../public/download.svg'

export default function LeanExpectations() {
  const HeaderConfig = {
    title: 'Hackathon 2023',
    name: '',
    date: 'February 20 - 24, 2023',
  }
  return (
    <div className="container mx-auto md:px-1 lg:px-2 2xl:px-4">
      <Head>
        <title>Hackathon 2023 - Events - Open Components Ecosystem</title>
        <meta
          name="description"
          content="Over 60 developers from 9 organizations (BCS, TextTree, MVH Solutions, Idiomas Puentes, Biblica, Wycliffe, SIL, Clear, and unfoldingWord) participated in the 2023 iLab Open Components Learnathon and Hackathon."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderStaticPage config={HeaderConfig} backButton={false} />
      <div className="mx-auto md:px-10 lg:px-20 2xl:px-40 text-lg leading-8">
        <br />
        <p>
          Over 60 developers from 9 organizations (BCS, TextTree, MVH Solutions, Idiomas
          Puentes, Biblica, Wycliffe, SIL, Clear, and unfoldingWord) participated in the
          2023 iLab Open Components Learnathon and Hackathon. While the learnathon was a
          virtual event via zoom, for the Hackathon, we had 10 teams working on 12
          different projects across 4 physical sites as well as online including Orlando-
          Florida, New Delhi- India, Avignon - France and Arlington - Texas. During the
          learnathon, we held 6 learning sessions on topics ranging from unfoldingWord’s
          custom build of Electron to Scripture App Builder’s use of Proskomma. The
          hackathon teams explored various innovative technologies including applying AI
          to original text alignment, connecting Biblical place names to other open
          resources, adding an avatar on top of sign language videos, and mapping various
          parts of the Open Components Ecosystem.
        </p>
        <br />
        <p>
          To learn more about the Learnathon{' '}
          <a
            className="underline-custom"
            href="https://unfoldingword.notion.site/8c6bbf793a9f408089d9bd22aa01c549"
            target="_blank"
            rel="noreferrer"
          >
            click here
          </a>
          .
        </p>
        <div className="mt-12">
          <a
            className="underline-custom font-bold mb-8"
            href="https://unfoldingword-org.zoom.us/rec/share/jvBlnXJ2QZWF8hurKDC0Z_TnnMET-6DD0KaUQu0Klaj6KnGVZeaos73YrElXY5D7.hQ9xyzVt9MW6Np3H?startTime=1677247677000"
            target={'_blank'}
            rel="noreferrer"
          >
            Final Team Presentation Video
          </a>
          <ul>
            <li className="py-1">
              <b>1:50</b> Team Publisher (India): RCL for USFM to PDF preview
            </li>
            <li className="py-1">
              <b>14:00</b> Team Signing Avatar (India): Using animation technology develop
              a digital avatar that detects human motions in a sign language video.
            </li>
            <li className="py-1">
              <b>23:50</b> Team Cornerstone (India): Reverse Interlinear Bible which
              displays the English translation corresponding to the original language
              text.
            </li>
            <li className="py-1">
              <b>31:00</b> Team Valis Aperta / Open Valley (France): Diegesis features
              (Diegesis Sandbox, Search by Strong’s numbers, react native mobile app using
              proskomma locally)
            </li>
            <li className="py-1">
              <b>33:39</b> Team Documentators (Online): Open Bible Composer domain diagram
            </li>
            <li className="py-1">
              <b>55:26</b> Team AAARG (Almost Accurate Alignment Algorithm Realtime Goal)
              (Data team - France): New AI - ReservoirPy for pattern recognition in text
              and audio files. Explored it for identifying patterns in alignment.
            </li>
            <li className="py-1">
              <b>1:10:00</b> Team Translation Validation Bootstrappers ( Colorado -
              Biblica): Identify most challenging aspects of translation and explore
              machine translation{' '}
            </li>
            <li className="py-1">
              <b>1:26:00</b> Team Knowledge (Orlando): Explore Open Datasets for “places”
              data. Included showing linkages between Step Bible data with Translation
              Words lists, secondly with Pleiades data using latitude and longitude
              approach and finally with Open Bible Geo Data.
            </li>
            <li className="py-1">
              <b>1:35:00</b> Team Micro librarians (Online): OBS Progressive Web App and
              framework agnostic libraries.
            </li>
            <li className="py-1">
              <b>1:48:00</b> Team AAARG (Almost Accurate Alignment Algorithm Realtime
              Goal)(Code team - Orlando): Automated alignment for same language new texts
              and new language new texts.
            </li>
          </ul>
        </div>
        <br />
        <div className="mb-12">
          <p>
            <b>Reference Links:</b>
          </p>
          <ul className="list-disc ml-4">
            <li className="py-1">
              Proskomma <br />
              <a
                href="https://www.youtube.com/watch?v=U00dnnhTFEY"
                target={'_blank'}
                className="underline underline-offset-2 decoration-2 text-gray-500"
                rel="noreferrer"
              >
                Diegesis as ecosystem
              </a>
              <br />
              <Link href="/proskomma_101_slideshow_1.pdf">
                <a target="_blank" className="flex flex-row items-center">
                  <Image
                    src={Download}
                    alt="Download"
                    width="26"
                    height="21"
                    className=""
                  />
                  <span className="underline underline-offset-2 decoration-2 text-gray-500">
                    proskomma 101 slideshow 1.pdf
                  </span>
                  <span className="text-sm text-gray-400 ml-4 self-end mb-1">
                    126.5KB
                  </span>
                </a>
              </Link>
            </li>
            <li className="py-1">
              Open Bible Composer{' '}
              <a
                className="underline underline-offset-2 decoration-2 text-gray-500"
                href="https://docs.google.com/drawings/d/1pV1Bk2Qryp_A1a_fAjgzY1jruuXRc7mntVDIWDXHtsc/edit"
                target={'_blank'}
                rel="noreferrer"
              >
                Domain Diagram
              </a>
            </li>
            <li className="py-1">
              <a
                className="underline underline-offset-2 decoration-2 text-gray-500"
                href="https://unfoldingword.notion.site/3d75bf70f7fc4d08b27db6e3fc4fb7c2"
                target={'_blank'}
                rel="noreferrer"
              >
                OBS Progressive Web-App & Framework Agnostic libraries
              </a>
            </li>
            <li className="py-1">
              <a
                className="underline underline-offset-2 decoration-2 text-gray-500"
                href="https://github.com/micro-librarians/obs-study-apps"
                target={'_blank'}
                rel="noreferrer"
              >
                OBS Study Apps github repo
              </a>
            </li>
            <li className="py-1">
              Open Data Sets: <br />
              <a
                href="https://www.youtube.com/watch?v=U00dnnhTFEY"
                target={'_blank'}
                className="underline underline-offset-2 decoration-2 text-gray-500"
                rel="noreferrer"
              >
                github repo
              </a>{' '}
              <br />
              <a
                href="https://www.youtube.com/watch?v=U00dnnhTFEY"
                target={'_blank'}
                className="underline underline-offset-2 decoration-2 text-gray-500"
                rel="noreferrer"
              >
                Presentation
              </a>
            </li>
            <li className="py-1">
              {' '}
              <a
                className="underline underline-offset-2 decoration-2 text-gray-500"
                href="https://docs.google.com/document/d/1uulWLnVMHb1RwjqAOexkbHt7BlxbBi5iBfgfsZDfEa0/edit#heading=h.oa8dka17lsk9"
                target={'_blank'}
                rel="noreferrer"
              >
                Moving Web Apps to Electron
              </a>
            </li>
            <li className="py-1">
              {' '}
              <a
                className="underline underline-offset-2 decoration-2 text-gray-500"
                href="https://unfoldingword.notion.site/deb386e5c9f04ed5af5f70e88383aa65"
                target={'_blank'}
                rel="noreferrer"
              >
                Reverse Interlinear Viewer
              </a>
            </li>
            <li className="py-1">
              {' '}
              <a
                className="underline underline-offset-2 decoration-2 text-gray-500"
                href="https://github.com/orgs/biblica/repositories"
                target={'_blank'}
                rel="noreferrer"
              >
                Biblica paratext plugins
              </a>
            </li>
            <li className="py-1">
              {' '}
              <a
                className="underline underline-offset-2 decoration-2 text-gray-500"
                href="https://github.com/reservoirpy/reservoirpy"
                target={'_blank'}
                rel="noreferrer"
              >
                ReservoirPy for alignment
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
