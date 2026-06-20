'use client'

import { useInView } from '@/hooks/use-in-view'
import { Briefcase, Users, Zap } from 'lucide-react'

const responsibilities = [
  {
    icon: Briefcase,
    title: 'Industry Networking',
    description: 'Building and maintaining strong relationships with leading tech companies and industry professionals',
  },
  {
    icon: Briefcase,
    title: 'Sponsorship Outreach',
    description: 'Identifying and engaging potential sponsors for club events and initiatives',
  },
  {
    icon: Users,
    title: 'Professional Relationship Management',
    description: 'Fostering meaningful connections and strategic partnerships with key stakeholders',
  },
  {
    icon: Users,
    title: 'Alumni Engagement',
    description: 'Connecting current students with alumni for mentorship and career opportunities',
  },
  {
    icon: Zap,
    title: 'Event Coordination',
    description: 'Planning and executing workshops, seminars, and professional development events',
  },
  {
    icon: Zap,
    title: 'Partnership Development',
    description: 'Creating and nurturing strategic collaborations that benefit the student community',
  },
]

export default function LeadershipSection() {
  const [ref, isInView] = useInView()

  return (
    <section className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div ref={ref} className={`transition-all duration-1000 ${isInView ? 'animate-slide-up opacity-100' : 'opacity-0'}`}>
          <h2 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">Leadership</h2>
          <p className="mb-12 text-lg text-foreground/60">
            Corporate Relations at CSI GRIET
          </p>

          {/* Leadership Card */}
          <div className="mb-12 overflow-hidden rounded-xl glassmorphism p-8">
            <div className="mb-8">
              <h3 className="mb-2 text-2xl font-bold text-foreground">Corporate Relations</h3>
              <p className="text-foreground/60">Computer Society of India (CSI), GRIET</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {responsibilities.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="rounded-lg bg-primary/5 p-6 transition-all hover:bg-primary/10">
                    <Icon className="mb-4 h-8 w-8 text-primary" />
                    <h4 className="mb-2 font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-foreground/60">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Summary */}
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-8">
            <p className="text-foreground/70 leading-relaxed">
              As a Corporate Relations Lead at CSI GRIET, I&apos;m passionate about bridging the gap between academia and industry. My role involves fostering meaningful connections with industry professionals, securing partnerships that benefit our community, and creating opportunities for students to learn and grow through professional interactions and collaborative initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
