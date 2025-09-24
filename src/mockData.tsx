/* eslint-disable react/jsx-key */
import { FaFigma, FaLaravel, FaReact, FaWordpress } from 'react-icons/fa'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
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
    images: [
      '/miningdash.svg',
      '/mining-image-2.svg',
      '/mining-image-3.svg',
      '/nimbles.gif'
    ],
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
    id: 'arinze-stanley',
    title: 'Portfolio website',
    company: 'Arinse Stanley',
    date: '2023',
    // eslint-disable-next-line react/jsx-key
    tools: [<RiNextjsFill />, <SiMongodb />],
    bgImage: '/arinze-bg.png',
    images: [
      '/arinze-bg.png',
      '/gallery.png',
      '/mobile.png',
      '/arinze-portfolio.gif'
    ],
    summary:
      'Designed and developed a sleek and professional portfolio website for Arinze Stanley, a hyperrealist artist. The website showcases his life-like pencil drawings and highlights his artistry through an engaging, visually appealing, and user-friendly interface. The portfolio features high-quality images of his artwork, a biography, exhibition history, and publications.',
    challenges: [
      'Ensuring the website effectively highlights the intricate details of hyperrealistic pencil drawings.',
      'Creating a responsive design that maintains the aesthetic quality of artwork on various devices.',
      'Optimizing high-resolution images without compromising performance.'
    ],
    solutions: [
      'Developed a dynamic gallery section using Next.js to display Arinze’s artwork in an organized and appealing manner.',
      'Implemented responsive layouts and adaptive image techniques to ensure a seamless user experience across all devices.',
      'Integrated MongoDB to manage and showcase Arinze’s projects and exhibitions dynamically.'
    ],
    website: 'https://arinzestanley.com/'
  }
  // {
  //   id: 'arinze-stanley',
  //   title: 'Arinze`s Portfolio website',
  //   company: 'Arinse Stanley',
  //   date: '2023',
  //   // eslint-disable-next-line react/jsx-key
  //   tools: [<FaReact />, <RiNextjsFill />, <SiMongodb />
  //   ],
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
    review: `The Mining License Management Dashboard has been a game-changer for us. Its intuitive design, automated alerts, and seamless sharepoint integration have made managing over 1,000 licenses effortless and kept us compliant. We’re thrilled with the increased efficiency and organization.`,
    socials:
      'https://www.linkedin.com/in/ayomide-oluwadunsin-atanseiye-2757b9b6/'
  }
  // {
  //   id: uuidv4(),
  //   last_name: 'Lawal',
  //   first_name: 'Goodness',
  //   image: '/goodness.png',
  //   position: 'CEO, Afridev',
  //   review:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc leo libero, tincidunt eu fringilla ut, semper vitae risus. Etiam in accumsan dui. Suspendisse tristique libero quis felis aliquet, eget convallis elit pharetra. Etiam in lorem mi. Curabitur feugiat pretium posuere. Integer pretium blandit ex at mattis. Pellentesque porta quam ac tellus posuere, eget rutrum ipsum consequat.',
  //   socials: ''
  // },
  // {
  //   id: uuidv4(),
  //   last_name: 'Lawal',
  //   first_name: 'John',
  //   image: '/lawal.png',
  //   position: 'Freelance Editorial Designer',
  //   review:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc leo libero, tincidunt eu fringilla ut, semper vitae risus. Etiam in accumsan dui. Suspendisse tristique libero quis felis aliquet, eget convallis elit pharetra. Etiam in lorem mi. Curabitur feugiat pretium posuere. Integer pretium blandit ex at mattis. Pellentesque porta quam ac tellus posuere, eget rutrum ipsum consequat.',
  //   socials: ''
  // },
  // {
  //   id: uuidv4(),
  //   last_name: 'Oyeyemi',
  //   first_name: 'Deborah',
  //   image: '/review-profile.svg',
  //   position: 'Data Scientist',
  //   review:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc leo libero, tincidunt eu fringilla ut, semper vitae risus. Etiam in accumsan dui. Suspendisse tristique libero quis felis aliquet, eget convallis elit pharetra. Etiam in lorem mi. Curabitur feugiat pretium posuere. Integer pretium blandit ex at mattis. Pellentesque porta quam ac tellus posuere, eget rutrum ipsum consequat.',
  //   socials: ''
  // },
]

export interface PortfolioSection {
  date?: string
  subtitle?: string
  title: string
  description: string
  images: { src: string; alt: string }[]
  showCTA?: boolean
  ctaText?: string
  ctaSubtext?: string
}

