'use client'
import { Input, Textarea } from '@nextui-org/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FiLoader } from 'react-icons/fi'
import { MdArrowOutward } from 'react-icons/md'
import { Alert } from '@mui/material'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { ContactFormSchema } from '@/lib/formSchema'
import axios from 'axios'

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

const ContactForm = () => {
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

  const onSubmit: SubmitHandler<InputType> = async (data) => {
    try {
      await axios.post('/api/contact', data)
      setSuccessMessage('Message Sent Successfully!')
      reset() // Reset form after successful submission

      // Clear success message after 5-7 seconds
      setTimeout(() => {
        setSuccessMessage(null)
      }, 7000)
    } catch (error) {
      console.error('Error sending message:', error)
      setErrorMessage('There was an error sending your message. Please try again later.')

      // Clear error message after 5-7 seconds
      setTimeout(() => {
        setErrorMessage(null)
      }, 7000)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 md:p-8" noValidate>
      <h2 className="mb-10 text-3xl md:text-5xl">
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

      {/* Success and Error Messages */}
      <div className="mt-3">
        {successMessage && <Alert severity="success">{successMessage}</Alert>}
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      </div>
    </form>
  )
}

export default ContactForm
