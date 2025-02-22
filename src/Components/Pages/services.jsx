import React from "react";
import { MdImportantDevices } from "react-icons/md";
import { TbKeyframesFilled } from "react-icons/tb";
import { SiWolframmathematica } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { GrSupport } from "react-icons/gr";
import { TbSeo } from "react-icons/tb";

const services = () => {
  return (
    <div className="bg-black bg-opacity-75 lg:h-screen items-center justify-center lg:py-[3rem] lg:px-[5rem] py-[8px] px-[15px] service bounce">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-[20px] items-center justify-center service-grid">
        <div className="flex flex-col gap-4 items-start border border-white lg:p-[1.5rem] p-[0.8rem] service-item">
          <div className="flex flex-row gap-4">
            <MdImportantDevices className="rounded-full bg-white w-[30px] h-[30px]" />
            <h1 className="text-gold text-md font-bold font-eb-garamond">
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

        <div className="flex flex-col gap-4 items-start border border-white lg:p-[1rem] p-[0.3rem] service-item">
          <div className="flex flex-row gap-4">
            <TbKeyframesFilled className="rounded-full bg-white w-[30px] h-[30px]" />
            <h1 className="text-gold text-md font-bold font-eb-garamond">
              Interactive Front-end Development
            </h1>
          </div>
          <p className="text-white text-sm">
            I excel in developing interactive and dynamic web applications using
            popular front-end frameworks like React, Angular, or Vue.js to
            provide a seamless user experience.
          </p>
        </div>

        <div className="flex flex-col gap-4 items-start border border-white lg:p-[1.5rem] p-[0.8rem] service-item">
          <div className="flex flex-row gap-4">
            <SiWolframmathematica className="rounded-full bg-white w-[30px] h-[30px]" />
            <h1 className="text-gold text-md font-bold font-eb-garamond">
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

        <div className="flex flex-col gap-4 items-start border border-white lg:p-[1rem] p-[0.3rem] service-item">
          <div className="flex flex-row gap-4">
            <FaWordpress className="rounded-full bg-white w-[30px] h-[30px]" />
            <h1 className="text-gold text-md font-bold font-eb-garamond">
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

        <div className="flex flex-col gap-4 items-start border border-white lg:p-[1.5rem] p-[0.5rem] service-item">
          <div className="flex flex-row gap-4">
            <GrSupport className="rounded-full bg-white w-[30px] h-[30px]" />
            <h1 className="text-gold text-md font-bold font-eb-garamond">
              Proactive Maintenance and Support
            </h1>
          </div>
          <p className="text-white text-sm">
            I provide comprehensive maintenance services for your WordPress
            website, including regular updates, security checks, and technical
            support to keep your site running smoothly and securely.
          </p>
        </div>

        <div className="flex flex-col gap-4 items-start border border-white lg:p-[1rem] p-[0.3rem] service-item">
          <div className="flex flex-row gap-4">
            <TbSeo className="rounded-full bg-white w-[30px] h-[30px]" />
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
