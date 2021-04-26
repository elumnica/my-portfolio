import React from "react";
import "../css/footer.css";
import linkedInIcon from "../assets/images/linkedin.webp";
import githubIcon from "../assets/images/github.webp";

function Footer() {
    return (
        <footer>
            <div className="main-container">
                <h3 className="heading">
                    I take on <br></br>freelancing opportunities!
                </h3>
                <div className="para-text">
                    <p>Have an exciting project you might need some help on?</p>
                    <span>
                        Send over a message on LinkedIn, and let's chat!
                    </span>
                </div>
                <div className="social-media">
                    <a
                        className="social-link"
                        href="https://www.linkedin.com/in/elvislumnica/"
                    >
                        <img
                            className="social-icon"
                            src={linkedInIcon}
                            alt="LinkedIn Icon"
                        ></img>
                    </a>
                    <a
                        className="social-link"
                        href="https://github.com/elumnica"
                    >
                        <img
                            className="social-icon"
                            src={githubIcon}
                            alt="Github icon"
                        ></img>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
