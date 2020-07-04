import React from "react";
import "./App.css";
import TopNavbar from "./Components/TopNavbar/TopNavbar";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App" id="home">
      <TopNavbar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
