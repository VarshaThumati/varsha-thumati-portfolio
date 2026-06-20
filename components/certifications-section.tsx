'use client'

import { useInView } from '@/hooks/use-in-view'
import { Award } from 'lucide-react'

const certifications = [
  {
    name: 'AWS Cloud Foundations',
    issuer: 'AWS Academy',
    year: '2024',
  },
  {
    name: 'AWS Data Engineering',
    issuer: 'AWS Academy',
    year: '2024',
  },
  {
    name: 'Google AI-ML Internship',
    issuer: 'Google',
    year: '2024',
  },
  {
    name: 'Cisco C Essentials',
    issuer: 'Cisco Networking Academy',
    year: '2023',
  },
  {
    name: 'NPTEL Programming in Java',
    issuer: 'NPTEL',
    year: '2024',
  },
]

export default function CertificationsSection() {
  const [ref, isInView] = useInView()

  return (
    <section id="certifications" className="scroll-mt-20 bg-card/50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div ref={ref} className={`transition-all duration-1000 ${isInView ? 'animate-slide-up opacity-100' : 'opacity-0'}`}>
          <h2 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">Certifications</h2>
          <p className="mb-12 text-lg text-foreground/60">
            Professional credentials and qualifications
          </p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group rounded-xl glassmorphism p-6 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/20 p-3 text-primary transition-transform group-hover:scale-110">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{cert.name}</h3>
                <p className="mb-3 text-sm text-foreground/60">{cert.issuer}</p>
                <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {cert.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
