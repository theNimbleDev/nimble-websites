/* eslint-disable react/jsx-key */
import { FaFigma, FaLaravel, FaReact, FaWordpress } from 'react-icons/fa'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { v4 as uuidv4 } from 'uuid'

export const teamMembers = [
  {
    id: uuidv4(),
    first_name: 'Parton',
    last_name: 'Julian ',
    position_comp: 'CEO, theNimbles',
    imageUrl: '/teampics.svg',
    bio: `Julian is a <span style="color: #FF6600; font-weight: 700">CEO</span> of <span style="font-weight: 700">the</span><span style="color: #FF6600; font-weight: 700">Nimbles</span> and a Financial Expert in import and Export`
  },
  {
    id: uuidv4(),
    first_name: 'Doe',
    last_name: 'Jane ',
    position_comp: 'CTO, theNimbles',
    imageUrl: '/teampics.svg',
    bio: `Jane is a <span style="color: #FF6600; font-weight: 700">CTO</span> of <span style="font-weight: 700">the</span><span style="color: #FF6600; font-weight: 700">Nimbles</span> and a Financial Expert in import and Export`
  },
  {
    id: uuidv4(),
    first_name: 'Smith',
    last_name: 'John ',
    position_comp: 'COO, theNimbles',
    imageUrl: '/teampics.svg',
    bio: `Jane is a <span style="color: #FF6600; font-weight: 700">COO</span> of <span style="font-weight: 700">the</span><span style="color: #FF6600; font-weight: 700">Nimbles</span> and a Financial Expert in import and Export`
  }
]

export const projects = [
  {
    id: 'mining-license-management',
    title: 'Mining License management Application',
    company: 'MOTIMOSE',
    date: '02.02.2024',
    // eslint-disable-next-line react/jsx-key
    tools: [
      <RiNextjsFill />,
      <FaLaravel className="text-primary-100" />,
      <RiTailwindCssFill className="text-[#38bdf9]" />,
      <FaFigma />
    ],
    bgImage: '/mininglmp.svg',
    images: ['/miningdash.svg', '/mining-image-2.svg', '/mining-image-3.svg'],
    summary:
      'In a bid to streamline license management, we developed a comprehensive License Expiration Notification Application for a client handling over 3,000 licenses.The application automated the tracking of expiration dates and sent timely reminders for both quarterly and annual reports, ensuring the client never missed a deadline. Advanced encryption was used to protect sensitive data, addressing security concerns. Its intuitive design simplified administrative tasks, reduced errors, and overall enhanced compliance and operational efficiency, making license management much smoother for the client.',
    challenges: [
      'The client struggled to manage over 3,000 licenses, finding it difficult to accurately track expiration dates and renewals.',
      'They also faced challenges ensuring that quarterly and annual reports were submitted on time for compliance.',
      'Additionally, they were worried about the security of sensitive license and payment information.',
      'Frequent problems with manual tracking and reporting increased their administrative workload and risked errors.'
    ],
    solutions: [
      'We automated the management of over 3,000 licenses, making it easy to track expiration dates and renewals.',
      'The application also ensures timely reporting with automated reminders and electronic submissions.',
      'To keep data secure, we used string encryption and access controls.',
      'Plus, the Intuitive Interface simplified tracking and reporting, cutting down on administrative works and errors.'
    ],
    website: 'https://mininglmp.com/'
  },
  {
    id: 'temitope-yoga',
    title: 'Temitope Yoga',
    company: 'Temitope Sonuyi',
    date: '12.09.2024',
    // eslint-disable-next-line react/jsx-key
    tools: [<FaWordpress />, <FaFigma />],
    bgImage: '/project1.svg',
    images: ['/miningdash.svg'],
    summary: '',
    challenges: ['', '', '', ''],
    solutions: ['', '', '', '']
  }
]

export const testimonial = [
  {
    id: uuidv4(),
    last_name: 'Oyeyemi',
    first_name: 'Deborah',
    image: '/review-profile.svg',
    review:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don look even slightly believable.'
  },
  {
    id: uuidv4(),
    last_name: 'Adebayo',
    first_name: 'Daniel',
    image: '/review-profile.svg',
    review:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat'
  },
  {
    id: uuidv4(),
    last_name: 'John',
    first_name: 'Doe',
    image: '/review-profile.svg',
    review:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat'
  },
  {
    id: uuidv4(),
    last_name: 'Oyeyemi',
    first_name: 'Deborah',
    image: '/review-profile.svg',
    review:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat'
  },
  {
    id: uuidv4(),
    last_name: 'Oyeyemi',
    first_name: 'Deborah',
    image: '/review-profile.svg',
    review:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat'
  },
  {
    id: uuidv4(),
    last_name: 'Oyeyemi',
    first_name: 'Deborah',
    image: '/review-profile.svg',
    review:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat'
  }
]
