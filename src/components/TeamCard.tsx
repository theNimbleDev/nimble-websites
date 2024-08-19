import React from "react"
import Image from "next/image"

interface TeamCardProps {
  first_name: string
  last_name: string
  position_comp: string
  imageUrl: string
  bio: string // New prop for the bio description
}

const TeamCard: React.FC<TeamCardProps> = ({
  first_name,
  last_name,
  position_comp,
  imageUrl,
  bio
}) => {
  return (
    <div className="bg-custom-diagonal-gradient p-8 pb-0 md:p-10 md:pb-0 border-t border-l border-r border-primary-200 rounded-tl-2xl rounded-tr-2xl w-full">
      <div className="relative group">
        <div className="relative">
          <Image
            src={imageUrl}
            alt={`${first_name} ${last_name}`}
            width="400"
            height="615"
            className="rounded-tl-2xl rounded-tr-2xl object-cover"
          />
          <div className="absolute inset-0 rounded-tl-2xl rounded-tr-2xl bg-black flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:z-10 transition-opacity duration-300">
            <div
              className="text-center p-4"
              dangerouslySetInnerHTML={{ __html: bio }}
            ></div>
          </div>
        </div>
        <div className="absolute pl-5 bottom-8 left-0 w-full">
          <h3 className="text-3xl md:text-4xl text-white font-semibold mb-2">
            <span className="gradient-text">{last_name} </span>
            <span>{first_name}</span>
          </h3>
          <span className="text-xl md:text-2xl text-white">
            {position_comp}
          </span>
        </div>
      </div>
    </div>
  )
}

export default TeamCard
