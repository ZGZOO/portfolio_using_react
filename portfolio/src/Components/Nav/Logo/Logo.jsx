import React from "./node_modules/react";
import "./Logo.scss";
import { HashLink as Link } from "./node_modules/react-router-hash-link";

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
