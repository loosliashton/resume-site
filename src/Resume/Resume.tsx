import { useState } from "react";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import "./Resume.css";
import resume from "./resume.json";
import ResumeModel from "./models/Resume";

export function Resume() {
  const resumeData = new ResumeModel(resume);
  let [utah, setUtah] = useState(true);

  let [openAccordions, setOpenAccordions] = useState<string[]>([
    `${resumeData.experience[0].name}, ${resumeData.experience[0].company}`,
  ]);

  const toggleAccordion = (name: string) => {
    console.log(openAccordions);
    if (openAccordions.includes(name)) {
      setOpenAccordions(openAccordions.filter((n) => n !== name));
    } else {
      setOpenAccordions([...openAccordions, name]);
    }
  };

  return (
    <div className="resume">
      <div className="headerText">Resume</div>
      <p>{resumeData.description}</p>
      <h1>Experience</h1>
      <div>
        {resumeData.experience.map((exp, index) => (
          <div key={index}>
            <div
              className="accordionTitle"
              onClick={() => {
                toggleAccordion(`${exp.name}, ${exp.company}`);
              }}
            >
              <h2>
                <b>{exp.name}</b> / {exp.company}
              </h2>
              <div className="expandIcon">
                {openAccordions.includes(`${exp.name}, ${exp.company}`)
                  ? "-"
                  : "+"}
              </div>
            </div>
            {openAccordions.includes(`${exp.name}, ${exp.company}`) && (
              <div>
                <p>{exp.time}</p>
                <ul>
                  {exp.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
      <h1>Skills</h1>
      <div>
        <ul>
          {resumeData.skills.map((skill, index) => (
            <li key={index}>
              <b>{skill.name}</b>: {skill.description}
            </li>
          ))}
        </ul>
      </div>
      <h1>Education</h1>
      <div>
        {resumeData.education.map((edu, index) => (
          <div key={index}>
            <div
              className="accordionTitle"
              onClick={() => {
                toggleAccordion(edu.school);
              }}
            >
              <h2>
                <b>{edu.degree}</b> / {edu.school}
              </h2>
              <div className="expandIcon">
                {openAccordions.includes(edu.school) ? "-" : "+"}
              </div>
            </div>
            {openAccordions.includes(edu.school) && (
              <div>
                <p>{edu.time}</p>
                <p>{edu.info}</p>
                <ul>
                  {edu.coursework.map((course, index) => (
                    <li key={index}>
                      <b>{course.name}</b> - {course.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
      <a
        href="https://aloos.li/resume"
        title="Resume"
        style={{ marginBottom: "10px" }}
      >
        <BsFillFileEarmarkPdfFill color="rgb(0, 167, 167)" size={30} />
      </a>
    </div>
  );
}
