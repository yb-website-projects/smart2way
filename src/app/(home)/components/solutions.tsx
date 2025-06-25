'use client';

import type { JSX } from 'react';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { FolderIcon } from '@/shared/ui/icons/folder';
import { LineUpIcon } from '@/shared/ui/icons/line-up';
import { ReloadIcon } from '@/shared/ui/icons/reload';
import { StarIcon } from '@/shared/ui/icons/star';
import { TwoCircles } from '@/shared/ui/icons/two-circles';
import { WebIcon } from '@/shared/ui/icons/web';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const items = [
  {
    icon: FolderIcon,
    title: 'Access to diverse global instruments',
    text: 'Trade across a wide selection of markets from one integrated platform, including stocks, currencies, commodities, and more.',
  },
  {
    icon: StarIcon,
    title: 'Leverage-enabled trading',
    text: 'Maximize your exposure with controlled leverage options tailored to your trading goals\nand risk tolerance.',
  },
  {
    icon: WebIcon,
    title: 'Responsive support',
    text: 'Get timely assistance whenever needed — our support team is ready to help with any questions or technical issues.',
  },
  {
    icon: LineUpIcon,
    title: 'Tight spreads',
    text: 'Benefit from competitive pricing and reduced trading costs with narrow spreads on major instruments.',
  },
  {
    icon: ReloadIcon,
    title: 'Quick execution',
    text: 'Enjoy lightning-fast trade execution to minimize slippage and give you real-time market access.',
  },
  {
    icon: TwoCircles,
    title: 'Advanced risk management tools',
    text: 'Secure your trades with intelligent features that help you manage risk in any market condition.',
  },
];

export const Solutions = () => {
  return (
    <section className="flex flex-col gap-10 px-[100px] py-20 max-md:px-4 max-md:py-10">
      <FadeIn variant="bottom" className="flex flex-col gap-2">
        <Title
          as="h2"
          size="6xl"
          weight={400}
          className="leading-[110%] max-md:leading-[35.2px]"
        >
          Your Needs
          <br /> <span className="font-bold">Smart2Way’s Solutions</span>
        </Title>
        <Text color="black60">
          We help you explore brokers with the following:
        </Text>
      </FadeIn>
      <FadeIn
        variant="bottom"
        className="grid grid-cols-3 gap-5 max-md:grid-cols-1"
      >
        {items.map(item => (
          <Card key={item.title} {...item} />
        ))}
      </FadeIn>
    </section>
  );
};

const Card = ({
  icon: Icon,
  title,
  text,
}: {
  icon: () => JSX.Element;
  title: string;
  text: string;
}) => (
  <article className="flex h-[265px] flex-col rounded-4xl bg-gradient-to-tr from-[#1C1D22] to-[#0D0E0F] p-6 transition duration-300 ease-in-out hover:bg-[url('/images/hover-bg.png')] hover:bg-cover hover:bg-center hover:bg-no-repeat">
    <Icon />
    <section className="mt-auto">
      <Text>{title}</Text>
      <Text color="grey">{text}</Text>
    </section>
  </article>
);
