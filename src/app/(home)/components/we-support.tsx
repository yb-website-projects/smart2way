'use client';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const WeSupport = () => {
  return (
    <FadeIn
      variant="bottom"
      className="relative flex flex-col items-center justify-center gap-4 overflow-hidden py-[70px] text-center max-md:px-4"
    >
      <Title size="5xl">We Support Your Success</Title>
      <Text className="mx-auto w-[780px] text-center max-lg:w-full">
        We focus on connecting you with a broker offering strong functionality,
        low costs, and professional service. With our experience, we’ll help you
        avoid scams and risks – making sure you’re in good hands.
        <br /> Because when you succeed, so does our reputation.
      </Text>
    </FadeIn>
  );
};
