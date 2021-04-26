import React from "react";
import "../css/about.css";
import elvisImage from "../assets/images/elvis.webp";

function About() {
    return (
        <div className="main-container">
            <div className="about-container">
                <div className="about-img-container">
                    <img src={elvisImage} alt="Elvis" />
                </div>
                <div className="about-text-container">
                    <h1 className="heading">
                        Hi, I'm Elvis, an Engineer looking to land an amazing
                        job!
                    </h1>
                    <p className="para-text">
                        I've spent the last 4+ years working on many skills
                        across different areas of engineering - mechanical,
                        electrical, full-stack development + more! My background
                        helps me to bring a different thought process to the
                        table.
                    </p>
                    <p className="para-text">
                        My days are spent researching and studying, coding, and
                        writing. Besides this, you can find me playing acoustic
                        guitar, playing soccer, working out, or just exploring
                        around New York City!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
