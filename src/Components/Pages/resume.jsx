import React from "react";
import line from "../../assets/images/line.svg";
import { SiLiberadotchat } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import ClockLoader from "react-spinners/ClockLoader";
import image from "../../assets/images/profile.png";
import heyjayTech from "../../assets/images/heyjaytech-logo.png";
import techSolution from "../../assets/images/techSolution.jpeg";
import { SiCss3 } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiSass } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";

const resume = () => {
  return (
    <div className="relative z-10 top-[5rem] lg:top-[3rem] text-white grid lg:grid-cols-2  lg:gap-[5rem] lg:px-[20rem] lg:pb-[15rem] resume-hero bounce">
      <div className="flex flex-col gap-2 items-start lg:mt-10 hero-text">
        <h1 className="text-4xl font-eb-garamond leading-3">Certifications</h1>
        <img className="w-[60%] pt-2" src={line} alt="" />

        <div className="flex flex-row gap-5 py-4">
          <SiLiberadotchat className="w-5 h-5" />
          <div className="flex flex-col gap-3">
            <h5 className="text-xl leading-3 font-serif">
              Front-End Web Development
            </h5>
            <div className="flex flex-row gap-2">
              <ClockLoader className="pb-2" color="#DA9100" size={12} />
              <p className="text-md text-gold font-serif pt-2 leading-3">
                Hertechtrail Academy
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-5 py-4">
          <SiLiberadotchat className="w-5 h-5" />
          <div className="flex flex-col gap-3">
            <h5 className="text-xl leading-3 font-serif">
              Diploma in Website Development & SEO
            </h5>
            <div className="flex flex-row gap-2">
              <ClockLoader className="pb-2" color="#DA9100" size={12} />
              <p className="text-md text-gold font-serif pt-2 leading-3">
                Digital Marketing Skill Institute
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-4 py-4">
          <SiLiberadotchat className="w-5 h-5" />
          <div className="flex flex-col gap-3">
            <h5 className="text-xl leading-3 font-serif">
              Javascript Algorithms and Data Structures
            </h5>
            <div className="flex flex-row gap-2">
              <ClockLoader color="#DA9100" size={12} />
              <p className="text-md text-gold font-serif pt-2 leading-3">
                FreeCodeCamp
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-5 py-4">
          <SiLiberadotchat className="w-5 h-5" />
          <div className="flex flex-col gap-3">
            <h5 className="text-xl leading-3 font-serif">
              Responsive Web Design
            </h5>
            <div className="flex flex-row gap-2">
              <ClockLoader color="#DA9100" size={12} />
              <p className="text-md text-gold font-serif pt-2 leading-3">
                FreeCodeCamp
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-5 py-4">
          <SiLiberadotchat className="w-5 h-5" />
          <div className="flex flex-col gap-3">
            <h5 className="text-xl leading-3 font-serif">
              National Youth Service Corps
            </h5>
            <div className="flex flex-row gap-2">
              <ClockLoader color="#DA9100" size={12} />
              <p className="text-md text-gold font-serif pt-2 leading-3">
                NYSC Nigeria
              </p>
            </div>
          </div>
        </div>
      </div>

      <img className="lg:pl-[15rem] resume-img" src={image} alt="" />

      <div className="lg:absolute lg:top-[33rem] lg:left-[20rem] flex flex-col gap-1 items-start">
        <h1 className="text-4xl font-eb-garamond leading-3">Experience</h1>
        <img className="w-[60%] pt-2 pb-4" src={line} alt="" />

        <div className="flex flex-row gap-3 py-4">
          <img
            src={heyjayTech}
            className="h-[20px] w-[60px] border-2 border-gold"
            alt=""
          />
          <div className="flex flex-col gap-2">
            <h5 className="text-xl leading-3 font-serif">
              HeyJay Technologies
            </h5>
            <div className="flex flex-row gap-2">
              <ClockLoader className="pb-2" color="#DA9100" size={12} />
              <p className="text-md text-gold font-serif leading-3">
                Technical Account Manager
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-3 py-4">
          <img
            src={techSolution}
            className="h-[20px] w-[60px] border-2 border-gold"
            alt=""
          />
          <div className="flex flex-col gap-2">
            <h5 className="text-lg lg:text-xl leading-3 font-serif">
              Tech Certify Solutions
            </h5>
            <div className="flex flex-row gap-2">
              <ClockLoader className="pb-2" color="#DA9100" size={12} />
              <p className="text-md text-gold font-serif leading-3">
                Frontend Developer (Intern)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:top-[32rem] lg:left-[60rem] flex flex-col gap-1 lg:pl-[15rem] items-start">
        <h1 className="text-4xl font-eb-garamond leading-3">Skill Sets</h1>
        <img className="w-[60%] pt-2 pb-4" src={line} alt="" />

        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2">
            <FaHtml5 className="border border-gold" color="black" size={15} />
            <p className="text-md text-white font-serif leading-3">HTML5</p>
          </div>

          <div className="flex flex-row gap-2">
            <SiCss3 className="border border-gold" color="black" size={15} />
            <p className="text-md text-white font-serif leading-3">CSS3</p>
          </div>

          <div className="flex flex-row gap-2">
            <SiSass className="border border-gold" color="black" size={15} />
            <p className="text-md text-white font-serif leading-3">SASS</p>
          </div>

          <div className="flex flex-row gap-2">
            <RiTailwindCssFill
              className="border border-gold"
              color="black"
              size={15}
            />
            <p className="text-md text-white font-serif leading-3">
              TailwindCss
            </p>
          </div>

          <div className="flex flex-row gap-2">
            <RiJavascriptFill
              className="border border-gold"
              color="black"
              size={15}
            />
            <p className="text-md text-white font-serif leading-3">
              Javascript
            </p>
          </div>

          <div className="flex flex-row gap-2">
            <RiReactjsLine
              className="border border-gold"
              color="black"
              size={15}
            />
            <p className="text-md text-white font-serif leading-3">React Js</p>
          </div>

          <div className="flex flex-row gap-2">
            <FaBootstrap
              className="border border-gold"
              color="black"
              size={15}
            />
            <p className="text-md text-white font-serif leading-3">Bootstrap</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
