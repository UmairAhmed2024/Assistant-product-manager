'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { SummarySection } from '@/components/sections/SummarySection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
<<<<<<< HEAD
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { CertificationsSection } from '@/components/sections/CertificationsSection'
=======
>>>>>>> b0a282816f8e8517f290267fe2e9a8233b8fb106
import { SkillsSection } from '@/components/sections/SkillsSection'
import { EducationSection } from '@/components/sections/EducationSection'
import { StrengthsSection } from '@/components/sections/StrengthsSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SummarySection />
      <ExperienceSection />
<<<<<<< HEAD
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <CertificationsSection />
=======
      <SkillsSection />
      <EducationSection />
>>>>>>> b0a282816f8e8517f290267fe2e9a8233b8fb106
      <StrengthsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
