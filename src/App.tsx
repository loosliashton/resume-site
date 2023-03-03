import React, { useEffect, useRef } from "react";
import { IconContext } from "react-icons";
import headshot from "./images/headshot.jpg";
import {
  BsEnvelopeFill,
  BsFillArrowDownCircleFill,
  BsGithub,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
import "./App.css";
import { isMobile } from "react-device-detect";
import chroma from "chroma-js";
import { Resume } from "./Resume/Resume";

function App() {
  const [pictureVisible, setPictureVisible] = React.useState(false);
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  })

  const executeScroll = () => scrollRef.current?.scrollIntoView();
  const scale = chroma.scale(["black", "white"]);
  const backgroundColor = scale(scrollPosition / 800).hex();

  return (
    <div className="App" style={{backgroundColor: backgroundColor}}>
      <div className="App-header">
        <div
          onClick={() => setPictureVisible(!pictureVisible)}
          className={isMobile ? "" : "pictureDiv"}
        >
          <p className={pictureVisible ? "name show-picture" : "name"}>
            Ashton Loosli
          </p>
          <img
            src={headshot}
            alt="Ashton Loosli"
            className={pictureVisible ? "headshot show-picture" : "headshot"}
          />
        </div>
        <div className={pictureVisible ? "links show-picture" : "links"}>
          <IconContext.Provider value={{ size: "24px", color: "teal" }}>
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
        <div onClick={executeScroll} className="scrollButton">
          <a href="#resume">
            <BsFillArrowDownCircleFill color="white" size={"24px"} />
          </a>
        </div>
      </div>
      <div className="resume" ref={scrollRef}>
        <Resume />
      </div>
    </div>
  );
}

export default App;
