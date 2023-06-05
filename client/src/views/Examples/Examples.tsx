import React from "react";
import "./Examples.css";
import { examplesInfo } from "./examplesInfo";
import GITHUB from "../../assets/icons/githubIconSmall.png";

interface ExamplesInterface {
  examplesRef: React.MutableRefObject<null>;
}

export default function Examples({ examplesRef }: ExamplesInterface) {
  return (
    <div className="Examples" ref={examplesRef}>
      <h1 className="examples-header">Sample Work</h1>
      <div className="examples-info">
        {examplesInfo.map((item, index) => {
          return (
            <div className="example-div" key={index}>
              <p className="example-title">{item.name}</p>
              <img
                src={item.thumbnail}
                className="example-thumbnail"
                alt="example"
              />
              <p className="example-description">{item.description}</p>
              <div className="example-btns">
                <a href={item.livePath}>
                  <button
                    className="example-btn"
                    onClick={() => {
                      if (item.deprecated) {
                        window.alert("Project is deprecated!");
                      }
                      return;
                    }}
                  >
                    Live Page
                  </button>
                </a>
                <a href={item.githubPath}>
                  <button className="example-btn">
                    <img src={GITHUB} alt="GITHUB" className="githubLogo" />
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
