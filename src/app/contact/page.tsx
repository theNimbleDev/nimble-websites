import Button from '@/components/Button'
import Container from '@/components/Container'
import Section from '@/components/Section'
import ContactForm from '@/components/ContactForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | The Nimbles Group',
  description:
    'Get in touch with The Nimbles Group — technology, trade and education.'
}

const ContactPage = () => {
  return (
    <>
      <Section classname="py-20 md:py-32 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#D95200] font-semibold tracking-widest text-xs uppercase block mb-6">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1D1D1D] mb-6">
              Let’s talk and find your next solution.
            </h2>
            <p className="text-[#404040] text-lg mb-12 leading-relaxed">
              Have a question or want to explore how our divisions can support
              your goals? Send us a message and we’ll get back to you.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>
            <div className="bg-[#FAFAFA] border border-[rgba(29,29,29,0.1)] rounded-lg p-8 md:p-12">
              <h3 className="text-xl font-bold text-[#1D1D1D] mb-6">
                Get in Touch
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="text-[#D95200]" aria-hidden="true">
                    📧
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#1D1D1D]">
                      Email
                    </p>
                    <p className="text-sm text-[#404040]">
                      thenimbles24@gmail.com
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#D95200]" aria-hidden="true">
                    📍
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#1D1D1D]">
                      Address
                    </p>
                    <p className="text-sm text-[#404040]">
                      3, Oreofe Street, Off Obasanjo Farm Eledi, Ota, Ogun State
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <Button
                  cta="Book a call"
                  variant="primary"
                  href="https://calendly.com/akpjunio4real/30min"
                  blank="_blank"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default ContactPage
