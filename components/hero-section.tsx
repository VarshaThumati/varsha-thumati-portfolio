'use client'

import { FileText } from 'lucide-react'

export default function HeroSection() {
  const stats = [
    { value: '9.17', label: 'CGPA' },
    { value: '15+', label: 'Certifications' },
    { value: 'National', label: 'Hackathon Participant' },
    { value: 'Full-Stack', label: 'Developer' },
  ]

  const currentlyLearning = [
    'Machine Learning',
    'Deep Learning',
    'AI Applications',
    'Cloud Technologies',
    'Full-Stack Development',
  ]

  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-12">
          {/* Main headline */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
              Lakshmi Varsha Thumati
            </h1>
            <p className="text-2xl font-semibold text-primary">
              Computer Science (Data Science) Student | AI Enthusiast | Software Developer
            </p>
            <p className="max-w-3xl text-lg leading-relaxed text-foreground/70">
              Passionate about transforming ideas into intelligent solutions through Artificial Intelligence, Machine Learning, and Software Development.
            </p>
          </div>

          {/* Currently Learning */}
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary/70">Currently Exploring</p>
            <div className="flex flex-wrap gap-2">
              {currentlyLearning.map((topic, index) => (
                <span
                  key={index}
                  className="rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-foreground/80 transition-all hover:border-primary/60 hover:bg-primary/10"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="rounded-lg border border-primary/20 bg-primary/5 p-4 transition-all hover:border-primary/40 hover:bg-primary/10">
                <div className="font-bold text-lg text-primary">{stat.value}</div>
                <div className="text-sm text-foreground/60">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              View Projects
            </a>
            <a
              href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lakshmi-Varsha-Thumati---Resume-(3)-30ptt95Fy6vnubcRtFqDuJ3eVc8yht.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-primary/30 px-6 py-3 font-semibold text-foreground transition-all hover:bg-primary/5"
            >
              <FileText className="h-4 w-4" />
              View Resume
            </a>
            <a
              href="https://github.com/VarshaThumati"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-primary/30 px-6 py-3 font-semibold text-foreground transition-all hover:bg-primary/5"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/varsha-thumati/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-primary/30 px-6 py-3 font-semibold text-foreground transition-all hover:bg-primary/5"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
