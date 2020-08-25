import React from "react";
import "./WordNav.scss";
import { HashLink as Link } from "react-router-hash-link";

export default function WordNav() {
  return (
    <nav className="wordNav">
      <Link
        to="#about"
        scroll={(e) => e.scrollIntoView({ behavior: "smooth", block: "start" })}
      >
        About
      </Link>
      <Link
        to="#projects"
        scroll={(e) => e.scrollIntoView({ behavior: "smooth", block: "start" })}
      >
        Projects
      </Link>
      <Link smooth to="#contact">
        Contact
      </Link>
    </nav>
  );
}
