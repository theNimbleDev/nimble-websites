import React from "react"
import Button from "./Button"
import styles from "@/modules/banner.module.css"

interface BannerProps {
  title1: string
  title2: string
  subtext: string
}

const Banner: React.FC<BannerProps> = ({ title1, title2, subtext }) => {
  return (
    <div
      className={`${styles.banner} p-7 md:p-14 flex flex-col items-center md:block `}
    >
      <span>{subtext.toUpperCase()}</span>
      <div className="flex flex-col gap-1 text-white text-4xl md:text-7xl mxd:text-5xl w-full text-center md:text-left  my-7 md:mt-2 md:mb-10">
        <span className="font-bold">{title1}</span>
        <span className="font-thin">{title2}</span>
      </div>
      <Button
        cta="Book a call"
        href="https://calendly.com/akpjunio4real/30min"
        blank="_blank"
        borderColor="border-white"
      />
    </div>
  )
}

export default Banner
