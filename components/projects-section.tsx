'use client'

import { useInView } from '@/hooks/use-in-view'
import { ExternalLink, Code } from 'lucide-react'

const project = {
  title: 'AI-Powered Plant Disease Detection & Severity Analysis System',
  problem: 'Farmers often face difficulties identifying plant diseases at an early stage, leading to crop loss and reduced yield.',
  solution: 'Developed a web-based AI system that detects plant diseases using CNN-based image analysis and provides severity assessment and risk prediction.',
  features: [
    'Disease Detection',
    'Confidence Score Prediction',
    'Severity Analysis',
    'Future Disease Risk Prediction',
    'Mobile Accessibility',
    'Desktop Accessibility',
  ],
  technologies: ['Python', 'TensorFlow', 'CNN', 'FastAPI', 'React'],
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-4xl font-bold text-foreground">Featured Project</h2>
        <p className="mb-12 text-lg text-foreground/60">
          My most impactful work
        </p>

        {/* Main Project Card */}
        <div className="space-y-8 rounded-xl border border-primary/20 p-8">
          <div>
            <h3 className="mb-6 text-3xl font-bold text-foreground">{project.title}</h3>
          </div>

          {/* Problem & Solution */}
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="mb-3 text-lg font-semibold text-primary">Problem</h4>
              <p className="text-foreground/70 leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <h4 className="mb-3 text-lg font-semibold text-primary">Solution</h4>
              <p className="text-foreground/70 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-primary">Features</h4>
            <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-foreground/70">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-primary">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-foreground/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 pt-4">
            <a
              href="https://github.com/VarshaThumati/plant-disease-prediction-severity-analysis-app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2 font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              <Code className="h-4 w-4" />
              View Code
            </a>
            <a
              href="https://github.com/VarshaThumati/plant-disease-prediction-severity-analysis-app/blob/main/README.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-primary/30 px-6 py-2 font-semibold text-foreground transition-all hover:bg-primary/5"
            >
              <ExternalLink className="h-4 w-4" />
              Documentation
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg border border-primary/30 px-6 py-2 font-semibold text-foreground transition-all hover:bg-primary/5"
            >
              <ExternalLink className="h-4 w-4" />
              Project Post
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
