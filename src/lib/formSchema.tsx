import { z } from 'zod'

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(45, 'Name must be less than 45 characters'),
  email: z.string().email('Please enter a valid email address'),
  description: z
    .string()
    .min(10, 'Description must be at least 10 characters')
    .max(500, 'Description must be less than 500 characters')
})
