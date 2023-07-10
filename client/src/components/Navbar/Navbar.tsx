import React, { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import { NavbarData } from "./NavbarData";
import MobileMenu from "../MobileMenu/MobileMenu";

interface NavBarInterface {
  mobile: boolean;
  aboutRef: React.MutableRefObject<null>;
  examplesRef: React.MutableRefObject<null>;
  hireMeRef: React.MutableRefObject<null>;
}

export default function Navbar({
  mobile,
  aboutRef,
  examplesRef,
  hireMeRef,
}: NavBarInterface) {
  const [menuActive, setMenuActive] = useState(false);
  const linkRef = useRef(null);

  function scrollTo(ref: any) {
    ref.current.scrollIntoView({ behaviour: "smooth", block: "start" });
  }

  function handleScroll(x: any) {
    switch (x.target.innerText) {
      case "About":
        scrollTo(aboutRef);
        return;
      case "Examples":
        scrollTo(examplesRef);
        return;
      case "Resume":
        getResume();
        return;
      case "Hire Me":
        scrollTo(hireMeRef);
        return;
    }
  }

  function getResume() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/pdf");

    interface requestOptionsI {
      method: string;
      headers: Headers;
      redirect: RequestRedirect | undefined;
    }

    var requestOptions: requestOptionsI = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://williamkristiansen.art/download", requestOptions)
      .then((response) => response.blob())
      .then((result) => {
        const href = window.URL.createObjectURL(result);
        const a = document.createElement("a");
        a.href = href;
        a.download = "williamkristiansen.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <div className="Navbar">
      {mobile ? (
        <>
          <FaBars
            className="menuBars"
            color="white"
            size={30}
            onClick={() => setMenuActive(!menuActive)}
          />
          <MobileMenu
            scrollTo={scrollTo}
            handleScroll={handleScroll}
            aboutRef={aboutRef}
            examplesRef={examplesRef}
            hireMeRef={hireMeRef}
            menuActive={menuActive}
            setMenuActive={setMenuActive}
          />
        </>
      ) : (
        <ul className="navbar-options">
          {NavbarData.map((item, index) => {
            return (
              <li
                className={item.cName}
                key={index}
                onClick={(e) => handleScroll(e)}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
