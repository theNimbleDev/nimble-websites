/* eslint-disable react/jsx-key */
import { FaFigma, FaLaravel, FaReact, FaWordpress } from 'react-icons/fa'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { v4 as uuidv4 } from 'uuid'

export const bodMembers = [
  {
    id: uuidv4(),
    first_name: 'Abraham',
    last_name: 'Akpan ',
    position_comp: 'CEO, theNimbles',
    imageUrl: '/abraham.svg',
    bio: `Abraham is the <span style="color: #FF6600; font-weight: 700">CEO</span> of <span style="font-weight: 700">the</span><span style="color: #FF6600; font-weight: 700">Nimbles</span> and a Software Engineer.`
  },
  {
    id: uuidv4(),
    first_name: 'Korede',
    last_name: 'Adeuti ',
    position_comp: 'Co-Founder, theNimbles',
    imageUrl: '/korex.svg',
    bio: `Korede is a <span style="color: #FF6600; font-weight: 700">Co-Founder</span> and the Business Development Manager of <span style="font-weight: 700">the</span><span style="color: #FF6600; font-weight: 700">Nimbles</span> and also a Trade Specialist in Import and Export.`
  },
  {
    id: uuidv4(),
    first_name: 'Miracle',
    last_name: 'Shaibu ',
    position_comp: 'CTO, theNimbles',
    imageUrl: '/miracle.svg',
    bio: `Miracle is the <span style="color: #FF6600; font-weight: 700">CTO</span> of <span style="font-weight: 700">the</span><span style="color: #FF6600; font-weight: 700">Nimbles</span> and an expert in software architecture and backend systems, drives innovation and ensures the seamless delivery of scalable technology solutions`

  }
]

export const teamMembers = [
  {
    id: uuidv4(),
    first_name: 'Abraham',
    last_name: 'Akpan ',
    position_comp: 'Software Engineer',
    imageUrl: '/abraham.svg',
    bio: `Abraham is <span style="color: #FF6600; font-weight: 700">Software Engineer</span> and loves writing clean code. He is also learning how to play the keyboard 🎹 🤪🤪🤪`
  },
  {
    id: uuidv4(),
    first_name: 'Miracle',
    last_name: 'Shaibu ',
    position_comp: 'Backend Developer',
    imageUrl: '/miracle.svg',
    bio: `Miracle is an expert in <span style="color: #FF6600; font-weight: 700">software architecture</span> and <span style="color: #FF6600; font-weight: 700">backend systems</span>, drives innovation and ensures the seamless delivery of scalable technology solutions`

  },
  {
    id: uuidv4(),
    first_name: 'Samuel',
    last_name: 'Alisigwe ',
    position_comp: 'UI/UX Designer & Web Developer',
    imageUrl: '/samuel.svg',
    bio: `I am an experienced <span style="color: #FF6600; font-weight: 700">software developer</span>, efficient in frontend technologies like HTML, CSS, JavaScript, and React etc. With a focus on seamless user experiences, I write clean, functional codes that enhances both design and usability. My expertise enables me to create intuitive and responsive interfaces that resonate with users.`


  },
  {
    id: uuidv4(),
    first_name: 'Wisdom',
    last_name: 'Munachi ',
    position_comp: 'Copy/Content Writer',
    imageUrl: '/wisdom.svg',
    bio: `Wisdom is an experienced <span style="color: #FF6600; font-weight: 700">copywriter and content writer</span>, skilled in creating engaging and impactful content. With a focus on clarity and audience connection, I crafts messages that resonate and drive results.`
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
    images: ['/miningdash.svg', '/mining-image-2.svg', '/mining-image-3.svg', '/nimbles.gif'],
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
  }
  // {
  //   id: 'temitope-yoga',
  //   title: 'Temitope Yoga',
  //   company: 'Temitope Sonuyi',
  //   date: '12.09.2024',
  //   // eslint-disable-next-line react/jsx-key
  //   tools: [<FaWordpress />, <FaFigma />],
  //   bgImage: '/project1.svg',
  //   images: ['/miningdash.svg'],
  //   summary: '',
  //   challenges: ['', '', '', ''],
  //   solutions: ['', '', '', '']
  // }
]

export const testimonial = [
  {
    id: uuidv4(),
    last_name: 'Atensieye',
    first_name: 'Ayomide',
    image: '/ayomide.png',
    position: 'Project Superintendent, Motimose',
    review:
      `The Mining License Management Dashboard has been a game-changer for us. Its intuitive design, automated alerts, and seamless sharepoint integration have made managing over 1,000 licenses effortless and kept us compliant. We’re thrilled with the increased efficiency and organization.`,
    socials: 'https://www.linkedin.com/in/ayomide-oluwadunsin-atanseiye-2757b9b6/'
  },
  {
    id: uuidv4(),
    last_name: 'Lawal',
    first_name: 'Goodness',
    image: '/goodness.png',
    position: 'CEO, Afridev',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc leo libero, tincidunt eu fringilla ut, semper vitae risus. Etiam in accumsan dui. Suspendisse tristique libero quis felis aliquet, eget convallis elit pharetra. Etiam in lorem mi. Curabitur feugiat pretium posuere. Integer pretium blandit ex at mattis. Pellentesque porta quam ac tellus posuere, eget rutrum ipsum consequat.',
    socials: ''
  },
  {
    id: uuidv4(),
    last_name: 'Lawal',
    first_name: 'John',
    image: '/lawal.png',
    position: 'Freelance Editorial Designer',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc leo libero, tincidunt eu fringilla ut, semper vitae risus. Etiam in accumsan dui. Suspendisse tristique libero quis felis aliquet, eget convallis elit pharetra. Etiam in lorem mi. Curabitur feugiat pretium posuere. Integer pretium blandit ex at mattis. Pellentesque porta quam ac tellus posuere, eget rutrum ipsum consequat.',
    socials: ''
  },
  {
    id: uuidv4(),
    last_name: 'Oyeyemi',
    first_name: 'Deborah',
    image: '/review-profile.svg',
    position: 'Data Scientist',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc leo libero, tincidunt eu fringilla ut, semper vitae risus. Etiam in accumsan dui. Suspendisse tristique libero quis felis aliquet, eget convallis elit pharetra. Etiam in lorem mi. Curabitur feugiat pretium posuere. Integer pretium blandit ex at mattis. Pellentesque porta quam ac tellus posuere, eget rutrum ipsum consequat.',
    socials: ''
  },
]
