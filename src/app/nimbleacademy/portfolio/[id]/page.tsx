import { notFound } from 'next/navigation'
import { creativeHighlightData } from '@/mockData'
import SkillUpDetail from '@/components/skillupDetail'
import InternshipDetail from '@/components/InternshipDetail'

interface PortfolioDetailPageProps {
  params: Promise<{
    id: string
  }>
}

function getPortfolioItem(id: string) {
  return creativeHighlightData.highlights.find((item) => item.id === id)
}

export default async function PortfolioDetailPage({
  params
}: PortfolioDetailPageProps) {
  const { id } = await params
  const portfolioItem = getPortfolioItem(id)

  if (!portfolioItem) {
    notFound()
  }
  const renderPortfolioContent = () => {
    switch (portfolioItem.category) {
      case 'skillup':
        return (
          <SkillUpDetail
            portfolioItem={portfolioItem}
            data={creativeHighlightData}
          />
        )
      case 'internship':
        return (
          <InternshipDetail
            portfolioItem={portfolioItem}
            data={creativeHighlightData}
          />
        )
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
  return creativeHighlightData.highlights.map((item) => ({ id: item.id }))
}
