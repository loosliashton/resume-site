import { useState, useEffect } from "react";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import "./Resume.css";
import resume from "./resume.json";
import ResumeModel from "./models/Resume";

export function Resume() {
  const resumeData = new ResumeModel(resume);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% of the resume is visible
      },
    );

    const resumeElement = document.querySelector(".resume");
    if (resumeElement) {
      observer.observe(resumeElement);
    }

    return () => {
      if (resumeElement) {
        observer.unobserve(resumeElement);
      }
    };
  }, []);

  let [openAccordions, setOpenAccordions] = useState<string[]>([
    `${resumeData.experience[0].name}, ${resumeData.experience[0].company}`,
  ]);

  const toggleAccordion = (name: string) => {
    // console.log(openAccordions); // Removed console log for cleaner code
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
                <div
                  className={`plus-minus ${
                    openAccordions.includes(`${exp.name}, ${exp.company}`)
                      ? "open"
                      : ""
                  }`}
                />
              </div>
            </div>
            <div
              className={`accordionContent ${
                openAccordions.includes(`${exp.name}, ${exp.company}`)
                  ? "open"
                  : ""
              }`}
            >
              <div>
                <p>{exp.time}</p>
                <ul>
                  {exp.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1>Projects</h1>
      <div>
        <ul>
          {resumeData.projects.map((project, index) => (
            <li key={index}>
              <b>{project.name}</b>: {project.description}
            </li>
          ))}
        </ul>
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
                <div
                  className={`plus-minus ${
                    openAccordions.includes(edu.school) ? "open" : ""
                  }`}
                />
              </div>
            </div>
            <div
              className={`accordionContent ${
                openAccordions.includes(edu.school) ? "open" : ""
              }`}
            >
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
            </div>
          </div>
        ))}
      </div>
      <a
        href="https://aloos.li/resume"
        title="Download PDF"
        target="_blank"
        rel="noopener noreferrer"
        className={`pdfFab ${isVisible ? "visible" : ""}`}
      >
        <BsFillFileEarmarkPdfFill size={30} />
        <span className="pdfFabText">Download PDF</span>
      </a>
    </div>
  );
}
