import React from "react";
import { image } from "../data/data";
function About() {
  return (
    <>
      <div id="about">About
        <h2>About Me</h2>
        <p> n this lab, we will be rendering a l our code in the NavBar.js, Home.js, and About.js files. These files are all located in the src/components directory</p>
        <img src={image} alt="I made this"></img>
      </div>
    </>
  )
  

}

export default About;
