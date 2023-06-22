import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Stack Developer",
    icon: web,
  },
  {
    title: "Java Developer",
    icon: mobile,
  },
  {
    title: "Blender Artist",
    icon: backend,
  },
  {
    title: "AI/ML Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Project Lead",
    company_name: "National University of Singapore",
    icon: shopify,
    iconBg: "#000000",
    date: "Dec 2022 - Jan 2023",
    points: [
      "The Hewlett Packard Enterprise Company is an American multinational information technology company.",
      "Interned at an NUS-HPE collab academic internship held at NUS, Singapore, based on Big Data, Deep Learning, and Machine Learning",
      "Attained hands-on with Microsoft Azure, Power BI, Flask, and ML algorithms.",
      "Was part of a multidisciplinary team from varying backgrounds for a project that assisted in analysing the given data and helping a business by providing advanced statistics.",
    ],
  },
  {
    title: "Project Lead",
    company_name: "Hewlett Packard Enterprise(HPE)",
    icon: shopify,
    iconBg: "#FFFFFF",
    date: "Dec 2022 - Jan 2023",
    points: [
      "The Hewlett Packard Enterprise Company is an American multinational information technology company.",
      "Interned at an NUS-HPE collab academic internship held at NUS, Singapore, based on Big Data, Deep Learning, and Machine Learning",
      "Attained hands-on with Microsoft Azure, Power BI, Flask, and ML algorithms.",
      "Was part of a multidisciplinary team from varying backgrounds for a project that assisted in analysing the given data and helping a business by providing advanced statistics.",
    ],
  },
  {
    title: "SDE Intern",
    company_name: "Reliance Jio Infocomm Limited",
    icon: tesla,
    iconBg: "#000000",
    date: "Oct 2022 - Jan 2023",
    points: [
      "Reliance Jio Infocomm Limited, doing business as Jio, is an Indian telecommunications company and a subsidiary of Jio Platforms.",
      "Worked on a project related to creating browser extension that runs across any browser for internal organization use.",
      "Had the opportunity to learn web stacks related to browser extension, 3-Tier Authentication, File hashing and Cross-Platform File Exchange and Storage."
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Kite India (VITTBI)",
    icon: starbucks,
    iconBg: "#FFFFFF",
    date: "Jan 2022 - May 2022",
    points: [
      "Kite India is a travel-based organization which has its own unique feature to differentiate among other fellow competitors",
      "Creating innovative design which makes users engage and spend time exploring the amenities of the company and an excellent API. I’ve had a hands-on experience with Express JS through this Internship.",
      "I was also given the role of Sales and Marketing on seeing my interest in the management domain."
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Skill Vertex",
    icon: starbucks,
    iconBg: "#000000",
    date: "Jan 2022 - April 2022",
    points: [
      "Providing Engineering students with the best courses and other amenities to excel in academics and other domains that interest them",
      "Was part of 2 teams and helped them in developing 3 websites in the timespan of 3 months",
      "Was given training A-Z from understanding the UI/UX model to implementing them in the best responsive way possible",
      "Explore many aspects of NodeJS, as was given a task to define the API for the whole Website",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "WhatsApp Anyone",
    description:
      "This Website with user interface can send message to anyone through Whatsapp Without saving their number into your contacts. This can be used by Social Network Marketers or Organisation to send one time message through Whatsapp.OTP's are sent through Messages Whatsapp doesn't allow us to send message to someone anonymous.Hence this page will help you doing so..",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "os-automation",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Virtual Board",
    description:
      "I've seen in movies where people move their hands to control computer.What if we can do the same..? This small idea enhaced me in developing the virtual board where you can write or perform similar activities without mouse or pointer just by using your hands.",
    tags: [
      {
        name: "OpenCV",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Mask Detection",
    description:
      "The Modern world is in search of solutions from computer which has the capability to perform functions similar to human being at times more than them. This project on mask Detection is a small leap to that approach which makes the computer the think similar to Humans and at instance efective than what Humans do...",
    tags: [
      {
        name: "OpenCV",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Stock Market Prediction",
    description:
      "The Plot Behind this Project is to train them with appropriate Data and choose an effective algorithm.I've checked few datas from the past which gave me an accuracy of about 64% which is not that satisfying.So I am actually improving the model and Algorithm to gain an appropriate result with minimum accuracy of something above 75%!!",
    tags: [
      {
        name: "OpenCV",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
