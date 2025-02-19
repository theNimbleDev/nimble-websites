'use client'
import React, { useState } from 'react'
import { Button } from '@nextui-org/react'
import { MdArrowOutward } from 'react-icons/md'
import { RiArrowDropDownLine } from 'react-icons/ri'

const ConnectForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    skills: ''
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-6 font-normal">
      <div className="space-y-1 ">
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name*"
          required
          className="w-full px-4 py-4 border-b border-gray-300 focus:border-primary-100 focus:outline-none"
        />
      </div>
      <div className="space-y-1">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address*"
          required
          className="w-full px-4 py-4 border-b border-gray-300 focus:border-primary-100 focus:outline-none"
        />
      </div>
      <div className="space-y-1">
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number*"
          required
          className="w-full px-4 py-4 border-b border-gray-300 focus:border-primary-100 focus:outline-none"
        />
      </div>
      <div className="space-y-1 py-4 border-b border-gray-300 focus:border-primary-100 focus:outline-none appearance-none">
        <select
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          required
          className="w-full px-4 bg-white text-gray-400"
        >
          <option value="">Choose your Skills*</option>
          <option value="web">Web Development</option>
          <option value="mobile">Mobile Development</option>
          <option value="design">UI/UX Design</option>
          <option value="other">Other</option>
        </select>
      </div>
      <Button
        as="a"
        href="/#contact"
        endContent={<MdArrowOutward />}
        radius="none"
        className="text-white cursor-pointer mt-12 bg-primary-100"
      >
        Send Us a messsage
      </Button>
    </form>
  )
}

export default ConnectForm
