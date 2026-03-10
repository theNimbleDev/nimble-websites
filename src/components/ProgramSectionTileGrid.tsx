'use client'
import React from 'react'
import Image from 'next/image'

interface ProgramSectionProps {
  date?: string
  subtitle?: string
  title: string
  description: string
  images: {
    src: string
    alt: string
    link?: string
  }[]
  logoSrc?: string
  backgroundColor?: string
}

const ProgramSection: React.FC<ProgramSectionProps> = ({
  date,
  subtitle,
  title,
  description,
  images,
  logoSrc = '/nimble-logo.svg',
  backgroundColor = 'bg-white'
}) => {
  const getRoundedClass = (index: number, totalImages: number) => {
    // For mobile (2 columns)
    const mobileClasses = []
    if (index === 0) mobileClasses.push('rounded-tl-lg') // top-left
    if (index === 1) mobileClasses.push('rounded-tr-lg') // top-right
    if (index === totalImages - 2) mobileClasses.push('rounded-bl-lg') // bottom-left
    if (index === totalImages - 1) mobileClasses.push('rounded-br-lg') // bottom-right

    // For desktop (4 columns)
    const desktopClasses = []
    if (index === 0) desktopClasses.push('md:rounded-tl-xl') // top-left
    if (index === 3) desktopClasses.push('md:rounded-tr-xl') // top-right
    if (index === totalImages - 4) desktopClasses.push('md:rounded-bl-xl') // bottom-left
    if (index === totalImages - 1) desktopClasses.push('md:rounded-br-xl') // bottom-right

    return [...mobileClasses, ...desktopClasses].join(' ')
  }

  return (
    <section className={`${backgroundColor} py-4 md:py-8`}>
      <div className="mx-auto">
        {/* Header Section */}
        <div className="text-center mb-2 md:mb-4">
          <Image
            src="/Vector1.svg"
            width={40}
            height={40}
            alt="Nimble Academy Logo"
            className="w-8 h-8 md:w-10 md:h-10 ml-4 md:ml-12"
          />{' '}
          <div className="flex items-center justify-center mb-2">
            <p className="text-sm md:text-lg">
              <span className="text-orange-400 font-medium">{date}</span>{' '}
              <span className="text-[#7B7B7B]">{subtitle}</span>
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <div className="mb-4 md:mb-8 mx-auto">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              {description}
            </p>
          </div>
          {/* Images Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
            {images.slice(0, 4).map((image, index) => {
              const imageContent = (
                <div
                  key={index}
                  className={`relative aspect-square overflow-hidden rounded-lg${image.link ? ' cursor-pointer group' : ''}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover object-center transition-transform group-hover:scale-105"
                  />
                </div>
              )

              if (image.link) {
                return (
                  <a
                    key={index}
                    href={image.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {imageContent}
                  </a>
                )
              }

              return imageContent
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProgramSection
