'use client'

import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import ProblemsSection from '../components/sections/ProblemsSection'
import ProblemExampleSection from '../components/sections/ProblemExampleSection'
import VisitorChallengeSection from '../components/sections/VisitorChallengeSection'
import SolutionsSection from '../components/sections/SolutionsSection'
import FundingSection from '../components/sections/FundingSection'
import ImpactSection from '../components/sections/ImpactSection'
import CallToActionSection from '../components/sections/CallToActionSection'
import LanguageSelector from '../components/ui/LanguageSelector'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <LanguageSelector currentLang="pt" />
      <HeroSection />
      <ProblemsSection />
      <ProblemExampleSection />
      <VisitorChallengeSection />
      <SolutionsSection />
      <FundingSection />
      <ImpactSection />
      <CallToActionSection />
    </main>
  )
} 