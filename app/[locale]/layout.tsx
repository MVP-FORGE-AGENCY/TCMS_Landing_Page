import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales } from '@/i18n'
import '../globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TCMS - Aviation Training Compliance Software | EASA Compliant',
  description: 'Automate aviation training compliance with TCMS. Replace spreadsheets with real-time tracking, digital signatures, and audit-ready reports. EASA & FAA compliant.',
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale: resolvedLocale } = await params
  
  if (!locales.includes(resolvedLocale as any)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(resolvedLocale)
  
  const messages = await getMessages({ locale: resolvedLocale })

  return (
    <html lang={resolvedLocale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
