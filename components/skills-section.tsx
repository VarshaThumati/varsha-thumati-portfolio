'use client'

import { useInView } from '@/hooks/use-in-view'

const skillCategories = [
  {
    title: 'Programming',
    skills: ['Python', 'Java', 'C', 'SQL'],
  },
  {
    title: 'AI & Data Science',
    skills: ['Machine Learning', 'Deep Learning', 'CNN', 'Data Analysis'],
  },
  {
    title: 'Cloud',
    skills: ['AWS', 'Google Cloud'],
  },
  {
    title: 'Web Development',
    skills: ['React', 'Next.js', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'Jupyter', 'TensorFlow'],
  },
]

export default function SkillsSection() {
  const [ref, isInView] = useInView()

  return (
    <section id="skills" className="scroll-mt-20 bg-card/50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div ref={ref} className={`transition-all duration-1000 ${isInView ? 'animate-slide-up opacity-100' : 'opacity-0'}`}>
          <h2 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">Skills & Expertise</h2>
          <p className="mb-12 text-lg text-foreground/60">
            Technologies and tools I work with
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="rounded-xl glassmorphism p-6 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <h3 className="mb-4 text-xl font-bold text-primary">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-primary transition-all hover:bg-primary/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
