import Button from '@/components/Button'
import Container from '@/components/Container'
import Section from '@/components/Section'
import ProjectList from '@/components/ProjectList'
import { projects } from '@/mockData'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio | NimbleDev',
  description:
    'NimbleDev portfolio - our software development and engineering projects.'
}

const PortfolioPage = () => {
  return (
    <>
      <Section classname="pt-28 md:pt-36 pb-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#D95200] font-semibold tracking-widest text-xs uppercase block mb-6">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#1D1D1D] mb-8 leading-tight">
              Our Work.
            </h1>
            <p className="text-[#404040] text-lg md:text-xl mb-12 leading-relaxed">
              A selection of software products, engineering solutions, and
              digital experiences we&apos;ve helped bring to life.
            </p>
          </div>
        </Container>
      </Section>

      <Section classname="py-20 md:py-32 bg-[#FAFAFA]">
        <Container>
          <ProjectList projects={projects} />
        </Container>
      </Section>

      <Section classname="py-20 md:py-32 bg-[#1D1D1D]">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-6">
              Ready to build something?
            </h2>
            <p className="text-[#E5E5E5] text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Have a software project or engineering challenge? Let&apos;s talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button cta="Contact Us" variant="primary" href="/contact" />
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default PortfolioPage
