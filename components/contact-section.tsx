'use client'

import { Mail, Code, ArrowRight, ExternalLink } from 'lucide-react'

export default function ContactSection() {
  const contactChannels = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:thumativarsha@gmail.com',
      value: 'thumativarsha@gmail.com',
      color: 'from-blue-500/20 to-blue-600/20',
      borderColor: 'border-blue-500/30',
      iconColor: 'text-blue-400',
    },
    {
      icon: ExternalLink,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/varsha-thumati/',
      value: 'varsha-thumati',
      color: 'from-cyan-500/20 to-cyan-600/20',
      borderColor: 'border-cyan-500/30',
      iconColor: 'text-cyan-400',
    },
    {
      icon: Code,
      label: 'GitHub',
      href: 'https://github.com/VarshaThumati',
      value: 'VarshaThumati',
      color: 'from-purple-500/20 to-purple-600/20',
      borderColor: 'border-purple-500/30',
      iconColor: 'text-purple-400',
    },
  ]

  return (
    <section id="contact" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <h2 className="mb-4 text-4xl font-bold text-foreground">Let&apos;s Connect & Collaborate</h2>
          <p className="max-w-2xl text-lg text-foreground/70">
            I&apos;m always open to discussing technology, AI, software development, internships, projects, and collaboration opportunities.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {contactChannels.map((channel, index) => {
            const Icon = channel.icon
            return (
              <a
                key={index}
                href={channel.href}
                target={channel.href.startsWith('http') ? '_blank' : undefined}
                rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group relative overflow-hidden rounded-xl border ${channel.borderColor} bg-gradient-to-br ${channel.color} p-6 transition-all duration-300 hover:border-opacity-100 hover:shadow-lg hover:shadow-primary/10 backdrop-blur-sm`}
              >
                {/* Glow effect on hover */}
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/20 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />

                <div className="relative space-y-4">
                  {/* Icon */}
                  <div className={`inline-block rounded-lg bg-white/10 p-3 ${channel.iconColor}`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="mb-1 font-bold text-foreground">{channel.label}</h3>
                    <p className="text-sm text-foreground/70 group-hover:text-foreground/90 transition-colors">
                      {channel.value}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center gap-2 text-primary opacity-0 transition-all group-hover:opacity-100">
                    <span className="text-xs font-semibold">CONNECT</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden rounded-xl border border-primary/30 bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 p-8 md:p-12 backdrop-blur-sm">
          {/* Accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary" />

          <div className="relative space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Ready to work together?</h3>
            <p className="max-w-xl text-foreground/70 leading-relaxed">
              Whether you have an exciting project, collaboration opportunity, or just want to connect, I&apos;d love to hear from you. Let&apos;s create something amazing together.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="mailto:thumativarsha@gmail.com"
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50"
              >
                <Mail className="h-4 w-4" />
                Send an Email
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://www.linkedin.com/in/varsha-thumati/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg border border-primary/50 px-6 py-3 font-semibold text-foreground transition-all hover:bg-primary/10 hover:border-primary"
              >
                <ExternalLink className="h-4 w-4" />
                Message on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
