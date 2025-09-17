'use client'
import React from 'react'
import Image from 'next/image'
import { FiCheckCircle } from 'react-icons/fi'

interface TrainingGoal {
  title: string
  description: string
}

interface ProcessStep {
  title: string
  description: string
}

interface TrainingOverviewProps {
  goals: TrainingGoal[]
  processSteps: ProcessStep[]
  mainImage: {
    src: string
    alt: string
  }
  secondImage: {
    src: string
    alt: string
  }

  backgroundColor?: string
  imagePosition?: 'left' | 'right'
}

const TrainingOverview: React.FC<TrainingOverviewProps> = ({
  goals,
  processSteps,
  mainImage,
  secondImage,
  backgroundColor = 'bg-white',
  imagePosition = 'right'
}) => {
  return (
    <section className={`${backgroundColor} pt-2 md:pt-12`}>
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start ${
            imagePosition === 'left' ? 'lg:grid-flow-col-dense' : ''
          }`}
        >
          {/* Training Goals Section */}
          <div
            className={`space-y-8 ${
              imagePosition === 'left' ? 'lg:col-start-2' : ''
            }`}
          >
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl md:text-4xl font-bold text-[#212121]">
                Training <span className="text-orange-500">Goals</span>
              </h2>
            </div>

            <div className="space-y-6">
              {goals.map((goal, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1">
                    <FiCheckCircle className="text-orange-500 text-sm" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-xl text-[#7B7B7B] mb-1">
                      {goal.title}
                    </h3>
                    <p className="text-[#7B7B7B] text-base md:text-xl leading-relaxed">
                      {goal.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Image */}
          <div
            className={`${
              imagePosition === 'left' ? 'lg:col-start-1 lg:row-start-1' : ''
            }`}
          >
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={mainImage.src}
                alt={mainImage.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Process and Training Section */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mt-16 ${
            imagePosition === 'left' ? '' : 'lg:grid-flow-col-dense'
          }`}
        >
          {/* Process Steps */}
          <div
            className={`space-y-8 ${
              imagePosition === 'left' ? '' : 'lg:col-start-2'
            }`}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-[#212121]">
              Process and <span className="text-orange-500">Training</span>
            </h2>

            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1">
                    <FiCheckCircle className="text-orange-500 text-base" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-xl text-[#7B7B7B] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-[#7B7B7B] text-base md:text-xl leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Image */}
          <div
            className={`${
              imagePosition === 'left' ? 'lg:col-start-2' : 'lg:col-start-1'
            }`}
          >
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center">
              <div className="w-32 h-32 rounded-lg">
                <Image
                  src={secondImage.src}
                  alt={secondImage.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrainingOverview
