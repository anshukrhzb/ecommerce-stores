import React from "react";
import "./aboutSection.css";
import { Button, Typography } from "@material-ui/core";
const About = () => {
  const visitGitHub = () => {
    window.location = "https://github.com/anshukrhzb";
  };
  return (
    <>
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
           
            <Typography>Anshu kumar</Typography>
            <Button onClick={visitGitHub} color="primary">
              Visit GitHub
            </Button>
            <span>
              This is a sample wesbite made by @Anshukr. Only with the
              purpose to learn MERN Stack project.
            </span>
          </div>
         
        </div>
      </div>
    </div>
 </>
  );
  };

export default About;
