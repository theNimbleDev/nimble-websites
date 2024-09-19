import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Blog | Nimbledev',
  description: 'Read latest trendings in tech.'
}

const BlogPage = () => {
  return (
    <main className=''>
      <h1 className='font-bold text-xl'>Blog Page - NimbleDev</h1>
    </main>
  )
}

export default BlogPage
