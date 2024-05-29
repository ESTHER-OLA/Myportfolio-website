// eslint-disable-next-line no-unused-vars
import React from "react";
import SocioIcons from "./SocioIcons";
import { Link } from "react-router-dom";

const home = () => {
  return (
    <>
      <div className="flex flex-col items-start relative z-10 top-8 text-white px-[5rem] py-[20rem] lg:py-[13rem]">
        <div className="">
          {" "}
          <h1 className="text-3xl text-yellow leading-[3rem] tracking-wide">
            ESTHER
          </h1>
          <h1 className="text-3xl text-white leading-[3rem] tracking-wide">
            PELUMI OLA
          </h1>
          <p className="text-2xl pb-5 leading-[3rem] tracking-wide">
            FRONTEND DEVELOPER
          </p>
          <div className="flex flex-row gap-5">
            <Link to="/resume">
              <button className="py-[0.22rem] px-[1rem] text-center text-sm rounded-full border border-yellow hover:bg-red transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                Resume
              </button>
            </Link>
            <Link to="/portfolio">
              <button className="py-[0.2rem] px-[1rem] text-center text-sm rounded-full border border-yellow hover:bg-red transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                Portfolio
              </button>
            </Link>
          </div>
        </div>
        <div className=" absolute bottom-5 top-[50rem] lg:top-[45rem]">
          <SocioIcons></SocioIcons>
        </div>
      </div>
    </>
  );
};

export default home;
