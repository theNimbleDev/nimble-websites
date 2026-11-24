import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Manrope } from 'next/font/google'
import './globals.css'
import DynamicHtmlBackground from '@/components/DynamicHtmlBackground'

const manrope = Manrope({ subsets: ['latin'] })

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <DynamicHtmlBackground>
      <body className={manrope.className}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-orange focus:text-[#151515] focus:rounded-md focus:font-semibold"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="mt-16" aria-label="Main content">
          {children}
        </main>
        <Footer />
      </body>
    </DynamicHtmlBackground>
  )
}