export interface CreativeHighlight {
  id: string // Added unique ID for routing
  Upcoming?: string
  title: string
  year: number
  image: string
  description: string
  highlight: boolean
  fullDescription?: string
  detailImages: string[]
  category: 'skillup' | 'internship'
  date: string
  location: string
  sections?: {
    training?: PortfolioSection
    finalResults?: PortfolioSection
    brand?: {
      show: boolean
      logoSrc?: string
    }
  }
}

export const creativeHighlightData: CreativeHighlight[] = [
  {
    id: 'skillup-training-2024',
    title: 'SkillUp Training',
    year: 2024,
    image: '/skillUp2024.jpg',
    description:
      "Nimble Academy's Skill-Up Training is designed for absolute beginners who are eager to explore the digital world. The program introduces young talents to core creative and technical areas including...",
    highlight: true,
    fullDescription:
      "Nimble Academy's Skill-Up Training is designed for absolute beginners who are eager to explore the digital world. The program introduces young talents to core creative and technical areas including:  design, photography, development, social media management, etc. Through guided learning, hands-on practice, and real-world projects, participants will discover their strengths, build future-ready skills, and uncover what excites them most in the digital space.",
    detailImages: [],
    category: 'skillup',
    date: 'August 2024',
    location: 'Nimble Academy',
    sections: {
      training: {
        date: 'August 2024',
        subtitle: '| Nimble Academy',
        title: 'SkillUp Training',
        description:
          'Showcasing the training sessions and activities from our SkillUp program.',
        images: [
          { src: '/skillup1.png', alt: 'Student learning photography' },
          { src: '/skillup2.png', alt: 'Creative workshop session' },
          { src: '/skillup3.png', alt: 'Social media training' },
          { src: '/skillup4.png', alt: 'Student presentation' }
        ]
      },
      finalResults: {
        title: 'Final Results',
        description:
          'Our students transformed their creativity into mastery, capturing breathtaking photos, designing powerful visuals, and crafting social media campaigns that truly engage. Their standout projects are showcased here, with many earning recognition and building real impact online.',
        images: [
          { src: '/finalr1.png', alt: 'Student project showcase' },
          { src: '/finalr2.png', alt: 'Photography work' },
          { src: '/finalr3.png', alt: 'Design presentation' },
          { src: '/finalr4.png', alt: 'Team collaboration' }
        ]
      }
    }
  },
  {
    id: 'internship-2024',
    title: 'Internship',
    year: 2024,
    image: '/internship24.jpg',
    description:
      'Designed for absolute beginners, our Skill-Up Training introduced young talents to core areas like design, photography, development, and digital tools — helping them discover what excites them most.',
    highlight: true,
    fullDescription:
      "At NimbleDev, We empower interns with the creative and technical expertise to excel in today's digital world. Our programs go beyond theory, delivering immersive, hands-on training that turns passion into professional mastery.",
    detailImages: [],
    category: 'internship',
    date: 'August 2024',
    location: 'Nimble Academy',
    sections: {
      training: {
        date: 'August 2024',
        subtitle: '| Nimble Academy',
        title: 'Internship 2024',
        description:
          'Our students transformed their creativity into mastery, capturing breathtaking photos, designing powerful visuals, and crafting social media campaigns that truly engage. Their standout projects are showcased here, with many earning recognition and building real impact online.',
        images: [
          { src: '/intern1.svg', alt: 'Intern profile 1' },
          { src: '/intern2.svg', alt: 'Intern profile 2' },
          { src: '/intern3.svg', alt: 'Intern profile 3' },
          { src: '/intern4.svg', alt: 'Intern profile 4' },
          { src: '/intern5.svg', alt: 'Intern profile 5' }
        ]
      },
      finalResults: {
        date: 'August 2024 | Nimble Academy',
        title: 'Results',
        description:
          'Students honed their skills in portrait and landscape photography, capturing stunning visuals. Their best work is showcased right here and some gained recognition online. Each shot tells a unique story, reflecting their creative growth.',
        images: [
          { src: '/internw1.png', alt: 'Professional web portfolio design' },
          { src: '/internw2.svg', alt: 'Stunning landscape photography' },
          { src: '/internw3.svg', alt: 'Group photo at academy event' },
          { src: '/internw4.svg', alt: 'Creative photography composition' }
        ],
        showCTA: true,
        ctaText: 'Transform Your Future with',
        ctaSubtext:
          "Unlock your potential with exciting courses designed to give you the skills and know-how to improve today's fast-paced world"
      },
      brand: {
        show: true,
        logoSrc: '/Logo.svg'
      }
    }
  },
  {
    id: '/',
    // Upcoming: 'COMING SOON',
    title: 'SkillUp Training',
    year: 2025,
    image: '/skillUp25.png',
    description:
      'Designed for absolute beginners, our Skill-Up Training introduced young talents to core areas like design, photography, development, and digital tools — helping them discover what excites them most.',
    highlight: true,
    fullDescription:
      'Our 2025 SkillUp Training program builds on the success of previous cohorts, introducing even more comprehensive modules and hands-on projects. Participants explore cutting-edge technologies and creative methodologies that prepare them for the evolving digital landscape.',
    detailImages: [
      '/skillup-2025-training-session.jpg',
      '/advanced-design-workshop.jpg',
      '/tech-innovation-lab.jpg',
      '/creative-collaboration-space.jpg'
    ],
    category: 'skillup',
    date: 'Upcoming 2025',
    location: 'Nimble Academy'
  }
]

