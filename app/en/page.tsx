'use client'

import React from 'react'
import HeroSection from '../../components/sections/en/HeroSection'
import ProblemsSection from '../../components/sections/en/ProblemsSection'
import ProblemExampleSection from '../../components/sections/en/ProblemExampleSection'
import VisitorChallengeSection from '../../components/sections/en/VisitorChallengeSection'
import SolutionsSection from '../../components/sections/en/SolutionsSection'
// import FundingSection from '../../components/sections/en/FundingSection'
// import ImpactSection from '../../components/sections/en/ImpactSection'
import PreRegistrationSection from '../../components/sections/en/PreRegistrationSection'
import CallToActionSection from '../../components/sections/en/CallToActionSection'
import LanguageSelector from '../../components/ui/LanguageSelector'

export default function EnglishHomePage() {
  return (
    <main className="min-h-screen">
      <LanguageSelector currentLang="en" />
      <HeroSection />
      <ProblemsSection />
      <ProblemExampleSection />
      <VisitorChallengeSection />
      <SolutionsSection />
      {/* <FundingSection /> */}
      {/* <ImpactSection /> */}
      <PreRegistrationSection />
      <CallToActionSection />
    </main>
  )
} 