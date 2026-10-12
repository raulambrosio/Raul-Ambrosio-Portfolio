'use client'

import { useState } from 'react'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import { SiteNav } from '@/components/site-nav'
import { AboutSection } from '@/components/sections/about-section'
import { ResumeSection } from '@/components/sections/resume-section'
import { WorkSection } from '@/components/sections/work-section'
import { MoreSection } from '@/components/sections/more-section'
import { ContactSection } from '@/components/sections/contact-section'
import { GithubIcon, InstagramIcon, LinkedinIcon } from '@/components/icons'
import { socials, type SectionId } from '@/lib/data'

const views: Record<SectionId, React.ReactNode> = {
  about: <AboutSection />,
  resume: <ResumeSection />,
  work: <WorkSection />,
  more: <MoreSection />,
  contact: <ContactSection />,
}

export default function Page() {
  const [active, setActive] = useState<SectionId>('about')

  function handleChange(id: SectionId) {
    setActive(id)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative flex min-h-dvh flex-col">
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10"
          style={{
            background:
              'radial-gradient(60% 50% at 50% 0%, oklch(0.68 0.22 355 / 0.12), transparent 70%)',
          }}
        />

        <SiteNav active={active} onChange={handleChange} />

        <main className="flex-1">
          <AnimatePresence mode="sync">
            <motion.section
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              aria-live="polite"
            >
              {views[active]}
            </motion.section>
          </AnimatePresence>
        </main>

        <footer className="border-t border-border/60 py-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Raúl Ambrósio. Dev / Designer.
            </p>
            <div className="flex gap-3">
              <FooterLink href={socials.github.href} label="GitHub">
                <GithubIcon className="h-4 w-4" />
              </FooterLink>
              <FooterLink href={socials.instagram.href} label="Instagram">
                <InstagramIcon className="h-4 w-4" />
              </FooterLink>
              <FooterLink href={socials.linkedin.href} label="LinkedIn">
                <LinkedinIcon className="h-4 w-4" />
              </FooterLink>
            </div>
          </div>
        </footer>
      </div>
    </MotionConfig>
  )
}

function FooterLink({
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
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
    >
      {children}
    </a>
  )
}
