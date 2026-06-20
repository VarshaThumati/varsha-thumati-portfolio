'use client'

import { useInView } from '@/hooks/use-in-view'
import { Award, Trophy } from 'lucide-react'

const achievements = [
  {
    title: 'NHETIS\'25 National Hackathon',
    subtitle: 'Top 60 Team',
    icon: Trophy,
  },
  {
    title: 'AWS Academy Graduate',
    subtitle: 'Cloud Foundations',
    icon: Award,
  },
  {
    title: 'AWS Academy Graduate',
    subtitle: 'Data Engineering',
    icon: Award,
  },
  {
    title: 'Google AI-ML Virtual Internship',
    subtitle: 'Completed',
    icon: Award,
  },
  {
    title: 'Cisco C Essentials Certification',
    subtitle: 'Certified',
    icon: Award,
  },
  {
    title: 'Sports Achievements',
    subtitle: 'Shotput Silver & Throwball Gold',
    icon: Trophy,
  },
]

export default function AchievementsSection() {
  const [ref, isInView] = useInView()

  return (
    <section id="achievements" className="scroll-mt-20 bg-card/50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div ref={ref} className={`transition-all duration-1000 ${isInView ? 'animate-slide-up opacity-100' : 'opacity-0'}`}>
          <h2 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">Achievements & Certifications</h2>
          <p className="mb-12 text-lg text-foreground/60">
            Milestones and recognitions along my journey
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <div
                  key={index}
                  className="group rounded-xl glassmorphism p-6 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="mb-4 inline-flex rounded-lg bg-primary/20 p-3 text-primary transition-transform group-hover:scale-110">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-bold text-foreground">{achievement.title}</h3>
                  <p className="text-sm text-foreground/60">{achievement.subtitle}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
