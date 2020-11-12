import React from "react";
import "../../App.css";

function About() {
  return (
    <div className="about">
      <p>
        It took me a week to learn Nodejs, Express, React, JWT from scratch.
      </p>
      <p>
        I have this running on an AWS EC2 instance on port 3001. Port 80 uses
        Apache and hosts the website you came from. (shauntsite.com)
      </p>
    </div>
  );
}

export default About;
