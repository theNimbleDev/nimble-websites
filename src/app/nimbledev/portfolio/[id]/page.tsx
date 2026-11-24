import Button from '@/components/Button'
import Container from '@/components/Container'
import Section from '@/components/Section'
import { projects } from '@/mockData'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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

const projectIds = projects.map((p: Project) => p.id)

export const metadata: Metadata = {
  title: 'Portfolio Details | Nimbledev',
  description: 'Our projects'
}

const PortfolioDetailsPage = async ({
  params
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params
  const portfolioDetailsData = projects.find(
    (project: Project) => project.id == id
  )
  const currentIndex = projectIds.indexOf(id)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject =
    currentIndex < projectIds.length - 1 ? projects[currentIndex + 1] : null
  const borderGradientStyle = `bg-custom-diagonal-gradient border-t border-l border-r border-primary-200 rounded-tl-2xl rounded-tr-2xl`
  return (
    <>
      <Section classname="py-8 md:py-24">
        <Container>
          {/* Back button at top - left aligned and sticky */}
          <div className="w-full mb-8 md:mb-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-brand-orange hover:text-brand-orange/80 hover:bg-brand-orange/5 rounded-full border border-brand-orange/20 transition-all sticky top-20 z-20 bg-white/95 backdrop-blur-sm"
            >
              ← Back to Portfolio
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="md:mb-3 text-sm tracking-wider">
              <span className="">{portfolioDetailsData?.date}</span> |{' '}
              <span className="text-[#7F7F7F]">
                {portfolioDetailsData?.company?.toUpperCase()}
              </span>
            </div>

            <h2 className="gradient-text font-bold w-[80%] mb-20 text-center md:mb-20 text-xl md:text-4xl">
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
                    className="rounded-lg object-cover"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              )}
            <div className={`${borderGradientStyle} p-4 md:p-20`}>
              <h3 className="text-4xl mb-6 text-center">
                <span className="gradient-text font-medium">Project</span>{' '}
                <span className="font-thin">Summary</span>
              </h3>
              <p className="text-base font-light mb-14 md:text-xl">
                {portfolioDetailsData?.summary}
              </p>

              {portfolioDetailsData?.images &&
                portfolioDetailsData.images.length > 0 && (
                  <Image
                    src={portfolioDetailsData?.images[1]}
                    width={1355}
                    height={565}
                    alt={portfolioDetailsData?.images[1]?.replace('/', '')}
                    className="mb-10 md:mb-20 object-cover"
                    style={{ objectFit: 'cover' }}
                  />
                )}

              {portfolioDetailsData?.challenges && (
                <div className="flex flex-col-reverse md:flex-row mb-10 md:mb-20">
                  <div className="w-full md:w-[50%]">
                    {portfolioDetailsData?.images &&
                      portfolioDetailsData.images.length > 0 && (
                        <Image
                          src={portfolioDetailsData?.images[2]}
                          width={500}
                          height={500}
                          alt={portfolioDetailsData?.images[2]?.replace(
                            '/',
                            ''
                          )}
                          className="mb-10 md:mb-20 object-cover"
                          style={{ objectFit: 'cover' }}
                        />
                      )}
                  </div>
                  <div className="w-full md:w-[50%]">
                    <h3 className="text-xl md:text-4xl mb-6">
                      <span className="gradient-text font-medium">
                        Challenges
                      </span>
                    </h3>
                    {portfolioDetailsData?.challenges?.map(
                      (challenge, index) => (
                        <div
                          className="flex items-baseline gap-8 mb-6"
                          key={index}
                        >
                          <Image
                            src="/checklist.svg"
                            width="25"
                            height="25"
                            alt="checklist"
                          />
                          <p className="text-base font-light md:text-xl">
                            {challenge}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* solutions  */}
              {portfolioDetailsData?.solutions && (
                <div className="mb-10 md:mb-20">
                  <h3 className="text-xl md:text-4xl mb-6 md:text-center">
                    <span className="gradient-text font-medium">
                      Solutions
                    </span>{' '}
                  </h3>
                  {portfolioDetailsData?.solutions?.map((sol, index) => (
                    <div className="flex items-baseline gap-8 mb-6" key={index}>
                      <Image
                        src="/checklist.svg"
                        width="25"
                        height="25"
                        alt="checklist"
                      />
                      <p className="text-base font-light md:text-xl">{sol}</p>
                    </div>
                  ))}
                  {/* image carousel here */}
                  {portfolioDetailsData?.images &&
                    portfolioDetailsData.images.length > 0 && (
                      <Image
                        src={portfolioDetailsData?.images[3]}
                        width={1355}
                        height={500}
                        alt={portfolioDetailsData?.images[3]?.replace('/', '')}
                        className="mb-10 md:mb-20 object-cover"
                        style={{ objectFit: 'cover' }}
                      />
                    )}
                </div>
              )}
              <div className="flex flex-col items-center justify-center">
                <div className="w-full md:w-[60%] my-10 flex items-center gap-2 p-4 rounded-full border border-[#d9d9d9]/70 bg-[#2d2d2d] z-10 shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
                  <h3 className="text-xs md:text-xl py-2 px-3 mr-4 border border-[#2b2b2b] bg-[#3c3c3c] rounded-full text-[#f97316]">
                    <span className="font-medium">Technologies</span>{' '}
                    <span className="font-light">Used</span>
                  </h3>
                  <div className="flex items-center gap-4 md:gap-10 text-sm md:text-5xl">
                    {portfolioDetailsData?.tools &&
                      portfolioDetailsData?.tools.map((ToolIcon, index) => (
                        <div
                          key={index}
                          className="flex h-10 w-10 items-center justify-center rounded-full text-white md:h-14 md:w-14"
                        >
                          {ToolIcon}
                        </div>
                      ))}
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 my-10">
                  <Button
                    cta="Book a call"
                    variant="primary"
                    href="https://calendly.com/akpjunio4real/30min"
                    blank="_blank"
                  />
                </div>
                <Link
                  href={`${portfolioDetailsData?.website}`}
                  className="italic mt-4 md:mt-5 text-gray-400"
                  target="blank"
                >
                  Visit website: {portfolioDetailsData?.website}
                </Link>
              </div>

              {/* Next/Prev project navigation cards */}
              <div className="w-full flex justify-between gap-8 mt-24 md:mt-32 px-4 md:px-0">
                {/* Previous Project Card - always on left */}
                {prevProject ? (
                  <Link
                    href={`/portfolio/${prevProject.id}`}
                    className="flex flex-col items-center gap-3 w-full max-w-xs"
                  >
                    <div className="w-full h-48 rounded-xl overflow-hidden border border-[#E5E5E5] bg-gray-50 flex items-center justify-center relative group">
                      <Image
                        src={prevProject.bgImage}
                        width={400}
                        height={300}
                        alt={prevProject.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="text-center">
                      <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Previous Project
                      </span>
                      <h4 className="text-base font-semibold text-[#1D1D1D] mt-1 truncate w-full">
                        {prevProject.title}
                      </h4>
                    </div>
                    <span className="text-gray-400 text-sm">←</span>
                  </Link>
                ) : null}

                {/* Next Project Card - always on right */}
                {nextProject ? (
                  <Link
                    href={`/portfolio/${nextProject.id}`}
                    className="flex flex-col items-center gap-3 w-full max-w-xs ml-auto"
                  >
                    <div className="w-full h-48 rounded-xl overflow-hidden border border-[#E5E5E5] bg-gray-50 flex items-center justify-center relative group">
                      <Image
                        src={nextProject.bgImage}
                        width={400}
                        height={300}
                        alt={nextProject.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="text-center">
                      <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Next Project
                      </span>
                      <h4 className="text-base font-semibold text-[#1D1D1D] mt-1 truncate w-full">
                        {nextProject.title}
                      </h4>
                    </div>
                    <span className="text-gray-400 text-sm">→</span>
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default PortfolioDetailsPage
