import React from "react";
import image from "../../assets/images/profile.png";
import lineBorder from "../../assets/images/line.svg";
import { Link } from "react-router-dom";

const about = () => {
  return (
    <div className="lg:flex lg:flex-row sm:flex-col sm:gap-4 lg:gap-[5rem] bg-black bg-opacity-75 lg:h-screen py-[5px] px-[20px] lg:py-[5rem] lg:px-[10rem] text-white fade-in">
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
        <h5 className="text-yellow lg:leading-8 text-xl font-eb-garamond font-normal text-center lg:font-medium lg:text-nowrap lg:px-[4rem] fade-in">
          Frontend Developer | WordPress Website Developer | SEO Specialist
        </h5>
        <p className="lg:leading-[20px] lg:w-[50vw] text-base lg:text-lg font-sm lg:font-medium font-eb-garamond lg:py-3 lg:px-8 fade-in">
          I’m Esther Ola, a dedicated Frontend Developer with expertise in
          JavaScript, React, and frameworks like Next.js and Redux Toolkit. My
          work at NXG Hub and Hertechtrail Academy reflects a commitment to
          creating responsive, user-focused applications, from job listing
          platforms with robust admin features to community-driven meal planning
          apps. Each project is crafted with precision, blending design and
          functionality to deliver high-performance, intuitive user experiences.
        </p>
        <p className="lg:leading-[20px] lg:w-[50vw] text-base lg:text-lg font-sm lg:font-medium font-eb-garamond lg:py-3 lg:px-8 fade-in">
          With certifications from HerTechTrail Academy and freeCodeCamp, along
          with specialized training in WordPress Development and SEO, I bring a
          comprehensive skill set that covers modern web technologies. My
          approach emphasizes seamless API integrations, enhanced UX/UI, and
          mobile responsiveness. I am always eager to collaborate with
          innovative teams to elevate digital experiences and consistently
          deliver impactful solutions.
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
