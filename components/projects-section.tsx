'use client'

import { ExternalLink, Code, Database, Brain, Terminal } from 'lucide-react'

const featuredProject = {
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
  links: {
    code: 'https://github.com/VarshaThumati/plant-disease-prediction-severity-analysis-app',
    documentation: 'https://github.com/VarshaThumati/plant-disease-prediction-severity-analysis-app/blob/main/README.md',
    liveDemo: 'https://plant-disease-prediction-severity.onrender.com/',
  },
}

const otherProjects = [
  {
    title: 'Smart Parking Management System',
    description: 'Database-driven parking management system with efficient vehicle tracking and parking slot allocation. Automated entry/exit management and real-time availability updates.',
    highlights: [
      'Parking slot management',
      'Vehicle tracking',
      'Database integration',
      'Efficient operations',
    ],
    technologies: ['Python', 'DBMS'],
    icon: Database,
    github: 'https://github.com/VarshaThumati/Smart-Parking-Management-System',
  },
  {
    title: 'Python Quiz Project',
    description: 'Interactive quiz application with automated answer validation and real-time score calculation. Dynamic question management supporting multiple quiz scenarios.',
    highlights: [
      'Interactive quiz application',
      'Question-answer evaluation',
      'Score calculation',
      'User interaction',
    ],
    technologies: ['Python'],
    icon: Brain,
    github: 'https://github.com/VarshaThumati/Python_Quiz_Project',
  },
  {
    title: 'Smart Page Replacement Visualizer',
    description: 'Interactive web-based visualization tool for Operating System page replacement algorithms. Real-time simulations with dynamic memory state tracking.',
    highlights: [
      'OS page replacement visualization',
      'Interactive learning tool',
      'Algorithm comparison',
      'Dynamic charts',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Chart.js'],
    icon: Terminal,
    github: 'https://github.com/VarshaThumati/Smart-Page-Replacement-Visualizer',
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="mb-4 text-4xl font-bold text-foreground">Projects & Technical Work</h2>
          <p className="max-w-3xl text-lg text-foreground/70">
            A collection of projects showcasing my interests in Artificial Intelligence, Software Development, Database Systems, and Interactive Learning Applications.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-16 space-y-8 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 p-8 lg:p-12">
          {/* Title */}
          <div>
            <div className="mb-4 inline-block rounded-lg bg-primary/20 px-4 py-1 text-xs font-bold uppercase tracking-wide text-primary">
              Featured Project
            </div>
            <h3 className="text-3xl font-bold text-foreground lg:text-4xl">{featuredProject.title}</h3>
          </div>

          {/* Description */}
          <div className="space-y-4">
            {featuredProject.description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-foreground/80 leading-relaxed lg:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Features Grid */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-primary">Key Features</h4>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3.5">
              {featuredProject.features.map((feature, index) => (
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
              {featuredProject.technologies.map((tech, index) => (
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
              href={featuredProject.links.code}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2 font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              <Code className="h-4 w-4" />
              View Code
            </a>
            <a
              href={featuredProject.links.documentation}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-primary/30 px-6 py-2 font-semibold text-foreground transition-all hover:bg-primary/5"
            >
              <ExternalLink className="h-4 w-4" />
              Documentation
            </a>
            <a
              href={featuredProject.links.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-primary/30 px-6 py-2 font-semibold text-foreground transition-all hover:bg-primary/5"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
            <a
              href={featuredProject.links.code}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-primary/30 px-6 py-2 font-semibold text-foreground transition-all hover:bg-primary/5"
            >
              <Code className="h-4 w-4" />
              GitHub Repository
            </a>
          </div>
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="mb-8 text-2xl font-bold text-foreground">Other Projects</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative space-y-4">
                    {/* Icon */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary transition-all group-hover:bg-primary/30">
                      <IconComponent className="h-6 w-6" />
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-foreground">{project.title}</h4>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-foreground/70">{project.description}</p>

                    {/* Highlights */}
                    <div className="space-y-2">
                      {project.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-center gap-2 text-xs text-foreground/60">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {highlight}
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="rounded-full border border-primary/30 bg-primary/10 px-2 py-1 text-xs font-medium text-foreground/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2 pt-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 rounded-lg border border-primary/30 px-3 py-2 text-center text-xs font-semibold text-foreground transition-all hover:bg-primary/5"
                      >
                        View Code
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 rounded-lg border border-primary/30 px-3 py-2 text-center text-xs font-semibold text-foreground transition-all hover:bg-primary/5"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
