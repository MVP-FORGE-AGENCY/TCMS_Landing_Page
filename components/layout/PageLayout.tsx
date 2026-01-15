'use client'

import { Navigation } from './Navigation'
import { Footer } from './Footer'

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}
