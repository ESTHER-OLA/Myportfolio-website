import React from "react";
import image from "../../assets/images/profile.png";
import lineBorder from "../../assets/images/line.svg";
import { Link } from "react-router-dom";

const about = () => {
  return (
    <div className="lg:flex lg:flex-row sm:flex-col sm:gap-4 lg:gap-[5rem] bg-black bg-opacity-75 py-[5px] px-[20px] lg:py-[5rem] lg:px-[10rem] text-white fade-in">
      <img
        className="w-[35%] lg:h-[40vh] ml-[20px] lg:ml-0 lg:mt-[3rem] bounce"
        src={image}
        alt=""
      />
      <div className="flex flex-col gap-2 bounce">
        <h1 className="text-white leading-10 text-4xl font-eb-garamond font-bold mx-[30%] lg:mx-[40%] bounce">
          ABOUT
        </h1>
        <img className="lg:mx-[25%] fade-in" src={lineBorder} alt="" />
        <div className="text-yellow lg:leading-8 text-xl font-eb-garamond font-normal text-center lg:w-[600px] lg:font-medium lg:text-wrap lg:px-[4rem] fade-in">
          React.js Developer | Frontend Developer | Web Developer Specializing
          in Scalable, High-Performance Applications
          {/* <p></p> */}
        </div>
        <p className="lg:leading-[20px] lg:w-[50vw] text-base lg:text-lg font-sm lg:font-medium font-eb-garamond lg:py-3 lg:px-8 fade-in">
          I’m Esther Ola a results-driven Frontend Developer passionate about
          building pixel-perfect, accessible, and scalable web interfaces. With
          strong proficiency in JavaScript, React, Next.js, and modern UI
          libraries like Tailwind CSS and Shadcn/UI, I craft digital experiences
          that are fast, responsive, and user-first.
        </p>
        <p className="lg:leading-[20px] lg:w-[50vw] text-base lg:text-lg font-sm lg:font-medium font-eb-garamond lg:py-3 lg:px-8 fade-in">
          From dynamic job platforms to intuitive admin dashboards and fintech
          applications, I’ve built and maintained real-world solutions during my
          time at NXG Technology and HerTechTrail. My workflow emphasizes clean
          architecture, reusable components, seamless API integration, and
          mobile responsiveness ensuring a consistent user journey across all
          devices.
        </p>
        <p className="lg:leading-[20px] lg:w-[50vw] text-base lg:text-lg font-sm lg:font-medium font-eb-garamond lg:py-3 lg:px-8 fade-in">
          Beyond the frontend, I bring value with SEO knowledge, WordPress
          experience, and backend familiarity, making me a versatile asset in
          cross-functional teams. Certified by HerTechTrail Academy,
          freeCodeCamp, and the Digital Marketing Skills Institute, I’m
          constantly learning and open to exciting opportunities in frontend
          engineering whether it's in tech startups, product teams, or agencies.
        </p>

        <p className="lg:leading-[20px] lg:w-[50vw] text-base lg:text-lg font-sm lg:font-medium font-eb-garamond lg:py-3 lg:px-8 fade-in">
          Let’s build the future of the web one component at a time.
        </p>
        <div className="flex flex-row gap-2 lg:gap-5">
          <Link to="/resume">
            <button className="py-[0.10] lg:py-[0.22rem] ml-10 px-[1.5rem] text-center text-sm rounded-full border border-yellow hover:bg-red transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bounce">
              Resume
            </button>
          </Link>
          <Link to="/portfolio">
            <button className="py-[0.10] lg:py-[0.2rem] ml-2 px-[1.5rem] text-center text-sm rounded-full border border-yellow hover:bg-red transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bounce">
              Portfolio
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default about;
