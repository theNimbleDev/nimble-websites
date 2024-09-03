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
  return (
    <div>
      <div
        className={`${styles.container} group mb-5 md:mb-7 p-4 md:w-full h-[230px] md:h-[332.79px] rounded-2xl border border-primary-200 relative overflow-hidden`}
      >
        <Image
          src={bgImage || ''}
          layout="fill"
          objectFit="cover"
          alt={`${company}-project`}
          className="rounded-2xl"
        />
        {/* Overlay div */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 rounded-2xl"></div>

        <div className="absolute bottom-0 left-0 right-0 m-3 flex items-center gap-2 p-4 rounded-full bg-custom-rgba-2 z-10">
          <h3 className="text-xs py-2 px-3 border border-gray-700 bg-custom-rgba rounded-full">
            <span className="gradient-text font-medium">Project</span>{' '}
            <span className="font-thin">architecture</span>
          </h3>
          <div className="flex items-center gap-4 text-sm md:text-2xl">
            {tools &&
              tools.map((ToolIcon, index) => <div key={index}>{ToolIcon}</div>)}
          </div>
        </div>
      </div>
      <div className="md:mb-3 text-sm tracking-wider">
        <span className="">{date}</span> |{' '}
        <span className="text-[#7F7F7F]">{company?.toUpperCase()}</span>
      </div>
      <h2 className="gradient-text mb-6 md:mb-9 font-bold text-3xl leading-[3rem] md:leading-[3rem] md:text-4xl truncate">
        {title}
      </h2>

      <span className="text-[#939393] text-xl cursor-pointer">
        Read more...
      </span>
    </div>
  )
}

export default ProjectCard
