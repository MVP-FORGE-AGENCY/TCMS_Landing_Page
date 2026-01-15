import { Hero } from '@/components/sections/Hero'
import { SocialProof } from '@/components/sections/SocialProof'
import { ProblemStatement } from '@/components/sections/ProblemStatement'
import { Features } from '@/components/sections/Features'
import { Dashboard } from '@/components/sections/Dashboard'
import { Benefits } from '@/components/sections/Benefits'
import { Industries } from '@/components/sections/Industries'
import { VideoDemo } from '@/components/sections/VideoDemo'
import { Compliance } from '@/components/sections/Compliance'
import { Pricing } from '@/components/sections/Pricing'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA } from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProof />
      <ProblemStatement />
      <Features />
      <Dashboard />
      <Benefits />
      <Industries />
      <VideoDemo />
      <Compliance />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>
  )
}
