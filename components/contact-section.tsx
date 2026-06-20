'use client'

import { Mail } from 'lucide-react'

export default function ContactSection() {
  const links = [
    {
      label: 'Email',
      href: 'mailto:thumativarsha@gmail.com',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/varsha-thumati/',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/VarshaThumati',
    },
  ]

  return (
    <section id="contact" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-4xl font-bold text-foreground">Get In Touch</h2>
        <p className="mb-12 text-lg text-foreground/60">
          Let&apos;s connect and explore opportunities
        </p>

        <div className="flex flex-wrap gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="rounded-lg border border-primary/30 px-6 py-3 font-semibold text-foreground transition-all hover:bg-primary/5"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-primary/20 p-8">
          <p className="text-foreground/70 leading-relaxed">
            I&apos;m always interested in hearing about new opportunities, collaborations, and projects. Feel free to reach out through any of the channels above or send me an email directly at{' '}
            <a href="mailto:thumativarsha@gmail.com" className="font-semibold text-primary hover:text-primary/80">
              thumativarsha@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
