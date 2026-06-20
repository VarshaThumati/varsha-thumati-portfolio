'use client'

import { useInView } from '@/hooks/use-in-view'
import { Mail, Users, GitBranch } from 'lucide-react'

export default function ContactSection() {
  const [ref, isInView] = useInView()

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:thumativarsha@gmail.com',
      text: 'thumativarsha@gmail.com',
    },
    {
      icon: Users,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/varsha-thumati/',
      text: 'LinkedIn Profile',
    },
    {
      icon: GitBranch,
      label: 'GitHub',
      href: 'https://github.com/VarshaThumati',
      text: 'GitHub Profile',
    },
  ]

  return (
    <section id="contact" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div ref={ref} className={`transition-all duration-1000 ${isInView ? 'animate-slide-up opacity-100' : 'opacity-0'}`}>
          <div className="text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">Get In Touch</h2>
            <p className="mb-12 text-lg text-foreground/60">
              Let&apos;s connect and explore opportunities
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group rounded-xl glassmorphism p-8 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
                >
                  <div className="mb-4 inline-flex rounded-lg bg-primary/20 p-3 text-primary transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">{link.label}</h3>
                  <p className="text-sm text-primary hover:text-primary/80">{link.text}</p>
                </a>
              )
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-xl glassmorphism border-primary/30 bg-gradient-to-r from-primary/10 to-secondary/10 p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold text-foreground">Ready to collaborate?</h3>
            <p className="mb-8 text-foreground/60">
              I&apos;m always interested in hearing about new opportunities and projects.
            </p>
            <a
              href="mailto:thumativarsha@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/50"
            >
              <Mail className="h-5 w-5" />
              Send me an email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
