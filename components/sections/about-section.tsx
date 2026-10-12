'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { GithubIcon, InstagramIcon } from '@/components/icons'
import { socials } from '@/lib/data'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export function AboutSection() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-20"
    >
      {/* Photo side */}
      <motion.div variants={rise} className="flex justify-center md:justify-start">
        <div className="relative">
          <div className="glow-pink overflow-hidden rounded-[2rem] border border-primary/40 bg-card p-2">
            <Image
              src="/imagens/rayl2.png"
              alt="Portrait of Raúl Ambrósio"
              width={360}
              height={360}
              priority
              className="h-[300px] w-[300px] rounded-[1.6rem] object-cover sm:h-[360px] sm:w-[360px]"
            />
          </div>
          <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
            <SocialChip href={socials.github.href} label="GitHub">
              <GithubIcon className="h-4 w-4" />
              <span>raulambrosio</span>
            </SocialChip>
            <SocialChip href={socials.instagram.href} label="Instagram">
              <InstagramIcon className="h-4 w-4" />
              <span>raul_ambrosiio</span>
            </SocialChip>
          </div>
        </div>
      </motion.div>

      {/* Text side */}
      <div className="relative">
        <div className="relative flex flex-col">
          <motion.h1
            variants={rise}
            className="font-display text-5xl leading-none text-primary sm:text-6xl"
          >
            Let's build together!
          </motion.h1>
          <motion.div
            variants={rise}
            className="mt-5 grid max-w-xl gap-2 sm:grid-cols-2"
            aria-label="Professional highlights"
          >
            {[
              <>Full Stack Developer &amp; Designer</>,
              <>
                <span className="font-semibold text-primary">+5</span> Real
                Projects Completed
              </>,
              <>
                <span className="font-semibold text-primary">3+</span> Years
                Experience
              </>,
              <>
                <span className="font-semibold text-primary">10+</span> Happy
                Clients
              </>,
            ].map((highlight, index) => (
              <motion.p
                key={index}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.25,
                }}
                className="rounded-xl border border-primary/25 bg-card/50 px-3 py-2 text-sm leading-relaxed text-muted-foreground sm:text-base"
              >
                <span aria-hidden="true" className="mr-2 font-semibold text-primary">
                  &gt;
                </span>
                {highlight}
              </motion.p>
            ))}
          </motion.div>
          <motion.p
            variants={rise}
            className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground"
          >
            I love design and anything related to art. I approach problems in a
            rational and pragmatic way and seek the simplest and most functional
            solutions possible.
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}

function SocialChip({
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
      className="flex items-center gap-1.5 rounded-full border border-border/70 bg-background/90 px-3 py-1.5 text-xs text-muted-foreground shadow-lg backdrop-blur transition-all hover:border-primary/60 hover:text-primary hover:-translate-y-0.5"
    >
      {children}
    </a>
  )
}
