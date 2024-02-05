import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Fullpage.scss";
import Landing from "../../pages/landing/Landing";
import About from "../../pages/about/About";

const Fullpage = () => (
  <Router>
    <div className="fullpage">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  </Router>
);

export default Fullpage;
