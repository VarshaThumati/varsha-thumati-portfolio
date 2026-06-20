'use client'

import { useInView } from '@/hooks/use-in-view'

const timeline = [
  {
    year: 'Started',
    title: 'Programming Journey',
    description: 'Began with C, Java, and Python fundamentals',
  },
  {
    year: '2023',
    title: 'Cloud Computing Era',
    description: 'Explored AWS and Google Cloud platforms',
  },
  {
    year: '2024',
    title: 'AI & Data Science Focus',
    description: 'Deep dive into Machine Learning and Deep Learning',
  },
  {
    year: '2025',
    title: 'AI Engineer Path',
    description: 'Building intelligent systems for real-world impact',
  },
]

export default function AboutSection() {
  const [ref, isInView] = useInView()

  return (
    <section id="about" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div ref={ref} className={`transition-all duration-1000 ${isInView ? 'animate-slide-up opacity-100' : 'opacity-0'}`}>
          <h2 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">About Me</h2>
          <p className="mb-12 text-lg text-foreground/60">
            My journey from fundamentals to AI engineering
          </p>

          {/* About Description */}
          <div className="mb-16 rounded-xl glassmorphism p-8">
            <p className="mb-6 text-base text-foreground/70 leading-relaxed">
              I am Lakshmi Varsha Thumati, a Computer Science (Data Science) undergraduate at Gokaraju Rangaraju Institute of Engineering and Technology (GRIET) with a strong interest in Artificial Intelligence, Software Development, Cloud Computing, and Data Science.
            </p>
            <p className="mb-6 text-base text-foreground/70 leading-relaxed">
              My journey began with learning programming through C, Java, and Python, which gradually led me to explore cloud technologies, machine learning, and intelligent systems. Through certifications from AWS, Google Cloud, Cisco, and NPTEL, I have built a solid technical foundation while continuously expanding my practical skills.
            </p>
            <p className="mb-6 text-base text-foreground/70 leading-relaxed">
              Beyond academics, I actively engage in leadership and professional development as a Corporate Relations member of the Computer Society of India (CSI), where I collaborate with industry professionals, mentors, and organizations to create opportunities for students.
            </p>
            <p className="text-base text-foreground/70 leading-relaxed">
              I strongly believe in learning by building. My projects focus on solving real-world problems through technology, with a particular interest in AI-powered applications that create meaningful impact. I am currently exploring Machine Learning, Cloud Technologies, and Full-Stack Development while working toward becoming an AI Engineer capable of building intelligent solutions at scale.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary sm:left-1/2 sm:-translate-x-1/2" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`ml-20 sm:ml-0 sm:${index % 2 === 0 ? 'mr-1/2 pr-8 text-right' : 'ml-1/2 pl-8'}`}
                  style={{
                    marginLeft: index % 2 === 0 ? 'auto' : undefined,
                    marginRight: index % 2 === 0 ? 'auto' : undefined,
                  }}
                >
                  <div className={`relative rounded-lg glassmorphism p-6 sm:w-5/12`}>
                    <div className={`absolute top-6 -z-10 h-3 w-3 rounded-full bg-primary ${index % 2 === 0 ? '-right-8 sm:right-auto sm:-left-8' : 'left-0 sm:left-auto sm:-right-8'}`} />
                    <div className="mb-2 inline-block rounded bg-primary/20 px-3 py-1 text-xs font-semibold text-primary">
                      {item.year}
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-foreground">{item.title}</h3>
                    <p className="text-foreground/60">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
