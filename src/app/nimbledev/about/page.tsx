import React from "react"
import Section from "@/components/Section"
import Container from "@/components/Container"
import Button from "@/components/Button"
import Clientscount from "@/components/Clientscount"
import Banner from "@/components/Banner"
import TeamList from "@/components/TeamList"
import { teamMembers } from "@/mockData"
import Image from "next/image"

const clientImages = ["client-image.svg"]

const AboutPage = () => {
  return (
    <>
      <Section classname="py-16 md:py-20 flex flex-col items-center">
        <Container>
          <div className="w-full md:w-3/4 mx-auto flex flex-col items-center justify-center">
            <span className="text-subtext-100 text-center mb-4 md:mb-4 block text-sm md:text-2xl font-medium tracking-widest">
              ABOUT US
            </span>

            <h2 className="font-normal mb-5 text-center md:mb-5">
              {" "}
              <span className="gradient-text font-bold">
                Innovation, Creativity and
              </span>{" "}
              <span className="font-normal">
                Technology Converge to Shape the Future
              </span>
            </h2>

            <p className="text-center px-0 md:px-8 mb-8 font-thin md:mb-16 inline-block">
              Our dynamic team of developers, visionaries, designers, and
              strategists is committed to creating cutting-edge solutions that
              tackle the challenges of today and pave the way for a brighter
              tomorrow.
            </p>

            <div className="flex gap-8 items-center flex-col-reverse md:flex-row">
              <Button cta="Book a call" borderColor="border-primary-100" />
              <Clientscount images={clientImages} count={1000} />
            </div>
          </div>
        </Container>
      </Section>

      <Section bgClass="sectionANimbleDevBg" classname="py-8 md:py-24">
        <Container>
          <div className="flex md:flex-row flex-col-reverse gap-5 text-center md:text-left md:gap-20 items-center mb-6 md:mb-28">
            <Image
              className="mb-8 md:mb-0 mxd:w-[400px]"
              src="/transformative1.svg"
              width="540"
              height="560"
              alt="sec2_1"
            />

            <div>
              <h2 className="font-normal mb-5 md:mb-5">
                {" "}
                <span className="gradient-text font-bold">
                  Transformative
                </span>{" "}
                <span className="font-normal">Technology</span>
              </h2>

              <p>
                We harness the power of technology to create meaningful,
                positive changes. We believe in the transformative power of
                innovative solutions to enhance lives, streamline businesses,
                and drive societal progress.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center md:flex-row md:text-left gap-5 md:gap-20">
            <div>
              <p className="mb-4 md:mb-20 md:text-start text-center">
                We envision a world where technology serves as a tool for
                sustainable growth and a better quality of life. Our goal is to
                be at the forefront of this transformation, continually pushing
                the boundaries of what is possible and setting new standards of
                excellence.
              </p>

              <div className="hidden mb-8 md:mb-20 md:flex  items-center flex-col-reverse md:flex-row">
                <Button cta="Book a call" borderColor="border-primary-100" />
              </div>
            </div>

            <Image
              className="mxd:w-[400px]"
              src="/transformative2.svg"
              width="540"
              height="560"
              alt="sec2_2"
            />
          </div>
          <Button
            cta="Book a call"
            borderColor="border-primary-100 w-full my-7 md:hidden"
          />
          <div className="mt-12 md:mt-28">
            <h2 className="font-normal text-center mxd:mt-8 mb-8 md:mb-10">
              Meet <span className="text-primary-100">The</span> Team
            </h2>

            <TeamList teamMembers={teamMembers} />

            <Banner
              title1="Crafting Digital Solutions"
              title2="Beyond Boundaries"
              subtext="Creating a New world"
            />
          </div>
        </Container>
      </Section>
    </>
  )
}

export default AboutPage
