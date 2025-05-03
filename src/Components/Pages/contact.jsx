import React, { useState, useRef } from "react";
import { BiSolidContact } from "react-icons/bi";
import {
  faUser,
  faEnvelope,
  faPhone,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [captchaToken, setCaptchaToken] = useState(null);
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      number: value,
    });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaToken(value);
    console.log("Captcha token received:", value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is not valid";
    }
    if (!formData.number.trim()) {
      validationErrors.number = "Number is required";
    } else if (/^\+?[1-9]\d{1,11}$/.test(formData.number)) {
      validationErrors.number = "Number is not valid";
    }
    if (!formData.message.trim()) {
      validationErrors.message = "Message is required";
    }
    if (!captchaToken) {
      validationErrors.captcha = "Please complete the CAPTCHA";
    }
    if (Object.keys(validationErrors).length === 0) {
      toast.success("MESSAGE SENT SUCCESSFULLY!");
      console.log("Form sent successfully");
      setFormData({
        name: "",
        email: "",
        number: "",
        message: "",
      });
    } else {
      setErrors(validationErrors);
    }
  };
  //   // Submit form data to Netlify
  //   const formDataToSubmit = new FormData();
  //   formDataToSubmit.append("form-name", "contact");
  //   formDataToSubmit.append("name", formData.name);
  //   formDataToSubmit.append("email", formData.email);
  //   formDataToSubmit.append("number", formData.number);
  //   formDataToSubmit.append("message", formData.message);

  //   try {
  //     await fetch("/", {
  //       method: "POST",
  //       body: formDataToSubmit,
  //     });

  //     toast.success("MESSAGE SENT SUCCESSFULLY!");
  //     setFormData({
  //       name: "",
  //       email: "",
  //       number: "",
  //       message: "",
  //     });
  //   } catch (error) {
  //     console.error("Form submission error:", error);
  //     toast.error("Failed to send message. Please try again.");
  //   }
  // };

  return (
    <div className="items-center bg-black bg-opacity-75 h-screen py-[3px] px-[3rem] justify-center fade-in">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition:Bounce
      />
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="flex flex-row gap-2 items-center">
          <BiSolidContact className="text-gold w-[35px] h-[35px] mt-3" />
          <h2 className="text-white text-xl font-eb-garamond lg:tracking-wider mt-3">
            Let's connect — Let's embark on a journey together
          </h2>
        </div>

        <form
          ref={form}
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="relative top-0 right-0 left-0 flex flex-col"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />
          <div>
            <label htmlFor="name" className="text-gold font-lg font-serif">
              Name
            </label>
            <div className="input-with-icon">
              <FontAwesomeIcon icon={faUser} className="input-icon" />
              <input
                name="name"
                id="name"
                type="text"
                value={formData.name}
                placeholder="Hungry Helen"
                className="w-[75vw] lg:w-[45vw] px-[3.2rem] py-3 mb-5 bg-gray rounded-lg input"
                onChange={handleChange}
              />
            </div>
            {errors.name && (
              <span className="error-text text-red-700">{errors.name}</span>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-gold font-lg text-left font-serif"
            >
              Email
            </label>
            <div className="input-with-icon">
              <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
              <input
                name="email"
                id="email"
                type="text"
                value={formData.email}
                placeholder="hungryhelen@gmail.com"
                className="w-[75vw] lg:w-[45vw] px-[3.2rem] py-3 mb-5 bg-gray rounded-lg input"
                onChange={handleChange}
              />
            </div>
            {errors.email && (
              <span className="error-text text-red-700">{errors.email}</span>
            )}
          </div>
          <div>
            <label
              htmlFor="number"
              className="text-gold font-lg text-left font-serif"
            >
              Phone Number
            </label>
            <div className="input-with-icon">
              <FontAwesomeIcon icon={faPhone} className="input-icon" />
              <PhoneInput
                international
                defaultCountry="US"
                name="number"
                value={formData.number}
                onChange={handlePhoneChange}
                className="w-[75vw] lg:w-[45vw] px-[3.2rem] py-3 mb-5 bg-gray rounded-lg input"
              />
            </div>
            {errors.number && (
              <span className="error-text text-red-700">{errors.number}</span>
            )}
          </div>
          <div>
            <label
              htmlFor="message"
              className="text-gold font-lg text-left font-serif"
            >
              Message{" "}
            </label>
            <div className="input-with-icon">
              <FontAwesomeIcon icon={faComment} className="input-icon-text" />
              <textarea
                name="message"
                id="message"
                value={formData.message}
                placeholder="my message goes here....."
                className="w-[75vw] lg:w-[45vw] h-[20vh] px-[3.2rem] py-3 mb-5 bg-gray input"
                onChange={handleChange}
              ></textarea>
            </div>
            {errors.message && (
              <span className="error-text text-red-700">{errors.message}</span>
            )}
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 my-4">
            <div className="lg:w-auto">
              <HCaptcha
                sitekey="bf4c7345-d958-4be7-9ec9-801de19c25bf"
                onVerify={handleCaptchaChange}
                className="h-captcha lg:w-auto"
              />
              {errors.captcha && (
                <span className="error-text text-red-700">
                  {errors.captcha}
                </span>
              )}
            </div>
            <div className="">
              <button
                type="submit"
                className="px-10 py-2 bg-red text-white rounded-lg hover:bg-blue transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
