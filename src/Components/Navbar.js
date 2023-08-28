import React from 'react'
import {Link, animateScroll as scroll} from 'react-scroll'
import { saveAs } from 'file-saver';
import Resume from '.././resume.pdf'

export default function Navbar() {
    const scrollToTop = () => {
        scroll.scrollToTop();
    }
    const downloadResume = () => {
        saveAs(Resume, "ZaneAhmedResume.pdf");
      };

  return (
    <div>
        <ul>
            <li onClick={scrollToTop}>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Skills</li>
            <li onClick={downloadResume}>Resume</li>
        </ul>
    </div>
  )
}
