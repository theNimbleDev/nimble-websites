'use client'
import { useEffect, useState } from 'react'

export default function DynamicHtmlBackground({ children }: { children: React.ReactNode }) {
  const [backgroundImage, setBackgroundImage] = useState<string | undefined>('')

  useEffect(() => {
    // Get the hostname dynamically from the browser
    const { hostname } = window.location

    // Logic for setting the background image based on the hostname
    const getBackgroundImage = () => {
      if (hostname.includes('nimbleacademy')) {
        return 'none' // No background for /nimbleacademy
      }
      // Default background for other paths
      return "url('/sitebg.svg')"
    }

    setBackgroundImage(getBackgroundImage())
  }, [])

  return (
    <html
      lang="en"
      style={{
        backgroundImage: backgroundImage,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
      }}
    >
      {children}
    </html>
  )
}
