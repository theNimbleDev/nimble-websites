'use client'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { Button as NextButton } from '@nextui-org/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface ButtonProps {
  cta: string
  borderColor: string
  roundFull?: string
  href?: string
  blank?: string
}

const Button: React.FC<ButtonProps> = ({
  cta,
  borderColor,
  roundFull,
  href,
  blank
}) => {
  const router = useRouter()
  const handleClick = () => {
    router.push(`${href}`)
  }
  const render = blank ? (
    <Link href={href ?? ''} passHref target={blank}>
      <NextButton
        variant="bordered"
        className={`flex text-sm md:text-xl text-white justify-center gap-2 items-center ${borderColor} ${
          roundFull ?? 'rounded-lg'
        } p-6 md:py-7 md:px-6`}
        endContent={<FiArrowUpRight />}
      >
        {cta}
      </NextButton>
    </Link>
  ) : (
    <NextButton
      variant="bordered"
      className={`flex text-sm md:text-xl text-white justify-center gap-2 items-center ${borderColor} ${
        roundFull ?? 'rounded-lg'
      } p-6 md:py-7 md:px-6`}
      endContent={<FiArrowUpRight />}
      onClick={handleClick}
    >
      {cta}
    </NextButton>
  )

  return render
}

export default Button
