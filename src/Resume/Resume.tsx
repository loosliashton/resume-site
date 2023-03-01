import { Accordion } from "react-bootstrap";
import "./Resume.css";

export function Resume() {

  return (
    <div className="resume">
      <div className="headerText">Resume</div>
      <h1>Education</h1>
      <div>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>University of Utah</Accordion.Header>
            <Accordion.Body>
              <p>Minor in Business, 3.7 GPA, Dean’s List (7 Semesters)</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}
