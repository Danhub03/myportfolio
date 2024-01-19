// Import necessary React components and icons for the Home component
import React from "react";
import GitHubIcon from "../helpers/GitHubIcon";
import EmailIcon from "../helpers/EmailIcon";
import LinkedInIcon from "../helpers/LinkedInIcon";

// Import styles for the Home component
import "../styles/Home.css";

// Define the functional component 'Home'
function Home() {
  // Render the Home component
  return (
    <div className="home">
      {/* Section for personal information and social icons */}
      <div className="about">
        <div className="aboutContent">
          {/* Display the name */}
          <h2> Daniel Benitez</h2>
          
          {/* Display a brief introduction */}
          <div className="prompt">
            <p>A frontend developer with a passion for improvement, learning, and creating.</p>
            
            {/* Display social icons for GitHub, Email, and LinkedIn */}
            <div className="icon-box">
              <GitHubIcon/>
              <EmailIcon />
              <LinkedInIcon />
            </div>
          </div>
        </div>
      </div>
      
      {/* Section for skills and experiences */}
      <div className="skills">
        {/* Heading for skills and experiences */}
        <h1> Skills & Experiences</h1>
        
        {/* Ordered list of skills and experiences */}
        <ol className="list">
          
          {/* Item 1: Front-End skills */}
          <li className="item">
            {/* Subheading for Front-End */}
            <h2> Front-End</h2>
            
            {/* Description of Front-End skills */}
            <span>
              Frontend is my primary focus, emphasizing design and adaptation in the web browser.
              I prioritize making websites look convincing and appealing. I've learned the following
              languages during my years of education: </span>
            
            {/* List of Front-End languages */}
            <span>
              <b>ReactJS, HTML, CSS, Javascript, React Native, BootStrap</b>
            </span>
          </li>
          
          {/* Item 2: Back-End skills */}
          <li className="item">
            {/* Subheading for Back-End */}
            <h2>Back-End</h2>
            
            {/* Description of Back-End skills */}
            <span>
              Although my main focus is Frontend, I also have experience with the backend.
              I understand the concept and usage of the following languages learned during my education and experiences: </span>
            
            {/* List of Back-End languages */}
            <span>
              <b>NodeJS, PHP, ExpressJS, MySQL</b>
            </span>
          </li>
        </ol>
      </div>
    </div>    
  );
}

// Export the Home component as the default export
export default Home;
