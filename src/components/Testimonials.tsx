import React from 'react'
import Image from 'next/image'
import { Testimonial, testimonialsData } from '@/mockData'

const Testimonials: React.FC = () => {
  const renderStars = (rating: number): React.JSX.Element[] => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    const stars: React.JSX.Element[] = []

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} className="text-[#FFB421] text-2xl">
          ★
        </span>
      )
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-yellow-400 text-2xl">
          ★
        </span>
      )
    }

    const remainingStars = 5 - stars.length
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-300 text-2xl">
          ★
        </span>
      )
    }

    return stars
  }

  return (
    <div className="py-12 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-[#212121] md:text-[46.33px]">
          What{' '}
          <span className="bg-gradient-to-r from-[#FF7354] to-[#FF7D06] bg-clip-text text-transparent">
            They’re Saying
          </span>
        </h2>
        <p className="mt-4 text-[20px] text-[#7B7B7B] max-w-2xl mx-auto">
          Don’t Just Take our word for it! Our students rave about our
          exceptional programs. Here’s what they say:
        </p>
      </div>

      {/* cards */}
      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {testimonialsData.map((testimonial: Testimonial) => (
          <div
            key={testimonial.id}
            className="bg-gray-10 p-6 rounded-lg border border-[#D9D9D9] flex flex-col"
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden">
                <Image
                  className="rounded-full"
                  src={testimonial.image}
                  alt={`Profile picture of ${testimonial.name}`}
                  width={80}
                  height={80}
                />
              </div>
              <div>
                <h3 className="text-[25px] font-semibold text-gray-900">
                  {testimonial.name}
                </h3>
                <p className="text-[20px] text-gray-500">{testimonial.role}</p>
              </div>
            </div>
            <p className="mt-4 text-[#7B7B7B] text-[16px] ">
              {testimonial.text}
            </p>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <span className="text-[#7B7B7B] font-bold">
                  {testimonial.rating}
                </span>
                <div className="flex">{renderStars(testimonial.rating)}</div>
              </div>
              <div className="bg-gradient-to-r from-[#FFA673] to-[#FF7D06] text-white text-sm px-3 py-1 rounded-full">
                {testimonial.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
