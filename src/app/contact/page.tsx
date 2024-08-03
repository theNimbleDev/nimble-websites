import Button from '@/components/Button'
import Container from '@/components/Container'
import Section from '@/components/Section'
import { Input, Textarea } from '@nextui-org/react'
import React from 'react'

const customInputStyles = {
  label: '!text-[#ffff] pb-1 text-left',
  input: [''],
  inputWrapper: [
    'px-5 py-6 border-[#515151] mb-7',
    'focus:!ring-primary-100 focus:!border-primary-100',
    'hover:!ring-primary-100 hover:!border-primary-100'
  ]
}

const ContactPage = () => {
  const borderGradientStyle = `bg-custom-diagonal-gradient border-t border-l border-r border-primary-200 rounded-tl-2xl rounded-tr-2xl`
  return (
    <Section classname='py-8 md:py-24'>
      <Container>
        <div
          className={`flex md:p-10 md:bg-custom-diagonal-gradient md:border-t md:border-l md:border-r md:border-primary-200 rounded-tl-2xl rounded-tr-2xl md:flex-row flex-col gap-5 text-center md:text-left md:gap-10 mb-6 md:mb-28`}
        >
          <div className='flex-1'>
            <span className='uppercase text-subtext-100 text-sm  md:text-xl font-medium tracking-widest'>
              Contact Us
            </span>
            <h2 className='my-3 md:my-4 text-4xl md:text-7xl'>
              {' '}
              <span className='gradient-text font-bold'>
                Let’s talk and find
              </span>{' '}
              <span className='font-thin'>your next solution.</span>
            </h2>
          </div>
          <div className='flex-1'>
            <form action='' className={`${borderGradientStyle} p-4 md:p-8`}>
              <h2 className='mb-10 text-3xl md:text-5xl'>
                {' '}
                <span className='gradient-text font-bold'>Send Us</span>{' '}
                <span className='font-thin'>a Message</span>
              </h2>
              <div className='mb-6 md:mb-20 text-white'>
                <Input
                  type='email'
                  label='Email Address'
                  placeholder='Type email address here...'
                  labelPlacement='outside'
                  variant='bordered'
                  classNames={customInputStyles}
                  required
                />
                <Input
                  type='name'
                  label='Name'
                  placeholder='John Doe...'
                  labelPlacement='outside'
                  variant='bordered'
                  classNames={customInputStyles}
                  required
                />
                <Textarea
                  type='name'
                  label='Message'
                  placeholder='Your message'
                  labelPlacement='outside'
                  variant='bordered'
                  classNames={customInputStyles}
                />
              </div>

              <Button cta='Submit' borderColor='border-primary-100' />
            </form>
          </div>
        </div>

        <div className='border border-[#535353] py-5 px-7 md:py-8 md:px-10 rounded-3xl md:rounded-full flex flex-col md:flex-row gap-7 justify-between items-center'>
          <h2 className='text-center md:text-left text-3xl md:text-5xl mxd:text-3xl'>
            Say Hello{' '}
            <span className='text-primary-100'>info@thenimbles.com</span>
          </h2>
          <Button
            cta={`Let's talk`}
            borderColor='border-[#535353]'
            roundFull='rounded-full w-full md:w-auto'
          />
        </div>
      </Container>
    </Section>
  )
}

export default ContactPage
