import React from "./node_modules/react";
import "./Hi.scss";

export default function Hi() {
  return (
    <div className="hi">
      <span className="nameAndTitle">
        Hi, I am Jenny. <br />
        <br />A Full-Stack Web Developer.
      </span>
      <br></br>
      <br></br>
      <span className="aboutMe">
        I have a passion for web development, and enjoy building various web
        applications. <br />
        <br />
        Currently, I am a CS senior at San José State University. <br />
        <br />
        While learning fundamentals at school, I am constantly expanding my
        knowledge in my free time. <br />
        <br />
        This past summer, I took Software Engineering Immersive Online bootcamp
        at General Assembly. From there, I learned Full-Stack web development,
        and I love it! <br />
        <br />
        Below, you will see my skill set and my projects.
        <br />
        <br />
      </span>
    </div>
  );
}
