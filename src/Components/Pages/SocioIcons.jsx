import React from "react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { MdOutlineWifiCalling } from "react-icons/md";

const SocioIcons = () => {
  const handleLocationClick = () => {
    const address = "Bashua street Shomolu Lagos, Lagos State, Nigeria";
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
    <div className="flex flex-row gap-4 text-white">
      <Link to="/" className="rotate">
        <FaLocationDot
          className="w-[20px] h-[20px]"
          onClick={handleLocationClick}
        />
      </Link>
      <Link to="/https://github.com/ESTHER-OLA" className="rotate">
        <FaGithub className="w-[20px] h-[20px]" />
      </Link>
      <Link to="/https://twitter.com/P_tomiwa_" className="rotate">
        <AiFillTwitterCircle className="w-[20px] h-[20px]" />
      </Link>
      <Link to="/linkedin.com/in/ola-esther-96255918b/" className="rotate">
        <FaLinkedin className="w-[20px] h-[20px]" />
      </Link>
      <Link
        to="/https://www.instagram.com/realtecheo?igsh=amtlOTBqYzVvMjdm"
        className="rotate"
      >
        <FaInstagram className="w-[20px] h-[20px]" />
      </Link>
      <Link to="/" className="rotate">
        <AiTwotoneMail
          className="w-[20px] h-[20px]"
          onClick={handleEmailClick}
        />
      </Link>
      <Link to="/#" className="rotate">
        <MdOutlineWifiCalling
          className="w-[20px] h-[20px]"
          onClick={handleCallClick}
        />
      </Link>
    </div>
  );
};

export default SocioIcons;
