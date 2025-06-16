'use client';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const WeComitted = () => {
  return (
    <section className="flex flex-col gap-8 p-10">
      <FadeIn variant="bottom">We’re Committed to Guiding You</FadeIn>
      <section className="flex gap-8">
        <div className="rounded-4xl border border-white bg-black/50 p-10">
          <Title as="h2" size="4xl" weight={400}>
            Trusted Results
          </Title>
          <Text color="grey">
            <span className="text-white">A dedicated search partner</span>
            <br /> Our broker selection service is built to match traders with
            ideal brokerage partners. Smart2Way compiles recommendations based
            on industry expertise and firsthand experience. You’ll receive
            thorough details outlining each option’s advantages and potential
            drawbacks.
          </Text>
        </div>
      </section>
    </section>
  );
};
