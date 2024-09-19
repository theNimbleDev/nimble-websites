import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'] })

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={manrope.className}>
        <Navbar />
        <main className='mt-16'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
