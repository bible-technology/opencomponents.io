import Link from 'next/link';

import { Button } from '../button/Button';
import { FeatureElement } from '../feature/FeatureElement';
import { Section } from '../layout/Section';

const Features = () => (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-x-8 gap-y-16 py-3">
        <FeatureElement
            title="What are Open Components?"
          >
            <p>
              Open Components are reusable building blocks for Bible technology and Bible translation software.
              These components are <em>extensible</em>, <em>portable</em>, and <em>open source</em>:
            </p>
            <p>
              <strong>Extensible</strong> software is designed to enable expansion of existing features or base functionality 
              by “plugging-in” code by other developers or applications. 
              Developers are invited to bring their code and “play in the sandbox” provided by the base technology.
            </p>
            <p>
              <strong>Portable</strong> architectures go in the other direction: providing functionality that can be
              incorporated into other technologies, commonly in the form of libraries or simple apps. 
              Developers are invited to “create their own sandbox” by incorporating the portable components into their own
              apps.
            </p>
            <p>
              <strong>Open source</strong> technology consists of source code that is made available under an open license, such
              that developers can repurpose, expand, improve, redistribute, and otherwise reuse the technology
              without restriction.
            </p>
          </FeatureElement>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
        <FeatureElement
          title="Whitepaper"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          }
        >
          <p>
            Read our proposal to increase innovation by growing a global network of Bible technology developers.
          </p>
          <p>&nbsp;</p>

          <p>
            <Link href="https://opencomponents.io/The%20Open%20Components%20Ecosystem%20-%20draft%204.pdf">
              <a target="_blank">
                <Button full>Read the Paper</Button>
              </a>
            </Link>
          </p>
        </FeatureElement>
        <FeatureElement
          title="ETEN Survey"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          }
        >
          <p>
            Share your experience with Bible software and voice your needs through the ETEN Innovation Lab survey.
          </p>
          <p>&nbsp;</p>

          <p>
            <Link href="https://www.surveymonkey.com/r/OpenComponents">
              <a target="_blank">
                <Button full>Take the Survey</Button>
              </a>
            </Link>
          </p>
        </FeatureElement>


        <FeatureElement
          title="Community Discord"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          }
        >
          <p>
            Join an active and growing community of developers of Bible software and open components.
          </p>
          <p>&nbsp;</p>

          <p>
            <Link href="https://discord.gg/auJb4H9ezx">
              <a target="_blank">
                <Button full>Join the Community</Button>
              </a>
            </Link>
          </p>
        </FeatureElement>
      </div>
    </Section>
);

export { Features };
