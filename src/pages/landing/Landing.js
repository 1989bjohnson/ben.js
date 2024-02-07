import React from "react";
import { useNavigate } from "react-router-dom";
import Star from "../../components/stars/Star";
import Button from "../../components/button/Button";
import "./Landing.scss";
import { routes } from "../../routing/Routing";
import { CSSTransition } from "react-transition-group";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="section landing">
      <Star size={1} count={350} />
      <Star size={2} count={100} />
      <Star size={3} count={50} />
      <div className="content center-content">
        <h1 className="heading fade-in-05">ben.js</h1>
        <nav className="nav">
          {routes.map((route, i) => {
            if (route.path === "/") return null;
            return (
              <CSSTransition
                key={i}
                in={true}
                appear={true}
                timeout={1000}
                classNames="fade"
              >
                <Button onClick={() => navigate(route.path)}>
                  {route.name}
                </Button>
              </CSSTransition>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Landing;
