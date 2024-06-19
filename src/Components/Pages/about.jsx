import React from "react";
import image from "../../assets/images/profile.png";
import lineBorder from "../../assets/images/line.svg";
import { Link } from "react-router-dom";

const about = () => {
  return (
    <div className="relative z-10 top-[1rem] lg:top-10 lg:flex lg:flex-row sm:flex-col sm:gap-4 lg:gap-[12rem] px-2 lg:py-[5rem] lg:px-[10rem] text-white fade-in">
      <img
        className="w-[35%] lg:h-[40vh] lg:ml-0 lg:pt-0 pt-8 ml-[8rem] lg:mt-[8rem] bounce"
        src={image}
        alt=""
      />
      <div className="flex flex-col gap-2 mt-3 lg:mt-10 bounce">
        <h1 className="text-white leading-10 text-4xl font-eb-garamond font-bold mx-[30%] lg:mx-[40%] bounce">
          ABOUT
        </h1>
        <img
          className="w-[45%] mx-[20%] lg:mx-[25%] fade-in"
          src={lineBorder}
          alt=""
        />
        <h5 className="text-yellow lg:leading-8 text-xl font-eb-garamond font-normal text-center w-[80%] lg:w-0 lg:font-medium px-10 ml-8 lg:ml-0 lg:text-nowrap lg:px-[4rem] fade-in">
          Frontend Developer | WordPress Website Developer | SEO Specialist
        </h5>
        <p className="lg:leading-[20px] lg:w-[50vw] text-base lg:text-lg font-medium font-eb-garamond lg:mx-0 py-5 px-6 lg:py-3 lg:px-8 fade-in">
          Meet Ola Esther Pelumi, a passionate Frontend Developer, WordPress
          specialist, and SEO enthusiast. With a solid background in HTML, CSS3,
          JavaScript, React.js, Tailwind CSS, and WordPress customization,
          including plugin integration and domain management, I've honed my
          skills through certified training and hands-on projects. I thrive on
          crafting responsive and engaging websites and applications. Currently,
          I'm eagerly seeking intern or entry-level opportunities to further my
          development journey and eventually transition into a full-stack
          developer role. My portfolio showcases my commitment to creating
          user-friendly and visually captivating digital experiences. I am
          dedicated to continuous learning and growth in the dynamic world of
          web development. Let's connect and explore how we can collaborate on
          exciting projects!
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
