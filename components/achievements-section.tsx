'use client'

const achievements = [
  'NHETIS\'25 National Hackathon Top 60 Team',
  'NHETIS\'25 Participant',
  'Gen AI Workshop (AWS & IBM)',
  'ORBITEX Event Participation',
  'IdeaSprint Innovation Competition',
  'Shotput Silver Medal - District Level',
  'Throwball Gold Medal - Intra College',
  'District-Level Throwball Recognition',
  'Olympiad Achievements',
  'Abacus Meritorious Certificate',
  'Vedic Maths Certificate',
]

export default function AchievementsSection() {
  return (
    <section id="achievements" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-4xl font-bold text-foreground">Achievements</h2>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="rounded-lg border border-primary/20 p-4 hover:border-primary/40"
            >
              <p className="text-foreground/80">{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
