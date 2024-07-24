'use client'
import Button from '@/components/Button'
import Container from '@/components/Container'
import LogoSlider from '@/components/LogoSlider'
import styles from './page.module.css'

export default function Home () {
  return (
    <>
      <section className={`${styles.section} w-full min-h-screen`}>
        <Container>
          <div className='flex flex-col items-center justify-center pt-10 pb-6 md:pt-28 md:pb-16 w-auto'>
            <h1 className='text-center font-bold w-full md:w-4/5 mb-6 '>
              Leading Sustainable Innovation in Technology and Trade
            </h1>
            <p className='text-center w-full md:w-4/5 mb-16 md:mb-28'>
              Together, we strive to revolutionize industries through
              technological advancement and sustainable development.
            </p>

            <div className='flex gap-8'>
              <Button cta='Book a call' />
              {/* The satisfied clients component goes here */}
            </div>
            <LogoSlider />
          </div>
        </Container>
      </section>
    </>
  )
}
