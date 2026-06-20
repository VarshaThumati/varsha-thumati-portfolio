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
  return (
    <section id="certifications" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-4xl font-bold text-foreground">Certifications</h2>

        <div className="space-y-12">
          {/* Featured Certifications */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-primary">Featured Certifications</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certifications
                .filter((cert) => cert.category === 'Featured')
                .map((cert, index) => (
                  <div key={index} className="group rounded-lg border border-primary/20 bg-primary/5 p-6 transition-all hover:border-primary/50 hover:bg-primary/10">
                    <div className="mb-3 inline-block rounded-lg bg-primary/20 p-2 text-primary">
                      <Award className="h-5 w-5" />
                    </div>
                    <h4 className="mb-2 font-semibold text-foreground group-hover:text-primary transition-colors">{cert.name}</h4>
                    <p className="text-sm text-foreground/60">{cert.issuer}</p>
                  </div>
                ))}
            </div>
          </div>

          {/* Google Cloud Certifications */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-secondary">Google Cloud Certifications</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certifications
                .filter((cert) => cert.category === 'Google Cloud')
                .map((cert, index) => (
                  <div key={index} className="group rounded-lg border border-secondary/20 bg-secondary/5 p-6 transition-all hover:border-secondary/50 hover:bg-secondary/10">
                    <div className="mb-3 inline-block rounded-lg bg-secondary/20 p-2 text-secondary">
                      <Award className="h-5 w-5" />
                    </div>
                    <h4 className="mb-2 font-semibold text-foreground group-hover:text-secondary transition-colors">{cert.name}</h4>
                    <p className="text-sm text-foreground/60">{cert.issuer}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
