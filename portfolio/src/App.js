import React from "react";
import "./App.scss";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import PhoneSizeNavBar from "./Components/Nav/PhoneSizeNavBar/PhoneSizeNavBar";
import Resume from "./Components/Resume/Resume";

function App() {
  return (
    <div className="canvas">
      <PhoneSizeNavBar />
      <About />
      <Projects />
      <Resume />
    </div>
  );
}

export default App;
