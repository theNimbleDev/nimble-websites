import React from 'react'
import Button from './Button'
import styles from '@/modules/banner.module.css'

interface BannerProps {
  title1: string
  title2: string
  subtext: string
}

const Banner: React.FC<BannerProps> = ({ title1, title2, subtext }) => {
  return (
    <div
      className={`${styles.banner} p-7 md:p-14 flex flex-col items-center md:block `}
    >
      <span>{subtext.toUpperCase()}</span>
      <div className='text-white text-4xl md:text-7xl w-full text-center md:text-left  md:w-3/4 my-7 md:mt-2 md:mb-10'>
        <span className='font-bold'>{title1}</span>
        <br className='hidden md:max-xl::block' />{' '}
        <span className='font-thin'>{title2}</span>
      </div>
      <Button cta='Book a call' borderColor='border-white' />
    </div>
  )
}

export default Banner
