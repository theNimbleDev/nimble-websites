import Image from 'next/image'
import React from 'react'

const logos = [
  '/atuenti.svg',
  '/envato.svg',
  '/gala.svg',
  '/mylife.svg',
  '/vcros.svg',
  '/world.svg'
]

// Pre-clone the logos array to ensure immediate rendering
const allLogos = [...logos, ...logos]

const LogoSlider: React.FC = () => {
  return (
    <>
      <div className='text-xl mb-4 mt-9 md:mt-16 md:mb-9 text-center'>
        <span className='text-gray-400'>Trust by </span>
        <span className='text-primary-100 font-bold'>15+ Businesses</span>
      </div>
      <div className='overflow-hidden whitespace-nowrap w-full'>
        <div className='flex gap-10 animate-scroll'>
          {allLogos.map((logo, index) => (
            <div
              className='flex items-center justify-center border p-4 md:p-6 border-gray-500 rounded-lg h-auto'
              key={index}
            >
              <Image
                className='max-w-max'
                width='100'
                height='100'
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
