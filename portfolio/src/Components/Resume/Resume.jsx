import React from "react";
import "./Resume.scss";

const Resume = () => {
  return (
    <>
      <div className="resume" id="resume">
        <div>Hello Resume here</div>
        <iframe
          src="https://drive.google.com/file/d/1B1Xla7YkJvmshLpAb29R_psOuDRXWiWa/view?usp=sharing"
          className="resumepdf"
        ></iframe>
      </div>

      <div className="socialmedia">
        <a className="github icons" href="https://github.com/ZGZOO" target="_blank">
          <i class="fab fa-github mediaIcon githubIcon"></i>github
        </a>
        <a
          className="linkedin icons"
          href="https://www.linkedin.com/in/jennyzhijiexu/"
          target="_blank"
        >
          <i class="fab fa-linkedin mediaIcon linkedinIcon"></i>linkedin
        </a>
        <a
          className="email icons"
          href="mailto: jennyxu000@gmail.com"
          target="_blank"
        >
          <i class="fas fa-paper-plane mediaIcon emailIcon"></i>email
        </a>
      </div>
    </>
  );
};

export default Resume;
