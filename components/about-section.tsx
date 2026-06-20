'use client'

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-4xl font-bold text-foreground">About Me</h2>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Profile Image */}
          <div className="flex items-center justify-center">
            <div className="h-80 w-80 overflow-hidden rounded-lg border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10">
              <img
                src="https://via.placeholder.com/400x400?text=Profile"
                alt="Lakshmi Varsha Thumati"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right: About Content */}
          <div className="space-y-6">
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
        </div>
      </div>
    </section>
  )
}
