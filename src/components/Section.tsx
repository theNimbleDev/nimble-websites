import React from 'react'
import styles from '@/modules/section.module.css'

interface SectionProps {
  classname?: string
  children: React.ReactNode
  bgClass?: string
}

const Section: React.FC<SectionProps> = ({ children, classname, bgClass }) => {
  return (
    <section
      className={`${styles.section} ${bgClass &&
        styles[bgClass]} w-full ${classname && classname}`}
    >
      {children}
    </section>
  )
}

export default Section
