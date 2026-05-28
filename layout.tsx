import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import '../styles/globals.css'
import { Providers } from '@/components/Providers'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: {
    default: 'LinkPulse — WhatsApp Bio Link Platform',
    template: '%s | LinkPulse',
  },
  description:
    'The only bio link platform built for WhatsApp businesses. Track who opens your chat, sell products, collect leads, and automate your customer flow.',
  keywords: ['bio link', 'whatsapp', 'linktree alternative', 'creator monetization', 'lead generation'],
  openGraph: {
    title: 'LinkPulse — WhatsApp Bio Link Platform',
    description: 'One smart link. Full business in your bio.',
    type: 'website',
    url: 'https://linkpulse.io',
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <Providers>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                fontFamily: 'inherit',
                fontSize: '14px',
              },
            }}
          />
        </Providers>
      </body>
    </html>
  )
}
