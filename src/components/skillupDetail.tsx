import { CreativeHighlight } from '@/mockData'
import Image from 'next/image'
import Testimonials from './Testimonials'
import ProgramSection from './ProgramSection'

interface SkillUpDetailProps {
  portfolioItem: CreativeHighlight
}
// SkillUp Training Section
const skillUpData = {
  date: 'August 2024',
  title: 'SkillUp Training',
  description:
    'Our students transformed their creativity into mastery, capturing breathtaking photos, designing powerful visuals, and crafting social media campaigns that truly engage. Their standout projects are showcased here, with many earning recognition and building real impact online.',
  images: [
    { src: '/skillup1.png', alt: 'Student learning photography' },
    { src: '/skillup2.png', alt: 'Creative workshop session' },
    { src: '/skillup3.png', alt: 'Social media training' },
    { src: '/skillup4.png', alt: 'Student presentation' }
  ]
}

// Final Results Section
const finalResultsData = {
  date: 'August 2024',
  title: 'Final Results',
  description:
    'Our students transformed their creativity into mastery, capturing breathtaking photos, designing powerful visuals, and crafting social media campaigns that truly engage. Their standout projects are showcased here, with many earning recognition and building real impact online.',
  images: [
    { src: '/finalr1.png', alt: 'Student project showcase' },
    { src: '/finalr2.png', alt: 'Photography work' },
    { src: '/finalr3.png', alt: 'Design presentation' },
    { src: '/finalr4.png', alt: 'Team collaboration' }
  ]
}

export default function SkillUpDetail({ portfolioItem }: SkillUpDetailProps) {
  return (
    <div className="space-y-16">
      {/* Header Section */}

      {/* SkillUp Training Section */}
      <ProgramSection {...skillUpData} />

      {/* Final Results Section */}
      <ProgramSection {...finalResultsData} backgroundColor="bg-gray-50" />
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-sm text-gray-500 uppercase tracking-wide">
            {portfolioItem.date} | {portfolioItem.location}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="bg-gradient-to-r from-[#FFA673] to-[#FF7D06] bg-clip-text text-transparent">
            {portfolioItem.title}
          </span>{' '}
          <span className="text-gray-900">{portfolioItem.year}</span>
        </h1>
      </div>

      {/* Image Gallery - SkillUp specific layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {portfolioItem.detailImages.map((image, index) => (
          <div
            key={index}
            className={`relative rounded-lg overflow-hidden ${
              index === 0
                ? 'col-span-2 md:col-span-2 h-64 md:h-80'
                : 'h-32 md:h-40'
            }`}
          >
            <Image
              src={
                image ||
                '/placeholder.svg?height=300&width=400&query=SkillUp training session'
              }
              alt={`${portfolioItem.title} training session ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Training Overview Section */}
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Training{' '}
            <span className="bg-gradient-to-r from-[#FFA673] to-[#FF7D06] bg-clip-text text-transparent">
              Overview
            </span>
          </h2>
          <div className="w-8 h-8 bg-gradient-to-r from-[#FFA673] to-[#FF7D06] rounded-full flex items-center justify-center">
            <span className="text-white text-sm">⚡</span>
          </div>
        </div>

        <p className="text-gray-600 text-lg leading-relaxed mb-8 text-balance">
          {portfolioItem.fullDescription}
        </p>
      </div>

      {/* SkillUp Specific Content - Group Photo Section */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
            <Image
              src="/skillup-training-group-photo-with-participants.jpg"
              alt="SkillUp Training Group Photo"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center mt-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Our Amazing Cohort
            </h3>
            <p className="text-gray-600">
              Meet the talented individuals who completed our SkillUp Training
              program and are now ready to take on the digital world.
            </p>
          </div>
        </div>
      </div>

      {/* Brand Section */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-r from-[#FFA673] to-[#FF7D06] rounded-2xl p-12 text-center">
          <div className="text-white">
            <div className="text-4xl font-bold mb-2">🚀</div>
            <div className="text-3xl font-bold">NimbleDev</div>
            <p className="mt-4 text-orange-100">
              Empowering the next generation of digital creators
            </p>
          </div>
        </div>
      </div>
      <Testimonials />
    </div>
  )
}
