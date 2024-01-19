// Import necessary modules from React and React Router
import React from "react";
import { useParams } from "react-router-dom";

// Import the list of projects and the GitHub icon component
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon2 from "../helpers/GitHubIcon2";

// Import the styles for the ProjectDisplay component
import "../styles/ProjectDisplay.css";

// Define the ProjectDisplay functional component
function ProjectDisplay() {
  // Extract the 'id' parameter from the URL using useParams
  const { id } = useParams();
  
  // Retrieve the project details based on the 'id' from the ProjectList
  const project = ProjectList[id];

  // Render the project details on the page
  return (
    <div className="project">
      {/* Display the project name */}
      <h1>{project.name}</h1>

      {/* Display the project image */}
      <img src={project.image} alt={project.name} />

      {/* Display the skills required for the project */}
      <p>
        <b>Skills:</b> {project.skills}
      </p>

      {/* Render the GitHubIcon component to display GitHub-related information */}
      <GitHubIcon2 />
    </div>
  );
}

// Export the ProjectDisplay component as the default export
export default ProjectDisplay;
