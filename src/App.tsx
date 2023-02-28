import React from "react";
import { IconContext } from "react-icons";
import {
  BsEnvelopeFill,
  BsFileEarmarkPersonFill,
  BsGithub,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="name">Ashton Loosli</p>
        <div className="links">
          <IconContext.Provider value={{ size: "24px", color: "#363636" }}>
            <a href="https://bit.ly/AshtonLoosliResume" title="Resume">
              <BsFileEarmarkPersonFill />
            </a>
            <a href="https://www.linkedin.com/in/ashtonloosli/" title="LinkedIn">
              <BsLinkedin />
            </a>
            <a href="https://github.com/loosliashton" title="GitHub">
              <BsGithub />
            </a>
            <a href="https://www.youtube.com/ashtonloosli" title="YouTube">
              <BsYoutube />
            </a>
            <a href="mailto:loosliashton@gmail.com" title="Email">
              <BsEnvelopeFill />
            </a>
          </IconContext.Provider>
        </div>
      </header>
    </div>
  );
}

export default App;
