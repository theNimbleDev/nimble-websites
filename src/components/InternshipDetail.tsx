import { CreativeHighlight, technicalTrainingData } from '@/mockData'
import Image from 'next/image'
import Testimonials from './Testimonials'
import ProgramSection from './ProgramSection'
import TrainingOverview from './TrainingOverview'

interface InternshipDetailProps {
  portfolioItem: CreativeHighlight
}
// Internship Section
const internshipData = {
  date: 'August 2024 | Nimble Academy',
  title: 'Internship 2024',
  description:
    'Our students transformed their creativity into mastery, capturing breathtaking photos, designing powerful visuals, and crafting social media campaigns that truly engage. Their standout projects are showcased here, with many earning recognition and building real impact online.',
  images: [
    { src: '/intern1.svg', alt: 'Intern profile 1' },
    { src: '/intern2.svg', alt: 'Intern profile 2' },
    { src: '/intern3.svg', alt: 'Intern profile 3' },
    { src: '/intern4.svg', alt: 'Intern profile 4' },
    { src: '/intern5.svg', alt: 'Intern profile 5' }
  ]
}

export default function InternshipDetail({
  portfolioItem
}: InternshipDetailProps) {
  return (
    <div className="space-y-16">
      {/* Header Section */}
      <ProgramSection {...internshipData} columns={5} />

      {/* Brand Section */}
      <div className="">
        <div className="justify-center align-middle flex bg-gradient-to-r from-[#FFA673] to-[#FF7D06] rounded-2xl p-12 text-center md:h-[540px]">
          <div className="justify-center flex">
            <Image
              src="/Logo.svg"
              width="300"
              height="180"
              alt="decorative vector"
              className=""
            />
          </div>
        </div>
      </div>
      <TrainingOverview {...technicalTrainingData} backgroundColor="bg-white" />
      <Testimonials />
    </div>
  )
}
