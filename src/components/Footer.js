import React from "react";
import GitHubIcon from "../helpers/GitHubIcon"; // Importera din GitHubIcon
import EmailIcon from "../helpers/EmailIcon"; // Importera din GitHubIcon
import LinkedInIcon from "../helpers/LinkedInIcon"; // Importera din GitHubIcon
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        {/* Här använder du din egna GitHub-ikon */}
        <div className = "footer-box">
        <GitHubIcon/> 
        <EmailIcon />
        <LinkedInIcon />
        </div>
      </div>
      <p> &copy; 2024 Daniel Benitez</p>
    </div>
  );
}

export default Footer;