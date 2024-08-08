import React from 'react'
import Image from 'next/image'
import Button from './Button'

interface ServiceCardProps {
  logo: string
  subsidiary?: string
  service?: string
  description: string
  color: string
  ButtonColor: string
  href?: string
  nimbledev?: boolean
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  logo,
  subsidiary,
  description,
  ButtonColor,
  color,
  href,
  nimbledev,
  service
}) => {
  const borderClass =
    color === 'primary-200' ? 'border-primary-200' : 'border-secondary-200'
  const textClass =
    ButtonColor === 'primary-100' ? 'text-primary-100' : 'text-secondary-100'
  const borderBtnClass =
    ButtonColor === 'primary-100'
      ? 'border-primary-100'
      : 'border-secondary-100'

  // Extract firstText and lastText from service
  let firstText = ''
  let lastText = ''
  const keywords = ['Outsourcing', 'Software', 'Mobile Apps', 'Product']

  if (service) {
    for (let keyword of keywords) {
      if (service.includes(keyword)) {
        firstText = keyword
        lastText = service.replace(keyword, '').trim()
        break
      }
    }
  }

  return (
    <div
      className={`bg-custom-diagonal-gradient border-2 ${borderClass} p-7 md:p-12 rounded-2xl flex-col items-center`}
    >
      <Image
        src={logo}
        alt={`${subsidiary} logo`}
        className='mb-4'
        width={nimbledev ? 145 : 217}
        height={nimbledev ? 145 : 78}
      />

      {nimbledev ? (
        <h3 className='text-4xl mb-5 mt-11'>
          <span className='gradient-text font-medium'>{firstText}</span>{' '}
          <span className='font-thin'>{lastText}</span>
        </h3>
      ) : (
        <h3 className='text-5xl font-normal mb-5 mt-11'>
          <span className={textClass}>Nimble</span>{subsidiary}
        </h3>
      )}

      <p className='text-base font-light mb-6'>{description}</p>
      <Button cta='Learn More' borderColor={borderBtnClass} href={href} />
    </div>
  )
}

export default ServiceCard
