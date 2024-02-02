import { useState } from "react";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import "./Resume.css";

export function Resume() {
  let [utah, setUtah] = useState(true);
  let [ta, setTa] = useState(false);
  let [fidelity, setFidelity] = useState(false);
  let [alegra, setAlegra] = useState(false);

  return (
    <div className="resume">
      <div className="headerText">Resume</div>
      <p>
        I'm a 24-year-old University of Utah graduate with a BS in Computer
        Science and a minor in Business. My hobbies include fitness,
        motorcycles, photography, video production, mountain biking, basketball,
        and technology.
      </p>
      <h1>Education</h1>
      <div>
        <div className="accordionTitle" onClick={() => setUtah(!utah)}>
          <h2>
            <b>University of Utah</b>
          </h2>
          <div className="expandIcon">{utah ? "-" : "+"}</div>
        </div>
        {utah && (
          <div>
            <p>August 2018 - May 2023</p>
            <p>
              Bachelor of Science in Computer Science, Minor in Business, 3.7
              GPA, Dean’s List (7 Semesters)
            </p>
            <h3>Relevant Coursework</h3>
            <ul>
              <li>
                <b>Mobile App Development:</b> Created an Android app in Kotlin,
                utilizing system sensors and external APIs.
              </li>
              <li>
                <b>Web Software Architecture:</b> Utilized ASP.NET to create a
                web app with a database hosted on AWS EC2. Learned about and
                implemented user roles, REST, JavaScript/HTML5, CSS, Selenium,
                encryption, Google analytics, Bootstrap, and XML/JSON
                processing.
              </li>
              <li>
                <b>Artificial Intelligence:</b> Implemented intelligent computer
                systems through a series of Python projects.
              </li>
              <li>
                <b>Computer Graphics:</b> Designed software to represent curves
                and surfaces using the GPU pipeline. Developed WebGL
                applications to display and manipulate 2D and 3D models on the
                web.
              </li>
              <li>
                <b>Programming Languages:</b> Learned functional programming
                techniques by creating a series of interpreters, type-checkers,
                and compilers.
              </li>
              <li>
                <b>Databases:</b> Created a database system using MySQL,
                including ER diagrams and front-end access tools.
              </li>
              <li>
                <b>Capstone:</b> Developed a React Native mobile application
                using a Firebase backend as a final project.
              </li>
            </ul>
          </div>
        )}
      </div>
      <h1>Experience</h1>
      <div>
        <div className="accordionTitle" onClick={() => setTa(!ta)}>
          <h2>
            <b>Teaching Assistant</b> / University of Utah
          </h2>
          {/* <h3>University of Utah</h3> */}
          <div className="expandIcon">{ta ? "-" : "+"}</div>
        </div>
        {ta && (
          <div>
            <p>January 2022 - Present</p>
            <ul>
              <li>
                Studied essential algorithms and data structures to help
                students complete assignments and exams using Java, C#, and C.
              </li>
              <li>
                Designed and ran instructional labs to supplement student
                learning for Algorithms & Data Structures, Software Practice,
                and Foundations of Computer Science courses.
              </li>
            </ul>
          </div>
        )}
        <div className="accordionTitle" onClick={() => setFidelity(!fidelity)}>
          <h2>
            <b>Software Developer Intern</b> / Fidelity Investments
          </h2>
          <div className="expandIcon">{fidelity ? "-" : "+"}</div>
        </div>
        {fidelity && (
          <div>
            <p>Summers 2021, 2022</p>
            <ul>
              <li>
                Practiced Agile software development in a team environment,
                including daily standup meetings, extensive use of Git, and
                practice pointing and separating tasks into sprints.
              </li>
              <li>
                Designed and implemented a backend trade flow dashboard using
                Angular, deployed as a web application using Docker and AWS.
              </li>
              <li>
                Worked extensively with TypeScript and implemented changes
                regarding Datadog logging and tracing, ESLint warnings and
                errors, and Jenkins build configurations.
              </li>
            </ul>
          </div>
        )}
        <div className="accordionTitle" onClick={() => setAlegra(!alegra)}>
          <h2>
            <b>Master of Releases</b> / Alegra Learning
          </h2>
          <div className="expandIcon">{alegra ? "-" : "+"}</div>
        </div>
        {alegra && (
          <div>
            <p>June 2018 - May 2022</p>
            <ul>
              <li>
                Tested an app that teaches children English for quality and
                functionality.
              </li>
              <li>
                Released app to the Google Play Store, Apple App Store, and
                Amazon App store after extensive testing and quality assurance.
              </li>
              <li>
                Created assets used in production including icons, screenshots,
                and videos using Adobe Premiere Pro, After Effects, Photoshop,
                and Illustrator.
              </li>
            </ul>
          </div>
        )}
      </div>
      <h1>Skills</h1>
      <div>
        <ul>
          <li>
            Proficient in Java, C/C++, JavaScript/TypeScript, C#, and SQL. Have
            experience with Python, Kotlin, HTML/CSS, Docker, Firebase, and AWS.
          </li>
          <li>
            Adept at picking up new skills due to extensive self-taught
            experience with React Native, Angular, MAUI, and other software
            development frameworks.
          </li>
          <li>
            Passionate about computer software and hardware; experienced in
            Windows, macOS, and Linux.
          </li>
          <li>
            Skilled with creative software such as Adobe Illustrator, Photoshop,
            Lightroom, Premiere.
          </li>
          <li>Amateur filmmaker and photographer.</li>
        </ul>
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
