import Head from 'next/head'

import HeaderStaticPage from '../../components/HeaderStaticPage'

export default function Hackathon2024() {
  const HeaderConfig = {
    title: 'Hackathon 2024',
    name: '',
    date: 'March 4 - 8, 2024',
  }
  return (
    <div className="container mx-auto md:px-1 lg:px-2 2xl:px-4">
      <Head>
        <title>Hackathon 2024 - Events - Open Components Ecosystem</title>
        <meta
          name="description"
          content="More than 50 individuals from 10 different organizations, including BCS, TextTree, MVH Solutions, Idiomas Puentes, Biblica, SIL, iLab, BiblioNexus, Prediction Guard, and unfoldingWord, joined the two-week Open Components community event earlier this month."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderStaticPage config={HeaderConfig} backButton={false} />
      <div className="mx-auto md:px-10 lg:px-20 2xl:px-40 text-lg leading-8">
        <br />
        <p>
          More than 50 individuals from 10 different organizations, including BCS,
          TextTree, MVH Solutions, Idiomas Puentes, Biblica, SIL, iLab, BiblioNexus,
          Prediction Guard, and unfoldingWord, joined the two-week Open Components
          community event earlier this month. The event kicked off with a Learnathon,
          which was held online from February 26 to March 1, featuring seven informative
          sessions that covered a variety of topics such as artificial intelligence
          language models, VS Code Extensions, and demos on key initiatives like Aquifer
          and Platform.Bible. In the following week, from March 4 to 8, developers worked
          together in teams, with some meeting in person at various locations including
          Orlando, New Delhi, Bogota, and Switzerland, while others participated remotely.
          It was exciting to see innovative experiments that resulted in the presentation
          of 11 projects, which are as follows:
        </p>
        <ul className="mt-5 ml-5">
          <li>Scripture navigation by pictures for audio bible/ video files</li>
          <li>Alignment via juxtalinear and AI translation of juxtalinear</li>
          <li>CodiumAI - AI powered testing</li>
          <li>Community Check app</li>
          <li>Audio RCL - transcriber & editor</li>
          <li>Audio OBS Navigator</li>
          <li>AI based Biblical video generator</li>
          <li>Word recognition in low-resource languages</li>
          <li>Audio recorder VS code extension</li>
          <li>AI Content checker for OBS</li>
          <li>Offline OBS App</li>
        </ul>
        <h3 className="font-bold mt-10 text-3xl">Learnathon Zoom Recordings</h3>
        <ul className="ml-5">
          <li>
            <b>Day 1:</b>{' '}
            <a
              href="https://drive.google.com/file/d/1gplkBu2XRwSOaLV7xfaJkT18af3A3mnI/view"
              target={'_blank'}
              rel="noreferrer"
              className="underline-custom"
            >
              Prediction Guard
            </a>
          </li>
          <li>
            <b>Day 2:</b>
            <ul className="ml-5">
              <li>
                <a
                  href="https://drive.google.com/file/d/1uNQl0km6B6wpHQRQ9DdFXUdmOd0LRkY3/view"
                  target={'_blank'}
                  rel="noreferrer"
                  className="underline-custom"
                >
                  Interview with Andy & Klappy
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1C33G7NXtMNwe2GhGMJrsJHXyJ19RzIqr/view"
                  target={'_blank'}
                  rel="noreferrer"
                  className="underline-custom"
                >
                  Multi-modal example
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/10nwsBsxyvAM0T6fDGluldyj4VTPyFFMu/view"
                  target={'_blank'}
                  rel="noreferrer"
                  className="underline-custom"
                >
                  Meeting - Multi-Modal in Bible Translation
                </a>
              </li>
            </ul>
          </li>
          <li>
            <b>Day 3:</b>{' '}
            <a
              href="https://unfoldingword-org.zoom.us/rec/share/VesykIrH-LhJANXrlaQyM_UZ3LU4hBXzz0Cp4QTyzTaJ18XGAaDEYfLjCrRPc7E6.2EviGVcNB7vRcgeE?startTime=1676469949000"
              target={'_blank'}
              rel="noreferrer"
              className="underline-custom"
            >
              Aquifer &{' '}
            </a>
            <a
              href="https://platform.paratext.org/"
              target={'_blank'}
              rel="noreferrer"
              className="underline text-fuchsia-800"
            >
              Platform.Bible{' '}
            </a>
            <a
              href="https://unfoldingword-org.zoom.us/rec/share/VesykIrH-LhJANXrlaQyM_UZ3LU4hBXzz0Cp4QTyzTaJ18XGAaDEYfLjCrRPc7E6.2EviGVcNB7vRcgeE?startTime=1676469949000"
              target={'_blank'}
              rel="noreferrer"
              className="underline-custom"
            >
              demo
            </a>
          </li>
          <li>
            <b>Day 4:</b>{' '}
            <a
              href="https://drive.google.com/file/d/11BbN0dGq7qmZuegAnmlC9E7OgQCABc3A/view"
              target={'_blank'}
              rel="noreferrer"
              className="underline-custom"
            >
              AI-assisted Programming
            </a>
          </li>
          <li>
            <b>Day 5:</b>{' '}
            <a
              href="https://drive.google.com/file/d/1kubv2r6grwKG3dVu9MAnsecrRvXJfkeN/view"
              target={'_blank'}
              rel="noreferrer"
              className="underline-custom"
            >
              Wrap RCL in VSC extension
            </a>
          </li>
        </ul>
        <h3 className="font-bold mt-10 text-3xl">Learnathon Presentations</h3>
        <ul className="ml-5">
          <li>
            <a
              href="https://docs.google.com/presentation/d/1qg3tD5GVbu1FmrI51Xhd3Cp6jdOH0P_KSEYKpf74R6w/edit#slide=id.p"
              target={'_blank'}
              rel="noreferrer"
              className="underline-custom"
            >
              Building LLM Apps - Prediction Guard
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/presentation/d/143Kw9eLBF-mcKKGrK6xPZyA19R4VFgDJxFbQYYxB0ug/edit#slide=id.p"
              target={'_blank'}
              rel="noreferrer"
              className="underline-custom"
            >
              Platform.Bible Extensions ppt
            </a>
          </li>
          <li>
            <a
              href="https://platform.paratext.org/"
              target={'_blank'}
              rel="noreferrer"
              className="underline-custom"
            >
              Platform.Bible{' '}
            </a>
            <a
              href="https://docs.google.com/document/d/187e8eoav-5SNzn5opIJ1b31eIP23kiX7rpoCDJcNME4/edit?tab=t.0#heading=h.192yzf8m1f52"
              target={'_blank'}
              rel="noreferrer"
              className="text-fuchsia-800 underline"
            >
              Extn Info
            </a>
          </li>
          <li>
            <a
              href="https://platform.paratext.org/"
              target={'_blank'}
              rel="noreferrer"
              className="underline-custom"
            >
              Platform.Bible{' '}
            </a>
            <a
              href="https://docs.google.com/document/d/1X1-IKGbg5Wa06zby0KS7ViTvnosKRkiNKpaLC2xp3pM/edit?tab=t.0#heading=h.wo97c7v4n3gd"
              target={'_blank'}
              rel="noreferrer"
              className="text-fuchsia-800 underline"
            >
              Code Walkthrough
            </a>
          </li>
          <li></li>
        </ul>
        <div className="mt-12">
          <h3 className="font-bold mt-10 text-3xl">Hackathon</h3>
          <a
            className="underline-custom font-bold ml-5"
            href="https://drive.google.com/file/d/1Y1HI0J0kq-3iuUWuEUes-cSLp7c7uD5Z/view"
            target={'_blank'}
            rel="noreferrer"
          >
            Hackathon Launch
          </a>
          <br />
          <a
            className="underline-custom font-bold ml-5"
            href="https://drive.google.com/file/d/1E8g6GYnN0NwmTJeCS8Ifcy5NuiptEohb/view"
            target={'_blank'}
            rel="noreferrer"
          >
            Hackathon Presentations
          </a>
          <ul className="mt-3 ml-5">
            <li className="py-1">
              <b>2:47 -</b> Scripture navigation by pictures for audio bible/ video files
            </li>
            <li className="py-1">
              <b>8:20 -</b> Juxtalinear for alignment by AI
            </li>
            <li className="py-1">
              <b>31:58 -</b> CodiumAI - AI powered testing
            </li>
            <li className="py-1">
              <b>38:05 -</b> Community Check app
            </li>
            <li className="py-1">
              <b>45:13 -</b> Audio RCL - transcriber & editor
            </li>
            <li className="py-1">
              <b>51:56 -</b> Audio OBS Navigator
            </li>
            <li className="py-1">
              <b>1:07:00 -</b> AI based Biblical video generator
            </li>
            <li className="py-1">
              <b>1:20:00 -</b> Word recognition in low-resource languages
            </li>
            <li className="py-1">
              <b>1:35:00 -</b> Audio recorder VS code extension
            </li>
            <li className="py-1">
              <b>1:46:00 -</b> AI Content checker for OBS
            </li>
            <li className="py-1">
              <b>1:59:00 -</b> Offline OBS App
            </li>
          </ul>
        </div>
        <br />
        <div className="mb-12">
          <h3 className="font-bold mt-10 text-3xl">Additional Reference links</h3>
          <ul className="list-disc ml-5">
            <li>
              <a
                href="https://opencomponents.io/"
                target={'_blank'}
                rel="noreferrer"
                className="underline-custom"
              >
                https://opencomponents.io/
              </a>
            </li>
            <li>
              <a
                href="https://www.predictionguard.com/"
                target={'_blank'}
                rel="noreferrer"
                className="underline-custom"
              >
                https://www.predictionguard.com/
              </a>
            </li>
            <li>
              <a
                href="https://well.bible/"
                target={'_blank'}
                rel="noreferrer"
                className="underline-custom"
              >
                https://well.bible/
              </a>
            </li>
            <li>
              <a
                href="https://platform.bible/"
                target={'_blank'}
                rel="noreferrer"
                className="underline-custom"
              >
                https://platform.bible/
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
