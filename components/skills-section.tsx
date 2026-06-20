'use client'

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
  return (
    <section id="skills" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-4xl font-bold text-foreground">Skills & Expertise</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-3 rounded-lg border border-primary/20 p-6">
              <h3 className="font-semibold text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-foreground/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
