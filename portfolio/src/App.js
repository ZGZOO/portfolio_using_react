import React from "react";
import "./App.scss";
import TopNavbar from "./components/Nav/TopNavbar/TopNavbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import PhoneSizeNavBar from "./components/Nav/PhoneSizeNavBar/PhoneSizeNavBar";

function App() {
  return (
    <div className="canvas" >
      {/* <TopNavbar /> */}
      <About />
      <Projects />
      <Contact />
      <PhoneSizeNavBar />
    </div>
  );
}

export default App;
