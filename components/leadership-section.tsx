'use client'

export default function LeadershipSection() {
  const responsibilities = [
    'Industry networking',
    'Sponsorship outreach',
    'Partnership development',
    'Alumni engagement',
    'Event coordination',
    'Professional relationship management',
  ]

  return (
    <section id="leadership" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-4xl font-bold text-foreground">Leadership & Involvement</h2>

        {/* Leadership Card */}
        <div className="space-y-6 rounded-xl border border-primary/20 p-8">
          <div>
            <h3 className="mb-2 text-2xl font-bold text-foreground">Corporate Relations</h3>
            <p className="text-lg text-foreground/70">Computer Society of India (CSI), GRIET</p>
          </div>

          {/* Responsibilities */}
          <div>
            <h4 className="mb-4 font-semibold text-primary">Responsibilities</h4>
            <ul className="grid gap-3 sm:grid-cols-2">
              {responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="capitalize text-foreground/70">{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Description */}
          <p className="text-foreground/70 leading-relaxed">
            I&apos;m passionate about bridging the gap between academia and industry. My focus is on fostering meaningful connections with industry professionals, securing partnerships that benefit our community, and creating opportunities for students to learn and grow through professional interactions and collaborative initiatives.
          </p>
        </div>
      </div>
    </section>
  )
}
