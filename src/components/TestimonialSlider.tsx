'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'
import { Avatar } from '@nextui-org/react'

interface Testimonial {
  last_name: string
  first_name: string
  image: string
  review: string
  id: string
}

interface testimonialProps {
  slides: Testimonial[]
}

const TestimonialSlider: React.FC<testimonialProps> = ({ slides }) => {
  return (
    <div className="w-full relative mb-10">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 60
          }
        }}
        navigation={{
          prevEl: '#slider-button-left',
          nextEl: '#slider-button-right'
        }}
        pagination={{
          el: '#swiper-pagination',
          clickable: true
        }}
        className="multiple-slide-carousel relative"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="mb-8 mt-4 ml-2 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Avatar
                  isBordered
                  size="lg"
                  color="warning"
                  src={slide.image}
                />{' '}
                <p className="text-md md:text-2xl font-bold text-primary-100">
                  {slide.last_name}{' '}
                  <span className="font-light">{slide.first_name}</span>
                </p>
              </div>
              <Image src="/5star.svg" width="100" height="100" alt="" />
            </div>
            <div className="bg-[#161616] p-8 md:p-16 border-2 border-primary-200 rounded-2xl h-[332.13px] md:h-[500px] flex justify-center items-center">
              <div className="h-full overflow-y-auto">
                <span className="text-sm md:text-2xl text-[#D2D2D2]">
                  {slide.review}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-between items-center w-full py-8 md:py-16">
        <Image
          src="/arrow-left.svg"
          id="slider-button-left"
          className="w-12 transition-all duration-500"
          data-carousel-prev
          width="100"
          height="0"
          alt="arrow-left"
        />

        {/* Pagination Dots */}
        <div
          id="swiper-pagination"
          className="swiper-pagination flex justify-center items-center w-full mx-4"
        ></div>

        <Image
          className="w-12 transition-all duration-500"
          data-carousel-next
          id="slider-button-right"
          src="/arrow-right.svg"
          width="100"
          height="0"
          alt="arrow-right"
        />
      </div>
    </div>
  )
}

export default TestimonialSlider
