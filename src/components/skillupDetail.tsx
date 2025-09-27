import { creativeHighlightData } from '@/mockData'
import Image from 'next/image'
import Testimonials from './Testimonials'
import ProgramSection from './ProgramSection'
import TrainingOverview from './TrainingOverview'
import SponsoredSection from './SponsoredSection'

interface SkillUpDetailProps {
  portfolioItem: (typeof creativeHighlightData.highlights)[0]
  data: typeof creativeHighlightData
}

export default function SkillUpDetail({
  portfolioItem,
  data
}: SkillUpDetailProps) {
  const trainingSection = portfolioItem.sections?.training
  const finalResultsSection = portfolioItem.sections?.finalResults

  if (!trainingSection || !finalResultsSection) {
    return <div>Portfolio data not available</div>
  }

  return (
    <div className="space-y-16">
      {/* Header Section - SkillUp Training */}
      <ProgramSection {...trainingSection} />

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
      <TrainingOverview
        {...data.trainingData.creative}
        backgroundColor="bg-white"
      />

      {/* Final Results Section */}
      <ProgramSection {...finalResultsSection} />

      <Testimonials
        data={data.testimonials.skillUp}
        title="SkillUp Success Stories"
        subtitle="Don't Just Take our word for it! Our students rave about our exceptional programs. Here's what they say:"
      />
      <SponsoredSection sponsors={data.sponsors.skillUp} />
    </div>
  )
}
