// import React from "react";
// import line from "../../assets/images/line.svg";
// import { SiLiberadotchat } from "react-icons/si";
// import { FaHtml5 } from "react-icons/fa";
// import ClockLoader from "react-spinners/ClockLoader";
// import image from "../../assets/images/profile.png";
// import heyjayTech from "../../assets/images/heyjaytech-logo.png";
// import techSolution from "../../assets/images/techSolution.jpeg";
// import { SiCss3 } from "react-icons/si";
// import { RiJavascriptFill } from "react-icons/ri";
// import { FaBootstrap } from "react-icons/fa";
// import { SiSass } from "react-icons/si";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { RiReactjsLine } from "react-icons/ri";

// const resume = () => {
//   return (
//     <div className="relative z-10 top-[6rem] lg:top-[3rem] text-white grid lg:grid-cols-2  lg:gap-[5rem] lg:px-[20rem] lg:pb-[15rem] resume-hero fade-in">
//       <div className="flex flex-col gap-2 items-start lg:mt-10 hero-text">
//         <h1 className="text-4xl font-eb-garamond leading-3">Certifications</h1>
//         <img className="w-[60%] pt-2" src={line} alt="" />

//         <div className="flex flex-row gap-3 py-3 lg:gap-5 lg:py-4">
//           <SiLiberadotchat className="w-5 h-5" />
//           <div className="flex flex-col gap-3">
//             <h5 className="text-xl leading-3 font-serif">
//               Front-End Web Development
//             </h5>
//             <div className="flex flex-row gap-2">
//               <ClockLoader className="pb-2" color="#DA9100" size={12} />
//               <p className="text-md text-gold font-serif pt-2 leading-3">
//                 Hertechtrail Academy
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-row gap-3 py-3 lg:gap-5 lg:py-4">
//           <SiLiberadotchat className="w-5 h-5" />
//           <div className="flex flex-col gap-3">
//             <h5 className="text-xl leading-3 font-serif">
//               Diploma in Website Development & SEO
//             </h5>
//             <div className="flex flex-row gap-2">
//               <ClockLoader className="pb-2" color="#DA9100" size={12} />
//               <p className="text-md text-gold font-serif pt-2 leading-3">
//                 Digital Marketing Skill Institute
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-row gap-3 py-3 lg:gap-5 lg:py-4">
//           <SiLiberadotchat className="w-5 h-5" />
//           <div className="flex flex-col gap-3">
//             <h5 className="text-xl leading-3 font-serif">
//               Javascript Algorithms and Data Structures
//             </h5>
//             <div className="flex flex-row gap-2">
//               <ClockLoader color="#DA9100" size={12} />
//               <p className="text-md text-gold font-serif pt-2 leading-3">
//                 FreeCodeCamp
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-row gap-3 py-3 lg:gap-5 lg:py-4">
//           <SiLiberadotchat className="w-5 h-5" />
//           <div className="flex flex-col gap-3">
//             <h5 className="text-xl leading-3 font-serif">
//               Responsive Web Design
//             </h5>
//             <div className="flex flex-row gap-2">
//               <ClockLoader color="#DA9100" size={12} />
//               <p className="text-md text-gold font-serif pt-2 leading-3">
//                 FreeCodeCamp
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-row gap-3 py-3 lg:gap-5 lg:py-4">
//           <SiLiberadotchat className="w-5 h-5" />
//           <div className="flex flex-col gap-3">
//             <h5 className="text-xl leading-3 font-serif">
//               National Youth Service Corps
//             </h5>
//             <div className="flex flex-row gap-2">
//               <ClockLoader color="#DA9100" size={12} />
//               <p className="text-md text-gold font-serif pt-2 leading-3">
//                 NYSC Nigeria
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <img className="lg:pl-[15rem] resume-img" src={image} alt="" />

//       <div className="lg:absolute lg:top-[33rem] lg:left-[20rem] flex flex-col gap-1 items-start grid2">
//         <h1 className="text-4xl font-eb-garamond leading-3">Experience</h1>
//         <img className="w-[60%] pt-2 pb-4" src={line} alt="" />

//         <div className="flex flex-row gap-2 lg:gap-3 lg:py-4 py-3">
//           <img
//             src={heyjayTech}
//             className="h-[20px] w-[60px] border-2 border-gold"
//             alt=""
//           />
//           <div className="flex flex-col gap-2">
//             <h5 className="text-xl leading-3 font-serif">
//               HeyJay Technologies
//             </h5>
//             <div className="flex flex-row gap-2">
//               <ClockLoader className="pb-2" color="#DA9100" size={12} />
//               <p className="text-md text-gold font-serif leading-3">
//                 Technical Account Manager
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-row gap-2 lg:gap-3 lg:py-4 py-3">
//           <img
//             src={techSolution}
//             className="h-[20px] w-[60px] border-2 border-gold"
//             alt=""
//           />
//           <div className="flex flex-col gap-2">
//             <h5 className="text-lg lg:text-xl leading-3 font-serif">
//               Tech Certify Solutions
//             </h5>
//             <div className="flex flex-row gap-2">
//               <ClockLoader className="pb-2" color="#DA9100" size={12} />
//               <p className="text-md text-gold font-serif leading-3">
//                 Frontend Developer (Intern)
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="lg:absolute lg:top-[32rem] lg:left-[65rem] flex flex-col gap-1 lg:pl-[15rem] items-start grid3">
//         <h1 className="text-4xl font-eb-garamond leading-3">Skill Sets</h1>
//         <img className="w-[60%] pt-2 pb-4" src={line} alt="" />

