import React from "react";
import line from "../../assets/images/line.svg";
import { SiLiberadotchat } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import ClockLoader from "react-spinners/ClockLoader";
import profileImg from "../../assets/images/profile.png";
import heyjayTechLogo from "../../assets/images/heyjaytech-logo.png";
import herTechTrailLogo from "../../assets/images/hertechtrail-icon.jpg";
import techSolutionLogo from "../../assets/images/techSolution.jpeg";
import NXGLogo from "../../assets/images/NXG-logo.jpg";
import freelancerLogo from "../../assets/images/logo-icon-nav.png";
import { RiJavascriptFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";

const certifications = [
  {
    title: "Software Development",
    issuer: "Tech4dev",
  },
  {
    title: "Front-End Web Development",
    issuer: "Hertechtrail Academy",
  },
  {
    title: "Diploma in Website Development & SEO",
    issuer: "Digital Marketing Skills Institute",
  },
  {
    title: "Responsive Web Design & JavaScript Algorithms",
    issuer: "FreeCodeCamp",
  },
  {
    title: "Bachelor of Arts, Yoruba Language",
    issuer: "Tai Solarin University",
  },
];

const experiences = [
  { company: "Freelance", role: "Frontend Developer", logo: freelancerLogo },
  { company: "NXG Technology Hub", role: "Frontend Developer", logo: NXGLogo },
  {
    company: "Hertechtrail",
    role: "Frontend Developer",
    logo: herTechTrailLogo,
  },
  {
    company: "HeyJay Technologies",
    role: "Technical Account Manager",
    logo: heyjayTechLogo,
  },
  {
    company: "Tech Certify Solutions",
    role: "Frontend Developer (Intern)",
    logo: techSolutionLogo,
  },
];

const skills = [
  {
    name: "HTML5 / CSS3",
    icon: <FaHtml5 size={15} className="border border-gold" />,
  },
  {
    name: "TailwindCSS / SASS",
    icon: <RiTailwindCssFill size={15} className="border border-gold" />,
  },
  {
    name: "JavaScript / Bootstrap",
    icon: <RiJavascriptFill size={15} className="border border-gold" />,
  },
  {
    name: "ReactJS / NextJS",
    icon: <RiReactjsLine size={15} className="border border-gold" />,
  },
  {
    name: "Redux / Zustand",
    icon: <RiReactjsLine size={15} className="border border-gold" />,
  },
  {
    name: "RESTful APIs",
    icon: <RiReactjsLine size={15} className="border border-gold" />,
  },
  {
    name: "Git / GitHub",
    icon: <FaBootstrap size={15} className="border border-gold" />,
  },
  {
    name: "Agile Methodologies",
    icon: <FaBootstrap size={15} className="border border-gold" />,
  },
  {
    name: "And others...",
    icon: <FaBootstrap size={15} className="border border-gold" />,
  },
];

const resume = () => {
  return (
    <div className="bg-black bg-opacity-75 text-white grid grid-cols-1 lg:grid-cols-2 lg:gap-[20px] px-[10px] py-[5px] lg:px-[15rem] resume-hero fade-in">
      <section className="flex flex-col gap-2 items-start  hero-text">
        <h1 className="text-xl font-eb-garamond leading-3 my-2">Certifications</h1>
        <img className="w-[40%]" src={line} alt="" />

        {certifications.map((cert, idx) => (
          <div key={idx} className="flex items-start gap-3 mb-4">
            <SiLiberadotchat className="w-4 h-4" />
            <div>
              <h5 className="font-serif text-md">{cert.title}</h5>
              <div className="flex items-center gap-2">
                <ClockLoader color="#DA9100" size={12} />
                <p className="text-sm text-gold font-serif">{cert.issuer}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Profile Image */}
      <div className="img-grid lg:ml-28 lg:mt-2 hidden lg:block">
        <img src={profileImg} alt="Profile" className="resume-img" />
      </div>

      {/* Experience Section */}
      <section className="grid2">
        <h1 className="text-xl font-eb-garamond">Experience</h1>
        <img src={line} alt="divider" className="w-60 my-2" />
        {experiences.map((exp, idx) => (
          <div key={idx} className="flex items-center gap-3 my-3">
            <img
              src={exp.logo}
              alt={exp.company}
              className="w-16 h-5 border-2 border-gold"
            />
            <div>
              <h5 className="font-serif text-md">{exp.company}</h5>
              <div className="flex items-center gap-2">
                <ClockLoader color="#DA9100" size={12} />
                <p className="text-sm text-gold font-serif">{exp.role}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-1 items-start lg:ml-36">
        <h1 className="text-xl font-eb-garamond">Skill Sets</h1>
        <img className="w-60 my-2" src={line} alt="" />

        <div className="lg:flex lg:flex-col grid grid-cols-3 gap-2 mt-2">
          {skills.map((skill, idx) => (
            <div key={idx} className="flex items-row gap-2">
              {skill.icon}
              <p className="text-sm text-white font-serif">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lg:col-span-2 flex justify-end lg:my-4">
        <a
          href="/Esther-Ola_Resume.pdf"
          download
          className="bg-red text-white px-4 py-2 rounded-md hover:bg-blue transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        >
          Download Resume
        </a>
      </section>
    </div>
  );
};

export default resume;
