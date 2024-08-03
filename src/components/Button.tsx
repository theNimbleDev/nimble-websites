import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { Button as NextButton } from '@nextui-org/react'
import Link from 'next/link'

interface ButtonProps {
  cta: string
  borderColor: string
  roundFull?: string
  href?: string
}

const Button: React.FC<ButtonProps> = ({
  cta,
  borderColor,
  roundFull,
  href
}) => {
  return (
    <Link href={href ?? ''} passHref>
      <NextButton
        variant='bordered'
        className={`flex text-sm md:text-xl text-white justify-center gap-2 items-center ${borderColor} ${roundFull ??
          'rounded-lg'} p-6 md:py-7 md:px-6`}
        endContent={<FiArrowUpRight />}
      >
        {cta}
      </NextButton>
    </Link>
  )
}

export default Button
