import { CreativeHighlight, creativeTrainingData } from '@/mockData'
import Image from 'next/image'
import Testimonials from './Testimonials'
import ProgramSection from './ProgramSection'
import TrainingOverview from './TrainingOverview'

interface SkillUpDetailProps {
  portfolioItem: CreativeHighlight
}
// SkillUp Training Section
const skillUpData = {
  date: 'August 2024',
  subtitle: '| Nimble Academy',
  title: 'SkillUp Training',
  images: [
    { src: '/skillup1.png', alt: 'Student learning photography' },
    { src: '/skillup2.png', alt: 'Creative workshop session' },
    { src: '/skillup3.png', alt: 'Social media training' },
    { src: '/skillup4.png', alt: 'Student presentation' }
  ]
}

// Final Results Section
const finalResultsData = {
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

      {/* Training Overview Section */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Training{' '}
            <span className="bg-gradient-to-r from-[#FFA673] to-[#FF7D06] bg-clip-text text-transparent">
              Overview
            </span>
          </h2>
          <div className="pl-6 mb-4 flex">
            <Image
              src="/group2.svg"
              width="30"
              height="20"
              alt="decorative vector"
              className=""
            />
          </div>
        </div>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          {portfolioItem.fullDescription}
        </p>
        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
          <Image
            src="/grouptraining.svg"
            alt="SkillUp Training Group Photo"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <TrainingOverview {...creativeTrainingData} backgroundColor="bg-white" />

      {/* Final Results Section */}
      <ProgramSection {...finalResultsData} />

      <Testimonials />
    </div>
  )
}
