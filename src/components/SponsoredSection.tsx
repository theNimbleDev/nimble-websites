import React from 'react'
import Image from 'next/image'

interface Sponsor {
  id: number
  name?: string
  logo?: string // Optional logo
  alt: string
}

interface SponsoredSectionProps {
  sponsors: Sponsor[]
}

const SponsoredSection: React.FC<SponsoredSectionProps> = ({ sponsors }) => {
  return (
    <div className="mt-16 text-center">
      <h3 className="text-[24px] font-medium text-[#7B7B7B] italic mb-8">
        Sponsored By:
      </h3>

      <div className="flex flex-row items-center justify-center align-middle gap-4 md:gap-16">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.id}
            className="flex items-center justify-center align-middle gap-2"
          >
            {sponsor.logo && (
              <div className="mb-3">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.alt}
                  width={100}
                  height={100}
                  className="align-middle object-contain"
                />
              </div>
            )}
            <span className="text-base md:text-[20px] font-medium text-[#7B7B7B]">
              {sponsor.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SponsoredSection
