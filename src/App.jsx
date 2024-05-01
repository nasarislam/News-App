import React from "react";
import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./component/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Business from "./pages/business/Business";
import Entertainment from "./pages/entertainment/Entertainment";
import Technology from "./pages/technology/Technology";
import Sports from "./pages/sports/Sports";
import Science from "./pages/science/Science";
import Health from "./pages/health/Health";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import SignUp from "./pages/sign_up/SignUp";
import LogIn from "./pages/log_in/LogIn";
import NewsSite from "./pages/home/HomeData";
// import Business from "./pages/business/Business";

function App() {
  return (
    <div className="app">
      <div className="pages">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Business" element={<Business />} />
        <Route path="Entertainment" element={<Entertainment />} />
        <Route path="Science" element={<Science />} />
        <Route path="Sports" element={<Sports />} />
        <Route path="Technology" element={<Technology />} />
        <Route path="Health" element={<Health />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="LogIn" element={<LogIn />} />
        {/* <Route path="HomeData" element={<HomeData />} /> */}
      </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
