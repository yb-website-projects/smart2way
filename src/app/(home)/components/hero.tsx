'use client';

import Image from 'next/image';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { BlueFilter, PinkFilter } from './filters';
import { GreySphere, MainSphere, OrangeSphere } from './spheres';
import { RoseStar, SimpleStar } from './stars';

export const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <PinkFilter />
      <BlueFilter />
      <RoseStar />
      <SimpleStar />
      <FadeIn
        variant="bottom"
        className="absolute top-[64%] left-[16%] z-20 -translate-x-1/2 -translate-y-1/2"
      >
        <Image
          src="/images/bitcoin.png"
          alt="bitcoin"
          width={97}
          height={107.5}
          unoptimized
        />
      </FadeIn>
      <MainSphere />
      <OrangeSphere />
      <GreySphere />
      <HeroTitle />
    </section>
  );
};

const HeroTitle = () => (
  <FadeIn
    variant="bottom"
    className="absolute top-[40%] left-1/2 z-20 flex w-[70%] -translate-x-1/2 -translate-y-1/2 flex-col gap-4 text-center max-md:w-[90%]"
  >
    <Text color="primary" uppercase>
      Your Personalized Route to Global Trading Access
    </Text>
    <Title>Step into Wiser Trading with Smart2Way</Title>
    <Text color="secondary">
      We assist you in finding a broker that aligns with your unique preferences
      and strategies.
    </Text>
  </FadeIn>
);
