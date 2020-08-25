import React from "./node_modules/react";
import "./About.scss";
import Avatar from "./Avatar/Avatar";
import Hi from "./Hi/Hi";
import Skills from "./Skills/Skills";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="about__container">
        <Avatar />
        <Hi />
        <Skills />
      </div>
    </div>
  );
}
