'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'
import 'swiper/swiper-bundle.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface PortfolioSliderProps {
  slides: string[]
}

const PortfolioSlider: React.FC<PortfolioSliderProps> = ({ slides }) => {
  return (
    <div className="w-full relative mb-10">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation={{
          prevEl: '#slider-button-left',
          nextEl: '#slider-button-right'
        }}
        pagination={{
          el: '#swiper-pagination',
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active'
        }}
        className="relative"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[500px]">
              <Image
                src={slide}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div
        id="slider-button-left"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
      >
        <button className="text-white bg-primary-100 rounded-full p-2">
          Prev
        </button>
      </div>
      <div
        id="slider-button-right"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
      >
        <button className="text-white bg-primary-100 rounded-full p-2">
          Next
        </button>
      </div>

      {/* Custom Pagination Dots */}
      <div className="flex justify-center items-center w-full py-8">
        <div
          id="swiper-pagination"
          className="swiper-pagination flex justify-center items-center"
        ></div>
      </div>
    </div>
  )
}

export default PortfolioSlider
