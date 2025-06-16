'use client';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Benefits = () => {
  return (
    <section className="flex gap-10 px-[100px] py-20 max-md:flex-col max-md:px-4 max-md:py-10">
      <FadeIn
        variant="bottom"
        className="flex w-[25%] flex-col gap-6 max-md:w-full"
      >
        <section className="flex flex-col gap-7 max-md:gap-2">
          <Title
            as="h3"
            size="4xl"
            weight={400}
            className="leading-[71.5%]"
            uppercase
          >
            Save Your Time
          </Title>
          <Text>
            If your schedule is packed, there’s no need to spend hours vetting
            brokers. That’s what Smart2Way is for – we handle the legwork so you
            can focus on trading.
          </Text>
        </section>
        <svg
          className="flex h-[303px] justify-start max-md:w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 303 304"
          fill="none"
        >
          <rect
            y="0.240234"
            width="303"
            height="303"
            rx="80"
            fill="url(#paint0_radial_7_722)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_7_722"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(151.5 151.74) rotate(90) scale(151.5)"
            >
              <stop offset="0.600962" stopColor="#A7531C" stopOpacity="0" />
              <stop offset="1" stopColor="#A7531C" />
            </radialGradient>
          </defs>
        </svg>
      </FadeIn>
      <FadeIn className="flex w-[30%] flex-col gap-6 max-md:w-full max-md:flex-col-reverse max-md:justify-center">
        <svg
          className="flex h-[354px] justify-center"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 354 355"
          fill="none"
        >
          <rect
            y="0.240234"
            width="354"
            height="354"
            rx="100"
            fill="url(#paint0_radial_7_727)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_7_727"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(177 177.24) rotate(90) scale(177)"
            >
              <stop offset="0.600962" stopColor="#A7531C" stopOpacity="0" />
              <stop offset="1" stopColor="#A7531C" />
            </radialGradient>
          </defs>
        </svg>
        <section className="flex flex-col gap-7 max-md:gap-2">
          <Title
            as="h3"
            size="4xl"
            weight={400}
            className="leading-[71.5%]"
            uppercase
          >
            Save Your Money
          </Title>
          <Text>
            Working with our team can lower your costs. We know how to identify
            fair pricing and avoid overpaying – giving you room to grow your
            capital.
          </Text>
        </section>
      </FadeIn>
      <FadeIn className="flex w-[35%] flex-col gap-6 max-md:w-full">
        <section className="flex flex-col gap-7">
          <Title
            as="h3"
            size="4xl"
            weight={400}
            className="leading-[71.5%]"
            uppercase
          >
            Access Expert Insight
          </Title>
          <Text>
            Smart2Way operates with specialists who live and breathe the trading
            industry. You’ll gain access to their knowledge and receive guidance
            on which broker types suit you best.
          </Text>
        </section>
        <svg
          className="flex h-[457px] justify-center"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 457 458"
          fill="none"
        >
          <rect
            y="0.240234"
            width="457"
            height="457"
            rx="120"
            fill="url(#paint0_radial_7_729)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_7_729"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(228.5 228.74) rotate(90) scale(228.5)"
            >
              <stop offset="0.600962" stopColor="#A7531C" stopOpacity="0" />
              <stop offset="1" stopColor="#A7531C" />
            </radialGradient>
          </defs>
        </svg>
      </FadeIn>
    </section>
  );
};
