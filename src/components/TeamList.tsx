import React from 'react'
import TeamCard from './TeamCard'

interface TeamMember {
  first_name: string
  last_name: string
  position_comp: string
  imageUrl: string
  bio: string
}

interface TeamListProps {
  teamMembers: TeamMember[]
}

const TeamList: React.FC<TeamListProps> = ({ teamMembers }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-20">
      {teamMembers.map((member, index) => (
        <TeamCard
          key={index}
          first_name={member.first_name}
          last_name={member.last_name}
          position_comp={member.position_comp}
          imageUrl={member.imageUrl}
          bio={member.bio}
        />
      ))}
    </div>
  )
}

export default TeamList
