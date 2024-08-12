import { FaFigma, FaReact } from "react-icons/fa"

export const teamMembers = [
  {
    first_name: "Parton",
    last_name: "Julian ",
    position_comp: "CEO, theNimbles",
    imageUrl: "/teampics.svg"
  },
  {
    first_name: "Doe",
    last_name: "Jane ",
    position_comp: "CTO, theNimbles",
    imageUrl: "/teampics.svg"
  },
  {
    first_name: "Smith",
    last_name: "John ",
    position_comp: "COO, theNimbles",
    imageUrl: "/teampics.svg"
  }
]

export const projects = [
  {
    title: "Motimose Metals",
    company: "NIMBLESDEV",
    date: "02.02.2024",
    // eslint-disable-next-line react/jsx-key
    tools: [<FaFigma />, <FaReact />],
    bgImage: "/project2.svg"
  },
  {
    title: "Globacom Nigeria",
    company: "NimblesDev",
    date: "12.09.2024",
    // eslint-disable-next-line react/jsx-key
    tools: [<FaFigma />, <FaReact />],
    bgImage: "/project1.svg"
  },
  {
    title: "Globacom Nigeria",
    company: "NimblesDev",
    date: "12.09.2024",
    // eslint-disable-next-line react/jsx-key
    tools: [<FaFigma />, <FaReact />, <FaReact />, <FaReact />, <FaReact />],
    bgImage: "/project3.svg"
  }
]
