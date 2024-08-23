'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'
import { Avatar } from '@nextui-org/react'

// Example slide data array
const slides = [
  {
    last_name: 'Oyeyemi',
    first_name: 'Deborah',
    image: '/review-profile.svg',
    review:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don look even slightly believable.'
  },
  {
    last_name: 'Adebayo',
    first_name: 'Daniel',
    image: '/review-profile.svg',
    review:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat'
  },
  {
    last_name: 'John',
    first_name: 'Doe',
    image: '/review-profile.svg',
    review:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat'
  },
  {
    last_name: 'Oyeyemi',
    first_name: 'Deborah',
    image: '/review-profile.svg',
    review:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat'
  },
  {
    last_name: 'Oyeyemi',
    first_name: 'Deborah',
    image: '/review-profile.svg',
    review:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat'
  },
  {
    last_name: 'Oyeyemi',
    first_name: 'Deborah',
    image: '/review-profile.svg',
    review:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat'
  }
]

const TestimonialSlider = () => {
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
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
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
                <span className="text-xl md:text-2xl text-[#D2D2D2]">
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
