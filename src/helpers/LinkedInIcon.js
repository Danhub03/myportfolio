import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const LinkedInIcon = ({ size = "50px", color = "white", bgColor ="#3a3939" }) => {
  return (
    <a
      href="https://www.linkedin.com/in/daniel-benitez-425469295?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BRizQl7GCQPOa5rVZp0wL7Q%3D%3D"  // Replace this URL with the actual GitHub page you want to link to
      target="_blank"            // Open the link in a new tab
      rel="noopener noreferrer"  // Recommended for security reasons when using target="_blank"
      style={{ textDecoration: "none" }}  // Remove default underline for the link
    >
    <div style={{ width: size, height: size, display: "flex", justifyContent: "center", alignItems: "center", }}>
      {/* Bakgrundsfärgen */}
      <rect width="24" height="24" rx="50%" />

      {/* LinkedIn-ikonen */}
      <FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: size, color: color }} />
    </div>
    </a>
  );
};

export default LinkedInIcon;
