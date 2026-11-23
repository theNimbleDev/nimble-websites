import Button from '@/components/Button'
import Container from '@/components/Container'
import Section from '@/components/Section'
import Image from 'next/image'
import { bodMembers } from '@/mockData'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | The Nimbles Group',
  description:
    'Nimbles Group - building businesses, creating possibilities through technology, education, and trade.'
}

const AboutPage = () => {
  return (
    <>
      {/* 1. Editorial Hero */}
      <Section classname="pt-28 md:pt-36 pb-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#D95200] font-semibold tracking-widest text-xs uppercase block mb-6">
              About The Nimbles Group
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#1D1D1D] mb-8 leading-tight">
              Driven by Purpose. United by Innovation.
            </h1>
            <p className="text-[#404040] text-lg md:text-xl mb-12 leading-relaxed">
              Nimbles Group is a growing group of businesses united by a common
              purpose: to turn ideas into meaningful solutions, create
              opportunities, and contribute to lasting progress.
              <br />
              <br />
              Spanning technology, education, and trade, our ventures bring
              together different capabilities and perspectives under one shared
              vision of innovation, enterprise, and sustainable growth.
            </p>
            <Button
              cta="Work With Us"
              variant="primary"
              href="/contact"
              className="mx-auto"
            />
          </div>
        </Container>
      </Section>

      {/* 2. Our Story */}
      <Section classname="py-20 md:py-32 bg-[#1D1D1D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-16 items-center">
            <div className="p-4 sm:p-6 lg:p-8">
              <span className="text-[#D95200] font-semibold tracking-widest text-xs uppercase block mb-6">
                Our Story
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#FFFFFF] mb-8 leading-tight">
                An Ambition to Build Beyond Boundaries.
              </h2>
              <p className="text-[#E5E5E5] text-lg md:text-xl leading-relaxed text-left">
                Founded in 2023, Nimbles Group was established around a simple
                belief: meaningful progress happens when ideas are transformed
                into practical solutions.
                <br />
                <br />
                We bring together complementary business interests across
                technology, education, and trade. Each venture has a distinct
                focus, but they share a common ambition to create value, open
                opportunities, and contribute to long-term development.
                <br />
                <br />
                We are building with the future in mind - one idea, one venture,
                and one opportunity at a time.
              </p>
            </div>
            <div className="flex items-center justify-center p-4 sm:p-6 lg:p-8">
              <span className="text-9xl md:text-[12rem] font-bold text-[#D95200]/40 select-none">
                2023
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Mission & Vision Split Band */}
      <Section classname="py-20 md:py-32 bg-[#D95200]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 border-y border-[rgba(29,29,29,0.2)]">
            <div className="p-8 md:p-12 border-r border-[rgba(29,29,29,0.2)] md:border-r-0">
              <span className="text-[#FFFFFF]/90 font-semibold tracking-widest text-xs uppercase block mb-4">
                01 / Our Vision
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-4">
                Thrive
              </h2>
              <p className="text-[#FFFFFF]/90 text-base leading-relaxed">
                To build a thriving ecosystem of sustainable businesses that
                create opportunities, empower people, and contribute to a more
                prosperous future.
              </p>
            </div>
            <div className="p-8 md:p-12">
              <span className="text-[#FFFFFF]/90 font-semibold tracking-widest text-xs uppercase block mb-4">
                02 / Our Mission
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-4">
                Unify
              </h2>
              <p className="text-[#FFFFFF]/90 text-base leading-relaxed">
                To connect ideas, talent, technology, and enterprise in building
                practical solutions to evolving challenges.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. An Ecosystem of Complementary Ventures */}
      <Section classname="py-20 md:py-32 bg-[#FAFAFA]">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1D] mb-4">
              An Ecosystem of Complementary Ventures
            </h2>
            <p className="text-[#404040] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Each business has a distinct focus, contributing to our broader
              ambition of creating value through innovation, enterprise, and
              opportunity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-[rgba(29,29,29,0.1)] rounded-lg p-8 flex flex-col justify-between h-full">
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-[#D95200] font-bold text-xl">01</span>
                <h3 className="text-xl font-bold text-[#1D1D1D]">Talent</h3>
              </div>
              <p className="text-[#404040] leading-relaxed">
                NimbleAcademy - Focused on learning, skills development, and
                preparing individuals for opportunities in an evolving digital
                economy.
              </p>
              <Button
                cta="Visit NimbleAcademy"
                variant="outline"
                href="/nimbleacademy"
                blank="_blank"
                className="w-full mt-6"
              />
            </div>
            <div className="bg-white border border-[rgba(29,29,29,0.1)] rounded-lg p-8 flex flex-col justify-between h-full">
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-[#D95200] font-bold text-xl">02</span>
                <h3 className="text-xl font-bold text-[#1D1D1D]">Technology</h3>
              </div>
              <p className="text-[#404040] leading-relaxed">
                NimbleDev - Focused on developing digital products, software
                solutions, and technology services that help businesses solve
                problems and grow.
              </p>
              <Button
                cta="Visit NimbleDev"
                variant="outline"
                href="/nimbledev"
                blank="_blank"
                className="w-full mt-6"
              />
            </div>
            <div className="bg-white border border-[rgba(29,29,29,0.1)] rounded-lg p-8 flex flex-col justify-between h-full">
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-[#D95200] font-bold text-xl">03</span>
                <h3 className="text-xl font-bold text-[#1D1D1D]">Commerce</h3>
                <span className="inline-block px-3 py-1 text-xs font-semibold text-[#D95200] border border-[#D95200] rounded-full">
                  Coming Soon
                </span>
              </div>
              <p className="text-[#404040] leading-relaxed">
                NimbleTrade - Our planned trade venture, exploring opportunities
                in import, export, and cross-border commerce.
              </p>
              <Button
                cta="Coming Soon"
                variant="outline"
                disabled
                blank="_blank"
                className="w-full mt-6 opacity-50 cursor-not-allowed"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Leadership Team */}
      <Section classname="py-20 md:py-32 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1D] mb-6">
              Leadership Team
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bodMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white border border-[rgba(29,29,29,0.1)] rounded-lg p-8 flex flex-col items-center text-center h-full"
              >
                <Image
                  src={member.imageUrl}
                  alt={`${member.first_name} ${member.last_name}`}
                  width={120}
                  height={120}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border border-[#1D1D1D]/15 grayscale contrast-110"
                />
                <h3 className="text-xl font-bold text-[#1D1D1D] mb-2">
                  {member.first_name} {member.last_name}
                </h3>
                <p className="text-[#D95200] font-semibold text-sm mb-4">
                  {member.position_comp}
                </p>
                <p className="text-[#404040] text-sm leading-relaxed">
                  {member.bio.replace(/<[^>]*>/g, '')}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. Bottom CTA Banner */}
      <Section classname="py-20 md:py-32 bg-[#1D1D1D]">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-6">
              Let&apos;s Build Something Meaningful.
            </h2>
            <p className="text-[#E5E5E5] text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Have an idea, a partnership opportunity, or a project in mind?
              We&apos;d love to hear from you.
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
    </>
  )
}

export default AboutPage
