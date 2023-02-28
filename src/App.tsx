import React from "react";
import { IconContext } from "react-icons";
import headshot from "./images/headshot.jpg";
import {
  BsEnvelopeFill,
  BsFileEarmarkPersonFill,
  BsGithub,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
import "./App.css";

function App() {
  const [pictureVisible, setPictureVisible] = React.useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <div onClick={() => setPictureVisible(!pictureVisible)} className="pictureDiv">
          <p className="name">Ashton Loosli</p>
          {pictureVisible && (
            <img src={headshot} alt="Ashton Loosli" className="headshot" />
          )}
        </div>
        <div className="links">
          <IconContext.Provider value={{ size: "24px", color: "#363636" }}>
            <a href="https://bit.ly/AshtonLoosliResume" title="Resume">
              <BsFileEarmarkPersonFill />
            </a>
            <a href="mailto:loosliashton@gmail.com" title="Email">
              <BsEnvelopeFill />
            </a>
            <a
              href="https://www.linkedin.com/in/ashtonloosli/"
              title="LinkedIn"
            >
              <BsLinkedin />
            </a>
            <a href="https://github.com/loosliashton" title="GitHub">
              <BsGithub />
            </a>
            <a href="https://www.youtube.com/ashtonloosli" title="YouTube">
              <BsYoutube />
            </a>
          </IconContext.Provider>
        </div>
      </header>
    </div>
  );
}

export default App;
