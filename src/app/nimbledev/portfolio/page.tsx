import React from 'react'
import Section from '@/components/Section'
import Container from '@/components/Container'
import Button from '@/components/Button'
import Clientscount from '@/components/Clientscount'
import ProjectList from '@/components/ProjectList'
import { projects } from '@/mockData'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio | Nimbledev',
  description: 'Our projects'
}

const clientImages = ['/client-image.svg']

const AboutPage = () => {
  return (
    <Section classname="py-16 md:py-20">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <div className="mb-2 md:mb-3 text-center text-subtext-100 text-sm md:text-2xl font-medium tracking-widest block">
            <span className="text-gray-400">PORTFOLIO </span>
            <span className="text-white font-bold">CATALOGUE</span>
          </div>

          <h2 className="gradient-text font-bold mb-20 text-center md:mb-20">
            Our Projects
          </h2>
          <ProjectList projects={projects} />
          <div className=" flex gap-8 items-center flex-col-reverse md:flex-row">
            <Button
              cta="Book a call"
              href="https://calendly.com/akpjunio4real/30min"
              blank="_blank"
              borderColor="border-primary-100"
            />
            <Clientscount images={clientImages} count={1000} />
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default AboutPage
