import React from "react";
import "./About.css";
import Avatar from "./Avatar/Avatar";
import Hi from "./Hi/Hi";
import Skills from "./Skills/Skills";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="about_container">
        <Avatar />
        <Hi />
        <Skills />
      </div>
    </div>
  );
}
