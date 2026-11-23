import React from 'react'
import styles from '@/modules/projectcard.module.css'
import Image from 'next/image'

interface ProjectCardProps {
  title?: string
  company?: string
  date?: string
  tools?: React.ReactNode[]
  bgImage?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  company,
  date,
  tools,
  bgImage
}) => {
  const visibleTools = tools?.slice(0, 2) ?? []

  return (
    <div className="group">
      <div
        className={`${styles.container} group relative mb-5 h-[230px] overflow-hidden rounded-[22px] border border-[#2e2e2e] bg-[#121212] shadow-[0_14px_30px_rgba(0,0,0,0.08)] transition-all duration-300 md:mb-7 md:h-[332.79px]`}
      >
        <Image
          src={bgImage || ''}
          fill
          alt={`${company}-project`}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/25 to-transparent" />
        <div className="absolute inset-0 bg-black/0 transition-opacity duration-300 group-hover:bg-black/20" />

        <div className="absolute inset-x-0 bottom-0 z-10 p-3 md:p-4">
          <div className="flex min-w-0 items-center gap-2 overflow-hidden rounded-2xl border border-white/10 bg-[#111111]/80 px-3 py-2 backdrop-blur-sm">
            <span className="inline-flex shrink-0 items-center rounded-full border border-[#D95200]/40 bg-[#1e1e1e] px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.2em] text-[#f5f5f5] md:text-[10px]">
              <span className="mr-1 text-[#D95200]">Project</span>
              architecture
            </span>

            <div className="flex min-w-0 flex-1 items-center justify-center gap-3 overflow-hidden md:gap-4">
              {visibleTools.map((ToolIcon, index) => (
                <div
                  key={index}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d9d9d9]/80 bg-[#0f0f0f] text-base text-white shadow-sm md:h-12 md:w-12 md:text-lg"
                >
                  {ToolIcon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="md:mb-3 text-sm tracking-wider">
        <span className="">{date}</span> |{' '}
        <span className="text-[#7F7F7F]">{company?.toUpperCase()}</span>
      </div>

      <h2 className="gradient-text mb-6 block w-full truncate text-3xl font-bold leading-[3rem] md:mb-9 md:text-4xl md:leading-[3rem]">
        {title}
      </h2>

      <span className="cursor-pointer text-xl text-[#939393]">
        Read more...
      </span>
    </div>
  )
}

export default ProjectCard
