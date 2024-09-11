'use client'
import Button from '@/components/Button'
import Container from '@/components/Container'
import Section from '@/components/Section'
import { Input, Textarea } from '@nextui-org/react'
import { MdArrowOutward } from 'react-icons/md'
import { zodResolver } from '@hookform/resolvers/zod'

import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ContactFormSchema } from '@/lib/formSchema'
import { z } from 'zod'
import axios from 'axios'
import { Alert } from '@mui/material'
import { FiLoader } from 'react-icons/fi'

const customInputStyles = {
  label: '!text-[#ffff] pb-1 text-left',
  input: [''],
  inputWrapper: [
    'px-5 py-6 border-[#515151] mb-7',
    'focus:!ring-primary-100 focus:!border-primary-100',
    'hover:!ring-primary-100 hover:!border-primary-100'
  ],
  helperWrapper: '-top-5'
}

type InputType = z.infer<typeof ContactFormSchema>

const ContactPage = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<InputType>({
    resolver: zodResolver(ContactFormSchema)
  })

  const onsubmit: SubmitHandler<InputType> = async (data) => {
    try {
      await axios.post('/api/contact', data)
      setSuccessMessage('Message Sent Successfully!')
      reset() // Reset form after successful submission

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSuccessMessage(null)
      }, 7000)
    } catch (error) {
      console.error('Error sending message:', error)
      setErrorMessage('There was an error sending your message. Please try again later.')

      // Clear success message after 5 seconds
      setTimeout(() => {
        setErrorMessage(null)
      }, 7000)
    }
  }

  const borderGradientStyle = `bg-custom-diagonal-gradient border-t border-l border-r border-primary-200 rounded-tl-2xl rounded-tr-2xl`
  return (
    <Section classname="py-8 md:py-24">
      <Container>
        <div
          className={`flex md:p-10 md:bg-custom-diagonal-gradient md:border-t md:border-l md:border-r md:border-primary-200 rounded-tl-2xl rounded-tr-2xl md:flex-row flex-col gap-5 text-center md:text-left md:gap-10 mb-6 md:mb-28`}
        >
          <div className="flex-1">
            <span className="uppercase text-subtext-100 text-sm  md:text-xl font-medium tracking-widest">
              Contact Us
            </span>
            <h2 className="my-3 md:my-4 text-4xl md:text-7xl">
              {' '}
              <span className="gradient-text font-bold">
                Explore your next{' '}
              </span>
              <span className="font-thin">solution with us.</span>
            </h2>
          </div>
          <div className="flex-1">
            <form
              onSubmit={handleSubmit(onsubmit)}
              className={`${borderGradientStyle} p-4 md:p-8`}
              noValidate
            >
              <h2 className="mb-10 text-3xl md:text-5xl">
                {' '}
                <span className="gradient-text font-bold">Send Us</span>{' '}
                <span className="font-thin">a Message</span>
              </h2>
              <div className="mb-6 md:mb-20 text-white">
                <Input
                  type="email"
                  label="Email Address"
                  placeholder="Type email address here..."
                  labelPlacement="outside"
                  variant="bordered"
                  classNames={customInputStyles}
                  {...register('email')}
                  isInvalid={!!errors.email}
                  errorMessage={errors.email?.message}
                  required
                />
                <Input
                  type="name"
                  label="Name"
                  placeholder="John Doe..."
                  labelPlacement="outside"
                  variant="bordered"
                  classNames={customInputStyles}
                  {...register('name')}
                  isInvalid={!!errors.name}
                  errorMessage={errors.name?.message}
                  required
                />
                <Textarea
                  type="name"
                  label="Message"
                  placeholder="Your message"
                  labelPlacement="outside"
                  variant="bordered"
                  classNames={customInputStyles}
                  {...register('description')}
                  isInvalid={!!errors.description}
                  errorMessage={errors.description?.message}
                  required
                />
              </div>

              <button
                className="flex justify-center items-center px-5 py-3 gap-6 border-2 border-primary-100 rounded-xl"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <FiLoader className="text-2xl" />
                    Sending...
                  </>
                ) : (
                  <>
                    Submit <MdArrowOutward className="text-2xl" />
                  </>
                )}
              </button>
              {/* Success Message */}
              <div className='mt-3'>
                {successMessage && <Alert severity="success">{successMessage}</Alert>}
                {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
              </div>
            </form>
          </div>
        </div>

        <div className="border border-[#535353] py-5 px-7 md:py-8 md:px-10 rounded-3xl md:rounded-full flex flex-col md:flex-row gap-7 justify-between items-center">
          <h2 className="text-center md:text-left text-3xl md:text-5xl mxd:text-3xl">
            Say Hello{' '}
            <span className="text-primary-100">info@thenimbles.com</span>
          </h2>
          <Button
            cta={`Let's talk`}
            href="https://calendly.com/akpjunio4real/30min"
            blank="_blank"
            borderColor="border-[#535353]"
            roundFull="rounded-full w-full md:w-auto"
          />
        </div>
      </Container>
    </Section>
  )
}

export default ContactPage
