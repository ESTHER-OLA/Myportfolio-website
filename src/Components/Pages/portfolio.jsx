import React from "react";
import MealPal from "../../assets/images/MealPalApp-img.png";
import SocialMediaApp from "../../assets/images/WebsocialMediaApp-img-bg.png";
import landingpage from "../../assets/images/landing_page-bg.png";
import PortfolioWeb from "../../assets/images/portfolioWebsite-img-bg.png";
import PassWordGen from "../../assets/images/passwordGen-img.png";
import coffeeWebsite from "../../assets/images/coffee-website-bg.png";
import { Link } from "react-router-dom";

const portfolio = () => {
  return (
    <div className="relative z-10 top-[5rem] fade-in portfolio">
      <div className="text-gold text-center text-3xl items-center font-eb-garamond">
        MY PROJECTS
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-[10px] md:gap[20px] sm:gap-[10px] px-[2rem] lg:px-[5rem] py-[1rem] items-center port-img">
        <div className="flex flex-col gap-[5px] px-[1.5rem] py-[1rem]">
          <Link to="https://c8-project.vercel.app/" target="_blank">
            <button className="py-[0.2rem] px-[1.2rem] text-center text-sm text-white rounded-full border border-white bg-gold hover:bg-red transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              MealPal App
            </button>
          </Link>
          <div className="lg:w-[380px] lg:h-[200px] md:w-[200px] sm:w-[180px] h-[150px] overflow-hidden project-img">
            <img
              className="w-[100%] h-[100%] bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
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
          <Link to="https://passwordgen-app.vercel.app/" target="_blank">
            <button className="py-[0.2rem] px-[1.2rem] text-center text-sm text-white rounded-full border border-white bg-gold hover:bg-red transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              PassWord Generator App
            </button>
          </Link>
          <div className="lg:w-[380px] lg:h-[200px] md:w-[200px] sm:w-[180px] h-[150px] overflow-hidden project-img">
            <img
              className="w-[100%] h-[100%] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              src={PassWordGen}
              alt="project-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default portfolio;
