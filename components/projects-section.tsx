'use client'

import { useInView } from '@/hooks/use-in-view'
import { ExternalLink, Code } from 'lucide-react'

const projects = [
  {
    title: 'AI-Powered Plant Disease Detection System',
    description: 'Developed a web-based AI platform that analyzes plant leaf images using Convolutional Neural Networks (CNNs). The system predicts diseases, confidence scores, severity percentages, and future disease progression risk levels.',
    technologies: ['React', 'FastAPI', 'TensorFlow', 'Python', 'CNN'],
    features: [
      'Image Upload & Processing',
      'Disease Detection',
      'Confidence Scoring',
      'Severity Analysis',
      'Risk Prediction',
      'Mobile & Desktop Support',
    ],
    image: 'linear-gradient(135deg, #0066cc 0%, #00d9ff 100%)',
  },
]

export default function ProjectsSection() {
  const [ref, isInView] = useInView()

  return (
    <section id="projects" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div ref={ref} className={`transition-all duration-1000 ${isInView ? 'animate-slide-up opacity-100' : 'opacity-0'}`}>
          <h2 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">Featured Projects</h2>
          <p className="mb-12 text-lg text-foreground/60">
            Showcasing my most impactful work
          </p>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl glassmorphism transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
              >
                <div className="grid gap-8 p-8 lg:grid-cols-2">
                  {/* Project Image */}
                  <div className="flex items-center justify-center">
                    <div
                      className="h-64 w-full rounded-lg shadow-lg shadow-primary/20"
                      style={{ background: project.image }}
                    />
                  </div>

                  {/* Project Content */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="mb-4 text-2xl font-bold text-foreground">{project.title}</h3>
                      <p className="mb-6 text-foreground/70 leading-relaxed">{project.description}</p>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="mb-3 font-semibold text-primary">Key Features:</h4>
                        <ul className="grid gap-2 sm:grid-cols-2">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2 text-sm text-foreground/60">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="mb-3 font-semibold text-primary">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="rounded-full bg-secondary/20 px-3 py-1 text-xs font-medium text-secondary"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 rounded-lg bg-primary/20 px-4 py-2 font-medium text-primary transition-all hover:bg-primary/30"
                      >
                        <Code className="h-4 w-4" />
                        View Code
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 rounded-lg border border-primary/30 px-4 py-2 font-medium text-foreground transition-all hover:bg-primary/10"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
