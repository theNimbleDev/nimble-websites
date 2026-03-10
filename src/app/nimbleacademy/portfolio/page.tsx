import Container from '@/components/Container'
import Section from '@/components/Section'
import { Metadata } from 'next'
import Image from 'next/image'
import VideoTestimonials from '@/components/VideoTestimonials'
import CreativeHighlights from '@/components/CreativeHighlight'
import Experts from '@/components/Experts'

export const metadata: Metadata = {
  title: 'portfolio | NimbleAcademy',
  description: 'Transform Your Future with NimbleAcademy!'
}

export default function portfolio() {
  return (
    <>
      <Section classname="py-16 md:py-28 text-xl">
        {/* <ModalClientAcad /> */}
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center">
              <div className="mb-4 justify-center flex">
                <Image
                  src="/Vector1.svg"
                  width="60"
                  height="20"
                  alt="decorative vector"
                  className="mb-6"
                />
              </div>

              <h2 className="mb-6 text-start">
                <span className="text-academy-black font-bold text-4xl lg:text-5xl leading-tight">
                  From Curiosity to
                </span>
                <br />
                <span className="gradient-text font-bold text-4xl lg:text-5xl leading-tight">
                  Confidence
                </span>
              </h2>

              <p className="text-gray-600 mb-8 font-light text-lg lg:text-xl leading-relaxed max-w-screen-md">
                NimbleAcademy is a place where curiosity meets purpose. <br />
                Our community of young learners, innovators, and creators <br />{' '}
                are shaping their future with every step they take.
              </p>
            </div>

            {/* Right Column - Image/Video */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  className="w-full h-auto object-cover"
                  src="/frameport.svg"
                  width="600"
                  height="400"
                  alt="Students learning together"
                />
              </div>
            </div>
          </div>
          <div className="mb-4 justify-center flex">
            <Image
              src="/group2.svg"
              width="60"
              height="20"
              alt="decorative vector"
            />
          </div>
        </Container>
      </Section>
      <CreativeHighlights />
      <div className="mt-20">
        <VideoTestimonials />
      </div>
      <div className="mt-20">
        <Experts />
      </div>
    </>
  )
}
