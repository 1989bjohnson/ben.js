import React from "react";
import { useNavigate } from "react-router-dom";
import Star from "../../components/stars/Star";
import Button from "../../components/button/Button";
import "./Landing.scss";
import { routes } from "../../routing/Routing";
import { AnimateList } from "../../components/effects/Animations";

const Landing = () => {
  const navigate = useNavigate();

  const filteredRoutes = routes.filter((route) => route.path !== "/");

  const renderButton = (route, i) => {
    return (
      <Button className="fade-in-button" onClick={() => navigate(route.path)}>
        {route.name}
      </Button>
    );
  };

  return (
    <div className="section landing">
      <Star size={1} count={350} />
      <Star size={2} count={100} />
      <Star size={3} count={50} />
      <div className="content center-content">
        <h1 className="heading fade-in-heading">ben.js</h1>
        <nav className="nav">
          {routes.map((route, i) => {
            if (route.path === "/") return null;
            return (
              <Button
                className="fade-in-button"
                onClick={() => navigate(route.path)}
              >
                {route.name}
              </Button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Landing;
