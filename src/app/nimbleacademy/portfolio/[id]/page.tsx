import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CreativeHighlight, creativeHighlightData } from '@/mockData'
import SkillUpDetail from '@/components/skillupDetail'
import InternshipDetail from '@/components/InternshipDetail'
import { MdArrowOutward } from 'react-icons/md'

interface PortfolioDetailPageProps {
  params: {
    id: string
  }
}

function getPortfolioItem(id: string): CreativeHighlight | undefined {
  return creativeHighlightData.find((item) => item.id === id)
}

export default function PortfolioDetailPage({
  params
}: PortfolioDetailPageProps) {
  const portfolioItem = getPortfolioItem(params.id)

  if (!portfolioItem) {
    notFound()
  }

  const renderPortfolioContent = () => {
    if (portfolioItem.category === 'skillup') {
      return <SkillUpDetail portfolioItem={portfolioItem} />
    } else if (portfolioItem.category === 'internship') {
      return <InternshipDetail portfolioItem={portfolioItem} />
    }

    // Fallback for other portfolio types
    return <SkillUpDetail portfolioItem={portfolioItem} />
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8"
        >
          <MdArrowOutward className="w-4 h-4" />
          Back to Portfolio
        </Link>

        {renderPortfolioContent()}
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return creativeHighlightData.map((item) => ({ id: item.id }))
}
