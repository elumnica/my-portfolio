import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import CurrentlyReadingContainer from "./CurrentlyReadingContainer";
import Footer from "../components/Footer";
import BriefHistory from "../components/BriefHistory";

function AboutContainer() {
    return (
        <div>
            <Navbar />
            <About />
            <BriefHistory />
            <CurrentlyReadingContainer />
            <Footer />
        </div>
    );
}

export default AboutContainer;
