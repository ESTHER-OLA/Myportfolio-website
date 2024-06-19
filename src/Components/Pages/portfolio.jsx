import React from "react";
import MealPal from "../../assets/images/MealPalApp-img.png";
import SocialMediaApp from "../../assets/images/WebsocialMediaApp-img-bg.png";
import landingpage from "../../assets/images/landing_page-bg.png";
import PortfolioWeb from "../../assets/images/portfolioWebsite-img-bg.png";
import SEOport from "../../assets/images/SEO-PORT.png";
import coffeeWebsite from "../../assets/images/coffee-website-bg.png";
import { Link } from "react-router-dom";
import RotatingText from "react-rotating-text";

const portfolio = () => {
  return (
    <div className="relative z-10 top-[1.5rem] fade-in portfolio">
      <div className="">
        <h1 className="text-gold text-center text-xl items-center font-eb-garamond mt-5">
          MY PROJECTS
        </h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-[47px] gap-[10px] px-[2rem] lg:px-[6rem] py-[0] items-center justify-center port-img">
        <div className="flex flex-col gap-[5px] px-[1.5rem] py-[1rem]">
          <Link to="https://c8-project.vercel.app/" target="_blank">
            <button className="py-[0.2rem] px-[1.2rem] text-center text-sm text-white rounded-full border border-white bg-gold hover:bg-red transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              MealPal App
            </button>
          </Link>
          <div className="lg:w-[380px] lg:h-[200px] md:w-[200px] sm:w-[180px] h-[150px] overflow-hidden project-img">
            <img
              className="w-[100%] h-[auto] bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              src={MealPal}
              alt="project-img"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[5px] px-[1.5rem] py-[1rem]">
          <Link
            to="https://social-media-app-azure-iota.vercel.app/"
            target="_blank"
          >
            <button className="py-[0.2rem] px-[1.2rem] text-center text-sm text-white rounded-full border border-white bg-gold hover:bg-red transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              Social Media WebApp
            </button>
          </Link>
          <div className="lg:w-[380px] lg:h-[200px] md:w-[200px] sm:w-[180px] h-[150px] overflow-hidden project-img">
            <img
              className="w-[100%] h-[100%] bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              src={SocialMediaApp}
              alt="project-img"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[5px] px-[1.5rem] py-[1rem]">
          <Link to="https://fresh-coffee-website.vercel.app/" target="_blank">
            <button className="py-[0.2rem] px-[1.2rem] text-center text-sm text-white rounded-full border border-white bg-gold hover:bg-red transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              Coffee Website
            </button>
          </Link>
          <div className="lg:w-[380px] lg:h-[200px] md:w-[200px] sm:w-[180px] h-[150px] overflow-hidden project-img">
            <img
              className="w-[100%] h-[100%] bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              src={coffeeWebsite}
              alt="project-img"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[5px] px-[1.5rem] py-[1rem]">
          <Link to="https://landind-page-inky.vercel.app/" target="_blank">
            <button className="py-[0.2rem] px-[1.2rem] text-center text-sm text-white rounded-full border border-white bg-gold hover:bg-red transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              Landing Page
            </button>
          </Link>
          <div className="lg:w-[380px] lg:h-[200px] md:w-[200px] sm:w-[180px] h-[150px] overflow-hidden project-img">
            <img
              className="w-[100%] h-[100%]  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              src={landingpage}
              alt="project-img"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[5px] px-[1.5rem] py-[1rem]">
          <Link to="https://esther-ola-portfolio.netlify.app/" target="_blank">
            <button className="py-[0.2rem] px-[1.2rem] text-center text-sm text-white rounded-full border border-white bg-gold hover:bg-red transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              Portfolio Website
            </button>
          </Link>
          <div className="lg:w-[380px] lg:h-[200px] md:w-[200px] sm:w-[180px] h-[150px] overflow-hidden project-img">
            <img
              className="w-[100%] h-[100%] bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              src={PortfolioWeb}
              alt="project-img"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[5px] px-[1.5rem] py-[1rem]">
          <Link
            to="https://drive.google.com/file/d/15tQ8aO20W-EeBsL1rBSaf09ALWk6tx4y/view?usp=sharing"
            target="_blank"
          >
            <button className="py-[0.2rem] px-[1.2rem] text-center text-sm text-white rounded-full border border-white bg-gold hover:bg-red transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              SEO Portfolio
            </button>
          </Link>
          <div className="lg:w-[380px] lg:h-[200px] md:w-[200px] sm:w-[180px] h-[150px] overflow-hidden project-img">
            <img
              className="w-[100%] h-[100%] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              src={SEOport}
              alt="project-img"
            />
          </div>
        </div>
      </div>
      <p className="text-md pb-[5px] px-[20px] text-gold leading-none tracking-wide fade-in">
        <RotatingText
          items={[
            "Visit my github to view more of projects worked on",
            "Check out my SEO portfolio folder also",
            "FRONTEND DEVELOPER",
            "REACT JS ENTHUSIAST",
          ]}
        />
      </p>
    </div>
  );
};

export default portfolio;
