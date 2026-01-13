import { useTranslations } from 'next-intl';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Benefits from '@/components/sections/Benefits';
import InteractiveDemo from '@/components/sections/InteractiveDemo';
import Industries from '@/components/sections/Industries';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <InteractiveDemo />
      <Benefits />
      <Industries />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
