import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const GitHubIcon2 = ({ size = "50px", color = "black" }) => {
  return (
    <a
      href="https://github.com/Danhub03?tab=repositories"  // Replace this URL with the actual GitHub page you want to link to
      target="_blank"            // Open the link in a new tab
      rel="noopener noreferrer"  // Recommended for security reasons when using target="_blank"
      style={{ textDecoration: "none" }}  // Remove default underline for the link
    >
      <div style={{ width: size, height: size, display: "flex", justifyContent: "center", alignItems: "center" }}>
        {/* Bakgrundsfärgen */}
        <rect width="24" height="24" rx="50%" />

        {/* GitHub-ikonen */}
        <FontAwesomeIcon icon={faGithub} style={{ fontSize: size, color: color }} />
      </div>
    </a>
  );
};

export default GitHubIcon2;