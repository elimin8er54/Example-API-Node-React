import React from "react";
import "../../App.css";

function About() {
  return (
    <div className="about">
      <p>
        Website uses Nodejs, Express, React, JWT, and other packages.
      </p>
      <p>
        I have this running on an AWS EC2 instance with a subdomain and the main website running in
        Apache and hosts the website you came from. (shauntsite.com)
      </p>
    </div>
  );
}

export default About;
