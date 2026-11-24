import { Metadata } from 'next'
import Container from '@/components/Container'

export const metadata: Metadata = {
  title: 'Blog | NimbleDev',
  description:
    'NimbleDev blog - insights on software development, engineering, and product design.'
}

const BlogPage = () => {
  return (
    <main className="py-20 md:py-32 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#D95200] font-semibold tracking-widest text-xs uppercase block mb-6">
            Blog
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-[#1D1D1D] mb-8 leading-tight">
            Insights & Ideas.
          </h1>
          <p className="text-[#404040] text-lg md:text-xl mb-12 leading-relaxed">
            Thoughts on software development, engineering outsourcing, and
            product design from the NimbleDev team.
          </p>
        </div>
      </Container>
    </main>
  )
}

export default BlogPage
