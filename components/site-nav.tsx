'use client'

import { motion } from 'framer-motion'
import { sections, type SectionId } from '@/lib/data'

export function SiteNav({
  active,
  onChange,
}: {
  active: SectionId
  onChange: (id: SectionId) => void
}) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-3 sm:flex-row sm:justify-between sm:px-6">
        <button
          onClick={() => onChange('about')}
          className="group flex items-center gap-2 font-display text-xl tracking-wide text-foreground"
        >
          <span aria-hidden="true" className="text-primary">
            ☁
          </span>
          Raúl Ambrósio
        </button>

        <nav
          aria-label="Primary"
          className="flex flex-wrap items-center justify-center gap-1 rounded-full border border-border/60 bg-card/60 p-1"
        >
          {sections.map((s) => {
            const isActive = s.id === active
            return (
              <button
                key={s.id}
                data-target={s.id}
                onClick={() => onChange(s.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors sm:px-4 ${
                  isActive
                    ? 'text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-primary"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                {s.label}
              </button>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
