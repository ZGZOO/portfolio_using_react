import React from "react";
import "./Resume.scss";

const Resume = () => {
  return (
    <div className="resume" id="resume">
      <div>Hello Resume here</div>
      <iframe
        src="https://drive.google.com/file/d/1B1Xla7YkJvmshLpAb29R_psOuDRXWiWa/view?usp=sharing"
        className="resumepdf"
      ></iframe>
    </div>
  );
};

export default Resume;
