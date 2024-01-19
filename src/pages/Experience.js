// Import necessary React components and styles for the Experience component
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// Define the functional component 'Experience'
function Experience() {
  // Render the Experience component
  return (
    <div className="experience">
      {/* Vertical timeline component with a specified line color */}
      <VerticalTimeline lineColor="#353434">
        
        {/* First timeline element for high school education */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2023"
          iconStyle={{ background: "#353434", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            My High School, NTI Sundbyberg, Stockholm Sweden
          </h3>
          <p> Information & Media Technology</p>
        </VerticalTimelineElement>
        
        {/* Second timeline element for senior project */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - 2023"
          iconStyle={{ background: "#353434", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            My Senior Project, NTI Sundbyberg, Stockholm Sweden
          </h3>
          <p>Developed a frontend gym website</p>
        </VerticalTimelineElement>
        
        {/* Third timeline element for technical fourth year in software development */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - 2024"
          iconStyle={{ background: "#353434", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
          Technical Fourth Year, School engineer, NTI Södertörn, Stockholm Sweden
          </h3>
          <p> Software Development</p>
        </VerticalTimelineElement>

        {/* Fourth timeline element for work during the fourth year */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - 2024"
          iconStyle={{ background: "#353434", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
          During The Fourth Year, School Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Södertörn, Stockholm Sweden
          </h4>
          <p>Worked with various front and backend projects</p>
        </VerticalTimelineElement>
      
      </VerticalTimeline>
    </div>
  );
}

// Export the Experience component as the default export
export default Experience;
