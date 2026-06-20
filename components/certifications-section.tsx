'use client'

import { useInView } from '@/hooks/use-in-view'
import { Award } from 'lucide-react'

const certifications = [
  {
    name: 'AWS Academy Graduate – AWS Academy Cloud Foundations',
    issuer: 'AWS',
    category: 'Featured',
  },
  {
    name: 'AWS Academy Graduate – AWS Academy Data Engineering',
    issuer: 'AWS',
    category: 'Featured',
  },
  {
    name: 'Google AI-ML Virtual Internship',
    issuer: 'Google',
    category: 'Featured',
  },
  {
    name: 'Programming in Java (NPTEL)',
    issuer: 'NPTEL',
    category: 'Featured',
  },
  {
    name: 'Software Engineering Job Simulation',
    issuer: 'JPMorgan Chase',
    category: 'Featured',
  },
  {
    name: 'C Essentials 1',
    issuer: 'Cisco',
    category: 'Featured',
  },
  {
    name: 'HTML Essentials',
    issuer: 'Cisco',
    category: 'Featured',
  },
  {
    name: 'Google Cloud Computing Foundations Certificate',
    issuer: 'Google Cloud',
    category: 'Google Cloud',
  },
  {
    name: 'Build a Secure Google Cloud Network Skill Badge',
    issuer: 'Google Cloud',
    category: 'Google Cloud',
  },
  {
    name: 'Implement Load Balancing on Compute Engine Skill Badge',
    issuer: 'Google Cloud',
    category: 'Google Cloud',
  },
  {
    name: 'Set Up an App Development Environment on Google Cloud Skill Badge',
    issuer: 'Google Cloud',
    category: 'Google Cloud',
  },
  {
    name: 'Prepare Data for ML APIs on Google Cloud Skill Badge',
    issuer: 'Google Cloud',
    category: 'Google Cloud',
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

          <div className="space-y-12">
            {/* Featured Certifications */}
            <div>
              <h3 className="mb-6 text-2xl font-bold text-primary">Featured Certifications</h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {certifications
                  .filter((cert) => cert.category === 'Featured')
                  .map((cert, index) => (
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
                      <h4 className="mb-2 font-semibold text-foreground">{cert.name}</h4>
                      <p className="text-sm text-foreground/60">{cert.issuer}</p>
                    </div>
                  ))}
              </div>
            </div>

            {/* Google Cloud Certifications */}
            <div>
              <h3 className="mb-6 text-2xl font-bold text-secondary">Google Cloud Certifications</h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {certifications
                  .filter((cert) => cert.category === 'Google Cloud')
                  .map((cert, index) => (
                    <div
                      key={index}
                      className="group rounded-xl glassmorphism p-6 transition-all duration-300 hover:border-secondary/50 hover:bg-secondary/5"
                      style={{
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      <div className="mb-4 inline-flex rounded-lg bg-secondary/20 p-3 text-secondary transition-transform group-hover:scale-110">
                        <Award className="h-6 w-6" />
                      </div>
                      <h4 className="mb-2 font-semibold text-foreground">{cert.name}</h4>
                      <p className="text-sm text-foreground/60">{cert.issuer}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
