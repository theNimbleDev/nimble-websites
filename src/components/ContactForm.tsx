'use client'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ContactFormSchema } from '@/lib/formSchema'
import axios from 'axios'
import Button from '@/components/Button'

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
      setSuccessMessage('Message sent successfully!')
      reset()

      setTimeout(() => {
        setSuccessMessage(null)
      }, 7000)
    } catch (error) {
      console.error('Error sending message:', error)
      setErrorMessage(
        'There was an error sending your message. Please try again later.'
      )

      setTimeout(() => {
        setErrorMessage(null)
      }, 7000)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <h2 className="text-2xl md:text-3xl font-bold text-brand-nearBlack mb-2">
        Send Us a Message
      </h2>
      <p className="text-brand-mediumGray text-sm">
        We’ll respond to your inquiry as soon as possible.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-sm font-medium text-brand-nearBlack"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            className={`w-full px-4 py-3 border rounded-md text-brand-nearBlack focus:ring-2 focus:ring-brand-orange focus:outline-none transition ${
              errors.name ? 'border-red-500' : 'border-brand-border'
            }`}
            {...register('name')}
            required
            aria-invalid={!!errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p
              id="name-error"
              className="text-xs text-brand-orange"
              role="alert"
            >
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-brand-nearBlack"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className={`w-full px-4 py-3 border rounded-md text-brand-nearBlack focus:ring-2 focus:ring-brand-orange focus:outline-none transition ${
              errors.email ? 'border-red-500' : 'border-brand-border'
            }`}
            {...register('email')}
            required
            aria-invalid={!!errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p
              id="email-error"
              className="text-xs text-brand-orange"
              role="alert"
            >
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="description"
          className="text-sm font-medium text-brand-nearBlack"
        >
          Message
        </label>
        <textarea
          id="description"
          placeholder="Your message"
          rows={5}
          className={`w-full px-4 py-3 border rounded-md text-brand-nearBlack focus:ring-2 focus:ring-brand-orange focus:outline-none transition ${
            errors.description ? 'border-red-500' : 'border-brand-border'
          }`}
          {...register('description')}
          required
          aria-invalid={!!errors.description ? 'true' : 'false'}
          aria-describedby={
            errors.description ? 'description-error' : undefined
          }
        />
        {errors.description && (
          <p
            id="description-error"
            className="text-xs text-brand-orange"
            role="alert"
          >
            {errors.description.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="division"
          className="text-sm font-medium text-brand-nearBlack"
        >
          Department / Division
        </label>
        <select
          id="division"
          className="w-full px-4 py-3 border border-brand-border rounded-md text-brand-nearBlack focus:ring-2 focus:ring-brand-orange focus:outline-none transition"
          {...register('division')}
          required
        >
          <option value="">Select a division</option>
          <option value="general">General / The Nimbles Group</option>
          <option value="nimbledev">NimbleDev (Software & Engineering)</option>
          <option value="nimbletrade">NimbleTrade (Trade & Commerce)</option>
          <option value="nimbleacademy">
            NimbleAcademy (Courses & Training)
          </option>
        </select>
        {errors.division && (
          <p
            id="division-error"
            className="text-xs text-brand-orange"
            role="alert"
          >
            {errors.division.message}
          </p>
        )}
      </div>

      <Button
        cta={isSubmitting ? 'Sending...' : 'Send Message'}
        variant="primary"
        disabled={isSubmitting}
        className="w-full md:w-auto"
      />

      {successMessage && (
        <div
          className="p-4 rounded-md bg-brand-orange/10 text-brand-nearBlack text-sm font-medium"
          role="status"
          aria-live="polite"
        >
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div
          className="p-4 rounded-md border border-red-600 bg-red-900/20 text-red-400 text-sm font-medium"
          role="alert"
          aria-live="assertive"
        >
          {errorMessage}
        </div>
      )}
    </form>
  )
}

export default ContactForm
