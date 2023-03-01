import { Accordion, AccordionDetails } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import "./Resume.css";

export function Resume() {

  return (
    <div className="resume">
      <div className="headerText">Resume</div>
      <h1>Education</h1>
      <div>
        <Accordion>
          <AccordionSummary>
            <h2>University of Utah</h2>
          </AccordionSummary>
        </Accordion>
        {/* <Accordion alwaysOpen>
          <Accordion.Item eventKey="Education">
            <Accordion.Header className="accordionHeader">University of Utah</Accordion.Header>
            <Accordion.Body>
              <p>Minor in Business, 3.7 GPA, Dean’s List (7 Semesters)</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion> */}
      </div>
    </div>
  );
}
