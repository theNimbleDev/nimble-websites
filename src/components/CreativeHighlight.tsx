import { creativeHighlightData } from '@/mockData'
import type { CreativeHighlight } from '@/mockData'

export default function CreativeHighlights() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
      <h2 className="text-3xl md:text-[46.29px] font-bold text-center mb-8 text-black">
        Creative{' '}
        <span className="bg-gradient-to-r from-[#FFA673] to-[#FF7D06] bg-clip-text text-transparent">
          Highlights
        </span>
      </h2>

      <p className="text-gray-600 text-base md:text-[19.98px] md:w-[880px] text-center mx-auto mb-12 leading-relaxed">
        Through our internship and skill-up training, we introduce you to the
        world of tech, sparking interest, building confidence, and guiding your
        first steps into a future of endless possibilities.{' '}
        <span className="bg-gradient-to-r from-[#FFA673] to-[#FF7D06] bg-clip-text text-transparent">
          Tap into the details and witness the journey from concept to mastery.
        </span>
      </p>
      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {creativeHighlightData.map((item: CreativeHighlight, index: number) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition h-[400px]"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

            <div className="absolute bottom-0 p-6 text-white">
              <div className="flex gap-2 items-center">
                <h3 className="text-xl md:text-[24.98px] font-semibold bg-gradient-to-r from-[#FFA673] to-[#FF7D06] bg-clip-text text-transparent">
                  {item.title}
                </h3>
                <p className="text-xl md:text-[24.98px] font-semibold">
                  {item.year}
                </p>
              </div>
              <p className="mt-2 text-sm md:text-[13px] leading-relaxed opacity-90">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
