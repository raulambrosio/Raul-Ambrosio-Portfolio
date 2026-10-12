'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { activities, hobbies, languages } from '@/lib/data'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
}
const rise = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' as const } },
}

export function MoreSection() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:px-6 md:grid-cols-3 md:py-20"
    >
      {/* Activities */}
      <motion.div
        variants={rise}
        className="rounded-3xl border border-border/60 bg-card/50 p-6 sm:p-8"
      >
        <h3 className="font-display text-2xl text-primary">ACTIVITIES</h3>
        <ul className="mt-6 space-y-6">
          {activities.map((a) => (
            <li key={a.year}>
              <span className="text-sm font-semibold text-primary">{a.year}</span>
              <p className="mt-1 flex items-start gap-2 font-medium">
                <span aria-hidden="true" className="text-primary">
                  ☁
                </span>
                {a.title}
              </p>
              <p className="text-sm text-muted-foreground">{a.detail}</p>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Hobbies */}
      <motion.div
        variants={rise}
        className="rounded-3xl border border-primary/40 bg-primary/10 p-6 sm:p-8"
      >
        <h3 className="font-display text-2xl text-foreground">
          HOBBIES &amp; INTERESTS
        </h3>
        <ul className="mt-6 space-y-4">
          {hobbies.map((h) => (
            <li key={h.label} className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/40 bg-background/70 p-2">
                <span
                  aria-hidden="true"
                  className="h-6 w-6 bg-primary"
                  style={{
                    WebkitMaskImage: `url(${h.src})`,
                    maskImage: `url(${h.src})`,
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskPosition: 'center',
                    WebkitMaskSize: 'contain',
                    maskSize: 'contain',
                  }}
                />
              </span>
              <span className="text-sm text-foreground">{h.label}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Languages */}
      <motion.div
        variants={rise}
        className="rounded-3xl border border-border/60 bg-card/50 p-6 sm:p-8"
      >
        <h3 className="font-display text-2xl text-primary">LANGUAGES</h3>
        <ul className="mt-6 space-y-5">
          {languages.map((l) => (
            <li key={l.label} className="flex items-center gap-3">
              <Image
                src={l.src || '/placeholder.svg'}
                alt={l.label}
                width={44}
                height={30}
                className="h-8 w-11 rounded object-cover"
              />
              <div>
                <p className="text-sm font-medium text-foreground">{l.label}</p>
                <p className="text-xs text-muted-foreground">{l.level}</p>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  )
}