//         <div className="flex flex-col gap-2">
//           <div className="flex flex-row gap-2">
//             <FaHtml5 className="border border-gold" color="black" size={15} />
//             <p className="text-md text-white font-serif leading-3">HTML5</p>
//           </div>

//           <div className="flex flex-row gap-2">
//             <SiCss3 className="border border-gold" color="black" size={15} />
//             <p className="text-md text-white font-serif leading-3">CSS3</p>
//           </div>

//           <div className="flex flex-row gap-2">
//             <SiSass className="border border-gold" color="black" size={15} />
//             <p className="text-md text-white font-serif leading-3">SASS</p>
//           </div>

//           <div className="flex flex-row gap-2">
//             <RiTailwindCssFill
//               className="border border-gold"
//               color="black"
//               size={15}
//             />
//             <p className="text-md text-white font-serif leading-3">
//               TailwindCss
//             </p>
//           </div>

//           <div className="flex flex-row gap-2">
//             <RiJavascriptFill
//               className="border border-gold"
//               color="black"
//               size={15}
//             />
//             <p className="text-md text-white font-serif leading-3">
//               Javascript
//             </p>
//           </div>

//           <div className="flex flex-row gap-2">
//             <RiReactjsLine
//               className="border border-gold"
//               color="black"
//               size={15}
//             />
//             <p className="text-md text-white font-serif leading-3">React Js</p>
//           </div>

//           <div className="flex flex-row gap-2">
//             <FaBootstrap
//               className="border border-gold"
//               color="black"
//               size={15}
//             />
//             <p className="text-md text-white font-serif leading-3">Bootstrap</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default resume;

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

const Resume = () => {
  return (
    <div className="relative z-10 top-24 lg:top-12 text-white grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 px-4 lg:px-40 pb-24 lg:pb-60 resume-hero fade-in">
      <div className="flex flex-col gap-4 items-start mt-6 lg:mt-10 hero-text">
        <h1 className="text-3xl lg:text-4xl font-eb-garamond">
          Certifications
        </h1>
        <img className="w-2/3 pt-2" src={line} alt="line" />

        {[
          {
            title: "Front-End Web Development",
            institution: "Hertechtrail Academy",
          },
          {
            title: "Diploma in Website Development & SEO",
            institution: "Digital Marketing Skill Institute",
          },
          {
            title: "Javascript Algorithms and Data Structures",
            institution: "FreeCodeCamp",
          },
          {
            title: "Responsive Web Design",
            institution: "FreeCodeCamp",
          },
          {
            title: "National Youth Service Corps",
            institution: "NYSC Nigeria",
          },
        ].map((cert, index) => (
          <div key={index} className="flex flex-row gap-3 py-3">
            <SiLiberadotchat className="w-5 h-5" />
            <div className="flex flex-col gap-3">
              <h5 className="text-lg lg:text-xl font-serif">{cert.title}</h5>
              <div className="flex flex-row gap-2">
                <ClockLoader className="pb-2" color="#DA9100" size={12} />
                <p className="text-md text-gold font-serif pt-2">
                  {cert.institution}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <img className="lg:pl-40 resume-img" src={image} alt="profile" />

      <div className="lg:absolute lg:top-80 lg:left-32 flex flex-col gap-1 items-start">
        <h1 className="text-3xl lg:text-4xl font-eb-garamond">Experience</h1>
        <img className="w-2/3 pt-2 pb-4" src={line} alt="line" />

        {[
          {
            company: "HeyJay Technologies",
            role: "Technical Account Manager",
            logo: heyjayTech,
          },
          {
            company: "Tech Certify Solutions",
            role: "Frontend Developer (Intern)",
            logo: techSolution,
          },
        ].map((exp, index) => (
          <div key={index} className="flex flex-row gap-2 py-3 lg:py-4">
            <img
              src={exp.logo}
              className="h-5 w-20 border-2 border-gold"
              alt={`${exp.company} logo`}
            />
            <div className="flex flex-col gap-2">
              <h5 className="text-lg lg:text-xl font-serif">{exp.company}</h5>
              <div className="flex flex-row gap-2">
                <ClockLoader className="pb-2" color="#DA9100" size={12} />
                <p className="text-md text-gold font-serif leading-3">
                  {exp.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="lg:absolute lg:top-80 lg:right-32 flex flex-col gap-1 items-start">
        <h1 className="text-3xl lg:text-4xl font-eb-garamond">Skill Sets</h1>
        <img className="w-2/3 pt-2 pb-4" src={line} alt="line" />

        {[
          { name: "HTML5", icon: FaHtml5 },
          { name: "CSS3", icon: SiCss3 },
          { name: "SASS", icon: SiSass },
          { name: "TailwindCss", icon: RiTailwindCssFill },
          { name: "Javascript", icon: RiJavascriptFill },
          { name: "React Js", icon: RiReactjsLine },
          { name: "Bootstrap", icon: FaBootstrap },
        ].map((skill, index) => (
          <div key={index} className="flex flex-row gap-2">
            {React.createElement(skill.icon, {
              className: "border border-gold",
              color: "black",
              size: 15,
            })}
            <p className="text-md text-white font-serif">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
