import React from "react";
import Me from "../../img/me.jpg";
import RotatingText from "../../components/rotatingtext/RotatingText";
import Star from "../../components/stars/Star";
import { Card } from "../../components/card/Card";
import { getYearsOfExperience, randomizeArray } from "../../util/util";
import "./About.scss";

const About = () => {
  const words = [
    "developer",
    "designer",
    "creator",
    "traveler",
    "innovator",
    "problem-solver",
    "coder",
    "engineer",
    "technologist",
    "enthusiast",
    "thinker",
    "explorer",
    "dreamer",
    "builder",
    "programmer",
    "entrepreneur",
    "learner",
    "strategist",
    "visionary",
  ];

  const text = `i am a seasoned full-stack developer with a passion for creating from the ground up.
  i have been coding for ${getYearsOfExperience()} years and have worked on a variety of projects.
  i have a strong foundation in web development and design, and i am always looking to expand my skill set.`;

  return (
    <div className="section about center-content z-10">
      <Star size={1} count={350} />
      <Star size={2} count={100} />
      <Star size={3} count={50} />
      <div className="profile center-content">
        <img src={Me} alt="profile" />
      </div>
      <RotatingText words={randomizeArray(words)} />
      <Card text={text} />
    </div>
  );
};

export default About;
