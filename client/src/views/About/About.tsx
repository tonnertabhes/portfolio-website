import React from "react";
import HEADSHOT from "../../assets/headshot-transparent.png";
import HTML from "../../assets/skills/html.png";
import CSS from "../../assets/skills/css.png";
import JAVASCRIPT from "../../assets/skills/javscript.png";
import TYPESCRIPT from "../../assets/skills/typescript.png";
import REACT from "../../assets/skills/react.png";
import NODE from "../../assets/skills/nodejs.png";
import GO from "../../assets/skills/go.png";
import DOCKER from "../../assets/skills/docker.png";
import "./About.css";

interface AboutInterface {
  aboutRef: React.MutableRefObject<null>;
}

export default function About({ aboutRef }: AboutInterface) {
  const aboutInfo = `I'm a Junior Front-End Developer with 3 years of experience working
    with React Native. I work with a variety of technologies, specializing
    in creating Web3 apps that connect with a blockchain to execute smart
    contracts, mint NFT's, etc.`;

  return (
    <div className="About" ref={aboutRef}>
      <img src={HEADSHOT} className="about-img" alt="headshot" />
      <div className="about-info">
        <h1 className="about-header">Hi, I'm William Kristiansen</h1>
        <p className="about-text">{aboutInfo}</p>
        <h3 className="skills-header">SKILLS</h3>
        <div className="skills-icons">
          <img className="skills-icon" src={HTML} alt="HTML" />
          <img className="skills-icon" src={CSS} alt="CSS" />
          <img className="skills-icon" src={JAVASCRIPT} alt="JAVASCRIPT" />
          <img className="skills-icon" src={TYPESCRIPT} alt="TYPESCRIPT" />
          <img className="skills-icon" src={REACT} alt="REACT" />
          <img className="skills-icon" src={NODE} alt="NODE" />
          <img className="skills-icon" src={GO} alt="GO" />
          <img className="skills-icon" src={DOCKER} alt="DOCKER" />
        </div>
      </div>
    </div>
  );
}
