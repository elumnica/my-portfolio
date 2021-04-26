import React from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function ContactContainer() {
    return (
        <div>
            <Navbar />
            <Contact />
            <Footer />
        </div>
    );
}

export default ContactContainer;
