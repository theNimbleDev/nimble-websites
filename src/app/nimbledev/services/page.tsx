import Button from "@/components/Button"
import Clientscount from "@/components/Clientscount"
import Container from "@/components/Container"
import Section from "@/components/Section"
import Image from "next/image"
import React from "react"

const AboutPage = () => {
  return (
    <>
      <Section bgClass="sectionS1Bg" classname="py-16 md:py-28 text-xl">
        <Container>
          <div className="text-center flex flex-col items-center justify-center">
            <span className="text-subtext-100 text-center block text-sm md:text-2xl font-medium tracking-widest">
              SERVICES
            </span>
            <h2 className="mb-5 text-center w-3/4 mx-auto">
              <span className="font-normal">Transforming Visions into</span>{" "}
              <span className="gradient-text font-medium">
                Seamless Digital Experiences
              </span>{" "}
            </h2>
            <p className="text-center w-full md:w-3/4 md:mx-auto px-0 md:px-8 mb-8 font-light inline-block">
              We specialize in crafting bespokt-mediumfont-medium that elevate
              user experiences and drive business success.
            </p>
            <div className="flex gap-8 items-center flex-col-reverse md:flex-row">
              <Button cta="Book a call" borderColor="border-primary-100" />
              <Clientscount images={["client-image.svg"]} count={1000} />
            </div>
          </div>
        </Container>
      </Section>

      <Section id="softwaredev" bgClass="sectionS2Bg" classname="pt-8 md:pt-24">
        <Container>
          <div className="flex md:flex-row flex-col gap-5 text-center md:text-left md:gap-20 mxd:gap-10 items-center mb-6 md:mb-28">
            <div>
              <span className="text-primary-100 text-sm uppercase md:text-xl font-medium tracking-widest">
                SOFTWARE{" "}
                <span className="text-subtext-100 font-thin">DEVELOPMENT</span>
              </span>
              <h2 className="font-normal mb-8 md:mb-10">
                <span>Tailored </span>Innovation
              </h2>
              <p className="font-light">
                Creating custom software solutions tailored to client needs,
                leveraging the latest technologies and methodologies to ensure
                high performance and scalability.
              </p>
            </div>
            <Image
              className="mb-8 md:mb-0 mxd:w-[400px]"
              src="/serviceimg.svg"
              width="450"
              height="812"
              alt="sec2_1"
            />
          </div>
          <div className="bg-custom-diagonal-gradient border-t border-l border-r border-primary-200 rounded-tl-2xl rounded-tr-2xl flex items-center justify-center flex-col text-center py-7 px-2 md:pt-20 md:px-28 md:pb-0">
            <h2 className="font-normal mb-4 md:mb-5 w-full md:w-[95%]">
              We Are Here To Bring To Reality{" "}
              <span className="font-bold">Your Innate Desires </span>
            </h2>
            <p className="w-full md:w-[90%] mb-8 md:mb-10">
              We specialize in transforming your unique visions into tangible
              realities, using our expertise to bring your innate desires to
              life with precision and creativity.
            </p>
            <Button cta="Book a call" borderColor="border-primary-100" />
            <Image
              className="mt-3 md:mb-0"
              src="/barcode.svg"
              width="1180"
              height="208"
              alt="sec2_1"
            />
          </div>
        </Container>
      </Section>

      <Section
        id="outsourcingEng"
        bgClass="sectionS3Bg"
        classname="py-12 md:pt-28 mxd:pb-2 md:pb-0"
      >
        <Container>
          <div>
            <span className="text-[#FF7D06] text-center block text-sm uppercase md:text-xl font-medium tracking-widest">
              Outsourcing of Engineers
            </span>
            <h2 className="font-light text-primary-300 text-center mb-7 md:mb-20 w-full">
              Expert Support
            </h2>

            <div className="flex md:flex-row flex-col gap-5 text-center md:text-left md:gap-20 mxd:gap-10 items-center">
              <Image
                className="mb-8 md:mb-0 mxd:w-[400px] h-auto"
                src="/serviceimg2.svg"
                width="600"
                height="812"
                alt="sec2_1"
              />
              <div className="text-primary-300">
                <p className="mb-8 md:mb-11">
                  Providing skilled engineers to support various projects,
                  ensuring access to top talent for short-term or long-term
                  engagements. We have full-time engineers dedicated to your
                  project, expert engineers for specific project needs and a
                  consulting service who give strategic advice and technical
                  expertise to optimize your development processes.
                </p>
                <div className="flex justify-center md:justify-start">
                  <Button
                    cta="Book a call"
                    borderColor="border-primary-100 text-primary-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section classname="pt-10 md:pt-16 mxd:pb-10 flex flex-col text-center md:text-left items-center">
        <Container>
          <div className="flex gap-6 md:gap-16 items-center flex-col md:flex-row">
            <div className="w-full">
              <span className="text-primary-100 text-sm mxd:text-xs uppercase md:text-xl font-medium tracking-widest">
                MOBILE APP{" "}
                <span className="text-subtext-100 font-thin">DEVELOPMENT</span>
              </span>
              <h3 className="my-3 text-2xl md:text-6xl mxd:text-3xl md:my-4">
                {" "}
                <span className="font-thin">
                  Tired of mobile apps that fall short on
                </span>{" "}
                <span className="font-bold">
                  user experience and performance?
                </span>
              </h3>
              <p className="mb-8 md:mb-20 mxd:mb-10 font-light inline-block mt-5 md:mt-10">
                We specialize in crafting engaging and user-friendly mobile apps
                for both iOS and Android platforms, aimed at providing
                exceptional user experiences. Our development process emphasizes
                a seamless blend of intuitive design and robust functionality,
                ensuring that every app we create stands out in its usability
                and performance.
              </p>

              <Button
                href="/about"
                cta="Book a call"
                borderColor="border-primary-100 hidden md:flex"
              />
            </div>
            {/* Image container component */}
            <div className="w-full">
              <Image
                src="/servicemobile.svg"
                width="600"
                height="923"
                alt="about_sect_img"
                className="hidden md:flex"
              />
              <Image
                src="/servicemobileimg.svg"
                width="600"
                height="923"
                alt="about_sect_img"
                className=" md:hidden"
              />
            </div>
          </div>
          <Button
            href="/about"
            cta="Book a call"
            borderColor="border-primary-100 w-full my-7 md:hidden"
          />
        </Container>
      </Section>

      <Section
        id="productDesign"
        bgClass="sectionS4Bg"
        classname="py-12 mb-10 md:mb-0 md:pt-28 mxd:pb-2 md:pb-0"
      >
        <Container>
          <div>
            <span className="text-[#FF7D06] text-center block text-sm uppercase md:text-xl font-medium tracking-widest">
              Product Design (UX/UI)
            </span>
            <h2 className="font-light text-primary-300 text-center mb-7 md:mb-20 w-full">
              Creative Solutions
            </h2>

            <div className="flex md:flex-row flex-col gap-5 text-center md:text-left md:gap-20 mxd:gap-10 items-center">
              <Image
                className="mb-8 md:mb-0 mxd:w-[400px] h-auto"
                src="/servicedesign.svg"
                width="600"
                height="812"
                alt="sec2_1"
              />
              <div className="text-primary-300">
                <p className="mb-8 md:mb-11">
                  Crafting innovative product designs that align with market
                  needs and user expectations, integrating functionality,
                  aesthetics, and usability for a comprehensive solution. Our
                  product design services encompass every stage of the design
                  process from initial to final prototype by having a creative
                  brainstorming and ideation to birth your ideas, test and
                  refine your product concepts and focus on creating products
                  that provide meaning and relevant experiences to users.
                </p>
                <div className="flex justify-center md:justify-start">
                  <Button
                    cta="Book a call"
                    borderColor="border-primary-100 text-primary-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default AboutPage
