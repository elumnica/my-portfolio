import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ProjectCardsContainer from "./ProjectCardsContainer";
import Footer from "../components/Footer";

function Homepage() {
    return (
        <>
            <Navbar />
            <Header />
            <ProjectCardsContainer />
            <Footer />
        </>
    );
}

export default Homepage;
