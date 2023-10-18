import { useState } from "react";
import "../css/header.css";

export default function HeaderComponent() {
  const [navDisplay, setNavDisplay] = useState("none");

  return (
    <>
      <div className="header">
        <div className="container">
          <ul className="top-nav content hidden">
            <li className="links">
              {" "}
              <a href="#projects">Projects</a>
            </li>
            <li className="links">
              {" "}
              <a href="#skills">Skills</a>
            </li>
            <li className="links">
              {" "}
              <a href="#contact">Contact</a>
            </li>
            <li className="links">
              {" "}
              <a
                target="blank"
                href="https://www.linkedin.com/in/huba-gyihor-39641a24b/"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <i
          onClick={() => {
            setNavDisplay("block");
          }}
          className="fa fa-bars"
        ></i>
      </div>
      <div id="myNav" className="overlay" style={{ display: navDisplay }}>
        <i
          className="fa fa-times closebtn"
          onClick={() => {
            setNavDisplay("none");
          }}
        ></i>
        <div className="overlay-content">
          <a
            href="#projects"
            onClick={() => {
              setNavDisplay("none");
            }}
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={() => {
              setNavDisplay("none");
            }}
          >
            Skills
          </a>
          <a
            href="#contact"
            onClick={() => {
              setNavDisplay("none");
            }}
          >
            Contact
          </a>
          <a
            target="blank"
            href="https://www.linkedin.com/in/huba-gyihor-39641a24b/"
            onClick={() => {
              setNavDisplay("none");
            }}
          >
            Linkedin
          </a>
        </div>
      </div>
    </>
  );
}
