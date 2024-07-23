import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { Button as NextButton } from '@nextui-org/react'

const Button = () => {
  return (
    <NextButton
      variant='bordered'
      className='flex text-xl text-white justify-center gap-2 items-center border-primary-100 rounded-lg py-7 px-6'
      endContent={<FiArrowUpRight />}
    >
      Book a call
    </NextButton>
  )
}

export default Button
