import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Resume from "./resume";
import Portfolio from "./portfolio";
import Service from "./services";
import Contact from "./contact";

const pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/resume" element={<Resume></Resume>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/service" element={<Service></Service>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
};

export default pages;
