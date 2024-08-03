import React from 'react'
import Image from 'next/image'
import styles from '@/modules/team.module.css'

interface TeamCardProps {
  first_name: string
  last_name: string
  position_comp: string
  imageUrl: string
}

const TeamCard: React.FC<TeamCardProps> = ({
  first_name,
  last_name,
  position_comp,
  imageUrl
}) => {
  return (
    <div className='bg-custom-diagonal-gradient p-8 pb-0 md:p-10 md:pb-0 border-t border-l border-r border-primary-200 rounded-tl-2xl rounded-tr-2xl w-full'>
      <div className='relative'>
        <div>
          <Image
            src={imageUrl}
            alt={`${first_name} ${last_name}`}
            width='400'
            height='615'
            className='rounded-tl-2xl rounded-tr-2xl object-cover'
          />
        </div>
        <div className='absolute pl-5 bottom-8 left-0 w-full'>
          <h3 className='text-3xl md:text-4xl text-white font-semibold mb-2'>
            <span className='gradient-text'>{last_name}</span>
            <span>{first_name}</span>
          </h3>
          <span className='text-xl md:text-2xl text-white'>
            {position_comp}
          </span>
        </div>
      </div>
    </div>
  )
}

export default TeamCard
