'use client'

import Image from 'next/image'
import React from 'react'

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
  return (
    <div className="overflow-hidden w-full relative">
      {(title || highlight) && (
        <div className="text-xl mb-4 mt-9 md:mt-16 md:mb-9 text-center">
          {title && <span className="text-gray-400">{title} </span>}
          {highlight && (
            <span className="text-primary-100 font-bold">
              {logos.length}+ {highlight}
            </span>
          )}
        </div>
      )}

      <div className="flex w-max animate-scroll-x">
        {/* First set */}
        {logos.map((logo, index) => (
          <div
            key={`first-${index}`}
            className="flex items-center justify-center border p-4 md:p-6 border-gray-500 rounded-lg h-auto flex-shrink-0 mx-5"
          >
            <Image
              width={100}
              height={100}
              src={logo}
              alt={`Logo ${index + 1}`}
            />
          </div>
        ))}
        {/* Second set (duplicate) */}
        {logos.map((logo, index) => (
          <div
            key={`second-${index}`}
            className="flex items-center justify-center border p-4 md:p-6 border-gray-500 rounded-lg h-auto flex-shrink-0 mx-5"
          >
            <Image
              width={100}
              height={100}
              src={logo}
              alt={`Logo ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogoSlider
