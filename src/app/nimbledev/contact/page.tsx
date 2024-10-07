import Button from '@/components/Button'
import Container from '@/components/Container'
import Section from '@/components/Section'
import ContactForm from '@/components/ContactForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Nimbledev',
  description: 'Explore your next solution with us.'
}

const ContactPage = () => {
  const borderGradientStyle = `bg-custom-diagonal-gradient border-t border-l border-r border-primary-200 rounded-tl-2xl rounded-tr-2xl`

  return (
    <>
      <Section classname="py-8 md:py-24">
        <Container>
          <div className={`flex md:p-10 ${borderGradientStyle} md:flex-row flex-col gap-5 text-center md:text-left md:gap-10 mb-6 md:mb-28`}>
            <div className="flex-1">
              <span className="uppercase text-subtext-100 text-sm  md:text-xl font-medium tracking-widest">
                Contact Us
              </span>
              <h2 className="my-3 md:my-4 text-4xl md:text-7xl">
                <span className="gradient-text font-bold">Explore your next {''}</span>
                <span className="font-thin">solution with us.</span>
              </h2>
            </div>
            <div className="flex-1">
              {/* ContactForm component */}
              <ContactForm />
            </div>
          </div>

          <div className="border border-[#535353] py-5 px-7 md:py-8 md:px-10 rounded-3xl md:rounded-full flex flex-col md:flex-row gap-7 justify-between items-center">
            <h2 className="text-center md:text-left text-2xl md:text-5xl mxd:text-3xl">
              Say Hello <span className="text-primary-100">thenimbles24@gmail.com</span>
            </h2>
            <Button
              cta={`Let's talk`}
              href="https://calendly.com/akpjunio4real/30min"
              blank="_blank"
              borderColor="border-[#535353]"
              roundFull="rounded-full w-full md:w-auto"
            />
          </div>
        </Container>
      </Section>
    </>
  )
}

export default ContactPage
