import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./PhoneSizeNavBar.scss";

const PhoneSizeNavBar = () => {
  const [isSocialClicked, setIsSocialClicked] = useState(false);

  const handleSocialClick = () => {
    console.log("clicked!");
    setIsSocialClicked(!isSocialClicked);
  };

  const hideSocialMedia = () => {
    setIsSocialClicked(false);
  };

  return (
    <nav className="phoneNavbar">
      <div className="phoneNavbar__container">
        <Link
          to="#about"
          scroll={(e) =>
            e.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          className="phoneNavbar__container__link"
          onClick={hideSocialMedia}
        >
          <i className="far fa-address-card phoneNavbar__container__link__icon"></i>
          <span>about</span>
        </Link>
        <Link
          to="#projects"
          scroll={(e) =>
            e.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          className="phoneNavbar__container__link"
          onClick={hideSocialMedia}
        >
          <i className="fas fa-briefcase phoneNavbar__container__link__icon"></i>
          <span>projects</span>
        </Link>
        <Link
          smooth
          to="#contact"
          className="phoneNavbar__container__link"
          onClick={hideSocialMedia}
        >
          <i className="far fa-handshake phoneNavbar__container__link__icon"></i>
          <span>contact</span>
        </Link>
        <Link
          className={`phoneNavbar__container__social ${
            isSocialClicked ? "socialFocus" : ""
          }`}
          onClick={handleSocialClick}
        >
          <i className="fas fa-share-alt phoneNavbar__container__link__icon"></i>
          <span>social</span>
        </Link>
        <div className={`socialMedia ${isSocialClicked ? "" : "mediaHidden"}`}>
          <div className="socialMediaBox">
            <div className="socialMediaRollOne">
              <a className="githubGroup" href="https://github.com/ZGZOO" target="_blank">
                <i class="fab fa-github mediaIcon githubIcon"></i>github
              </a>
            </div>

            <div className="socialMediaRollTwo">
              <a className="linkedinGroup" href="https://www.linkedin.com/in/jennyzhijiexu/" target="_blank">
                <i class="fab fa-linkedin mediaIcon linkedinIcon"></i>linkedin
              </a>
              <a className="emailGroup" href="mailto: jennyxu000@gmail.com" target="_blank">
                <i class="fas fa-paper-plane mediaIcon emailIcon"></i>email
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PhoneSizeNavBar;
