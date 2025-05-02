import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { MdOutlineWifiCalling } from "react-icons/md";

const SocioIcons = () => {
  const handleLocationClick = () => {
    const address = "Lagos State, Nigeria";
    const mapUrl = `https://www.google.com/maps/place/${encodeURIComponent(
      address
    )}`;
    window.open(mapUrl, "_blank");
  };

  const handleEmailClick = () => {
    const emailAddress = "estheolowo2018@gmail.com";
    const subject = "Subject of the email";
    const body = "Body of the email";
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  const handleCallClick = () => {
    const phoneNumber = "+2348107513004";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex flex-row gap-4 text-white bounce">
      <span onClick={handleLocationClick} className="rotate cursor-pointer">
        <FaLocationDot className="w-[20px] h-[20px]" />
      </span>
      <a
        href="https://github.com/ESTHER-OLA"
        target="_blank"
        className="rotate"
      >
        <FaGithub className="w-[20px] h-[20px]" />
      </a>
      <a
        href="https://twitter.com/P_tomiwa_"
        target="_blank"
        className="rotate"
      >
        <AiFillTwitterCircle className="w-[20px] h-[20px]" />
      </a>
      <a
        href="https://linkedin.com/in/ola-esther-96255918b/"
        target="_blank"
        className="rotate"
      >
        <FaLinkedin className="w-[20px] h-[20px]" />
      </a>
      <a
        href="https://www.instagram.com/realesther_ola/"
        target="_blank"
        className="rotate"
      >
        <FaInstagram className="w-[20px] h-[20px]" />
      </a>
      <span onClick={handleEmailClick} className="rotate cursor-pointer">
        <AiTwotoneMail className="w-[20px] h-[20px]" />
      </span>
      <span onClick={handleCallClick} className="rotate cursor-pointer">
        <MdOutlineWifiCalling className="w-[20px] h-[20px]" />
      </span>
    </div>
  );
};

export default SocioIcons;
