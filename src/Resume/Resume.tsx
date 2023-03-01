import { useState } from "react";
import "./Resume.css";

export function Resume() {
  let [education, setEducation] = useState(false);

  return (
    <div className="resume">
      <div className="headerText">Resume</div>
      <h1>Education</h1>
      <div>
        <div
          className="accordionTitle"
          onClick={() => setEducation(!education)}
        >
          <h2>University of Utah</h2>
          <div className="expandIcon">{education ? "-" : "+"}</div>
        </div>
        {education && (
          <div>
            <p>Minor in Business, 3.7 GPA, Dean’s List (7 Semesters)</p>
          </div>
        )}
      </div>
    </div>
  );
}
