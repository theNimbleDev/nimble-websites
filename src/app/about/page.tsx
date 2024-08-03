import Banner from '@/components/Banner'
import Button from '@/components/Button'
import Clientscount from '@/components/Clientscount'
import Container from '@/components/Container'
import Section from '@/components/Section'
import TeamList from '@/components/TeamList'
import Image from 'next/image'
import React from 'react'

const teamMembers = [
  {
    first_name: 'Parton',
    last_name: 'Julian ',
    position_comp: 'CEO, theNimbles',
    imageUrl: '/teampics.svg'
  },
  {
    first_name: 'Doe',
    last_name: 'Jane ',
    position_comp: 'CTO, theNimbles',
    imageUrl: '/teampics.svg'
  },
  {
    first_name: 'Smith',
    last_name: 'John ',
    position_comp: 'COO, theNimbles',
    imageUrl: '/teampics.svg'
  }
]

const AboutPage = () => {
  return (
    <>
      <Section classname=''>
        <Container>
          <div className='about-768 flex justify-between gap-6 md:gap-24 items-center flex-col md:flex-row pt-10 pb-6 md:pt-24 md:pb-16 w-auto'>
            <div className='w-full left-768 md:w-[67%] text-center md:text-left'>
              <span className='text-subtext-100 text-sm md:text-xl font-medium tracking-widest'>
                ABOUT US{' '}
              </span>
              <h2 className='my-3 md:my-4 text-4xl md:text-7xl'>
                {' '}
                <span className='gradient-text font-bold'>
                  Shaping a Balanced and
                </span>{' '}
                <span className='font-thin'>Innovative Tomorrow.</span>
              </h2>
              <p className='text-base md:text-2xl font-light w-full mb-10 md:mb-16'>
                Our company was founded in 2023. We bring together innovative
                companies dedicated to solving today’s challenges with a fresh
                approach. We prioritize economic sustainability and use advanced
                technology to tackle societal issues head-on. Our main entities
                are NimbleDev, which pioneers tech solutions for current
                societal challenges, and NimbleTrade, ensuring a balanced
                import-export system for economic stability.
              </p>

              <div className='flex gap-8 items-center flex-col-reverse md:flex-row'>
                <Button cta='Book a call' borderColor='border-primary-100' />
                <Clientscount images={['client-image.svg']} count={1000} />
              </div>
            </div>
            <div className='w-full right-768 md:w-[46%]'>
              <Image
                src='/about_img.svg'
                width='700'
                height='800'
                alt='about_img'
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section bgClass='sectionA1Bg' classname='py-8 md:py-24'>
        <Container>
          <div className='flex md:flex-row flex-col-reverse gap-5 text-center md:text-left md:gap-20 items-center mb-6 md:mb-28'>
            <Image
              className='mb-8 md:mb-0 mxd:w-[400px]'
              src='/sec2_1.svg'
              width='540'
              height='560'
              alt='sec2_1'
            />

            <div>
              <span className='text-subtext-100 text-sm md:text-xl font-medium tracking-widest'>
                OUR <span className='text-white'>MISSION</span>
              </span>
              <h1 className='font-bold mb-8 md:mb-10 mxd:text-5xl'>THRIVE</h1>
              <p>
                Our vision is to create a sustainable future through innovation
                and strategic economic activities.
              </p>
            </div>
          </div>
          <div className='flex md:flex-row flex-col text-center md:text-left gap-5 md:gap-20 items-center'>
            <div>
              <span className='text-subtext-100 text-sm md:text-xl font-medium tracking-widest'>
                OUR <span className='text-white'>VISION</span>
              </span>
              <h1 className='font-bold mb-8 md:mb-10 mxd:text-5xl'>UNIFY</h1>
              <p>
                We unify technological advancements and trade expertise to
                address and solve modern-day challenges, ensuring a balanced and
                prosperous global economy.
              </p>
            </div>
            <Image
              className='mxd:w-[400px]'
              src='/sect2_2.svg'
              width='540'
              height='560'
              alt='sec2_2'
            />
          </div>
        </Container>
      </Section>

      <Section id='NimbleDev' bgClass='' classname='py-8 md:py-24'>
        <Container>
          <div className='flex md:flex-row flex-col gap-5 text-center md:text-left md:gap-20 mxd:gap-10 items-center mb-6 md:mb-28'>
            <div>
              <span className='text-subtext-100 text-sm uppercase md:text-xl font-medium tracking-widest'>
                Nimble<span className='text-primary-100'>dev</span>
              </span>
              <h2 className='font-normal mb-8 md:mb-10'>
                Tired of outdated solutions?
              </h2>
              <p>
                Embrace the future with our advanced software solutions designed
                to evolve with your business. We prioritize safety, scalability,
                and innovation, ensuring that our technology grows alongside
                your needs. Our commitment to excellence, integrity, and
                continuous improvement means you can trust us to provide the
                most reliable and effective solutions available.
              </p>
            </div>
            <Image
              className='mb-8 md:mb-0 mxd:w-[400px]'
              src='/section3Abg.svg'
              width='450'
              height='812'
              alt='sec2_1'
            />
          </div>
          <div className='bg-custom-diagonal-gradient border-t border-l border-r border-primary-200 rounded-tl-2xl rounded-tr-2xl flex items-center justify-center flex-col text-center py-7 px-2 md:pt-20 md:px-28 md:pb-0'>
            <h2 className='font-normal mb-4 md:mb-5 w-full md:w-[80%]'>
              Looking to Elevate Your{' '}
              <span className='font-bold'>Digital Presence?</span>
            </h2>
            <p className='w-full md:w-[90%] mb-8 md:mb-10'>
              Our innovative approach empowers your business to thrive in a
              competitive digital landscape, creating a lasting impact and
              driving sustainable growth.
            </p>
            <Button cta='Learn more' borderColor='border-primary-100' />
            <Image
              className='mt-3 md:mb-0'
              src='/barcode.svg'
              width='1180'
              height='208'
              alt='sec2_1'
            />
          </div>
        </Container>
      </Section>

      <Section
        id='NimbleTrade'
        bgClass='sectionA2Bg'
        classname='py-12 md:pt-28 mxd:pb-2 md:pb-0'
      >
        <Container>
          <div>
            <span className='text-subtext-100 text-center block text-sm uppercase md:text-xl font-medium tracking-widest'>
              Nimble<span className='text-secondary-100'>Trade</span>
            </span>
            <h2 className='font-light text-primary-300 text-center mb-7 md:mb-20 w-full'>
              Global Growth, Balanced Trade
            </h2>

            <div className='flex md:flex-row flex-col gap-5 text-center md:text-left md:gap-20 mxd:gap-10 items-center mb-6 md:mb-28'>
              <Image
                className='mb-8 md:mb-0 mxd:w-[400px] h-auto'
                src='/tradeimg.svg'
                width='600'
                height='812'
                alt='sec2_1'
              />
              <div className='text-primary-300'>
                <h2 className='font-normal mb-8 md:mb-10'>
                  Explore your next solution with us{' '}
                </h2>
                <p className='mb-8 md:mb-11'>
                  We prioritize economic sustainability by ensuring a healthy
                  balance of import and export activities. Our goal is to create
                  a stable and balanced global market, leveraging our extensive
                  trade expertise to foster long-term growth and stability.
                </p>
                <div className='flex justify-center md:justify-start'>
                  <Button
                    cta='Book a call'
                    borderColor='border-secondary-100 text-primary-300'
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section classname='py-10 md:pb-10 md:pt-0'>
        <Container>
          <h2 className='font-normal text-center mxd:mt-8 mb-8 md:mb-10'>
            Meet <span className='text-primary-100'>The</span> Team
          </h2>
          <TeamList teamMembers={teamMembers} />

          <Banner
            title1='Explore your next'
            title2='solution with us'
            subtext='Creating a New world'
          />
        </Container>
      </Section>
    </>
  )
}

export default AboutPage
