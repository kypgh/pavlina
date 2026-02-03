import type { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, phone, message } = req.body

  // Basic validation
  if (!name || !email || !phone) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  try {
    console.log('Sending email to:', process.env.BOOKING_EMAIL)
    
    const result = await resend.emails.send({
      from: 'Go Bright Coaching <email.pavlinakatsalifi.com>', // Replace yourdomain.com with your actual domain
      to: [process.env.BOOKING_EMAIL!], // Your email where you want to receive bookings
      subject: 'New Booking Request - Go Bright Coaching',
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message || 'No message provided'}</p>
      `,
    })

    console.log('Resend result:', result)
    res.status(200).json({ message: 'Booking request sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    res.status(500).json({ message: 'Failed to send booking request' })
  }
}