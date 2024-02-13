import React from "react";
import Star from "../components/stars/Star";
import Page from "../pages/page/Page";

const Layout = () => {
  return (
    <div className="layout center-content">
      <Star size={1} count={350} />
      <Star size={2} count={100} />
      <Star size={3} count={50} />
      <Page />
    </div>
  );
};

export default Layout;
