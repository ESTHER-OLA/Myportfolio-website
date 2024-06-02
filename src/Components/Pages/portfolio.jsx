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
    <div className="relative z-10 top-10 px-[10rem] lg:px-[3rem] py-[3rem] fade-in portf0lio">
      <div className="text-gold text-center text-3xl items-center font-eb-garamond">
        MY PROJECTS
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-[40px] lg:gap-2 px-4 lg:px-8 py-8 items-center justify-center">
        <div className="flex flex-col gap-2 lg:gap-5">
          <Link to="https://c8-project.vercel.app/" target="_blank">
            <button className="py-[0.2rem] px-[1.2rem] text-center text-sm text-white rounded-full border border-white bg-gold hover:bg-red transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              MealPal App
            </button>
          </Link>
          <div className="items-center">
            <img
              className="lg:h-[30vh]  bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              src={MealPal}
              alt="project-img"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 lg:gap-5">
          <Link
            to="https://social-media-app-azure-iota.vercel.app/"
            target="_blank"
          >
            <button className="py-[0.2rem] px-[1.2rem] text-center text-sm text-white rounded-full border border-white bg-gold hover:bg-red transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              Social Media WebApp
            </button>
          </Link>
          <div className="items-center">
            <img
              className="lg:h-[30vh] bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              src={SocialMediaApp}
              alt="project-img"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 lg:gap-5">
          <Link to="https://fresh-coffee-website.vercel.app/" target="_blank">
            <button className="py-[0.2rem] px-[1.2rem] text-center text-sm text-white rounded-full border border-white bg-gold hover:bg-red transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              Coffee Website
            </button>
          </Link>
          <div className="items-center">
            <img
              className="lg:h-[30vh] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              src={coffeeWebsite}
              alt="project-img"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 lg:gap-5 lg:mt-7">
          <Link to="https://landind-page-inky.vercel.app/" target="_blank">
            <button className="py-[0.2rem] px-[1.2rem] text-center text-sm text-white rounded-full border border-white bg-gold hover:bg-red transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              Landing Page
            </button>
          </Link>
          <div className="items-center">
            <img
              className="lg:h-[30vh] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              src={landingpage}
              alt="project-img"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 lg:gap-5 lg:mt-7">
          <Link to="https://esther-ola-portfolio.netlify.app/" target="_blank">
            <button className="py-[0.2rem] px-[1.2rem] text-center text-sm text-white rounded-full border border-white bg-gold hover:bg-red transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              Portfolio Website
            </button>
          </Link>
          <div className="items-center">
            <img
              className="lg:h-[30vh] bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              src={PortfolioWeb}
              alt="project-img"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 lg:gap-5 lg:mt-7">
          <Link to="https://passwordgen-app.vercel.app/" target="_blank">
            <button className="py-[0.2rem] px-[1.2rem] text-center text-sm text-white rounded-full border border-white bg-gold hover:bg-red transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              PassWord Generator App
            </button>
          </Link>
          <div className="items-center">
            <img
              className="lg:h-[30vh] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
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
