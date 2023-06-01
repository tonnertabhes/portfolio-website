import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./MobileMenu.css";
import { NavbarData } from "../Navbar/NavbarData";

interface MobileMenuInterface {
  menuActive: boolean;
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
  aboutRef: React.MutableRefObject<null>;
  examplesRef: React.MutableRefObject<null>;
  hireMeRef: React.MutableRefObject<null>;
  handleScroll: Function;
  scrollTo: Function;
}

export default function MobileMenu({
  menuActive,
  setMenuActive,
  aboutRef,
  examplesRef,
  hireMeRef,
  handleScroll,
  scrollTo,
}: MobileMenuInterface) {
  return (
    <div className={menuActive ? "MobileMenu" : "MobileMenu inactive"}>
      <AiOutlineCloseCircle
        className="closebtn"
        color="white"
        size={40}
        onClick={() => setMenuActive(!menuActive)}
      />
      <ul className="mobileListOptions">
        {NavbarData.map((item, index) => {
          return (
            <li
              key={index}
              className="mobileListOption"
              onClick={(e) => {
                setMenuActive(false);
                handleScroll(e);
              }}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
