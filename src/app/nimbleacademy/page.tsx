import ContactForm from '@/components/ContactForm'
import Container from '@/components/Container'
import Section from '@/components/Section'
import { Button } from '@nextui-org/react'
import { Metadata } from 'next'
import Image from 'next/image'
import { MdArrowOutward } from 'react-icons/md'
import ConnectForm from '@/components/ConnectForm'

export const metadata: Metadata = {
  title: 'Home | NimbleAcademy',
  description: 'Transform Your Future with NimbleAcademy!'
}

export default function Home() {
  return (
    <>
      <Section classname="py-16 md:py-28 text-xl">
        {/* <ModalClientAcad /> */}
        <Container>
          <div className="text-center flex flex-col items-center justify-center">
            <h2 className="mb-5 text-center w-3/4 mx-auto">
              <span className=" text-academy-black font-bold">
                Transform Your Future with
              </span>{' '}
              <span className="gradient-text font-bold">NimbleAcademy!</span>{' '}
            </h2>
            <p className="text-center text-academy-black w-full md:w-3/4 md:mx-auto px-0 md:px-8 mb-8 font-light inline-block">
              Unlock your potential with exciting courses designed to give you
              the skills and know-how to succeed in today’s fast-paced world!
            </p>
            <div className="flex gap-8 items-center flex-col-reverse md:flex-row">
              <Button
                as="a"
                href="/#contact"
                endContent={<MdArrowOutward />}
                radius="none"
                className="text-white cursor-pointer bg-primary-100"
              >
                Start Your Journey Now!
              </Button>
            </div>

            <div className="w-full mt-10">
              <Image
                className="rounded-lg w-full"
                src="/hero-acad-bg.svg"
                width="1080"
                height="476"
                alt="hero-bg"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section classname="py-16 md:py-28 text-xl" id="about">
        <Container>
          <div className="text-academy-black border border-t-0 border-l-0 border-r-0 pb-3 border-b-3 w-[20%] mb-7 md:mb-8 border-b-primary-100 text-sm md:text-4xl font-bold">
            About Us{' '}
          </div>
          <div className="flex gap-6 md:gap-24 flex-col md:flex-row">
            <div className="w-full">
              <h2 className="my-3 md:mb-8 text-6xl font-bold text-academy-black">
                Welcome to Your Learning Adventure!
              </h2>
              <p className="mb-8 md:mb-10 text-academy-black text-medium font-light inline-block">
                At Nimble Academy, we fuel your growth with courses that spark
                creativity and boost professional skills. Whether you’re aiming
                to code, design, or lead projects, we’ve got the tools and
                support to make it happen. Let’s grow together and unlock your
                potential!
              </p>

              <Button
                as="a"
                href="/#contact"
                endContent={<MdArrowOutward />}
                radius="none"
                className="text-white cursor-pointer bg-primary-100"
              >
                Start Your Journey Now!
              </Button>
            </div>
            <Image
              src="/abt-academy.svg"
              className="w-full"
              width="457"
              height="393"
              alt="about_sect_img"
            />
          </div>
        </Container>
      </Section>

      <Section
        classname="bg-[#FFF2E6] py-16 md:py-28 text-xl"
        bgClass="academyBg"
        id="highlights"
      >
        <div className="flex mb-5 text-center font-semibold w-full md:w-1/2 md:mx-auto text-academy-black">
          <Image
            className="hidden md:block"
            src="/highlight-stroke.svg"
            alt="stroke"
            width="204"
            height="120"
          />
          <h2 className="w-full md:w-0">HighLights</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <Image
            className="md:w-1/2 h-auto px-4 md:px-0"
            src="/highlight-bg.svg"
            alt="stroke"
            width="821"
            height="633"
          />
          <div className=" md:-ml-40 md:mr-40 m-0 px-4 mt-3 md:mt-0 md:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="py-7 px-5 text-academy-black bg-white">
                <div className="flex items-center gap-3 mb-5 font-medium">
                  <Image
                    src="/icon-1.svg"
                    alt="icon-1"
                    width="35"
                    height="35"
                  />
                  <h3>Expert-Led Courses</h3>
                </div>
                <p className="text-sm font-normal">
                  Learn from industry professionals who share valuable insights
                  and real-world experience. Courses
                </p>
              </div>

              <div className="py-7 px-5 text-academy-black bg-white">
                <div className="flex items-center gap-3 mb-5 font-medium">
                  <Image
                    src="/icon-2.svg"
                    alt="icon-1"
                    width="35"
                    height="35"
                  />
                  <h3>Flexible Learning</h3>
                </div>
                <p className="text-sm font-normal">
                  Access courses anytime, anywhere, and learn at your own pace
                  to fit your lifestyle.
                </p>
              </div>

              <div className="py-7 px-5 text-academy-black bg-white">
                <div className="flex items-center gap-3 mb-5 font-medium">
                  <Image
                    src="/icon-3.svg"
                    alt="icon-1"
                    width="35"
                    height="35"
                  />
                  <h3>Hands-On Projects</h3>
                </div>
                <p className="text-sm font-normal">
                  Engage in practical projects that enhance your skills and
                  build a standout portfolio.
                </p>
              </div>

              <div className="py-7 px-5 text-academy-black bg-white">
                <div className="flex items-center gap-3 mb-5 font-medium">
                  <Image
                    src="/icon-4.svg"
                    alt="icon-1"
                    width="35"
                    height="35"
                  />
                  <h3>Supportive Community</h3>
                </div>
                <p className="text-sm font-normal">
                  Join a vibrant network of learners who inspire and motivate
                  you every step of the way.
                </p>
              </div>
            </div>
            <Button
              as="a"
              href="/#contact"
              endContent={<MdArrowOutward />}
              radius="none"
              className="text-white cursor-pointer mt-8 bg-primary-100"
            >
              Start Your Journey Now!
            </Button>
          </div>
        </div>
      </Section>

      <Section classname="py-16 md:py-28 text-xl" id="contact">
        <div className="flex flex-col md:flex-row gap-16 px-4 md:px-0">
          <Image
            className="w-auto h-auto"
            src="/contact-bg.svg"
            alt="stroke"
            width="821"
            height="633"
          />
          <div className="">
            <div className="font-semibold w-full md:w-3/4 text-academy-black">
              <Image
                src="/contact-icon.svg"
                alt="stroke"
                width="204"
                height="120"
              />
              <h2 className=" ">Let’s Connect!</h2>
              <p className="text-sm font-normal">
                Have questions or just want to chat? We’re here for you! Fill
                out the form below, and our friendly team will get back to you
                in no time. We can’t wait to hear from you!
              </p>
              <ConnectForm />
              {/* <Button
                as="a"
                target="blanks"
                href="https://docs.google.com/forms/d/1U98Vv4H7JzG9VnuPmNiH_eHfWeiJZYRQlFueMboU_Xo/edit"
                endContent={<MdArrowOutward />}
                radius="none"
                className="text-white mt-10 cursor-pointer bg-primary-100"
              >
                Start Your Journey Now!
              </Button> */}
              {/* <form action=""></form> */}
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
