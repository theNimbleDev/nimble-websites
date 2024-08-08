'use client'
import React, { useState } from 'react'

const testimonials = [
  {
    last_name: 'Oyeyemi',
    first_name: 'Deborah',
    image: '',
    review:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat'
  },
  {
    last_name: 'Adebayo',
    first_name: 'Daniel',
    image: '',
    review:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat'
  },
  {
    last_name: 'John',
    first_name: 'Doe',
    image: '',
    review:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat'
  },
  {
    last_name: 'Oyeyemi',
    first_name: 'Deborah',
    image: '',
    review:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat'
  },
  {
    last_name: 'Oyeyemi',
    first_name: 'Deborah',
    image: '',
    review:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat'
  },
  {
    last_name: 'Oyeyemi',
    first_name: 'Deborah',
    image: '',
    review:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat'
  },
  {
    last_name: 'Oyeyemi',
    first_name: 'Deborah',
    image: '',
    review:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat'
  },
  {
    last_name: 'Oyeyemi',
    first_name: 'Deborah',
    image: '',
    review:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat'
  },
  {
    last_name: 'Oyeyemi',
    first_name: 'Deborah',
    image: '',
    review:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat'
  }
]

const borderGradientStyle = `bg-review-gradient border border-primary-200 rounded-2xl`

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 2
  const totalSlides = Math.ceil(testimonials.length / itemsPerPage)

  const handleNext = () => {
    setCurrentIndex(
      prevIndex => (prevIndex + itemsPerPage) % testimonials.length
    )
  }

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0
        ? testimonials.length - itemsPerPage
        : (prevIndex - itemsPerPage + testimonials.length) % testimonials.length
    )
  }

  const handleDotClick = (index: number) => {
    setCurrentIndex(index * itemsPerPage)
  }

  return (
    <div className='relative'>
      <div className='overflow-hidden'>
        <div
          className='flex transition-transform duration-500'
          style={{
            transform: `translateX(-${(currentIndex / itemsPerPage) * 100}%)`
          }}
        >
          {testimonials.map((test, index) => (
            <div
              key={index}
              className={`${borderGradientStyle} p-10 flex-shrink-0 w-full md:w-1/2`}
            >
              {test.review}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className='flex justify-center mt-4 space-x-2'>
        {Array(totalSlides)
          .fill(null)
          .map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex / itemsPerPage === index
                  ? 'bg-primary-100'
                  : 'bg-gray-300'
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary-100 text-white p-2 rounded-full shadow-lg hover:bg-primary-200'
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary-100 text-white p-2 rounded-full shadow-lg hover:bg-primary-200'
      >
        &gt;
      </button>
    </div>
  )
}

export default TestimonialSlider
