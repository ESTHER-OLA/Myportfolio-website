import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Pages from "./Components/Pages/pages";
import { BrowserRouter } from "react-router-dom";
import backgroundImage from "./assets/images/bg-home.jpg";
import { HashLoader } from "react-spinners";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay for demonstration
    return () => clearTimeout(timer);
  }, []);
  return (
    <BrowserRouter>
      {loading ? (
        <div className="flex items-center justify-center h-screen loading-screen">
          <HashLoader size={150} color={"#DA9100"} loading={loading} />
        </div>
      ) : (
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
      )}
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
