'use client'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: '{}',
    skills: ['Python', 'Java', 'C', 'SQL'],
    color: 'from-blue-500/20 to-blue-600/20',
    borderColor: 'border-blue-500/30',
  },
  {
    title: 'AI & Data Science',
    icon: '🧠',
    skills: ['Machine Learning', 'Deep Learning', 'CNN', 'Data Analysis'],
    color: 'from-purple-500/20 to-purple-600/20',
    borderColor: 'border-purple-500/30',
  },
  {
    title: 'Cloud Technologies',
    icon: '☁️',
    skills: ['AWS', 'Google Cloud'],
    color: 'from-cyan-500/20 to-cyan-600/20',
    borderColor: 'border-cyan-500/30',
  },
  {
    title: 'Web Development',
    icon: '🌐',
    skills: ['React', 'Next.js', 'HTML', 'CSS', 'JavaScript'],
    color: 'from-orange-500/20 to-orange-600/20',
    borderColor: 'border-orange-500/30',
  },
  {
    title: 'Tools & Platforms',
    icon: '⚙️',
    skills: ['Git', 'GitHub', 'VS Code', 'Jupyter', 'TensorFlow'],
    color: 'from-green-500/20 to-green-600/20',
    borderColor: 'border-green-500/30',
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <h2 className="mb-4 text-4xl font-bold text-foreground">Skills & Expertise</h2>
          <p className="text-lg text-foreground/60">
            A comprehensive toolkit for building intelligent, scalable solutions
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl border ${category.borderColor} bg-gradient-to-br ${category.color} p-6 transition-all duration-300 hover:border-opacity-100 hover:shadow-lg hover:shadow-primary/10 backdrop-blur-sm`}
            >
              {/* Glow effect on hover */}
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/20 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              
              <div className="relative">
                {/* Category header */}
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>

                {/* Skills grid */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group/skill flex items-center gap-2 rounded-lg bg-white/5 p-3 transition-all duration-200 hover:bg-white/10"
                    >
                      <div className="h-2 w-2 rounded-full bg-primary transition-all group-hover/skill:h-2.5 group-hover/skill:w-2.5 group-hover/skill:bg-primary" />
                      <span className="font-medium text-foreground/80 group-hover/skill:text-foreground transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Skill count badge */}
                <div className="mt-4 inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary">
                  {category.skills.length} Skills
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
