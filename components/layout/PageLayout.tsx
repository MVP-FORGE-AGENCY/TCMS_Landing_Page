'use client'

import { Navigation } from './Navigation'
import { FooterEnhanced } from './FooterEnhanced'
import { FloatingCTA, BackToTop, LiveChat, ScrollProgress } from '@/components/ui/FloatingElements'

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      {children}
      <FooterEnhanced />
      <FloatingCTA />
      <BackToTop />
      <LiveChat />
    </>
  )
}
