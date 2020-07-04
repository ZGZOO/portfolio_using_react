import React from "react";
import "./TopNavbar.css";
import WordNav from "./WordNav/WordNav";
import Logo from "./Logo/Logo";

export default function TopNavbar() {
  return (
    <header className="topnavbar">
      <Logo />
      <WordNav />
    </header>
  );
}
