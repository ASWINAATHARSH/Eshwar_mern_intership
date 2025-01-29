
import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <h1 className="title">About Me</h1>
      <p className="description">
        I'm Aswin Aatharsh J , "I'm a passionate Full Stack Developer with experience in building scalable web applications. I thrive on working on innovative projects and tackling challenging problems. Continuously eager to enhance my skills and explore new technologies, I stay committed to keeping up with the ever-evolving tech landscape.
      </p>

      <div className="details">
        <h2 className="details-title">Area of Interest</h2>
        <p className="details-content">Software Engineering</p>
        <p className="details-content">Web Development</p>

        <h2 className="details-title">Hobbies</h2>
        <p className="details-content">Driving</p>
        <p className="details-content">Playing Different games</p>
        <p className="details-content">Exploring New Technologies</p>
      </div>

      <div className="additional-section">
        <h2 className="additional-title">Future Goals</h2>
        <p className="additional-content">
          I aim to become an expert in cloud technologies and contribute to building
          efficient and scalable applications that solve real-world problems. I am
          particularly interested in AI/ML integrations and plan to explore these fields
          further.
        </p>
      </div>
    </div>
  );
}

export default About;

