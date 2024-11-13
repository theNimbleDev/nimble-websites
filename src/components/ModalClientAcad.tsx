'use client'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react'
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

export default function ModalClientAcad() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Memoize eventDate so it's only calculated once
  const eventDate = useMemo(() => {
    const date = new Date()
    date.setDate(date.getDate() + (6 - date.getDay())) // Set to next Saturday
    date.setHours(10, 0, 0, 0) // 10 am
    return date
  }, [])

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  // Update time left
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = eventDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    // Start the countdown on component mount
    calculateTimeLeft()
    const timerId = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timerId)
  }, [eventDate])

  useEffect(() => {
    onOpen()
  }, [onOpen])

  return (
    <>
      <Modal backdrop='blur' isOpen={isOpen}
        onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <div className='text-black'>
              <ModalHeader className="flex flex-col gap-1">Dont Miss This Opportunity!!!</ModalHeader>
              <ModalBody>
                <Image src='/Skill-Up.png' width='1000' height='1000' alt='ss' />
              </ModalBody>
              <ModalFooter className='flex flex-col justify-center items-center'>
                <Button as='a' target='blank' href='https://docs.google.com/forms/d/1U98Vv4H7JzG9VnuPmNiH_eHfWeiJZYRQlFueMboU_Xo/edit' onPress={onClose} radius='none' className='text-white cursor-pointer bg-primary-100 font-bold w-full'>
                  REGISTER NOW
                </Button>
                <div className="mt-4 text-gray-700 text-2xl">
                  Starting in <span className="bg-green-500 text-white p-2">{timeLeft.days}d</span>  <span className="bg-black text-white p-2">{timeLeft.hours}h</span> <span className="bg-green-500 text-white p-2">{timeLeft.minutes}m</span> <span className="bg-red-500 text-white p-2">{timeLeft.seconds}s</span>
                </div>
              </ModalFooter>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
