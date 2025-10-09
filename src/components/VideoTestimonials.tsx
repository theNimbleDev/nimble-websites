'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { HiOutlinePlay } from 'react-icons/hi2'
import { videoTestimonials, VideoTestimonial } from '@/mockData'

export default function VideoTestimonials() {
  const [playingId, setPlayingId] = useState<number | null>(null)

  const handlePlay = (id: number) => {
    setPlayingId(id)
  }

  const handlePause = () => {
    setPlayingId(null)
  }

  // Check if video is YouTube
  const isYouTube = (url: string) =>
    url.includes('youtube.com') || url.includes('youtu.be')

  return (
    <div className="py-12 px-4 sm:px-4 md:px-11">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-[#212121] md:text-[46.33px]">
          What{' '}
          <span className="bg-gradient-to-r from-[#FF7354] to-[#FF7D06] bg-clip-text text-transparent">
            They&apos;re Saying
          </span>
        </h2>
        <p className="mt-4 text-[20px] text-[#7B7B7B] max-w-2xl mx-auto">
          Don&apos;t Just Take our word for it! Our students and interns rave
          about our exceptional programs. Here&apos;s what they say:
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {videoTestimonials.map((testimonial: VideoTestimonial) => {
          const isPlaying = playingId === testimonial.id

          return (
            <div
              key={testimonial.id}
              className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition h-[600px]"
            >
              {isPlaying ? (
                isYouTube(testimonial.video) ? (
                  <iframe
                    src={testimonial.video}
                    title={testimonial.name}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video
                    src={testimonial.video}
                    controls
                    autoPlay
                    className="w-full h-full object-cover"
                    onPause={handlePause}
                  />
                )
              ) : (
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover rounded-xl"
                />
              )}

              {!isPlaying && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-6 py-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-white/80">{testimonial.role}</p>
                  </div>
                  <button
                    onClick={() => handlePlay(testimonial.id)}
                    className="hover:scale-110 transition-transform"
                  >
                    <HiOutlinePlay
                      size={48}
                      className="text-white border-2 rounded-xl p-3 bg-black/30"
                    />
                  </button>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Button for student reviews */}
      {/*
      <div className="mt-10 text-center">
        <Link
          href="/student-reviews"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF7354] to-[#FF7D06] text-white font-semibold px-6 py-3 rounded shadow-md hover:shadow-lg transition"
        >
          See all reviews by our students
          <HiArrowUpRight size={15} />
        </Link>
      </div>
      */}
    </div>
  )
}
