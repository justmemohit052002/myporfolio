import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a frontend developer with a year of experience specializing in ReactJS and React Native. I have a strong background in JavaScript, HTML, CSS, and a passion for UI/UX design, ensuring that my applications are both functional and visually appealing. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am Mohit Singh Chouhan, a frontend developer with a Bachelor of Technology in Computer Science Engineering from Chameli Devi Group of Institutions, Indore. With one year of freelance experience, I specialize in ReactJS and React Native, building dynamic and responsive user interfaces for web and mobile applications. I am proficient in JavaScript, HTML, CSS, and utilize modern tools like Vite and SWC for efficient development.

I have a keen interest in UI/UX design, ensuring my applications are both functional and visually appealing. My passion for technology drives me to stay updated with the latest trends and continuously improve my skills. Currently based in Indore, I am willing to relocate for the right opportunity.

Aside from coding, I am also passionate about cricket and have a dream of playing for the Indian team. I am dedicated, hardworking, and always eager to take on new challenges, both professionally and personally.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Frontend Developer",
    company: "Airry Rides.",
    description: `Contributed to Airry Rides, a rental platform offering features such as shop location search, navigation, and scheduling.
Developed the frontend using React Native to ensure cross-platform compatibility for mobile users.
Integrated a MongoDB backend with APIs for seamless communication, hosted on AWS for enhanced performance and scalability.
Focused on user convenience by providing real-time updates and implementing robust security measures.
Engaged in web development using React, Tailwind CSS, and Vercel to create responsive and visually appealing interfaces.`,
    technologies: [
      "React Native",
      "React.js",
      "vercel",
      "mongoDB",
      "AWS",
      "Tailwind CSS",
    ],
  },
  {
    year: "2022 - 2023",
    role: "Web Developer Intern",
    company: "Oasis Infobyte",
    description: `Developed three web applications: Music-E app, Quiz app, and Calculator.
Implemented user interfaces for each application to enhance user engagement and functionality.
Integrated a language translator feature into the applications to support multilingual users.`,
    technologies: ["HTML", "CSS", "ReactJS"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address:
    "Sector A, Sarvanand Nagar, Indrapuri Colony, Indore, Madhya Pradesh, 452014 ",
  phoneNo: "+91 772 581 2910 ",
  email: "mohit2002pc@gmail.com",
};
