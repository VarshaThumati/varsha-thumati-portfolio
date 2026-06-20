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
    title: 'NHETIS\'25 Participation',
    subtitle: 'National Hackathon',
    icon: Trophy,
  },
  {
    title: 'Gen AI Workshop',
    subtitle: 'AWS & IBM',
    icon: Award,
  },
  {
    title: 'ORBITEX',
    subtitle: 'Event Participation',
    icon: Trophy,
  },
  {
    title: 'IdeaSprint',
    subtitle: 'Innovation Competition',
    icon: Trophy,
  },
  {
    title: 'Shotput Silver Medal',
    subtitle: 'District Level Competition',
    icon: Trophy,
  },
  {
    title: 'District-Level Throwball',
    subtitle: 'Recognition',
    icon: Trophy,
  },
  {
    title: 'Intra Throwball Gold Medal',
    subtitle: 'Competition Winner',
    icon: Trophy,
  },
  {
    title: 'Olympiad Achievements',
    subtitle: 'Academic Excellence',
    icon: Award,
  },
  {
    title: 'Abacus Meritorious Certificate',
    subtitle: 'Mathematical Excellence',
    icon: Award,
  },
  {
    title: 'Vedic Maths Certificate',
    subtitle: 'Advanced Mathematics',
    icon: Award,
  },
]

export default function AchievementsSection() {
  const [ref, isInView] = useInView()

  return (
    <section id="achievements" className="scroll-mt-20 bg-card/50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div ref={ref} className={`transition-all duration-1000 ${isInView ? 'animate-slide-up opacity-100' : 'opacity-0'}`}>
          <h2 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">Achievements</h2>
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
