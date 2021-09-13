import Link from 'next/link';

import { Button } from '../button/Button';
import { Section } from '../layout/Section';
import { PricingCard } from '../pricing/PricingCard';
import { PricingFeature } from '../pricing/PricingFeature';

const Pricing = () => (
  <Section title="Flexible Plans" subtitle="Pricing">
    <div className="mx-4 lg:mx-32 grid grid-cols-1 md:grid-cols-3 gap-y-12">
      <PricingCard
        name="FREE"
        price="$0"
        periodicity="mo"
        button={
          <Link href="/">
            <a>
              <Button full>Get Started</Button>
            </a>
          </Link>
        }
      >
        <PricingFeature>1 Team Members</PricingFeature>
        <PricingFeature>1 Website</PricingFeature>
        <PricingFeature>1 GB Storage</PricingFeature>
        <PricingFeature>1 TB Transfer</PricingFeature>
        <PricingFeature>Email Support</PricingFeature>
      </PricingCard>
      <PricingCard
        name="PREMIUM"
        price="$19"
        periodicity="mo"
        popular
        button={
          <Link href="/">
            <a>
              <Button full>Get Started</Button>
            </a>
          </Link>
        }
      >
        <PricingFeature>5 Team Members</PricingFeature>
        <PricingFeature>5 Website</PricingFeature>
        <PricingFeature>5 GB Storage</PricingFeature>
        <PricingFeature>5 TB Transfer</PricingFeature>
        <PricingFeature>Email Support</PricingFeature>
      </PricingCard>
      <PricingCard
        name="ENTERPRISE"
        price="$99"
        periodicity="mo"
        button={
          <Link href="/">
            <a>
              <Button full>Get Started</Button>
            </a>
          </Link>
        }
      >
        <PricingFeature>30 Team Members</PricingFeature>
        <PricingFeature>30 Website</PricingFeature>
        <PricingFeature>30 GB Storage</PricingFeature>
        <PricingFeature>30 TB Transfer</PricingFeature>
        <PricingFeature>Email Support</PricingFeature>
      </PricingCard>
    </div>
  </Section>
);

export { Pricing };
