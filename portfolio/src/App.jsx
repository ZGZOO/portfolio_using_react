import React from "react";
import "./App.scss";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import PhoneSizeNavBar from "./Components/Nav/PhoneSizeNavBar/PhoneSizeNavBar";
import Resume from "./Components/Resume/Resume";
import TopNavbar from "./Components/Nav/TopNavbar/TopNavbar";

function App() {
  return (
    <div className="canvas">
      <PhoneSizeNavBar />
      <TopNavbar />
      <About />
      <Projects />
      <Resume />
    </div>
  );
}

export default App;
