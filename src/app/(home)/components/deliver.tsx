'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';

import { cn } from '@/shared/lib/utils/styles';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Deliver = () => {
  return (
    <section className="flex flex-col gap-10 px-[100px] py-20 max-md:px-4 max-md:py-10">
      <Title size="6xl" weight={400}>
        What Smart2Way Delivers
      </Title>
      <section className="flex gap-4 max-md:flex-col">
        <section className="flex flex-col gap-4">
          <Layout className="h-[350px] max-md:h-[290px]">
            <RoundedDot>01</RoundedDot>
            <section className="mt-auto">
              <Text size="xl" className="mt-auto" uppercase>
                Worldwide Reach
              </Text>
              <Text>
                Gain access to a wide range of global markets and explore
                investment opportunities across continents. Analyze data from
                major exchanges, monitor undervalued assets, and manage trades
                through a centralized and user-friendly platform built for
                global expansion.
              </Text>
            </section>
          </Layout>
          <Layout className="h-[280px] max-md:hidden max-md:h-[290px]">
            <RoundedDot>03</RoundedDot>
            <section className="mt-auto">
              <Text size="xl" className="mt-auto" uppercase>
                Multi-Market Trading
              </Text>
              <Text>
                Trade seamlessly across multiple asset classes, including
                stocks, futures, currencies, and ETFs. Whether you’re focused on
                local markets or international options, our system allows you to
                diversify and explore new trading strategies worldwide.
              </Text>
            </section>
          </Layout>
        </section>
        <section className="flex flex-col gap-4">
          <Layout className="h-[264px] max-md:h-[290px]">
            <RoundedDot>02</RoundedDot>
            <section className="mt-auto">
              <Text size="xl" className="mt-auto" uppercase>
                Multi-Currency Accounts
              </Text>
              <Text>
                Fund and operate your trading account in over 20 global
                currencies. Enjoy flexible currency conversion, efficient fund
                management, and the convenience of trading multi-asset
                portfolios without the hassle of constant currency switching.
              </Text>
            </section>
          </Layout>
          <Layout className="hidden h-[290px] max-md:block">
            <RoundedDot>03</RoundedDot>
            <section className="mt-auto">
              <Text size="xl" className="mt-auto" uppercase>
                Multi-Market Trading
              </Text>
              <Text>
                Trade seamlessly across multiple asset classes, including
                stocks, futures, currencies, and ETFs. Whether you’re focused on
                local markets or international options, our system allows you to
                diversify and explore new trading strategies worldwide.
              </Text>
            </section>
          </Layout>
          <section className="flex gap-4 max-md:flex-col">
            <Layout className="h-[364px] w-1/2 max-md:h-[290px] max-md:w-full">
              <RoundedDot>04</RoundedDot>
              <section className="mt-auto">
                <Text size="xl" className="mt-auto" uppercase>
                  Built-In Growth Tools
                </Text>
                <Text>
                  Access a suite of intelligent trading tools designed to
                  elevate your strategy. Stay informed with real-time market
                  research, use advanced technology for precise trades, leverage
                  multiple order types, and monitor your performance through
                  comprehensive reporting dashboards.
                </Text>
              </section>
            </Layout>
            <Layout className="relative h-[364px] w-1/2 max-md:h-[290px] max-md:w-full">
              <Image
                className="absolute right-0 bottom-0 rounded-4xl"
                src="/images/eth.svg"
                alt="eth"
                width={480}
                height={480}
                unoptimized
              />
            </Layout>
          </section>
        </section>
      </section>
    </section>
  );
};

const Layout = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      'border-[rgb(160 156 153 / 0.7)] flex flex-col rounded-4xl border-[0.5px] p-6 transition-all duration-300 hover:bg-[radial-gradient(293.5%_173.84%_at_1.56%_5.47%,#B17BF9_0%,#3B67B1_100%)]',
      className,
    )}
  >
    {children}
  </div>
);

const RoundedDot = ({ children }: { children: ReactNode }) => (
  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-base font-normal text-black">
    {children}
  </span>
);
