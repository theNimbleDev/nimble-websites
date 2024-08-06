import Banner from '@/components/Banner'
import Button from '@/components/Button'
import Clientscount from '@/components/Clientscount'
import Container from '@/components/Container'
import LogoSlider from '@/components/LogoSlider'
import Section from '@/components/Section'
import ServiceCard from '@/components/ServiceCard'
import Image from 'next/image'

export default function Home () {
  return (
    <>
      <Section bgClass='sectionH1Bg' classname='pb-16'>
        <Container>
          <div className='about-768 flex justify-between gap-6 md:gap-24 items-center flex-col md:flex-row pt-10 pb-6 md:pt-24 md:pb-10 md:mb-14 w-auto'>
            <div className='w-full left-768 md:w-[67%] text-center md:text-left'>
              <h2 className='my-3 md:my-4 text-4xl md:text-7xl'>
                {' '}
                <span className='gradient-text font-bold'>
                  We help turn ideas into
                </span>{' '}
                <span className='font-thin'> Great softwares.</span>
              </h2>
              <p className='text-base md:text-2xl font-light w-full mb-10 md:mb-16'>
                Our team of pre-vetted professionals is ready to deliver
                exceptional results on every project, transforming your ideas
                into outstanding software solutions with precision and
                expertise.
              </p>

              <div className='flex gap-8 items-center flex-col-reverse md:flex-row'>
                <Button cta='Book a call' borderColor='border-primary-100' />
                <Clientscount images={['client-image.svg']} count={1000} />
              </div>
            </div>
            <div className='w-full right-768 md:w-[46%]'>
              <Image
                src='/section1dev.svg'
                width='750'
                height='800'
                alt='about_img'
              />
            </div>
          </div>
          <LogoSlider />
        </Container>
      </Section>

      <Section classname='pt-24 flex flex-col items-center'>
        <Container>
          <div className=''>
            <span className='text-subtext-100 text-center mb-4 md:mb-7 block text-sm md:text-2xl font-medium tracking-widest'>
              SERVICES
            </span>
            <h2 className='mb-5 text-center w-3/4 mx-auto'>
              {' '}
              <span className='gradient-text font-medium'>
                Empowering business with
              </span>{' '}
              <span className='font-normal'>cutting-edge solutions </span>
            </h2>
            <p className='text-center w-full px-0 md:px-8 mb-8 font-light md:mb-20 inline-block'>
              We offer a wide range of software solutions
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 my-6 md:mt-5 md:mb-20'>
              <ServiceCard
                logo='/outsourceeng.svg'
                service='Outsourcing of Engineering'
                description='Leverage our pool of highly skilled, pre-vetted engineers to augment and accelerate your projects efficiently.'
                color='primary-200'
                ButtonColor='primary-100'
                href='/services#engineering'
                nimbledev
              />

              <ServiceCard
                logo='/softwaredev.svg'
                service='Software Development'
                description='We are dedicated to revolutionizing software development with a focus on innovation, precision, and expert coding.'
                color='primary-200'
                ButtonColor='primary-100'
                href='/services#softwaredev'
                nimbledev
              />
              <ServiceCard
                logo='/mobiledev.svg'
                service='Mobile Apps Development'
                description='We develop engaging, user-friendly mobile apps for iOS and Android, offering exceptional experiences for your users.'
                color='primary-200'
                ButtonColor='primary-100'
                href='/services#mobildev'
                nimbledev
              />
              <ServiceCard
                logo='/proddesign.svg'
                service='Product Design (UX/UI)'
                description='Our focus on UX/UI design ensures that we not only meet but anticipate user needs, crafting solutions that feel natural and easy to use.'
                color='primary-200'
                ButtonColor='primary-100'
                href='/services#proddesign'
                nimbledev
              />
            </div>

            <div className='flex gap-6 md:gap-16 items-center flex-col md:flex-row'>
              <div className='w-full'>
                <span className='text-subtext-100 text-sm md:text-xl font-medium tracking-widest'>
                  ABOUT US{' '}
                </span>
                <h2 className='my-3 md:text-6xl md:my-4'>
                  {' '}
                  <span className='gradient-text font-medium'>
                    Innovating today for a
                  </span>{' '}
                  <span className='font-normal'>smarter tomorrow</span>
                </h2>
                <p className='mb-8 md:mb-20 font-light inline-block'>
                  We lead the charge in tech innovation. Since the beginning,
                  we’ve been focused on using tech to make a positive impact and
                  building partnerships that help us grow responsibly.
                </p>

                <Button
                  href='/about'
                  cta='Read More'
                  borderColor='border-primary-100'
                />
              </div>
              {/* Image container component */}
              <div className='w-full'>
                <Image
                  src='/aboutdev.svg'
                  width='600'
                  height='923'
                  alt='about_sect_img'
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section bgClass='sectionH3Bg' classname='py-10'>
        <Container>
          <h2 className='font-normal text-primary-100 text-center mxd:mt-8 mb-8 md:mb-10'>
            Our Projects
          </h2>
          {/* <TeamList teamMembers={teamMembers} /> */}

          <Banner
            title1='Explore your next'
            title2='solution with us'
            subtext='Creating a New world'
          />
        </Container>
      </Section>
    </>
  )
}
