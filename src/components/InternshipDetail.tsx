import { CreativeHighlight } from '@/mockData'
import Image from 'next/image'
import Testimonials from './Testimonials'
import ProgramSection from './ProgramSection'

interface InternshipDetailProps {
  portfolioItem: CreativeHighlight
}
// Internship Section
const internshipData = {
  date: 'August 2024',
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
      {/* Internship Section */}
      <ProgramSection {...internshipData} columns={5} />
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

      {/* Image Gallery - Internship specific layout with 5 images */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {portfolioItem.detailImages.slice(0, 5).map((image, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden h-32 md:h-40"
          >
            <Image
              src={
                image ||
                `/placeholder.svg?height=200&width=200&query=Internship participant ${
                  index + 1
                }`
              }
              alt={`Internship participant ${index + 1}`}
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

      {/* Internship Specific Content - Professional Development Section */}
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Professional{' '}
              <span className="bg-gradient-to-r from-[#FFA673] to-[#FF7D06] bg-clip-text text-transparent">
                Development
              </span>
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our internship program focuses on real-world application of
              skills, mentorship, and career preparation. Interns work on live
              projects, collaborate with experienced professionals, and build
              portfolios that showcase their capabilities to future employers.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-[#FFA673] to-[#FF7D06] rounded-full"></div>
                <span className="text-gray-700">
                  Hands-on project experience
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-[#FFA673] to-[#FF7D06] rounded-full"></div>
                <span className="text-gray-700">One-on-one mentorship</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-[#FFA673] to-[#FF7D06] rounded-full"></div>
                <span className="text-gray-700">Portfolio development</span>
              </div>
            </div>
          </div>
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
            <Image
              src="/professional-internship-workspace-with-mentors-and.jpg"
              alt="Internship workspace"
              fill
              className="object-cover"
            />
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
              Building tomorrow's tech leaders today
            </p>
          </div>
        </div>
      </div>

      <Testimonials />
    </div>
  )
}
