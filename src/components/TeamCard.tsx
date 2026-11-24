import React from 'react'
import Image from 'next/image'

interface TeamCardProps {
  first_name: string
  last_name: string
  position_comp: string
  imageUrl: string
  bio: string
}

const TeamCard: React.FC<TeamCardProps> = ({
  first_name,
  last_name,
  position_comp,
  imageUrl,
  bio
}) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[#2b2b2b] bg-[#111111] shadow-[0_18px_40px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D95200]/70 hover:shadow-[0_24px_60px_rgba(0,0,0,0.22)]">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#D95200] via-[#F59E0B] to-[#D95200]" />

      <div className="p-5">
        <div className="mb-5 flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D95200]">
            Team
          </span>
          <span className="h-2.5 w-2.5 rounded-full bg-[#D95200] shadow-[0_0_12px_rgba(217,82,0,0.8)]" />
        </div>

        <div className="relative overflow-hidden rounded-xl border border-[#2b2b2b] bg-[#1a1a1a]">
          <Image
            src={imageUrl}
            alt={`${first_name} ${last_name}`}
            width={400}
            height={500}
            className="h-[320px] w-full object-cover grayscale transition duration-500 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/10 to-transparent" />
        </div>

        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between gap-3">
            <h3 className="text-2xl font-semibold text-white">
              <span className="text-[#f7f7f7]">{first_name}</span>{' '}
              <span className="text-[#D95200]">{last_name}</span>
            </h3>
            <span className="rounded-full border border-[#D95200]/40 bg-[#D95200]/10 px-2 py-1 text-[9px] font-medium uppercase tracking-[0.18em] text-[#FFB067]">
              Lead
            </span>
          </div>

          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[#cfcfcf]">
            {position_comp}
          </p>

          <div
            className="text-sm leading-6 text-[#d5d5d5]"
            dangerouslySetInnerHTML={{ __html: bio }}
          />
        </div>
      </div>
    </div>
  )
}

export default TeamCard
