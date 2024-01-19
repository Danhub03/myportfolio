import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const EmailIcon = ({ size = "50px", color = "white", bgColor = "#3a3939" }) => {
  return (
    <a
      href="mailto:benitezhdaniel@gmail.com"  // Replace this URL with the actual GitHub page you want to link to
      target="_blank"            // Open the link in a new tab
      rel="noopener noreferrer"  // Recommended for security reasons when using target="_blank"
      style={{ textDecoration: "none" }}  // Remove default underline for the link
    >
    <div style={{ width: size, height: size, display: "flex", justifyContent: "center", alignItems: "center" }}>
      {/* Bakgrundsfärgen */}
      <rect width="24" height="24" rx="50%" />
      <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: size, color }} />
    </div>
    </a>
  );
};

export default EmailIcon;

