'use client'

import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-1/4 top-1/3 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className={`text-center transition-all duration-1000 ${isLoaded ? 'animate-slide-up opacity-100' : 'opacity-0'}`}>
          {/* Subtitle */}
          <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2">
            <span className="text-sm font-semibold text-primary">Welcome to My Portfolio</span>
          </div>

          {/* Main Title */}
          <h1 className="mb-6 text-5xl font-bold leading-tight text-foreground sm:text-7xl">
            Lakshmi Varsha <span className="gradient-text">Thumati</span>
          </h1>

          {/* Subtitle text */}
          <p className="mb-6 text-xl font-medium text-foreground/80 sm:text-2xl">
            AI Engineer in Progress | Software Developer | Data Science Student
          </p>

          {/* Description */}
          <p className="mb-12 max-w-2xl text-base text-foreground/60 sm:text-lg">
            Building AI-Powered Solutions for Real-World Problems
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/50"
            >
              <span className="relative z-10">View Projects</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-primary/30 px-8 py-3 font-semibold text-foreground transition-all hover:bg-primary/10 hover:border-primary"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-primary/30 px-8 py-3 font-semibold text-foreground transition-all hover:bg-primary/10 hover:border-primary"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 ${isLoaded ? 'animate-float opacity-100' : 'opacity-0'}`}>
          <ChevronDown className="h-6 w-6 text-primary/50" />
        </div>
      </div>
    </section>
  )
}
