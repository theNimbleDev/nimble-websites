import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(45, 'First name must be less than 45 characters'),
  email: z.string().email('Please enter a valid email address'),
  description: z.string().min(1, 'Please enter a description')
})

export async function POST(request: Request) {
  try {
    console.log('EMAIL_USER:', process.env.EMAIL_USER) // Log email user to verify it's set
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS) // Log email pass to verify it's set

    const body = await request.json()
    const validatedData = contactSchema.parse(body)

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
