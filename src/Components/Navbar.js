import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { saveAs } from "file-saver";
import Resume from ".././resume.pdf";
import "./Navbar.css"

export default function Navbar() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const downloadResume = () => {
    saveAs(Resume, "ZaneAhmedResume.pdf");
  };

  return (
    <div>
      <nav className="sticky-navbar">
        <ul>
            <li>
        <Link
          onCLinkck={scrollToTop}
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={500}
        >
          Home
        </Link>
            </li>
            <li>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
        >
          About
        </Link>
            </li>
            <li>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
        >
          Projects
        </Link>
            </li>
            <li>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          duration={500}
        >
          Skills
        </Link>
            </li>
            <li>
        <Link onClick={downloadResume} className="resumeButton">Resume</Link>
            </li>
        </ul>
      </nav>
    </div>
  );
}
