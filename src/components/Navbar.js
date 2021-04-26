import React, { useEffect, useRef } from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import eyeIcon from "../assets/lotties/eye-icon.json";
import linkedInIcon from "../assets/images/linkedin.webp";
import githubIcon from "../assets/images/github.webp";

function Navbar() {
    const navbar = useRef();
    const hamburger = useRef();
    const navContainer = useRef();
    const navList = useRef();

    useEffect(() => {
        if (hamburger) {
            window.addEventListener("scroll", handleScroll, { passive: true });
            hamburger.current.addEventListener("click", mobileMenuHandler);
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    const handleScroll = () => {
        if (
            hamburger &&
            navContainer &&
            navbar &&
            !hamburger.current.classList.contains("open")
        ) {
            if (window.pageYOffset > 0) {
                navbar.current.classList.add("scroll");
                navContainer.current.classList.add("scroll");
            } else {
                navbar.current.classList.remove("scroll");
                navContainer.current.classList.remove("scroll");
            }
        }
    };

    const mobileMenuHandler = () => {
        if (hamburger && navList) {
            hamburger.current.classList.toggle("open");
            navList.current.classList.toggle("open");
        }

        if (navbar) {
            if (window.pageYOffset < 100) {
                navbar.current.classList.toggle("scroll");
            }
        }
    };

    const defOptions = {
        loop: true,
        autoplay: true,
        animationData: eyeIcon,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <nav ref={navbar} className="navbar">
            <div className="main-container">
                <div ref={navContainer} className="nav-container">
                    <div ref={hamburger} className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul ref={navList} className="nav-list">
                        <li>
                            <Link className="nav-link" to="/">
                                Projects
                            </Link>
                            <ul className="nav-project-dropdown">
                                <li>
                                    <Link className="nav-link" to="/engine">
                                        Jet Engine
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/manifold">
                                        Hydraulic Manifold
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/iron">
                                        Iron Man Helmet
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className="nav-eye-icon">
                        <Lottie options={defOptions} height={70} width={70} />
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
            </div>
        </nav>
    );
}

export default Navbar;
