'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  experience,
  softwareSkills,
  technicalSkills,
} from '@/lib/data'

const projects = [
  {
    src: 'imagens/projimgs/horgea.png',
    alt: 'Horários Gerados Automaticamente.',
  },
  { src: 'imagens/projimgs/mohana.png', alt: 'Mohana Soluções' },
  { src: 'imagens/projimgs/us.png', alt: 'A place where two people grow together.' },
  { src: 'imagens/projimgs/ipocard.png', alt: 'IPOCARD' },
  { src: 'imagens/projimgs/valfred.png', alt: 'Valfred Creative' },
]

const rise = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' as const } },
}

function Reveal({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      variants={rise}
      initial="hidden"
      whileInView="show"
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function WorkSection() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-12 sm:px-6 md:py-20">
      {/* Education + skills */}
      <div className="grid gap-8 md:grid-cols-2">
        <Reveal className="rounded-3xl border border-border/60 bg-card/50 p-6 sm:p-8">
          <h2 className="font-display text-3xl text-primary">EDUCATION</h2>
          <ul className="mt-6">
            <li className="flex gap-3 text-sm leading-relaxed">
              <span aria-hidden="true" className="text-primary">
                ☁
              </span>
              <div className="space-y-2 text-muted-foreground">
                <h3 className="font-semibold text-foreground">
                  Secondary Education (Final Year)
                </h3>
                <p className="font-medium text-primary">
                  Instituto Politécnico Privado de Ciências e Tecnologias (IPOCET)
                </p>
                <p className="font-semibold text-primary">2024 - Present</p>
                <p className="pt-1">
                  Currently completing my final year while developing skills in
                  programming, network, design and digital products
                </p>
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal className="flex flex-col gap-6 rounded-3xl border border-border/60 bg-card/50 p-6 sm:p-8">
          <SkillGroup title="TECHNICAL SKILLS" items={technicalSkills} />
          <SkillGroup title="SOFTWARE SKILLS" items={softwareSkills} />
        </Reveal>
      </div>

      {/* Professional essence */}
      <div>
        <Reveal>
          <h2 className="text-balance text-center font-display text-4xl sm:text-5xl">
            MY PROFESSIONAL <span className="text-primary">ESSENCE</span>
          </h2>
        </Reveal>
        <div className="mt-10 flex flex-col gap-8">
          <Reveal className="w-full">
            <div
              role="region"
              aria-label="Trabalhos"
              className="projects-viewport overflow-hidden"
            >
              <div className="projects-marquee flex w-max gap-4">
                {[false, true].map((isDuplicate) => (
                  <div
                    key={isDuplicate ? 'duplicate' : 'original'}
                    aria-hidden={isDuplicate || undefined}
                    className="projects-marquee-group flex shrink-0 gap-4"
                  >
                    {projects.map((project) => (
                      <div
                        key={project.src}
                        className="relative aspect-[4/5] w-[min(82vw,24rem)] shrink-0 overflow-hidden rounded-3xl border border-primary/30 bg-card p-2 sm:w-[min(48vw,24rem)] md:w-[min(32vw,24rem)]"
                      >
                        <Image
                          src={project.src}
                          alt={isDuplicate ? '' : project.alt}
                          fill
                          sizes="(min-width: 768px) 32vw, (min-width: 640px) 48vw, 82vw"
                          className="rounded-2xl object-cover"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal className="relative rounded-3xl border border-border/60 bg-card/50 p-6 sm:p-8">
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                By combining <Pink>creativity</Pink>, effective{' '}
                <Pink>communication</Pink>, and <Pink>adaptability</Pink>, I
                develop solutions that meet the <Pink>needs</Pink> of each
                project.
              </p>
              <p>My approach ensures consistent results, aligned with objectives.</p>
              <p>
                If you&apos;re looking for <Pink>impact</Pink>, let&apos;s build
                something together that won&apos;t go unnoticed.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {['#Proactivity', '#Authenticity', '#Collaboration'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-primary/40 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Experience */}
      <Reveal className="rounded-3xl border border-border/60 bg-card/50 p-6 sm:p-8">
        <h2 className="font-display text-3xl text-primary">EXPERIENCE</h2>
        <ul className="mt-6 space-y-5">
          {experience.map((item, i) => (
            <li key={i} className="flex gap-3 border-l-2 border-primary/30 pl-4 text-sm leading-relaxed">
              <span className="text-muted-foreground">
                <span className="font-semibold text-primary">{item.year}: </span>
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  )
}
function SkillGroup({
  title,
  items,
}: {
  title: string
  items: { src: string; alt: string }[]
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold tracking-wide text-primary">{title}</h3>
      <ul className="mt-3 flex flex-wrap gap-3">
        {items.map((item) => (
          <li
            key={item.alt}
            title={item.alt}
            className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border/60 bg-background/60 p-3 transition-transform hover:-translate-y-1 hover:border-primary/50"
          >
            <Image
              src={item.src || '/placeholder.svg'}
              alt={item.alt}
              width={40}
              height={40}
              className="h-9 w-9 object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

function Pink({ children }: { children: React.ReactNode }) {
  return <span className="font-semibold text-primary">{children}</span>
}
