import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  java,
  socialBond,
  sumit,
  hirix,
  threejs,
  reactQuery,
  mile9,
  
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
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: reactjs,
  },
  {
    title: "Software Developer",
    icon: backend,
  },
  {
    title: "JavaScript Developer",
    icon: javascript,
  },
];

const intro =
  "I'm a Software Engineer with strong expertise in HTML, CSS, JavaScript ,Bootstrap and Material UI specializing in React.js. I have hands-on experience in building dynamic, responsive web applications, optimizing code for efficiency, and using libraries like Framer Motion and React Slick. I'm a quick learner who excels in collaborative environments, consistently delivering scalable, user-focused solutions that solve real-world problems. Let's work together to bring your ideas to life and create a high-performance digital experience!";

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "React Query",
    icon: reactQuery,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "Front End Developer",
    company_name: "Fiverr",
    icon: mile9,
    iconBg: "#E6DEDD",
    date: "June 2022 - Present",
    company_link: "https://www.fiverr.com/",
    points: [
      
        "Hospital Dashboard System - Developed a responsive hospital dashboard in React, enabling real-time data visualization for patient tracking and staff management. Integrated secure authentication and role-based access to maintain data privacy.",
        
        "Gym Mobile UI Website - Designed a mobile-first, responsive UI for a gym website using HTML and CSS, creating an intuitive layout for showcasing trainers, schedules, and membership plans to enhance user experience on all devices.",
        
        "Car Parts Platform - Built a front-end automotive catalog system with advanced search functionality, organized product listings, and detailed product pages for easy navigation and product discovery.",
        
        "E-commerce and Clothing Customization Platform - Developed a user-friendly e-commerce platform with a custom clothing tool, featuring drag-and-drop design options for personalized apparel and real-time previews to elevate the shopping experience.",
        
        "Portfolio Development - Created a dynamic, responsive portfolio site using Next.js, improving user engagement and online presence. Implemented reusable components and optimized state management for enhanced performance and maintainability."
      
      ],
  },
  
];

const worksText = `Following projects showcases my skills and experience through
              real-world examples of my work. Each project is briefly described
              with links to code repositories and live demos in it. It reflects
              my ability to solve complex problems, work with different
              technologies, and manage projects effectively.`;

const projects = [
  {
    name: "hospital Dashboard System",
    description:
      "A comprehensive hospital dashboard system that streamlines healthcare management. Key Features - Real-time patient tracking, appointment scheduling, doctor and staff management, data analytics, secure login, and user-friendly interface for seamless navigation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-router",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "react-query",
        color: "orange-text-gradient",
      },
      {
        name: "react-swiper",
        color: "pink-text-gradient",
      },
    ],
    image: socialBond,
    source_code_link: "https://github.com/AyushAgarwal15/social-bond",
    live_link: "https://srehan-spectrum.surge.sh/",
  },
  {
    name: "AU AutoMotive",
    description:
      "An intuitive front-end automotive platform showcasing a comprehensive catalog of car parts. Key Features - Advanced search options, organized product catalog, detailed product pages for each part, and a responsive design for smooth navigation and an enhanced user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "react-swiper",
        color: "orange-text-gradient",
      },
      {
        name: "material ui",
        color: "green-text-gradient",
      },
      {
        name: "react-toastify",
        color: "pink-text-gradient",
      },
    ],
    image: hirix,
    source_code_link: "https://github.com/RuhaibDev/CarParts_Web",
    live_link: "https://car-parts-web.vercel.app/",
  },
  {
    name: "E-Commerce And Clothing Customization Plateform",
    description:
      "An innovative e-commerce platform with a unique clothing customization tool, empowering users to create personalized apparel. Key Features - User-friendly interface, drag-and-drop customization, multiple logo and text options, PNG image uploads, real-time previews, secure checkout, and personalized product management for a seamless shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "raect-router",
        color: "green-text-gradient",
      },
      {
        name: "react-swiper",
        color: "pink-text-gradient",
      },
      {
        name: "react-drag-and-drop",
        color: "orange-text-gradient",
      },
    ],
    image: sumit,
    source_code_link: "https://github.com/AyushAgarwal15/SumIt",
    live_link: "https://sum-it-pi.vercel.app/",
  },
];

export { services, intro, technologies, experiences, worksText, projects };
