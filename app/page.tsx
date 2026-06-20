import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import SkillsSection from '@/components/skills-section'
import ProjectsSection from '@/components/projects-section'
import AchievementsSection from '@/components/achievements-section'
import LeadershipSection from '@/components/leadership-section'
import CertificationsSection from '@/components/certifications-section'
import ContactSection from '@/components/contact-section'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <LeadershipSection />
      <CertificationsSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
