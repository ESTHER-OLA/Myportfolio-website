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
import emailjs from "@emailjs/browser";
import "react-phone-number-input/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import ReCAPTCHA from "react-google-recaptcha";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const contact = () => {
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
    setCaptchaToken(token);
    console.log("Captcha token:", token);
  };

  const handleSubmit = (e) => {
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
      setErrors(validationErrors);
    }
    if (Object.keys(validationErrors).length === 0) {
      emailjs
        .sendForm("service_ifrjlza", "template_gbpicfx", form.current, {
          publicKey: "iYdDXRPaMdqaVpCgc",
        })
        .then(
          () => {
            toast.success("MESSAGE SENT!");
          },
          (error) => {
            toast.error("MESSAGE FAIL TO SEND...", error.text);
          }
        );
      // Reset form fields and PhoneInput value
      setFormData({
        name: "",
        email: "",
        number: "",
        message: "",
      });
    }
    e.target.reset();
  };

  return (
    <div className="relative z-10 top-[4rem] left-0 right-0 px-[1.5rem] py-[1rem] fade-in">
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
      <div className="flex flex-col gap-4 items-center">
        <div className="flex flex-row gap-2">
          <BiSolidContact className="text-gold w-[35px] h-[35px]" />
          <h2 className="text-white text-xl font-eb-garamond lg:tracking-wider mt-3">
            Let's connect — Let's embark on a journey together
          </h2>
        </div>

        <form
          ref={form}
          className="relative top-0 right-0 left-0 flex flex-col"
          onSubmit={handleSubmit}
        >
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
                placeholder="Hungry Helen"
                className="w-[75vw] lg:w-[45vw] px-[3.2rem] py-3 mb-5 bg-gray rounded-lg input"
                onChange={handleChange}
              />
            </div>
            {errors.name && <span className="error-text">{errors.name}</span>}
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
                placeholder="hungryhelen@gmail.com"
                className="w-[75vw] lg:w-[45vw] px-[3.2rem] py-3 mb-5 bg-gray rounded-lg input"
                onChange={handleChange}
              />
            </div>
            {errors.email && <span className="error-text">{errors.email}</span>}
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
              <span className="error-text">{errors.number}</span>
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
                placeholder="my message goes here....."
                className="w-[75vw] lg:w-[45vw] h-[20vh] px-[3.2rem] py-3 mb-5 bg-gray input"
                onChange={handleChange}
              ></textarea>
            </div>
            {errors.message && (
              <span className="error-text">{errors.message}</span>
            )}
          </div>
          <div className="flex flex-row gap-6">
            <div>
              <HCaptcha
                sitekey="bf4c7345-d958-4be7-9ec9-801de19c25bf"
                onChange={handleCaptchaChange}
              />
              {errors.captcha && (
                <span className="error-text">{errors.captcha}</span>
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

export default contact;
