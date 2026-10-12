'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  DownloadIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from '@/components/icons'
import { profile, socials } from '@/lib/data'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
}
const rise = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' as const } },
}

export function ResumeSection() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-20"
    >
      {/* Info */}
      <div className="flex flex-col gap-6">
        <motion.h1
          variants={rise}
          className="font-display text-6xl leading-[0.9] sm:text-7xl"
        >
          HELLO,
          <br />
          <span className="text-primary">I&apos;M RAÚL</span>
        </motion.h1>
        <motion.p variants={rise} className="max-w-md leading-relaxed text-muted-foreground">
           Student Developer & Designer building modern digital solutions while preparing for a career in technology.
           If you'd like to collaborate, share an opportunity, discuss an idea or simply connect, feel free to reach out. I'll do my best to respond as soon as possible
        </motion.p>

        <motion.a
          variants={rise}
          href={socials.linkedin.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex w-fit items-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-2 text-sm text-muted-foreground transition-all hover:border-primary/60 hover:text-primary"
        >
          <LinkedinIcon className="h-4 w-4 text-primary" />
          {socials.linkedin.label}
        </motion.a>

        <motion.a
          variants={rise}
          href="data/CV_Geraldo_Ambrosio.pdf"
          download
          className="group inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:glow-pink"
        >
          <DownloadIcon className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          Download CV
        </motion.a>
      </div>

      {/* Photo + badges */}
      <motion.div variants={rise} className="relative mx-auto w-full max-w-sm">
        <div className="overflow-hidden rounded-[2rem] border border-primary/40 bg-card p-2 glow-pink">
          <Image
            src="/imagens/mirrorphot.png"
            alt="Raúl Ambrósio"
            width={260}
            height={340}
            className="h-auto w-full rounded-[1.6rem] object-cover"
          />
        </div>

        <FloatingBadge className="-left-3 top-6">
          {profile.birth}
        </FloatingBadge>
        <FloatingBadge className="-right-3 top-1/3">
          {profile.nationality}
        </FloatingBadge>

        <div className="mt-4 space-y-2 rounded-2xl border border-border/60 bg-card/70 p-4 text-sm backdrop-blur">
          <p className="flex items-center gap-2 text-muted-foreground">
            <MapPinIcon className="h-4 w-4 text-primary" />
            {profile.location}
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          >
            <MailIcon className="h-4 w-4 text-primary" />
            {profile.email}
          </a>
          <a
            href={profile.phoneHref}
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          >
            <PhoneIcon className="h-4 w-4 text-primary" />
            {profile.phone}
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

function FloatingBadge({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={`absolute z-10 rounded-full border border-primary/50 bg-background/90 px-3 py-1.5 text-xs font-medium text-primary shadow-lg backdrop-blur ${className}`}
    >
      {children}
    </span>
  )
}
