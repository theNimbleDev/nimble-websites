import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { Button as NextButton } from '@nextui-org/react'

interface ButtonProps {
  cta: string
  borderColor: string
}

const Button: React.FC<ButtonProps> = ({ cta, borderColor }) => {
  return (
    <NextButton
      variant='bordered'
      className={`flex text-sm md:text-xl text-white justify-center gap-2 items-center ${borderColor} rounded-lg p-6 md:py-7 md:px-6`}
      endContent={<FiArrowUpRight />}
    >
      {cta}
    </NextButton>
  )
}

export default Button
