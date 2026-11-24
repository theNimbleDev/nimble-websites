import Button from '@/components/Button'
import Container from '@/components/Container'
import Section from '@/components/Section'
import TeamList from '@/components/TeamList'
import { Metadata } from 'next'
import { teamMembers } from '@/mockData'

export const metadata: Metadata = {
  title: 'About Us | NimbleDev',
  description:
    'NimbleDev - engineering digital solutions through software development, engineering outsourcing, and UI/UX product design.'
}

const AboutPage = () => {
  return (
    <>
      {/* Hero */}
      <Section classname="pt-28 md:pt-36 pb-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#D95200] font-semibold tracking-widest text-xs uppercase block mb-6">
              About NimbleDev
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#1D1D1D] mb-8 leading-tight">
              Technology That Delivers.
            </h1>
            <p className="text-[#404040] text-lg md:text-xl mb-12 leading-relaxed">
              NimbleDev is the technology arm of the Nimbles Group. We engineer
              scalable digital solutions, build custom software, and deliver
              UI/UX product design that helps businesses solve problems and
              grow.
              <br />
              <br />
              From engineering outsourcing to full product development, we
              combine technical excellence with practical business outcomes.
            </p>
            <Button
              cta="View Services"
              variant="primary"
              href="/services"
              className="mx-auto"
            />
          </div>
        </Container>
      </Section>

      {/* Our Approach */}
      <Section classname="py-20 md:py-32 bg-[#FAFAFA]">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1D] mb-6">
              Our Approach
            </h2>
            <p className="text-[#404040] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We believe technology should serve people - not the other way
              around. Every line of code we write is guided by clarity,
              reliability, and real-world impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-[rgba(29,29,29,0.1)] rounded-lg p-8 flex flex-col h-full">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-[#D95200] font-bold text-xl">01</span>
                <h3 className="text-xl font-bold text-[#1D1D1D]">
                  Custom Software
                </h3>
              </div>
              <p className="text-[#404040] leading-relaxed">
                Bespoke software solutions built around your business needs, not
                the other way around.
              </p>
            </div>
            <div className="bg-white border border-[rgba(29,29,29,0.1)] rounded-lg p-8 flex flex-col h-full">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-[#D95200] font-bold text-xl">02</span>
                <h3 className="text-xl font-bold text-[#1D1D1D]">
                  Engineering Teams
                </h3>
              </div>
              <p className="text-[#404040] leading-relaxed">
                Pre-vetted engineers who integrate with your team and accelerate
                delivery.
              </p>
            </div>
            <div className="bg-white border border-[rgba(29,29,29,0.1)] rounded-lg p-8 flex flex-col h-full">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-[#D95200] font-bold text-xl">03</span>
                <h3 className="text-xl font-bold text-[#1D1D1D]">
                  Product Design
                </h3>
              </div>
              <p className="text-[#404040] leading-relaxed">
                User-centered design that makes complex technology feel simple
                and intuitive.
              </p>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <Button
              cta="View Portfolio"
              variant="outline"
              href="/portfolio"
              className="mx-auto"
            />
          </div>
        </Container>
      </Section>

      <Section classname="py-20 md:py-32 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1D] mb-4">
              Meet the Team
            </h2>
          </div>
          <TeamList teamMembers={teamMembers} />
        </Container>
      </Section>

      {/* CTA */}
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
              <Button cta="View Services" variant="primary" href="/services" />
              <Button cta="Contact Us" variant="outline" href="/contact" dark />
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default AboutPage
