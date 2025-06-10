import HeroSection from '@/components/sections/he/HeroSection'
import ProblemsSection from '@/components/sections/he/ProblemsSection'
import ProblemExampleSection from '@/components/sections/he/ProblemExampleSection'
import VisitorChallengeSection from '@/components/sections/he/VisitorChallengeSection'
import SolutionsSection from '@/components/sections/he/SolutionsSection'
import FundingSection from '@/components/sections/he/FundingSection'
import ImpactSection from '@/components/sections/he/ImpactSection'
import CallToActionSection from '@/components/sections/he/CallToActionSection'
import LanguageSelector from '@/components/ui/LanguageSelector'

export default function HebrewHomePage() {
  return (
    <main className="min-h-screen">
      <LanguageSelector currentLang="he" />
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