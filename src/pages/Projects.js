// Import necessary modules from React, ProjectItem component, and the list of projects
import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

// Import the styles for the Projects component
import "../styles/Projects.css";

// Define the functional component 'Projects'
function Projects() {
  // Render the component
  return (
    <div className="projects">
      {/* Display a heading for the projects section */}
      <h1> My Personal Projects</h1>

      {/* Create a container for the list of projects */}
      <div className="projectList">
        {/* Map through each project in the ProjectList and render a ProjectItem component for each */}
        {ProjectList.map((project, idx) => {
          return (
            // Pass project details (id, name, image) as props to the ProjectItem component
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
}

// Export the Projects component as the default export
export default Projects;
