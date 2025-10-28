import type { NextApiRequest, NextApiResponse } from 'next'
import mailchimp from '@mailchimp/mailchimp_marketing'

// Configure Mailchimp
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX, // e.g., 'us1', 'us2', etc.
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { email } = req.body

  // Basic validation
  if (!email) {
    return res.status(400).json({ message: 'Email is required' })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' })
  }

  try {
    console.log('Adding subscriber to Mailchimp:', email)
    console.log('Using List ID:', process.env.MAILCHIMP_LIST_ID)
    console.log('Using Server:', process.env.MAILCHIMP_SERVER_PREFIX)

    // Add subscriber to Mailchimp list
    const response = await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID!, {
      email_address: email,
      status: 'subscribed',
    })

    console.log('Mailchimp response:', response)
    res.status(200).json({ message: 'Successfully subscribed to newsletter!' })
  } catch (error: unknown) {
    console.error('Mailchimp error:', error)

    // Type guard to check if error has the expected structure
    const isMailchimpError = (err: unknown): err is { 
      status: number; 
      response?: { body?: { title?: string; detail?: string } }; 
      message?: string 
    } => {
      return typeof err === 'object' && err !== null && 'status' in err
    }

    // Handle duplicate email (already subscribed)
    if (isMailchimpError(error) && error.status === 400 && error.response?.body?.title === 'Member Exists') {
      return res.status(400).json({ message: 'This email is already subscribed!' })
    }

    // Handle other errors
    res.status(500).json({ 
      message: 'Failed to subscribe. Please try again later.',
      error: isMailchimpError(error) 
        ? error.response?.body?.detail || error.message 
        : 'Unknown error occurred'
    })
  }
}