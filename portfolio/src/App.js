import React from "react";
import "./App.scss";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import PhoneSizeNavBar from "./components/Nav/PhoneSizeNavBar/PhoneSizeNavBar";

function App() {
  return (
    <div className="canvas">
      <PhoneSizeNavBar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
