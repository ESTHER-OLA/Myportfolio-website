import React from "react";
import { MdImportantDevices } from "react-icons/md";
import { TbKeyframesFilled } from "react-icons/tb";
import { SiWolframmathematica } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { GrSupport } from "react-icons/gr";
import { TbSeo } from "react-icons/tb";

const services = () => {
  return (
    <div className="relative z-10 top-[4.5rem] lg:top-[3rem] py-2 px-[5px] lg:px-[80px] items-center justify-center service bounce">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-[5px] lg:gap-[20px] px-[5px] items-center justify-center service-grid">
        <div className="flex flex-col gap-2 lg:gap-4 items-start border border-white lg:px-[1rem] lg:py-3 service-item">
          <div className="flex flex-row gap-2 lg:gap-4">
            <MdImportantDevices className="rounded-full bg-white w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]" />
            <h1 className="text-gold text-md font-bold font-eb-garamond lg:leading-5">
              {" "}
              Creative User Interface Design
            </h1>
          </div>
          <p className="text-white text-sm">
            I excel in creating visually appealing and interactive user
            interfaces using HTML, CSS, and JavaScript to deliver a seamless
            user experience.
          </p>
        </div>

        <div className="flex flex-col gap-2 lg:gap-4 items-start border border-white px-2 lg:px-[1rem] py-4 lg:py-3 service-item">
          <div className="flex flex-row gap-2 lg:gap-4">
            <TbKeyframesFilled className="rounded-full bg-white w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]" />
            <h1 className="text-gold text-md font-bold font-eb-garamond lg:leading-5">
              Interactive Front-end Development
            </h1>
          </div>
          <p className="text-white text-sm">
            I excel in developing interactive and dynamic web applications using
            popular front-end frameworks like React, Angular, or Vue.js to
            provide a seamless user experience.
          </p>
        </div>

        <div className="flex flex-col gap-2 lg:gap-4 items-start border border-white px-2 lg:px-[1rem] py-4 lg:py-3 service-item">
          <div className="flex flex-row gap-2 lg:gap-4">
            <SiWolframmathematica className="rounded-full bg-white w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]" />
            <h1 className="text-gold text-md font-bold font-eb-garamond lg:leading-5">
              {" "}
              Responsive Design Implementation
            </h1>
          </div>
          <p className="text-white text-sm">
            I ensure your website is optimized for all devices and browsers,
            delivering a consistent user experience across desktop, mobile, and
            tablet platforms.
          </p>
        </div>

        <div className="flex flex-col gap-2 lg:gap-4 items-start border border-white px-2 lg:px-[1rem] py-4 lg:py-3 service-item">
          <div className="flex flex-row gap-2 lg:gap-4">
            <FaWordpress className="rounded-full bg-white w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]" />
            <h1 className="text-gold text-md font-bold font-eb-garamond lg:leading-5">
              Bespoke WordPress Development
            </h1>
          </div>
          <p className="text-white text-sm">
            I offer customized WordPress solutions including custom theme
            design, plugin development, and backend integration to create a
            personalized and functional website that aligns with your business
            objectives.
          </p>
        </div>

        <div className="flex flex-col gap-2 lg:gap-4 items-start border border-white px-2 lg:px-[1rem] py-4 lg:py-3 service-item">
          <div className="flex flex-row gap-2 lg:gap-4">
            <GrSupport className="rounded-full bg-white w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]" />
            <h1 className="text-gold text-md font-bold font-eb-garamond lg:leading-5">
              Proactive Maintenance and Support
            </h1>
          </div>
          <p className="text-white text-sm">
            I provide comprehensive maintenance services for your WordPress
            website, including regular updates, security checks, and technical
            support to keep your site running smoothly and securely.
          </p>
        </div>

        <div className="flex flex-col gap-2 lg:gap-4 items-start border border-white px-2 lg:px-[1rem] py-4 lg:py-3 service-item">
          <div className="flex flex-row gap-2 lg:gap-4">
            <TbSeo className="rounded-full bg-white w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]" />
            <h1 className="text-gold text-md font-bold font-eb-garamond lg:leading-5">
              SEO-Optimized WordPress Solutions
            </h1>
          </div>
          <p className="text-white text-sm">
            I optimize your WordPress website for search engines by implementing
            on-page SEO techniques, enhancing site performance, and structuring
            content to improve visibility and attract organic traffic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default services;
