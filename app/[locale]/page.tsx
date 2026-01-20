import { HeroEnhanced } from '@/components/sections/HeroEnhanced'
import { LogoCarousel } from '@/components/sections/LogoCarousel'
import { ProblemStatement } from '@/components/sections/ProblemStatement'
import { BentoFeatures } from '@/components/sections/BentoFeatures'
import { Comparison } from '@/components/sections/Comparison'
import { Dashboard } from '@/components/sections/Dashboard'
import { Benefits } from '@/components/sections/Benefits'
import { Industries } from '@/components/sections/Industries'
import { Compliance } from '@/components/sections/Compliance'
import { Pricing } from '@/components/sections/Pricing'
import { TestimonialsEnhanced } from '@/components/sections/TestimonialsEnhanced'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTAEnhanced } from '@/components/sections/FinalCTAEnhanced'

export default function Home() {
  return (
    <main>
      <HeroEnhanced />
      <LogoCarousel />
      <ProblemStatement />
      <BentoFeatures />
      <Comparison />
      <Dashboard />
      <Benefits />
      <Industries />
      <Compliance />
      <Pricing />
      <TestimonialsEnhanced />
      <FAQ />
      <FinalCTAEnhanced />
    </main>
  )
}
