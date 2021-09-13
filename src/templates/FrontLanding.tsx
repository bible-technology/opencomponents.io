//import Link from 'next/link';

import { Section } from '../layout/Section';
import { Logo } from './Logo';
import { Features } from './Features';

const FrontLanding = () => (
  <div className="splash-photo">
    <Section yPadding="py-1">
      <Logo xl />
      <div className=""><em>full site coming soon&hellip;</em></div>
    </Section>
    
    <Features/>

    <style jsx>
        {`
          .splash-photo {
            background: url(/Puzzle.jpg) no-repeat center center fixed; 
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
            height: 100vh;
          }
        `}
      </style>
  </div>
);

export { FrontLanding };
