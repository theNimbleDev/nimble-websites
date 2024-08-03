import React from 'react'
import Image from 'next/image'
import Button from './Button'

interface ServiceCardProps {
  logo: string
  subsidiary: string
  description: string
  color: string
  ButtonColor: string
  href?: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  logo,
  subsidiary,
  description,
  ButtonColor,
  color,
  href
}) => {
  const borderClass =
    color === 'primary-200' ? 'border-primary-200' : 'border-secondary-200'
  const textClass =
    ButtonColor === 'primary-100' ? 'text-primary-100' : 'text-secondary-100'
  const borderBtnClass =
    ButtonColor === 'primary-100'
      ? 'border-primary-100'
      : 'border-secondary-100'

  return (
    <div
      className={`border-2 ${borderClass} p-7 md:p-12 rounded-lg flex-col items-center`}
    >
      <Image
        src={logo}
        alt={`${subsidiary} logo`}
        className='mb-4'
        width={217}
        height={78}
      />
      <h3 className='text-5xl font-normal mb-5 mt-11'>
        Nimble<span className={textClass}>{subsidiary}</span>
      </h3>
      <p className='text-base font-light mb-6'>{description}</p>
      <Button cta='Learn More' borderColor={borderBtnClass} href={href} />
    </div>
  )
}

export default ServiceCard
