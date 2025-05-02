import React from "react";
import { MdExtension } from "react-icons/md";
import { FaRocket } from "react-icons/fa";
import { AiOutlineBorder } from "react-icons/ai";
import { BiAccessibility } from "react-icons/bi";
import { VscDeviceMobile } from "react-icons/vsc";
import { RiFileList3Line } from "react-icons/ri";

const Services = () => {
  const serviceItems = [
    {
      icon: <MdExtension className="rounded-full bg-white w-[30px] h-[30px]" />,
      title: "Design System & Component Libraries",
      description:
        "Build scalable, reusable component libraries and design systems with Storybook and Tailwind CSS to ensure consistency, accelerate development, and empower your team to ship UI features faster.",
    },
    {
      icon: <FaRocket className="rounded-full bg-white w-[30px] h-[30px]" />,
      title: "Performance & Core Web Vitals",
      description:
        "Optimize front-end performance end-to-end: implement lazy loading, code splitting, image optimization, and asset fine-tuning to achieve fast load times, smooth interactions, and top Core Web Vitals scores.",
    },
    {
      icon: (
        <AiOutlineBorder className="rounded-full bg-white w-[30px] h-[30px]" />
      ),
      title: "Progressive Web Apps (PWA)",
      description:
        "Transform your web application into an installable PWA with offline capabilities, background sync, and push notifications—delivering a native-like experience that keeps users engaged even when they go offline.",
    },
    {
      icon: (
        <BiAccessibility className="rounded-full bg-white w-[30px] h-[30px]" />
      ),
      title: "Accessibility Audits & Compliance",
      description:
        "Conduct thorough WCAG accessibility audits and remediation: add ARIA roles, semantic HTML, keyboard navigation, and color-contrast improvements so every user can interact with your app seamlessly.",
    },
    {
      icon: (
        <VscDeviceMobile className="rounded-full bg-white w-[30px] h-[30px]" />
      ),
      title: "Responsive & Adaptive Design",
      description:
        "Craft fluid, responsive layouts and adaptive interfaces using CSS Grid, Flexbox, and modern CSS techniques. Ensure pixel-perfect experiences across mobile, tablet, and desktop screens.",
    },
    {
      icon: (
        <RiFileList3Line className="rounded-full bg-white w-[30px] h-[30px]" />
      ),
      title: "Testing & CI/CD Integration",
      description:
        "Maintain rock-solid front-end quality with automated testing (unit tests in Jest, component snapshots, E2E tests in Cypress) and integrate CI/CD pipelines to catch regressions early and streamline your deployments.",
    },
  ];

  return (
    <section className="bg-black bg-opacity-75 lg:h-screen items-center justify-center lg:py-16 lg:px-20 p-4 service bounce">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 service-grid">
        {serviceItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 items-start border border-white lg:p-6 p-4 service-item"
          >
            <div className="flex flex-row gap-4 items-center">
              {item.icon}
              <h2 className="text-gold text-lg font-bold font-eb-garamond">
                {item.title}
              </h2>
            </div>
            <p className="text-white text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
