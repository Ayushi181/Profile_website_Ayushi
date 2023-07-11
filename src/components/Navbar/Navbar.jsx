import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Ayushi</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="Services" spy={true} smooth={true}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="experience" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="experience4" spy={true} smooth={true}>
                Tools
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Subjects
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <a href="https://drive.google.com/file/d/1_ehelJvsooh8bUSsQluUItvTmtpp2XKY/view?usp=sharing" download>
        
        <button className="button n-button">Resume</button>
        </a>
      </div>
    </div>
  );
};

export default navbar;
