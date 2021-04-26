import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HydraulicManifoldProject from "../projects/HydraulicManifoldProject";

function HydraulicManifold() {
    return (
        <div>
            <Navbar />
            <HydraulicManifoldProject />
            <Footer />
        </div>
    );
}

export default HydraulicManifold;
