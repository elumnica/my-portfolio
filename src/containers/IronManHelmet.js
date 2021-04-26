import React from "react";
import Navbar from "../components/Navbar";
import IronManHelmetProject from "../projects/IronManHelmetProject";
import Footer from "../components/Footer";

function IronManHelmet() {
    return (
        <div>
            <Navbar />
            <IronManHelmetProject />
            <Footer />
        </div>
    );
}

export default IronManHelmet;
