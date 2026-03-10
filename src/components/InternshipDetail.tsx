import { creativeHighlightData } from '@/mockData'
import Image from 'next/image'
import Testimonials from './Testimonials'
import ProgramSection from './ProgramSection'
import TrainingOverview from './TrainingOverview'
import ProgramSectionTileGrid from './ProgramSectionTileGrid'
import SponsoredSection from './SponsoredSection'

interface InternshipDetailProps {
  portfolioItem: (typeof creativeHighlightData.highlights)[0]
  data: typeof creativeHighlightData
}

export default function InternshipDetail({
  portfolioItem,
  data
}: InternshipDetailProps) {
  const trainingSection = portfolioItem.sections?.training
  const finalResultsSection = portfolioItem.sections?.finalResults

  if (!trainingSection || !finalResultsSection) {
    return <div>Portfolio data not available</div>
  }

  return (
    <div className="space-y-16">
      {/* Header Section - Interns */}
      <ProgramSection {...trainingSection} columns={5} />

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
        {/* Description Section */}
        <div className="text-center">
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            {portfolioItem.fullDescription}
          </p>
        </div>

        <div className="justify-center align-middle flex bg-gradient-to-r from-[#FFA673] to-[#FF7D06] rounded-2xl p-12 text-center md:h-[540px]">
          <div className="justify-center flex">
            <Image
              src="/logo.svg"
              width="300"
              height="180"
              alt="Brand logo"
              className=""
            />
          </div>
        </div>
      </div>

      <TrainingOverview
        {...data.trainingData.technical}
        backgroundColor="bg-white"
      />
      <ProgramSectionTileGrid {...finalResultsSection} />
      <Testimonials
        data={data.testimonials.internship}
        title="SkillUp Success Stories"
        subtitle="Don't Just Take our word for it! Our students rave about our exceptional programs. Here's what they say:"
      />

      <SponsoredSection sponsors={data.sponsors.internship} />
    </div>
  )
}
