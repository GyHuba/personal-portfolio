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
              <a href="">Projects</a>
            </li>
            <li className="links">
              {" "}
              <a href="">Contact</a>
            </li>
            <li className="links">
              {" "}
              <a href="">Linkedin</a>
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
              <a href="">Projects</a>
            </li>
            <li className="links-mobile">
              {" "}
              <a href="">Contact</a>
            </li>
            <li className="links-mobile">
              {" "}
              <a href="">Linkedin</a>
            </li>
          </ul>      
    </>
  );
}
