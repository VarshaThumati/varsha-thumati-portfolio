'use client'

import { useInView } from '@/hooks/use-in-view'
import { ExternalLink, Code } from 'lucide-react'

const project = {
  title: 'Plant Disease Detection, Severity & Progression Analysis System',
  description: 'Designed and developed a full-stack AI-powered web application and custom deep learning model that detects plant diseases from leaf images, estimates disease severity, and predicts future progression risk.\n\nThe system provides an end-to-end solution for plant health analysis by allowing users to upload or capture leaf images directly from mobile or desktop devices. Using a CNN-based TensorFlow Lite model integrated with a FastAPI backend and React frontend, the application delivers real-time disease classification, severity estimation, and future risk assessment.\n\nThe platform is fully deployed and accessible through both desktop and mobile browsers.',
  features: [
    { icon: '📸', title: 'Upload or capture leaf images', text: 'Seamless image input from mobile or desktop' },
    { icon: '🌱', title: 'CNN-based disease classification', text: 'Deep learning powered disease detection' },
    { icon: '📊', title: 'Severity estimation with percentage', text: 'Quantifiable disease progression analysis' },
    { icon: '📈', title: 'Future progression prediction', text: 'Risk assessment for disease development' },
    { icon: '⚡', title: 'Real-time FastAPI inference', text: 'Lightning-fast model predictions' },
    { icon: '🌐', title: 'Mobile and desktop accessibility', text: 'Full cross-platform support' },
    { icon: '☁️', title: 'Fully deployed web application', text: 'Production-ready and live' },
  ],
  technologies: ['React', 'FastAPI', 'Python', 'TensorFlow Lite', 'CNN', 'Machine Learning', 'HTML', 'CSS', 'Render'],
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
        <div className="space-y-8 rounded-xl border border-primary/20 bg-primary/5 p-8">
          {/* Title */}
          <div>
            <h3 className="mb-6 text-3xl font-bold text-foreground">{project.title}</h3>
          </div>

          {/* Description */}
          <div className="space-y-4">
            {project.description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-foreground/80 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Features Grid */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-primary">Key Features</h4>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3.5">
              {project.features.map((feature, index) => (
                <div key={index} className="rounded-lg border border-primary/20 bg-white/5 p-4 transition-all hover:border-primary/40 hover:bg-primary/10">
                  <div className="mb-2 text-2xl">{feature.icon}</div>
                  <h5 className="mb-1 font-semibold text-foreground">{feature.title}</h5>
                  <p className="text-sm text-foreground/60">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-primary">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-foreground/90 transition-all hover:border-primary/60 hover:bg-primary/20"
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
              href="https://plant-disease-prediction-severity.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-primary/30 px-6 py-2 font-semibold text-foreground transition-all hover:bg-primary/5"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
            <a
              href="https://github.com/VarshaThumati/plant-disease-prediction-severity-analysis-app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-primary/30 px-6 py-2 font-semibold text-foreground transition-all hover:bg-primary/5"
            >
              <Code className="h-4 w-4" />
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
