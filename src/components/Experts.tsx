import React from 'react'
import Image from 'next/image'
import { expertsData } from '@/mockData'

export default function Experts() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="font-extrabold text-[#212121] text-[32px] md:text-[46.33px]">
          Taught By{' '}
          <span className="bg-gradient-to-r from-[#FFA673] to-[#FF7D06] bg-clip-text text-transparent">
            Experts
          </span>{' '}
          Not Just Teachers
        </h2>
        <p className="mt-4 text-[16px] md:text-[20px] text-[#7B7B7B] max-w-2xl mx-auto">
          Our instructors aren’t just teachers, they’re mentors who bring
          expertise, passion, and practical knowledge to help you excel
        </p>
      </div>

      {/* cards */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {expertsData.map((expert) => (
          <div
            key={expert.id}
            className="flex flex-col items-center text-center"
          >
            <div className="w-full h-auto">
              <Image
                className="w-full h-full object-cover rounded-xl"
                src={expert.image}
                alt={`Profile picture of ${expert.name}`}
                width={300}
                height={300}
                layout="responsive"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-[22px] md:text-[30px] font-semibold text-[#212121]">
                {expert.name}
              </h3>
              <p className="text-[16px] md:text-[20px] text-[#7B7B7B]">
                {expert.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
