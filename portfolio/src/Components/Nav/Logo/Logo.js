import React from "react";
import "./Logo.css";
import { HashLink as Link } from "react-router-hash-link";

export default function Logo() {
  return (
    <div className="logo">
      <Link to="#home">
        <img
          src="https://res.cloudinary.com/headincloud/image/upload/v1593861140/mymemoji.png"
          alt="My Memoji"
          title="My Memoji"
        />
      </Link>
      <Link smooth to="#home">
        Jenny Xu
      </Link>
    </div>
  );
}
