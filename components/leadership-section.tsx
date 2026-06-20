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

  const leadershipImages = [
    {
      url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CSILeader1-o9BfpIR7P8QpoDZSfxH7ovYKRR0OZ7.jpeg',
      caption: 'Conducting workshops and professional development sessions',
      alt: 'CSI leadership activity - workshop session',
    },
    {
      url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CSILeader2-JImqLAPUMNlsN7lcLqXArR3BoIeKTL.jpeg',
      caption: 'Collaborating with industry professionals and mentors',
      alt: 'CSI leadership activity - professional collaboration',
    },
  ]

  return (
    <section id="leadership" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-4xl font-bold text-foreground">Leadership & Involvement</h2>

        {/* Role Header */}
        <div className="mb-12 space-y-2 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/5 p-8">
          <h3 className="text-2xl font-bold text-foreground">Corporate Relations</h3>
          <p className="text-lg text-primary">Computer Society of India (CSI), GRIET</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left: Responsibilities */}
          <div className="lg:col-span-1 space-y-6">
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-8 backdrop-blur-sm">
              <h4 className="mb-6 text-lg font-bold text-foreground">Key Responsibilities</h4>
              <ul className="space-y-3">
                {responsibilities.map((responsibility, index) => (
                  <li key={index} className="group flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary transition-all group-hover:h-3 group-hover:w-3" />
                    <span className="capitalize text-foreground/80 group-hover:text-foreground transition-colors">
                      {responsibility}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Description */}
            <div className="rounded-xl border border-secondary/20 bg-secondary/5 p-6 backdrop-blur-sm">
              <p className="text-sm leading-relaxed text-foreground/70">
                Passionate about bridging the gap between academia and industry. Fostering meaningful connections with professionals and creating opportunities for students.
              </p>
            </div>
          </div>

          {/* Right: Image Gallery */}
          <div className="lg:col-span-2 space-y-4">
            {leadershipImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-primary/20 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end">
                  <p className="w-full p-4 text-white font-medium text-sm">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
