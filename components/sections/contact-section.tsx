'use client'

import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  SendIcon,
} from '@/components/icons'
import { profile, socials } from '@/lib/data'

const rise = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' as const } },
}

type Status = 'idle' | 'sending' | 'success' | 'error'

export function ContactSection() {
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    setStatus('sending')
    setMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()

      if (res.ok) {
        setStatus('success')
        setMessage("Thanks for reaching out! I'll get back to you soon.")
        form.reset()
      } else if (json?.fallback) {
        // Email service not configured — open the visitor's mail client.
        const subject = encodeURIComponent(`Portfolio contact from ${data.name}`)
        const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`)
        window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
        setStatus('success')
        setMessage('Opening your email app to send the message...')
        form.reset()
      } else {
        setStatus('error')
        setMessage(json?.error ?? 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Network error. Please try again or email me directly.')
    }
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-20">
      {/* Left: pitch + contact details */}
      <motion.div variants={rise} initial="hidden" animate="show" className="flex flex-col gap-8">
        <div>
          <h1 className="font-display text-5xl leading-[0.9] sm:text-6xl">
            LET&apos;S <span className="text-primary">TALK</span>
          </h1>
          <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
            Recruiter, client, or fellow creative? Send me a message and
            let&apos;s build something that won&apos;t go unnoticed. I usually
            reply within a day.
          </p>
        </div>

        <ul className="space-y-3 text-sm">
          <li>
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary">
              <MailIcon className="h-5 w-5 text-primary" />
              {profile.email}
            </a>
          </li>
          <li>
            <a href={profile.phoneHref} className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary">
              <PhoneIcon className="h-5 w-5 text-primary" />
              {profile.phone}
            </a>
          </li>
          <li className="flex items-center gap-3 text-muted-foreground">
            <MapPinIcon className="h-5 w-5 text-primary" />
            {profile.location}
          </li>
        </ul>

        <div className="flex gap-3">
          <SocialLink href={socials.github.href} label="GitHub">
            <GithubIcon className="h-5 w-5" />
          </SocialLink>
          <SocialLink href={socials.instagram.href} label="Instagram">
            <InstagramIcon className="h-5 w-5" />
          </SocialLink>
          <SocialLink href={socials.linkedin.href} label="LinkedIn">
            <LinkedinIcon className="h-5 w-5" />
          </SocialLink>
        </div>
      </motion.div>

      {/* Right: form */}
      <motion.form
        variants={rise}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-card/50 p-6 sm:p-8"
      >
        <Field label="Your name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={100}
            placeholder="Jane Recruiter"
            className="w-full rounded-xl border border-border/60 bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
          />
        </Field>
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={150}
            placeholder="you@company.com"
            className="w-full rounded-xl border border-border/60 bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
          />
        </Field>
        <Field label="Message" htmlFor="message">
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            maxLength={2000}
            placeholder="Tell me about the role or project..."
            className="w-full resize-y rounded-xl border border-border/60 bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
          />
        </Field>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:glow-pink disabled:opacity-60"
        >
          <SendIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          {status === 'sending' ? 'Sending...' : 'Send message'}
        </button>

        {message && (
          <p
            role="status"
            className={`text-sm ${status === 'error' ? 'text-destructive' : 'text-primary'}`}
          >
            {message}
          </p>
        )}
      </motion.form>
    </div>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-1.5">
      <span className="text-xs font-medium tracking-wide text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  )
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-background/60 text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary/60 hover:text-primary"
    >
      {children}
    </a>
  )
}
