'use client'
import React from 'react'
import Image from 'next/image'

interface ProgramSectionProps {
  date: string
  title: string
  description: string
  images: {
    src: string
    alt: string
  }[]
  logoSrc?: string
  backgroundColor?: string
  columns?: number
}

const ProgramSection: React.FC<ProgramSectionProps> = ({
  date,
  title,
  description,
  images,
  logoSrc = '/nimble-logo.svg',
  backgroundColor = 'bg-white',
  columns = 4
}) => {
  const getRoundedClass = (
    index: number,
    totalImages: number,
    cols: number
  ) => {
    // For mobile (2 columns)
    const mobileClasses = []
    if (index === 0) mobileClasses.push('rounded-tl-lg') // top-left
    if (index === 1) mobileClasses.push('rounded-tr-lg') // top-right
    if (index === totalImages - 2) mobileClasses.push('rounded-bl-lg') // bottom-left
    if (index === totalImages - 1) mobileClasses.push('rounded-br-lg') // bottom-right

    // For desktop (dynamic columns)
    const desktopClasses = []
    if (index === 0) desktopClasses.push('md:rounded-tl-xl') // top-left
    if (index === cols - 1) desktopClasses.push('md:rounded-tr-xl') // top-right
    if (index === totalImages - cols) desktopClasses.push('md:rounded-bl-xl') // bottom-left
    if (index === totalImages - 1) desktopClasses.push('md:rounded-br-xl') // bottom-right

    return [...mobileClasses, ...desktopClasses].join(' ')
  }

  // Dynamic grid classes based on columns prop
  const getGridClass = () => {
    switch (columns) {
      case 5:
        return 'grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-2 md:h-full'
      case 4:
        return 'grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-2 md:h-full'
      case 3:
        return 'grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-2 md:h-full'
      default:
        return 'grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-2 md:h-full'
    }
  }

  return (
    <section className={`${backgroundColor} py-12 md:py-20`}>
      <div className="mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Image
              src={logoSrc}
              width={40}
              height={40}
              alt="Nimble Academy Logo"
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <span className="text-gray-500 text-sm md:text-base font-medium">
              {date} | Nimble Academy
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Images Grid */}
        <div className={getGridClass()}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative aspect-square overflow-hidden md:aspect-auto md:h-[550px] ${getRoundedClass(
                index,
                images.length,
                columns
              )}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-top md:object-center hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProgramSection
