'use client';

import Image from 'next/image';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const WeComitted = () => {
  return (
    <FadeIn
      variant="bottom"
      className="flex flex-col gap-8 overflow-hidden px-[100px] py-10 max-md:px-4 max-md:py-10"
    >
      <Title as="h2" size="6xl">
        We’re Committed to Guiding You
      </Title>
      <section className="flex w-full gap-8 max-md:flex-col">
        <section className="relative flex h-[600px] w-1/2 gap-8 overflow-hidden max-md:h-[400px] max-md:w-full">
          <FadeIn
            variant="bottom"
            className="rounded-4xl border border-white/50 p-10"
          >
            <Title
              as="h2"
              size="4xl"
              weight={400}
              className="relative z-20 bg-black"
              uppercase
            >
              Trusted Results
            </Title>
            <Text color="grey" className="relative z-20 bg-black">
              <span className="text-white">A dedicated search partner</span>
              <br /> Our broker selection service is built to match traders with
              ideal brokerage partners. Smart2Way compiles recommendations based
              on industry expertise and firsthand experience. You’ll receive
              thorough details outlining each option’s advantages and potential
              drawbacks.
            </Text>
          </FadeIn>
          <svg
            className="absolute bottom-[10px] left-[-10%] z-0 max-md:h-[500px] max-md:w-[1000px]"
            xmlns="http://www.w3.org/2000/svg"
            width="1930"
            height="959"
            viewBox="0 0 1930 959"
            fill="none"
          >
            <path
              d="M1550.41 957.704H210.52C94.8055 957.704 0.999848 629.562 0.999848 224.778V155.411"
              stroke="url(#paint0_linear_71_152)"
            />
            <path
              d="M1609.02 918.865H269.132C153.418 918.865 59.6126 590.723 59.6126 185.939V116.572"
              stroke="url(#paint1_linear_71_152)"
            />
            <path
              d="M1711.04 879.997H371.15C255.435 879.997 161.63 551.855 161.63 147.071V77.7051"
              stroke="url(#paint2_linear_71_152)"
            />
            <path
              d="M1856.36 841.161H516.469C400.755 841.161 306.949 513.019 306.949 108.235V38.8672"
              stroke="url(#paint3_linear_71_152)"
            />
            <path
              d="M1929.43 802.292H589.542C473.827 802.292 380.022 474.15 380.022 69.3652V0"
              stroke="url(#paint4_linear_71_152)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_71_152"
                x1="1611.74"
                y1="1201.14"
                x2="674.327"
                y2="-632.046"
                gradientUnits="userSpaceOnUse"
              >
                <stop />
                <stop offset="0.32" stopColor="#666666" stopOpacity="0.6" />
                <stop offset="0.35" stopColor="white" />
                <stop offset="0.52" stopColor="#939393" stopOpacity="0.2" />
                <stop offset="0.62" stopColor="#0D0D0E" />
                <stop offset="0.805" stopColor="#5E5E5E" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_71_152"
                x1="1670.35"
                y1="1162.29"
                x2="732.931"
                y2="-670.876"
                gradientUnits="userSpaceOnUse"
              >
                <stop />
                <stop offset="0.32" stopColor="#666666" stopOpacity="0.6" />
                <stop offset="0.35" stopColor="white" />
                <stop offset="0.52" stopColor="#939393" stopOpacity="0.2" />
                <stop offset="0.62" stopColor="#0D0D0E" />
                <stop offset="0.805" stopColor="#5E5E5E" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_71_152"
                x1="1772.37"
                y1="1123.43"
                x2="834.957"
                y2="-709.752"
                gradientUnits="userSpaceOnUse"
              >
                <stop />
                <stop offset="0.32" stopColor="#666666" stopOpacity="0.6" />
                <stop offset="0.35" stopColor="white" />
                <stop offset="0.52" stopColor="#939393" stopOpacity="0.2" />
                <stop offset="0.62" stopColor="#0D0D0E" />
                <stop offset="0.805" stopColor="#5E5E5E" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_71_152"
                x1="1917.69"
                y1="1084.59"
                x2="980.275"
                y2="-748.59"
                gradientUnits="userSpaceOnUse"
              >
                <stop />
                <stop offset="0.32" stopColor="#666666" stopOpacity="0.6" />
                <stop offset="0.35" stopColor="white" />
                <stop offset="0.52" stopColor="#939393" stopOpacity="0.2" />
                <stop offset="0.62" stopColor="#0D0D0E" />
                <stop offset="0.805" stopColor="#5E5E5E" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_71_152"
                x1="1990.76"
                y1="1045.72"
                x2="1053.34"
                y2="-787.447"
                gradientUnits="userSpaceOnUse"
              >
                <stop />
                <stop offset="0.32" stopColor="#666666" stopOpacity="0.6" />
                <stop offset="0.35" stopColor="white" />
                <stop offset="0.52" stopColor="#939393" stopOpacity="0.2" />
                <stop offset="0.62" stopColor="#0D0D0E" />
                <stop offset="0.805" stopColor="#5E5E5E" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </section>
        <section className="relative flex h-[600px] w-1/2 gap-8 rounded-4xl border border-white/50 bg-[linear-gradient(0deg,rgba(0,0,0,0.50)_0%,rgba(0,0,0,0.50)_100%),url('/images/sunset-bg.jpg')] bg-[size:351.812%_236.134%] bg-[position:-1483.903px_-801.239px] bg-no-repeat max-md:h-[400px] max-md:w-full">
          <Image
            className="absolute -top-[20%] -right-[24%] rotate-[-47.35deg]"
            src="/images/lite-coin.png"
            alt="lite-coin"
            width={549}
            height={549}
          />
          <FadeIn
            variant="bottom"
            className="mt-auto flex w-full flex-col gap-2.5 p-10"
          >
            <Title
              as="h2"
              size="4xl"
              weight={400}
              className="leading-[71.5%]"
              uppercase
            >
              Best-In-Class Option
            </Title>
            <Text color="grey" className="relative z-20">
              <span className="text-white">
                A more efficient way to discover brokers
              </span>
              <br /> Choosing a reliable broker involves evaluating critical
              aspects such as pricing, tools, service quality, etc. At Smart2Way
              , we assess these variables for you. We aim to connect you with
              the broker that delivers the most value to your trading journey.
            </Text>
          </FadeIn>
        </section>
      </section>
    </FadeIn>
  );
};
