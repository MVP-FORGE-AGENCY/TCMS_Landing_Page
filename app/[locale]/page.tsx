import { HeroEnhanced } from "@/components/sections/HeroEnhanced";
import { ProblemStatement } from "@/components/sections/ProblemStatement";
import { BentoFeatures } from "@/components/sections/BentoFeatures";
import { Comparison } from "@/components/sections/Comparison";
import { Dashboard } from "@/components/sections/Dashboard";
import { PlatformDeepDive } from "@/components/sections/PlatformDeepDive";
import { Benefits } from "@/components/sections/Benefits";
import { Industries } from "@/components/sections/Industries";
import { Compliance } from "@/components/sections/Compliance";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTAEnhanced } from "@/components/sections/FinalCTAEnhanced";

export default function Home() {
  return (
    <main>
      <HeroEnhanced />
      <ProblemStatement />
      <BentoFeatures />
      <Comparison />
      <Dashboard />
      <PlatformDeepDive />
      <Benefits />
      <Industries />
      <Compliance />
      <HowItWorks />
      <FAQ />
      <FinalCTAEnhanced />
    </main>
  );
}
