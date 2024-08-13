import React from "react"
import TeamCard from "./TeamCard"
import ProjectCard from "./ProjectCard"

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
        <ProjectCard
          key={index}
          title={member.title}
          company={member.company}
          date={member.date}
          tools={member.tools}
          bgImage={member.bgImage}
        />
      ))}
    </div>
  )
}

export default ProjectList
