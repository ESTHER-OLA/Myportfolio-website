import React from "react";
import MealPal from "../../assets/images/MealPalApp-img.png";
import payinaApp from "../../assets/images/payina-app.png";
import NXGWEBAPP from "../../assets/images/NXG-WEBAPP.png";
import Dashboard from "../../assets/images/dashboard-setting.png";
import blogApp from "../../assets/images/blog-app.png";
import coffeeWebsite from "../../assets/images/coffee-website-bg.png";
import { Link } from "react-router-dom";
import RotatingText from "react-rotating-text";

const projects = [
  {
    title: "MealPal App",
    link: "https://c8-project.vercel.app/",
    image: MealPal,
  },
  {
    title: "Payina Transaction WebApp",
    link: "https://payina.com.ng/",
    image: payinaApp,
  },
  {
    title: "Coffee Website",
    link: "https://fresh-coffee-website.vercel.app/",
    image: coffeeWebsite,
  },
  {
    title: "NXG JOB HUB Web App",
    link: "https://github.com/nxg-hub/nxg-job-hub-frontend/tree/Esther_updates",
    image: NXGWEBAPP,
  },
  {
    title: "Dashboard Responsive Web App",
    link: "https://settingpage-skillstest.vercel.app/",
    image: Dashboard,
  },
  {
    title: "Blog Web App",
    link: "https://blog-post-taupe-chi.vercel.app/",
    image: blogApp,
  },
];

const ProjectCard = ({ title, link, image }) => (
  <div className="flex flex-col gap-[5px]">
    <Link to={link} target="_blank">
      <button className="py-[0.2rem] px-[1.2rem] text-center text-sm text-white rounded-full border border-white bg-gold hover:bg-red transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
        {title}
      </button>
    </Link>
    <div className="lg:w-[300px] lg:h-[200px] overflow-hidden project-img">
      <img
        src={image}
        alt="project-img"
        className="lg:w-full lg:h-full bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      />
    </div>
  </div>
);

const Portfolio = () => {
  return (
    <div className="fade-in portfolio bg-black bg-opacity-75 h-screen px-[2rem] py-[3px] lg:px-[10rem] lg:py-[0.5rem]">
      <div>
        <h1 className="text-gold text-center text-xl font-eb-garamond">
          MY PROJECTS
        </h1>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-[47px] gap-[10px] items-center justify-center port-img">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>

      <div className="mt-3">
        <p className="text-md text-gold leading-none tracking-wide fade-in">
          <RotatingText
            items={[
              "Visit my github to view more of projects worked on",
              "React.js Developer",
              "Full-Stack & Frontend Engineer ",
              "Crafting Scalable, High-Performance Web Experiences",
            ]}
          />
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
