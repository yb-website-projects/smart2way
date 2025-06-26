'use client';

import {
  Close,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title as DTitle,
  Trigger,
} from '@radix-ui/react-dialog';

import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const ThankYouDialog = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  return (
    <Root open={isOpen} onOpenChange={setIsOpen}>
      <Trigger />
      <Portal>
        <Overlay className="animate-overlayShow fixed inset-0 z-[998] bg-black/10 backdrop-blur-sm" />
        <Content
          className="animate-contentShow fixed top-1/2 left-1/2 z-[999] h-[500px] w-[1000px] -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-2xl bg-black focus:outline-none max-lg:h-[589px] max-lg:w-[96%]"
          onCloseAutoFocus={e => e.preventDefault()}
        >
          <DTitle />
          <Description asChild>
            <section className="flex h-full flex-col items-center justify-center gap-[60px] bg-[url('/images/dialog-bg.svg')] bg-cover bg-[position:top_center] bg-no-repeat text-center max-md:bg-[url('/images/dialog-bg-mob.png')]">
              <section className="max-auto flex w-[800px] flex-col gap-2.5 max-lg:w-full max-lg:px-4">
                <Title as="h3" size="4xl" weight={400} uppercase>
                  Thank You for Getting in Touch!
                </Title>
                <Text color="grey">
                  We’ve received your inquiry, and our team is already working
                  on it. A representative will contact you within the next 10
                  minutes to assist with your broker search and provide expert
                  guidance tailored to your needs.
                  <br />
                  <br /> We appreciate your patience and look forward to helping
                  you take the next step in your trading journey. Rest assured,
                  you’re in good hands!
                </Text>
              </section>
              <Close asChild>
                <Button uppercase>Close</Button>
              </Close>
            </section>
          </Description>
        </Content>
      </Portal>
    </Root>
  );
};
