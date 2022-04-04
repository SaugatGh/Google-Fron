import React from "react";
import google_icon from "./images_for_projects/google_icon.png";
import orochi from "./images_for_projects/orochi.jpg";
import "../header/header.css";

const Header = () => {
  return (
    <>
      <header>
        <div>
          <img
            src={orochi}
            alt="Google Account profile and information"
            className="orochi"
          />
    

        <img src={google_icon} alt="Google apps icon" className="google_icon" />
      </div> 
        <div className="images-gmail">
          <div>
            <a
              className="images"
              href="https://www.google.com.np/imghp?hl=en&authuser=0&ogbl"
            >
              Images
            </a>
          </div>
          <div>
            <a className="gmail" href="https://mail.google.com/mail/u/0/#inbox">
              Gmail
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
