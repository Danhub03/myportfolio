// Import necessary React modules and the useNavigate hook from React Router
import React from "react";
import { useNavigate } from "react-router-dom";

// Define the functional component 'ProjectItem' with props (image, name, id)
function ProjectItem({ image, name, id }) {
  // Use the useNavigate hook to obtain the navigation function
  const navigate = useNavigate();

  // Render the ProjectItem component
  return (
    // Container for the project item with a click event to navigate to the project details page
    <div
      className="projectItem"
      onClick={() => {
        // Use the navigate function to redirect to the project details page with the project's id
        navigate("/project/" + id);
      }}
    >
      {/* Background image of the project item */}
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />

      {/* Display the project name */}
      <h1> {name} </h1>
    </div>
  );
}

// Export the ProjectItem component as the default export
export default ProjectItem;
