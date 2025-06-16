'use client';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const WeSupport = () => {
  return (
    <FadeIn
      variant="bottom"
      className="relative flex flex-col items-center justify-center gap-4 bg-[url('/images/cone-bg-mobile.svg')] bg-cover bg-[position:top_center] bg-no-repeat pt-[70px] pb-[100px] text-center max-md:px-4 lg:bg-[url('/images/cone-bg.svg')]"
    >
      <div className="absolute top-0 left-0 lg:left-[50%] translate-x-[0] lg:translate-x-[-50%] z-0 h-[160px] w-[100%] lg:w-[1000px] bg-[#691EE2] blur-[300px] max-md:left-0"></div>
      <Title className="relative z-10 text-4xl lg:text-5xl leading-[150%]">
        We Support Your Success
      </Title>
      <Text className="relative z-10 mx-auto w-[780px] text-center text-sm max-lg:w-full lg:text-base">
        We focus on connecting you with a broker offering strong functionality,
        low costs, and professional service. With our experience, we’ll help you
        avoid scams and risks – making sure you’re in good hands.
        <br /> Because when you succeed, so does our reputation.
      </Text>
    </FadeIn>
  );
};
