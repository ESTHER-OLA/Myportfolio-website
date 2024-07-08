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
        <div
          className="min-h-screen bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundColor: "rgb(50, 53, 64)",
          }}
        >
          <Navbar></Navbar>
          <Pages></Pages>
          {/* <div className="flex items-center justify-center min-h-screen ">
          </div> */}
        </div>
      )}
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
