import Button from '@/components/Button'
import Container from '@/components/Container'
import Section from '@/components/Section'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | NimbleDev',
  description:
    'NimbleDev services - custom software development, engineering outsourcing, and UI/UX product design.'
}

const ServicesPage = () => {
  return (
    <>
      {/* Hero */}
      <Section classname="pt-28 md:pt-36 pb-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#D95200] font-semibold tracking-widest text-xs uppercase block mb-6">
              Services
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#1D1D1D] mb-8 leading-tight">
              Software That Works.
            </h1>
            <p className="text-[#404040] text-lg md:text-xl mb-12 leading-relaxed">
              We build custom software, engineer scalable digital products, and
              deliver UI/UX product design that helps businesses solve problems
              and grow.
            </p>
            <Button
              cta="Contact Us"
              variant="primary"
              href="/contact"
              className="mx-auto"
            />
          </div>
        </Container>
      </Section>

      {/* Services */}
      <Section classname="py-20 md:py-32 bg-[#FAFAFA]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-[rgba(29,29,29,0.1)] rounded-lg p-8 flex flex-col h-full">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-[#D95200] font-bold text-xl">01</span>
                <h3 className="text-xl font-bold text-[#1D1D1D]">
                  Software Development
                </h3>
              </div>
              <p className="text-[#404040] leading-relaxed">
                Custom software solutions tailored to client needs, leveraging
                the latest technologies and methodologies for high performance
                and scalability.
              </p>
            </div>
            <div className="bg-white border border-[rgba(29,29,29,0.1)] rounded-lg p-8 flex flex-col h-full">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-[#D95200] font-bold text-xl">02</span>
                <h3 className="text-xl font-bold text-[#1D1D1D]">
                  Engineering Outsourcing
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
                  UI/UX Product Design
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
              <Button cta="Contact Us" variant="primary" href="/contact" />
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default ServicesPage
