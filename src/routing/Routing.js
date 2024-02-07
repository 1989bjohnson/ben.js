import React, { createRef } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Landing from "../pages/landing/Landing";
import About from "../pages/about/About";
import Projects from "../pages/projects/Projects";
import Resume from "../pages/resume/Resume";
import Contact from "../pages/contact/Contact";

export const routes = [
  { path: "/", name: "Home", element: <Landing />, nodeRef: createRef() },
  { path: "/about", name: "About", element: <About />, nodeRef: createRef() },
  {
    path: "/projects",
    name: "Projects",
    element: <Projects />,
    nodeRef: createRef(),
  },
  {
    path: "/resume",
    name: "Resume",
    element: <Resume />,
    nodeRef: createRef(),
  },
  {
    path: "/contact",
    name: "Contact",
    element: <Contact />,
    nodeRef: createRef(),
  },
];

const Routing = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
                ref={route.nodeRef}
              />
            );
          })}
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Routing;
