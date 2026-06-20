'use client'

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-4xl font-bold text-foreground">About Me</h2>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Profile Image */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 blur-lg" />
              <div className="relative h-80 w-80 overflow-hidden rounded-full border-2 border-primary/40 shadow-lg shadow-primary/20">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MyImage-BDNQX81f9Wdc5XHiBdNITIwmx4uEVq.jpeg"
                  alt="Lakshmi Varsha Thumati"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: About Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-foreground/80">
                I am Lakshmi Varsha Thumati, a Computer Science (Data Science) undergraduate at Gokaraju Rangaraju Institute of Engineering and Technology (GRIET) with a strong interest in Artificial Intelligence, Software Development, Cloud Computing, and Data Science.
              </p>

              <p className="text-lg leading-relaxed text-foreground/80">
                My journey began with learning programming through C, Java, and Python, which gradually led me to explore cloud technologies, machine learning, and intelligent systems.
              </p>

              <p className="text-lg leading-relaxed text-foreground/80">
                Through certifications from AWS, Google Cloud, Cisco, and NPTEL, I have built a strong technical foundation while continuously expanding my practical skills through projects, hackathons, workshops, and leadership opportunities.
              </p>

              <p className="text-lg leading-relaxed text-foreground/80">
                Beyond academics, I actively contribute as a Corporate Relations member of the Computer Society of India (CSI), where I collaborate with industry professionals and organizations to create opportunities for students.
              </p>

              <p className="text-lg leading-relaxed text-foreground/80">
                I believe in learning by building and enjoy developing solutions that solve real-world problems through technology.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid gap-3">
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                <p className="text-sm text-foreground/70">
                  <span className="font-semibold text-primary">🎓 GRIET</span> - Computer Science (Data Science)
                </p>
              </div>
              <div className="rounded-lg border border-secondary/20 bg-secondary/5 p-4">
                <p className="text-sm text-foreground/70">
                  <span className="font-semibold text-secondary">☁️ AWS Academy</span> - Cloud Foundations & Data Engineering
                </p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                <p className="text-sm text-foreground/70">
                  <span className="font-semibold text-primary">🤖 Google</span> - AI-ML Virtual Internship
                </p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                <p className="text-sm text-foreground/70">
                  <span className="font-semibold text-primary">🏆 NHETIS'25</span> - National Hackathon Top 60 Team
                </p>
              </div>
              <div className="rounded-lg border border-secondary/20 bg-secondary/5 p-4">
                <p className="text-sm text-foreground/70">
                  <span className="font-semibold text-secondary">👥 CSI</span> - Corporate Relations Member
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
