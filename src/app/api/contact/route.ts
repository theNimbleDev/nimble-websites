import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(45, 'Name must be less than 45 characters'),
  email: z.string().email('Please enter a valid email address'),
  division: z.string().min(1, 'Please select a department or division'),
  description: z
    .string()
    .min(10, 'Description must be at least 10 characters')
    .max(500, 'Description must be less than 500 characters')
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    const hasEmailConfig = process.env.EMAIL_USER && process.env.EMAIL_PASS

    if (!hasEmailConfig) {
      return NextResponse.json(
        {
          error: 'Email service is not configured. Please contact us directly.'
        },
        { status: 503 }
      )
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    // Define email options
    const mailOptions = {
      from: validatedData.email,
      to: 'thenimbles24@gmail.com',
      subject: `New message from ${validatedData.name}`,
      text: validatedData.description,
      html: `<p><strong>Name:</strong> ${validatedData.name}</p>
             <p><strong>Email:</strong> ${validatedData.email}</p>
             <p><strong>Message:</strong> ${validatedData.description}</p>`
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
