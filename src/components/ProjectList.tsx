import React from 'react'
import TeamCard from './TeamCard'
import ProjectCard from './ProjectCard'
import Link from 'next/link'

interface Project {
  title?: string
  company?: string
  date?: string
  tools?: React.ReactNode[]
  bgImage?: string
}

interface ProjectListProps {
  projects: Project[]
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-20">
      {projects.map((member, index) => (
        <Link href={`/nimbledev/portfolio/${index + 1}`} key={index} passHref>
          <ProjectCard
            title={member.title}
            company={member.company}
            date={member.date}
            tools={member.tools}
            bgImage={member.bgImage}
          />
        </Link>
      ))}
    </div>
  )
}

export default ProjectList
