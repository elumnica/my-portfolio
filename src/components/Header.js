import React from "react";
import "../css/header.css";
import Lottie from "react-lottie";
import headerAnimation from "../assets/lotties/software-dev.json";

function Header() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: headerAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <header>
            <div className="main-container">
                <div className="header-container">
                    <div>
                        <h1 className="heading">
                            Hi, I'm Elvis.<br></br>A Creative Engineer.
                        </h1>
                        <p className="para-text">
                            I love to solve complex problems with creativity and
                            immersive solutions. Engineering is my passion and
                            is something I would love to pursue professionally.
                        </p>
                    </div>
                    <div className="header-lottie">
                        <Lottie options={defaultOptions} />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
