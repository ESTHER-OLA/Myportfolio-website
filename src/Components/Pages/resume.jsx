import React from "react";
import line from "../../assets/images/line.svg";
import { SiLiberadotchat } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import ClockLoader from "react-spinners/ClockLoader";
import image from "../../assets/images/profile.png";
import heyjayTech from "../../assets/images/heyjaytech-logo.png";
import techSolution from "../../assets/images/techSolution.jpeg";
import NXGLogo from "../../assets/images/NXG-logo.jpg";
import { SiCss3 } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiSass } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";

const resume = () => {
  return (
    <div className="bg-black bg-opacity-75 h-screen text-white grid grid-cols-1 lg:grid-cols-2 lg:gap-[20px] px-[10px] py-[5px] lg:px-[15rem] resume-hero fade-in">
      <div className="flex flex-col gap-2 items-start  hero-text">
        <h1 className="text-xl font-eb-garamond leading-3">Certifications</h1>
        <img className="w-[40%]" src={line} alt="" />

        <div className="flex flex-row gap-2 mb-2">
          <SiLiberadotchat className="w-3 h-3" />
          <div className="flex flex-col gap-3">
            <h5 className="text-md leading-3 font-serif">
              Front-End Web Development
            </h5>
            <div className="flex flex-row gap-2">
              <ClockLoader className="" color="#DA9100" size={12} />
              <p className="text-sm text-gold font-serif leading-3">
                Hertechtrail Academy
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-2 mb-2">
          <SiLiberadotchat className="w-3 h-3" />
          <div className="flex flex-col gap-3">
            <h5 className="text-md leading-3 font-serif">
              Diploma in Website Development & SEO
            </h5>
            <div className="flex flex-row gap-2">
              <ClockLoader className="" color="#DA9100" size={12} />
              <p className="text-sm text-gold font-serif leading-3">
                Digital Marketing Skill Institute
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-2 mb-2">
          <SiLiberadotchat className="w-3 h-3" />
          <div className="flex flex-col gap-3">
            <h5 className="text-md leading-3 font-serif">
              Javascript Algorithms and Data Structures
            </h5>
            <div className="flex flex-row gap-2">
              <ClockLoader color="#DA9100" size={12} />
              <p className="text-sm text-gold font-serif leading-3">
                FreeCodeCamp
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-2 mb-2">
          <SiLiberadotchat className="w-3 h-3" />
          <div className="flex flex-col gap-3">
            <h5 className="text-md leading-3 font-serif">
              Responsive Web Design
            </h5>
            <div className="flex flex-row gap-2">
              <ClockLoader color="#DA9100" size={12} />
              <p className="text-sm text-gold font-serif leading-3">
                FreeCodeCamp
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-2 lg:mb-2">
          <SiLiberadotchat className="w-3 h-3" />
          <div className="flex flex-col gap-3">
            <h5 className="text-md leading-3 font-serif">
              National Youth Service Corps
            </h5>
            <div className="flex flex-row gap-2">
              <ClockLoader color="#DA9100" size={12} />
              <p className="text-sm text-gold font-serif leading-3">
                NYSC Nigeria
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="img-grid lg:ml-[7rem] lg:mt-4">
        <img className="hidden lgblock resume-img" src={image} alt="" />
      </div>

      <div className="flex flex-col gap-1 items-start grid2">
        <h1 className="text-xl font-eb-garamond">Experience</h1>
        <img className="w-[60%]" src={line} alt="" />

        <div className="flex flex-row gap-3 mt-2">
          <img
            src={NXGLogo}
            className="h-[20px] w-[60px] border-2 border-gold"
            alt=""
          />
          <div className="flex flex-col">
            <h5 className="text-md font-serif">NXG Technology Hub</h5>
            <div className="flex flex-row gap-2">
              <ClockLoader className="mt-1" color="#DA9100" size={12} />
              <p className="text-sm text-gold font-serif">
                Frontend Developer
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-3 mt-2">
          <img
            src={heyjayTech}
            className="h-[20px] w-[60px] border-2 border-gold"
            alt=""
          />
          <div className="flex flex-col">
            <h5 className="text-md font-serif">HeyJay Technologies</h5>
            <div className="flex flex-row gap-2">
              <ClockLoader className="mt-1" color="#DA9100" size={12} />
              <p className="text-sm text-gold font-serif">
                Technical Account Manager
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-3">
          <img
            src={techSolution}
            className="h-[20px] w-[60px] border-2 border-gold"
            alt=""
          />
          <div className="flex flex-col">
            <h5 className="text-md font-serif">Tech Certify Solutions</h5>
            <div className="flex flex-row gap-2">
              <ClockLoader className="mt-1" color="#DA9100" size={12} />
              <p className="text-sm text-gold font-serif">
                Frontend Developer (Intern)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 items-start lg:ml-[9rem]">
        <h1 className="text-xl font-eb-garamond">Skill Sets</h1>
        <img className="w-[60%]" src={line} alt="" />

        <div className="lg:flex lg:flex-col grid grid-cols-3 gap-2 mt-2">
          <div className="flex flex-row gap-2">
            <FaHtml5 className="border border-gold" color="black" size={15} />
            <p className="text-sm text-white font-serif">HTML5</p>
          </div>

          <div className="flex flex-row gap-2">
            <SiCss3 className="border border-gold" color="black" size={15} />
            <p className="text-sm text-white font-serif">CSS3</p>
          </div>

          <div className="flex flex-row gap-2">
            <SiSass className="border border-gold" color="black" size={15} />
            <p className="text-sm text-white font-serif">SASS</p>
          </div>

          <div className="flex flex-row gap-2">
            <RiTailwindCssFill
              className="border border-gold"
              color="black"
              size={15}
            />
            <p className="text-sm text-white font-serif">TailwindCss</p>
          </div>

          <div className="flex flex-row gap-2">
            <RiJavascriptFill
              className="border border-gold"
              color="black"
              size={15}
            />
            <p className="text-sm text-white font-serif">Javascript</p>
          </div>

          <div className="flex flex-row gap-2">
            <RiReactjsLine
              className="border border-gold"
              color="black"
              size={15}
            />
            <p className="text-sm text-white font-serif">React Js</p>
          </div>

          <div className="flex flex-row gap-2">
            <FaBootstrap
              className="border border-gold"
              color="black"
              size={15}
            />
            <p className="text-sm text-white font-serif">Bootstrap</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
