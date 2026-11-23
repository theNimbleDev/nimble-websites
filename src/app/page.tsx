import Button from '@/components/Button'
import Container from '@/components/Container'
import Section from '@/components/Section'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | The Nimbles Group',
  description:
    'The Nimbles Group — driving innovation across technology, trade and education.'
}

export default function Home() {
  return (
    <>
      {/* A. Header / Navigation is provided by RootLayout */}
      {/* B. Hero Section */}
      <Section classname="pt-20 pb-32 md:pt-20 md:pb-32">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-brand-nearBlack mb-6 leading-tight">
              Building Businesses. Creating Possibilities.
            </h1>
            <p className="text-brand-mediumGray text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              The Nimbles Group is a forward-thinking business group driving
              innovation and creating opportunities across technology, trade and
              education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                cta="Discover Our Companies"
                variant="primary"
                href="/#companies"
              />
              <Button cta="About The Nimbles" variant="outline" href="/about" />
            </div>
          </div>
        </Container>
      </Section>

      {/* C. Introduction */}
      <Section classname="py-20 md:py-32 bg-[#D95200]">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About The Nimbles Group
            </h2>
            <p className="text-white text-lg md:text-xl mb-8 leading-relaxed">
              The Nimbles Group is the parent organisation overseeing three
              business divisions: NimbleDev, NimbleTrade and NimbleAcademy. We
              bring together innovative companies dedicated to solving today’s
              challenges with a fresh approach, prioritising economic
              sustainability and using advanced technology to tackle societal
              issues head-on.
            </p>
          </div>
        </Container>
      </Section>

      {/* D. Our Companies */}
      <Section
        classname="scroll-mt-24 py-20 md:py-32 bg-brand-offWhite"
        id="companies"
      >
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-nearBlack mb-6">
              Our Companies
            </h2>
            <p className="text-brand-mediumGray text-lg md:text-xl">
              Three business divisions operating under one corporate group.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-brand-border rounded-lg p-8 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-bold text-brand-nearBlack mb-3">
                  NimbleDev
                </h3>
                <p className="text-brand-mediumGray mb-6">
                  Technology and software solutions.
                </p>
              </div>
              <Button
                cta="Visit NimbleDev"
                variant="outline"
                href="/nimbledev"
                blank="_blank"
                className="w-full"
              />
            </div>
            <div className="bg-white border border-brand-border rounded-lg p-8 flex flex-col justify-between h-full">
              <div className="flex items-baseline gap-2">
                <h3 className="text-xl font-bold text-brand-nearBlack">
                  NimbleTrade
                </h3>
                <span className="inline-block px-3 py-1 text-xs font-semibold text-brand-orange border border-brand-orange rounded-full">
                  Coming Soon
                </span>
              </div>
              <p className="text-brand-mediumGray mb-6">Trade and commerce.</p>
              <Button
                cta="Visit NimbleTrade"
                variant="outline"
                href="/nimbletrade"
                className="w-full"
                disabled
              />
            </div>
            <div className="bg-white border border-brand-border rounded-lg p-8 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-bold text-brand-nearBlack mb-3">
                  NimbleAcademy
                </h3>
                <p className="text-brand-mediumGray mb-6">
                  Education, digital skills and professional development.
                </p>
              </div>
              <Button
                cta="Visit NimbleAcademy"
                variant="outline"
                href="/nimbleacademy"
                blank="_blank"
                className="w-full"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* E. Why The Nimbles */}
      <Section classname="py-20 md:py-32">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-nearBlack mb-12 text-center">
              Why The Nimbles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold text-brand-nearBlack mb-3">
                  Innovation
                </h3>
                <p className="text-brand-mediumGray leading-relaxed">
                  We leverage advanced technology to deliver modern solutions
                  that drive real business impact.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-nearBlack mb-3">
                  Sustainability
                </h3>
                <p className="text-brand-mediumGray leading-relaxed">
                  We prioritise economic sustainability across all our
                  divisions, creating long-term value for stakeholders.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-nearBlack mb-3">
                  Expertise
                </h3>
                <p className="text-brand-mediumGray leading-relaxed">
                  Our team brings deep experience across technology, trade and
                  education to every project we undertake.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* F. Call to Action */}
      <Section classname="py-20 md:py-32 bg-brand-nearBlack">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to work with us?
            </h2>
            <p className="text-brand-lightGray text-lg mb-10 max-w-xl mx-auto">
              Connect with The Nimbles Group to explore how our divisions can
              support your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                cta="Book a call"
                variant="primary"
                href="https://calendly.com/akpjunio4real/30min"
                blank="_blank"
              />
              <Button cta="Contact Us" variant="outline" href="/contact" dark />
            </div>
          </div>
        </Container>
      </Section>

      {/* G. Footer is provided by RootLayout */}
    </>
  )
}
