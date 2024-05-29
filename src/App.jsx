import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Pages from "./Components/Pages/pages";
import { BrowserRouter } from "react-router-dom";
import backgroundImage from "./assets/images/bg-home.jpg";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative h-screen">
        <div
          className="absolute bg inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            opacity: "0.8",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-85"></div>
        <Navbar></Navbar>
        <Pages></Pages>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
