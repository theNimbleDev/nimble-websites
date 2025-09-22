import { notFound } from 'next/navigation'
import { CreativeHighlight, creativeHighlightData } from '@/mockData'
import SkillUpDetail from '@/components/skillupDetail'
import InternshipDetail from '@/components/InternshipDetail'

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
    switch (portfolioItem.category) {
      case 'skillup':
        return <SkillUpDetail portfolioItem={portfolioItem} />
      case 'internship':
        return <InternshipDetail portfolioItem={portfolioItem} />
      default:
        throw new Error(`Unknown portfolio category: ${portfolioItem.category}`)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderPortfolioContent()}
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return creativeHighlightData.map((item) => ({ id: item.id }))
}
