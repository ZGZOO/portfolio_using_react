import React from "react";
import "./App.scss";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import PhoneSizeNavBar from "./components/Nav/PhoneSizeNavBar/PhoneSizeNavBar";
import Resume from "./components/Resume/Resume";

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