export interface Testimonial {
  id: number
  name: string
  role: string
  text: string
  rating: number
  date: string
  image: string
}
export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Sule Wasiu Sunday',
    role: 'Photography',
    text: "I'm thrilled to have participated in NimbleAcademy. I'm grateful for the founders and everyone involved. The photography course exceeded my expectations and I learned a great deal. I can now confidently adjust ISO settings and take amazing pictures. Thank you NimbleAcademy",
    rating: 4.5,
    date: '12 NOV',
    image: '/sunday.png'
  },
  {
    id: 2,
    name: 'John Doe',
    role: 'Photography',
    text: 'NimbleAcademy gave me the skills and confidence for pro-level photography. Every session made learning fun and practical!',
    rating: 4.5,
    date: '12 NOV',
    image: '/doe.png'
  },
  {
    id: 3,
    name: 'John Doe',
    role: 'Software Dev',
    text: 'I never knew photography could be this exciting until the training. Now, I capture breathtaking shots effortlessly!',
    rating: 4.5,
    date: '12 NOV',
    image: '/shedoe.png'
  }
]

// / SkillUp Trainees Reviews
export const skillUpTestimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Sule Wasiu Sunday',
    role: 'Photography',
    text: "Participating in NimbleAcademy was an amazing journey. The photography training exceeded my expectations and gave me confidence in technical skills and camera creative techniques. I'm grateful to the mentors and organizers.",
    rating: 4.5,
    date: '12 NOV',
    image: '/sunday.png'
  },
  {
    id: 2,
    name: 'Victoria Chika',
    role: 'Graphic Design',
    text: "I'm grateful for NimbleAcademy and the amazing graphic design tutor. The course gave me a perfect work-only opportunity, away what didn't bring knowledge and experience but also made me feel confident in my design journey. Thank you NimbleAcademy.",
    rating: 4.5,
    date: '12 NOV',
    image: '/sunday.png'
  },
  {
    id: 3,
    name: 'Ogoh Justice',
    role: 'Photography',
    text: "Joining NimbleAcademy and PCS was an inspiring journey. The photography training gave me confidence in a solid foundation in my skills. I learned advanced composition and editing. I'm grateful to the mentors for their guidance and support.",
    rating: 4.5,
    date: '12 NOV',
    image: '/ogoh-justice.svg'
  }
]

// Internship Trainees Reviews
export const internshipTestimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Munachi Wisdom',
    role: 'Content Writer',
    text: 'Being an intern at Nimbles Academy was truly life-changing. I discovered new strengths and built practical skills. The support from environment made learning exciting. These experiences opened doors to greater opportunities awaiting me.',
    rating: 4.5,
    date: '12 NOV',
    image: '/munachi-wisdom.svg'
  },
  {
    id: 2,
    name: 'Ekiye Constance',
    role: 'Copywriter & Project Manager',
    text: 'My copywriting internship at TheNimbles was a great experience. I sharpened my writing and worked on real projects, learned how to craft content that resonates with people. The journey deepened both my skills and confidence.',
    rating: 4.5,
    date: '12 NOV',
    image: '/ekiye-constance.svg'
  },
  {
    id: 3,
    name: 'Blessed Samuel',
    role: 'UI/UX Designer & Developer',
    text: 'During my UI/UX Design and Development internship at NimbleDev, I grew tremendously. Working on live projects strengthened both my design and coding skills. I tackled real-world challenges. This experience gave me valuable insights.',
    rating: 4.5,
    date: '12 NOV',
    image: '/blessed-samuel.svg'
  }
]

export const expertsData = [
  {
    id: 1,
    name: 'Ineh Vanessah',
    role: 'SMM Instructor',
    image: '/Ineh.png'
  },
  {
    id: 2,
    name: 'Blessed Samuel',
    role: 'Design Instructor',
    image: '/Blessed.png'
  },
  {
    id: 3,
    name: 'Emmanuel Ekong',
    role: 'Photography Instructor',
    image: '/Zoe.png'
  }
]

