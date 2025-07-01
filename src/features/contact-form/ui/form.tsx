'use client';

import { useState } from 'react';

import { useForm } from '@/shared/lib/forms';
import { notifyError } from '@/shared/lib/toast';
import { FormRow } from '@/shared/ui/components/form-row';
import { Button } from '@/shared/ui/kit/button';
import { TextArea } from '@/shared/ui/kit/text-area';
import { TextField } from '@/shared/ui/kit/text-field';

import { sendContactForm } from '../api/send-contact-form';
import { contactSchema } from '../model/schema';
import { ThankYouDialog } from './dialog';

export const ContactForm = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  setTimeout(() => setIsOpen(true), 2000);

  const { Field, Subscribe, handleSubmit, reset } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    },
    validators: {
      onChange: contactSchema,
    },
    onSubmit: async ({ value }) => {
      const { status } = await sendContactForm(value);

      if (status === 'OK') {
        setIsOpen(true);
        setIsOpen(true);
        reset();
      } else {
        notifyError('Failed to send message. Try again later.');
      }
    },
  });

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        handleSubmit().catch(console.error);
      }}
    >
      <FormRow>
        <Field name="firstName">
          {({ name, state, handleBlur, handleChange }) => (
            <TextField
              name={name}
              placeholder="Enter Your Name"
              value={String(state.value)}
              onBlur={handleBlur}
              onChange={e => handleChange(e.target.value)}
              intent={state.meta.errors.length ? 'danger' : 'primary'}
              required
            />
          )}
        </Field>
        <Field name="lastName">
          {({ name, state, handleBlur, handleChange }) => (
            <TextField
              name={name}
              placeholder="Last Name"
              value={String(state.value)}
              onBlur={handleBlur}
              onChange={e => handleChange(e.target.value)}
              intent={state.meta.errors.length ? 'danger' : 'primary'}
              required
            />
          )}
        </Field>
      </FormRow>
      <FormRow>
        <Field name="email">
          {({ name, state, handleBlur, handleChange }) => (
            <TextField
              name={name}
              placeholder="Email"
              value={String(state.value)}
              onBlur={handleBlur}
              onChange={e => handleChange(e.target.value)}
              intent={state.meta.errors.length ? 'danger' : 'primary'}
              required
            />
          )}
        </Field>
        <Field name="phone">
          {({ name, state, handleBlur, handleChange }) => (
            <TextField
              name={name}
              placeholder="Phone Number"
              value={String(state.value)}
              onBlur={handleBlur}
              onChange={e => handleChange(e.target.value)}
              intent={state.meta.errors.length ? 'danger' : 'primary'}
              required
            />
          )}
        </Field>
      </FormRow>
      <Field name="message">
        {({ name, state, handleBlur, handleChange }) => (
          <TextArea
            name={name}
            placeholder="Message"
            value={String(state.value)}
            onBlur={handleBlur}
            onChange={e => handleChange(e.target.value)}
            intent={state.meta.errors.length ? 'danger' : 'primary'}
          />
        )}
      </Field>
      <Subscribe selector={state => [state.canSubmit, state.isSubmitting]}>
        {([canSubmit, isSubmitting]) => (
          <Button type="submit" disabled={!canSubmit}>
            {isSubmitting ? 'Sending...' : 'Send Request'}
          </Button>
        )}
      </Subscribe>
      <ThankYouDialog isOpen={isOpen} setIsOpen={setIsOpen} />
      <ThankYouDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </form>
  );
};
