import { useState } from "react";
import "../css/header.css";

export default function HeaderComponent() {
  const [isActive, setIsActive] = useState(false);

  function setIcon() {
    if (isActive) return "fa fa-times";
    else return "fa fa-bars";
  }



  return (
    <>
      <div className="header">
        <div className="container">
          <ul className="top-nav">
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
              <a target="blank" href="https://www.linkedin.com/in/huba-gyihor-39641a24b/">Linkedin</a>
            </li>
            <li>
              <i
                onClick={() => {
                  setIsActive(!isActive);
                }}
                className={setIcon()}
              ></i>
            </li>
          </ul>
        </div>
      </div>
      <ul className="full-screen-nav">
            <li className="links-mobile">
              {" "}
              <a href="#" onClick={() => {
                  setIsActive(!isActive);
                }}>Projects</a>
            </li>
            <li className="links-mobile">
              {" "}
              <a href="" onClick={() => {
                  setIsActive(!isActive);
                }}>Contact</a>
            </li>
            <li className="links-mobile">
              {" "}
              <a target="blank" href="https://www.linkedin.com/in/huba-gyihor-39641a24b/" onClick={() => {
                  setIsActive(!isActive);
                }}>Linkedin</a>
            </li>
          </ul>      
    </>
  );
}
