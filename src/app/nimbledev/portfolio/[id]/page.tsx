'use client'
import Button from '@/components/Button'
import Clientscount from '@/components/Clientscount'
import Container from '@/components/Container'
import Section from '@/components/Section'
import { projects } from '@/mockData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const clientImages = ['/client-image.svg']

interface Project {
  challenges: any
  title?: string
  company?: string
  date?: string
  tools?: React.ReactNode[]
  bgImage?: string
  id?: string
  images?: string[]
}

const PortfolioDetailsPage = ({ params }: { params: { id: string } }) => {
  const portfolioDetailsData = projects.find(
    (project: Project) => project.id == params.id
  )
  const borderGradientStyle = `bg-custom-diagonal-gradient border-t border-l border-r border-primary-200 rounded-tl-2xl rounded-tr-2xl`
  return (
    <>
      <Section classname="py-8 md:py-24">
        <Container>
          <div className="flex flex-col items-center justify-center">
            <div className="md:mb-3 text-sm tracking-wider">
              <span className="">{portfolioDetailsData?.date}</span> |{' '}
              <span className="text-[#7F7F7F]">
                {portfolioDetailsData?.company?.toUpperCase()}
              </span>
            </div>

            <h2 className="gradient-text font-bold w-[80%] mb-20 text-center md:mb-20">
              {portfolioDetailsData?.title}
            </h2>
            {portfolioDetailsData?.images &&
              portfolioDetailsData.images.length > 0 && (
                <div className="w-full mb-8">
                  <Image
                    src={portfolioDetailsData.images[0]}
                    width={1000}
                    height={500}
                    layout="responsive"
                    objectFit="cover"
                    alt={portfolioDetailsData.title}
                    className="rounded-lg"
                  />
                </div>
              )}
            <div className={`${borderGradientStyle} p-4 md:p-20`}>
              <h3 className="text-4xl mb-6 text-center">
                <span className="gradient-text font-medium">Project</span>{' '}
                <span className="font-thin">Summary</span>
              </h3>
              <p className="text-xl font-light mb-14">
                {portfolioDetailsData?.summary}
              </p>

              {portfolioDetailsData?.images &&
                portfolioDetailsData.images.length > 0 && (
                  <Image
                    src={portfolioDetailsData?.images[1]}
                    width="1355"
                    height="565"
                    alt={portfolioDetailsData?.images[1]?.replace('/', '')}
                    className="mb-10 md:mb-20"
                  />
                )}

              <div className="flex flex-col-reverse md:flex-row mb-10 md:mb-20">
                <div className="w-full md:w-[50%]">
                  {portfolioDetailsData?.images &&
                    portfolioDetailsData.images.length > 0 && (
                      <Image
                        src={portfolioDetailsData?.images[2]}
                        width="500"
                        height="500"
                        alt={portfolioDetailsData?.images[2]?.replace('/', '')}
                        className="mb-10 md:mb-20"
                      />
                    )}
                </div>
                <div className="w-full md:w-[50%]">
                  <h3 className="text-4xl mb-6">
                    <span className="gradient-text font-medium">
                      Challenges
                    </span>
                  </h3>
                  {portfolioDetailsData?.challenges?.map((challenge, index) => (
                    <div className="flex items-baseline gap-8 mb-6" key={index}>
                      <Image
                        src="/checklist.svg"
                        width="25"
                        height="25"
                        alt="checklist"
                      />
                      <p className="text-xl font-light">{challenge}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* solutions  */}
              <div className="mb-10 md:mb-20">
                <h3 className="text-4xl mb-6 md:text-center">
                  <span className="gradient-text font-medium">Solutions</span>{' '}
                </h3>
                {portfolioDetailsData?.solutions?.map((sol, index) => (
                  <div className="flex items-baseline gap-8 mb-6" key={index}>
                    <Image
                      src="/checklist.svg"
                      width="25"
                      height="25"
                      alt="checklist"
                    />
                    <p className="text-xl font-light">{sol}</p>
                  </div>
                ))}
                {/* image carousel here */}
                {portfolioDetailsData?.images &&
                  portfolioDetailsData.images.length > 0 && (
                    <Image
                      src={portfolioDetailsData?.images[3]}
                      width="1355"
                      height="500"
                      alt={portfolioDetailsData?.images[3]?.replace('/', '')}
                      className="mb-10 md:mb-20"
                    />
                  )}
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="w-full md:w-[60%] my-10 flex items-center gap-2 p-4 rounded-full bg-transparent border border-[#535353] z-10">
                  <h3 className="text-xs md:text-xl py-2 px-3 mr-4 border-2 border-[#535353] bg-custom-rgba rounded-full">
                    <span className="gradient-text font-medium">
                      Technologies
                    </span>{' '}
                    <span className="font-thin">Used</span>
                  </h3>
                  <div className="flex items-center gap-4 md:gap-10 text-sm md:text-5xl">
                    {portfolioDetailsData?.tools &&
                      portfolioDetailsData?.tools.map((ToolIcon, index) => (
                        <div key={index}>{ToolIcon}</div>
                      ))}
                  </div>
                </div>
                <div className=" flex gap-8 items-center flex-col-reverse md:flex-row">
                  <Button
                    cta="Book a call"
                    href="https://calendly.com/akpjunio4real/30min"
                    blank="_blank"
                    borderColor="border-primary-100"
                  />
                  <Clientscount images={clientImages} count={1000} />
                </div>
                <Link
                  href={`${portfolioDetailsData?.website}`}
                  className="italic mt-4 md:mt-5 text-gray-400"
                  target="blank"
                >
                  Visit website: {portfolioDetailsData?.website}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default PortfolioDetailsPage