export interface VideoTestimonial {
  id: number
  name: string
  role: string
  image: string
  video: string
}

export const videoTestimonials: VideoTestimonial[] = [
  {
    id: 1,
    name: 'Angela Bower',
    role: 'Software Developer',
    image: '/BG-1.png',
    video: 'https://www.youtube.com/embed/jF8wXdy6J8o'
  },
  {
    id: 2,
    name: 'Albert Flores',
    role: 'Founder of GearUp',
    image: '/flores.png',
    video: 'https://www.youtube.com/embed/QO12Nx0jpxw'
  },
  {
    id: 3,
    name: 'Albert Flores',
    role: 'Founder of GearUp',
    image: '/albert.png',
    video: 'https://www.youtube.com/embed/LutQoVmrSlM'
  },
  {
    id: 4,
    name: 'Angela Bower',
    role: 'Software Developer',
    image: '/BG-1.png',
    video: 'https://www.youtube.com/embed/H6A-y1M__oc'
  },
  {
    id: 5,
    name: 'Albert Flores',
    role: 'Founder of GearUp',
    image: '/flores.png',
    video: 'https://www.youtube.com/embed/XdACpapyJPM'
  },
  {
    id: 6,
    name: 'Albert Flores',
    role: 'Founder of GearUp',
    image: '/albert.png',
    video: 'https://www.youtube.com/embed/QO12Nx0jpxw'
  }
]

export const creativeTrainingData = {
  goals: [
    {
      title: '',
      description:
        'Train students to capture stunning photos and tell powerful visual stories.'
    },
    {
      title: '',
      description:
        'Build creativity in Graphic Design through branding, digital illustration, and design tools.'
    },
    {
      title: '',
      description:
        'Develop expertise in Social Media Management with strategy, content creation, and analytics.'
    },
    {
      title: '',
      description:
        'Provide beginners with a foundation in coding and digital solution building.'
    }
  ],
  processSteps: [
    {
      title: 'Behind the Scenes:',
      description:
        'Students explore lighting, composition, design principles, and storytelling.'
    },
    {
      title: 'Practical Sessions:',
      description:
        'From camera setup and studio shoots to creating brand visuals and layouts.'
    },
    {
      title: 'Editing & Retouching:',
      description:
        'Master tools like Lightroom, Photoshop, and Illustrator for professional results.'
    },
    {
      title: 'Digital Strategy:',
      description:
        'Apply skills in social media management, learning content creation, scheduling, and analytics for real-world impact.'
    }
  ],
  mainImage: {
    src: '/goals.png',
    alt: 'goals illustration'
  },
  secondImage: {
    src: '/process1.png',
    alt: 'Students in creative training session'
  },
  imagePosition: 'right' as const
}

export const technicalTrainingData = {
  goals: [
    {
      title: 'Future-Ready Skills:',
      description: 'Develop creative and technical expertise.'
    },
    {
      title: 'Practical Experience:',
      description: 'Work on real-world projects.'
    },
    {
      title: 'Modern Tools:',
      description: 'Learn industry-standard technologies.'
    },
    {
      title: 'Innovation & Problem-Solving:',
      description: 'Build critical thinking and teamwork.'
    }
  ],
  processSteps: [
    {
      title: 'Application & Onboarding:',
      description:
        'Candidates submit applications showcasing their motivation, basic skills, or portfolio. Right-fit candidates are prepared, motivated, and aligned with the training goals.'
    },
    {
      title: 'Training & Skill Development:',
      description:
        'Participants develop both technical expertise and soft skills while gaining exposure to real-world practices.'
    },
    {
      title: 'Growth Path:',
      description:
        'Participants exit with a strong portfolio, confidence, and clear next steps.'
    }
  ],
  mainImage: {
    src: '/goals.png',
    alt: 'goals illustration'
  },
  secondImage: {
    src: '/process2.png',
    alt: 'Technical training illustration'
  },
  imagePosition: 'right' as const
}

export interface Sponsor {
  id: number
  name?: string
  logo?: string
  alt: string
}

export const skillUpSponsors: Sponsor[] = [
  {
    id: 1,
    name: 'NimbleAcademy',
    alt: 'NimbleAcademy Logo'
  },
  {
    id: 2,
    name: 'PhotographyToSlum',
    logo: '/p2slum.svg',
    alt: 'PhotographyToSlum Logo'
  },
  {
    id: 3,
    name: 'PhotographyToSlum',
    logo: '/p2slum.svg',
    alt: 'PhotographyToSlum Logo'
  }
]

export const internshipSponsors: Sponsor[] = [
  {
    id: 1,
    name: 'NimbleDev',
    logo: '/logo-mobile.svg',
    alt: 'NimbleDev Logo'
  }
]
