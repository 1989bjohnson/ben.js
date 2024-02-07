import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "../../routing/Routing";
import "./Fullpage.scss";

const Fullpage = () => (
  <Router>
    <div className="fullpage">
      <Routing />
    </div>
  </Router>
);

export default Fullpage;
