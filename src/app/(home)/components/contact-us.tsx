'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';

import { Logo } from '@/shared/ui/components/logo';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const ContactForm = dynamic(
  () => import('@/features/contact-form/ui/form').then(mod => mod.ContactForm),
  {
    ssr: false,
  },
);

export const ContactUs = () => {
  return (
    <section className="relative flex h-[800px] gap-[60px] overflow-hidden px-[100px] pt-[120px] pb-[80px] max-lg:h-[1000px] max-lg:flex-col max-md:px-4 max-md:py-[80px]">
      <section className="flex flex-col gap-4">
        <Title as="h2" size="6xl">
          Have questions, or are you ready to take the next step?
        </Title>
        <Text>
          Fill out the form, and a member of our team will reach out shortly.
          Whether you&apos;re looking for guidance, need more details, or want
          help choosing the right broker, we&apos;re here to support you every
          step of the way.
        </Text>
      </section>
      <section className="relative z-20 flex flex-col gap-4">
        <Title as="h4" size="2xl" weight={400}>
          Let’s Get in Touch
        </Title>
        <ContactForm />
      </section>
      <div className="absolute bottom-[5%] left-1/2 z-10 -translate-x-1/2 max-md:bottom-[2%]">
        <Logo />
      </div>
      <Image
        className="absolute inset-0 bottom-0 mt-auto h-[200px] w-full"
        src="/images/contact-sphere.svg"
        alt="contact-sphere"
        width={1000}
        height={400}
      />
      <div className="absolute bottom-[-50%] left-0 h-[500px] w-[500px] rotate-[73.263deg] rounded-[1319.728px] bg-gradient-to-b from-transparent to-[#FF29C3] blur-[175px]" />
    </section>
  );
};
