import { NextResponse } from 'next/server'

const TO_EMAIL = 'raulsambrosio@gmail.com'

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: Request) {
  let body: { name?: string; email?: string; message?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const name = (body.name ?? '').trim()
  const email = (body.email ?? '').trim()
  const message = (body.message ?? '').trim()

  // Server-side validation
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
  }
  if (name.length > 100 || email.length > 150 || message.length > 2000) {
    return NextResponse.json({ error: 'One or more fields are too long.' }, { status: 400 })
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Please enter a valid email.' }, { status: 400 })
  }

  const apiKey = process.env.API_KEY ?? process.env.RESEND_API_KEY

  // No email service configured yet — tell the client to use the mailto fallback.
  if (!apiKey) {
    return NextResponse.json(
      { fallback: true, error: 'Email service not configured.' },
      { status: 503 },
    )
  }

  try {
    const { Resend } = await import('resend')
    const resend = new Resend(apiKey)

    const { error } = await resend.emails.send({
      // Resend's shared onboarding sender works without domain verification.
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: TO_EMAIL,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    })

    if (error) {
      console.log('[v0] Resend error:', error)
      return NextResponse.json({ error: 'Failed to send. Try again.' }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.log('[v0] Contact route error:', err)
    return NextResponse.json({ error: 'Unexpected error.' }, { status: 500 })
  }
}
