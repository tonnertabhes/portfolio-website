import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import About from "./views/About/About";
import Examples from "./views/Examples/Examples";
import HireMe from "./views/HireMe/HireMe";

function App() {
  const [mobile, setMobile] = useState(false);
  const aboutRef = useRef(null);
  const examplesRef = useRef(null);
  const hireMeRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 1100) {
      setMobile(true);
      return;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  function handleResize() {
    if (window.innerWidth < 1100) {
      setMobile(true);
      return;
    }
    setMobile(false);
  }

  return (
    <div className="App">
      <Navbar
        mobile={mobile}
        aboutRef={aboutRef}
        examplesRef={examplesRef}
        hireMeRef={hireMeRef}
      />
      <About aboutRef={aboutRef} />
      <Examples examplesRef={examplesRef} />
      <HireMe hireMeRef={hireMeRef} />
    </div>
  );
}

export default App;
