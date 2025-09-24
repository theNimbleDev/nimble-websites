'use client'

import Image from 'next/image'
import React, { useRef, useEffect } from 'react'

type LogoSliderProps = {
  logos?: string[]
  title?: string
  highlight?: string
}

const LogoSlider: React.FC<LogoSliderProps> = ({
  logos = [],
  title = 'Trusted by',
  highlight
}) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const allLogos = [...logos, ...logos]

  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current
      const firstLogoSet = container.children[0] as HTMLElement
      if (firstLogoSet) {
        const logoSetWidth = firstLogoSet.offsetWidth
        container.style.setProperty('--scroll-distance', `-${logoSetWidth}px`)
      }
    }
  }, [logos])

  return (
    <>
      {(title || highlight) && (
        <div className="text-xl mb-4 mt-9 md:mt-16 md:mb-9 text-center">
          {title && <span className="text-gray-400">{title} </span>}
          {highlight && (
            <span className="text-primary-100 font-bold">
              {logos.length}+{''} {highlight}
              {logos.length > 1 ? 'es' : ''}
            </span>
          )}
        </div>
      )}

      <div className="overflow-hidden whitespace-nowrap w-full">
        <div
          ref={scrollRef}
          className="flex gap-10 animate-scroll"
          style={{ width: 'max-content' }}
        >
          {allLogos.map((logo, index) => (
            <div
              className="flex items-center justify-center border p-4 md:p-6 border-gray-500 rounded-lg h-auto flex-shrink-0"
              key={index}
            >
              <Image
                className="max-w-max"
                width={100}
                height={100}
                src={logo}
                alt={`Logo ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default LogoSlider
