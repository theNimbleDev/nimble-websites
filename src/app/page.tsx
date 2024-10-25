import Button from '@/components/Button'
import Container from '@/components/Container'
import LogoSlider from '@/components/LogoSlider'
import Clientscount from '@/components/Clientscount'
import Section from '@/components/Section'
import Image from 'next/image'
import ServiceCard from '@/components/ServiceCard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | Nimblesgrp',
  description: 'Leading Sustainable Innovation in Technology and Trade'
}

const clientImages = ['client-image.svg']

export default function Home() {
  return (
    <>
      <Section bgClass="sectionH1Bg" classname="min-h-screen">
        <Container>
          <div className="flex flex-col items-center justify-center pt-10 pb-6 md:pt-28 md:pb-16 w-auto">
            <h1 className="text-center font-medium w-full md:w-4/5 mb-6 ">
              Leading Sustainable Innovation in Technology and Trade
            </h1>
            <p className="text-center font-light w-full md:w-4/5 mb-10 md:mb-28">
              Together, we strive to revolutionize industries through
              technological advancement and sustainable development.
            </p>

            <div className="flex gap-8 items-center flex-col-reverse md:flex-row mb-0 md:mb-14">
              <Button
                cta="Book a call"
                href="https://calendly.com/akpjunio4real/30min"
                blank="_blank"
                borderColor="border-primary-100"
              />
              <Clientscount images={clientImages} count={1000} />
            </div>

            <LogoSlider />
          </div>
        </Container>
      </Section>

      {/* section 2 */}
      <Section
        bgClass="sectionH2Bg"
        classname="pt-24 flex flex-col items-center"
      >
        <Container>
          <div className="">
            <span className="text-subtext-100 text-center mb-4 md:mb-7 block text-sm md:text-2xl font-medium tracking-widest">
              SERVICES
            </span>
            <h2 className="mb-5 text-center">
              {' '}
              <span className="gradient-text font-medium">
                Empowering Your
              </span>{' '}
              <span className="font-normal">Future with Us</span>
            </h2>
            <p className="text-center w-full px-0 md:px-8 mb-8 font-light md:mb-20 inline-block">
              We pride ourselves on offering a comprehensive suite of services,
              ensuring that our clients receive unparalleled support and value
              through the Nimbledev and NimbleTrade.
            </p>

            <div className="flex flex-col md:flex-row my-6 md:mt-5 md:mb-20 gap-12">
              <ServiceCard
                logo="/NimbleDev.svg"
                subsidiary="Dev"
                description="Our tech-driven arm, specializing in advanced software development and innovative technological solutions, helps businesses enhance productivity and streamline operations."
                color="primary-200"
                ButtonColor="primary-100"
                href="/about#NimbleDev"
              />

              <ServiceCard
                logo="/NimbleTrade.svg"
                subsidiary="Trade"
                description="Our global trade division promotes economic sustainability by balancing import and export activities. By fostering strong trade relationships and supporting local economies, we ensure a healthy, dynamic global market"
                color="secondary-200"
                ButtonColor="secondary-100"
                href="/about#NimbleTrade"
              />

              <ServiceCard
                logo=""
                subsidiary="Academy"
                description="Our programs equip you with the essential digital skills needed in today’s world. We focus on personal growth and real-world impact, inspiring continuous learning to empower your journey toward meaningful career success."
                color="primary-100"
                ButtonColor="primary-100"
                href="/nimbleacademy"
                target='true'
              />
            </div>

            <div className="flex gap-6 md:gap-24 items-center flex-col md:flex-row">
              <div className="w-full">
                <span className="text-subtext-100 text-sm md:text-xl font-medium tracking-widest">
                  ABOUT US{' '}
                </span>
                <h2 className="my-3 md:my-4">
                  {' '}
                  <span className="gradient-text font-medium">
                    Driving Change,
                  </span>{' '}
                  <span className="font-normal">Innovating Futures.</span>
                </h2>
                <p className="mb-8 md:mb-20 font-light inline-block">
                  We are more than just a company, we are a catalyst for
                  positive change. Whether you’re aiming to enhance your
                  business with state-of-the-art technology or implement
                  sustainable practices, we are here to help you achieve your
                  objectives.
                </p>

                <Button
                  href="/about"
                  cta="Read More"
                  borderColor="border-primary-100"
                />
              </div>
              {/* Image container component */}
              <div className="w-full">
                <Image
                  src="/about_sect_img.svg"
                  width="720"
                  height="923"
                  alt="about_sect_img"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* section 3 */}
      <Section
        bgClass="sectionH3Bg"
        classname="pt-24 flex flex-col items-center"
      >
        <Container>
          <div className="">
            {/* <TestimonialSlider slides={testimonial} /> */}
            <div className="flex gap-6 md:gap-24 items-center flex-col md:flex-row">
              <div className="w-full">
                <h2 className="my-3 md:my-6 text-3xl md:text-5xl">
                  {' '}
                  <span className="gradient-text font-medium">
                    Discover How We Transform
                  </span>{' '}
                  <span className="font-normal">
                    Challenges into Opportunities.
                  </span>
                </h2>
                <p className="mb-8 md:mb-20 font-light inline-block">
                  We foster sustainable development and global harmony. Explore
                  how we&#39;re shaping a brighter, more balanced future for
                  all.
                </p>

                <Button
                  cta="Book a call"
                  href="https://calendly.com/akpjunio4real/30min"
                  blank="_blank"
                  borderColor="border-primary-100"
                />
              </div>
              {/* Image container component */}
              <div className="w-full">
                <Image
                  src="/transform.svg"
                  width="720"
                  height="923"
                  alt="transform"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
