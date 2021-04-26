import React from "react";
import jetAssemblyDrawingImage from "../assets/images/jet-assembly-drawing.webp";
import jetAssemblyModelImage from "../assets/images/jet-assembly-model.webp";
import airFlowImage from "../assets/images/air-flow.webp";
import propellerModelImage from "../assets/images/propeller-model.webp";
import propellerDrawingImage from "../assets/images/propeller-drawings.webp";
import combustionModelImage from "../assets/images/combustion-model.webp";
import combustionDrawingImage from "../assets/images/combustion-drawing.webp";
import midFrameModelImage from "../assets/images/mid-frame-model.webp";
import midFrameDrawingImage from "../assets/images/mid-frame-drawing.webp";
import turbineModelImage from "../assets/images/turbine-model.webp";
import turbineDrawingImage from "../assets/images/turbine-drawing.webp";
import rearFrameModelImage from "../assets/images/rear-frame-model.webp";
import rearFrameDrawingImage from "../assets/images/rear-frame-drawing.webp";
import exhaustImage from "../assets/images/exhaust.webp";
import exhaustDrawingImage from "../assets/images/exhuast-drawing.webp";

function AxialJetEngineProject() {
    return (
        <div className="main-container">
            <div className="project-container">
                <div className="project-heading-container">
                    <h1 className="project-heading">Axial Jet Engine</h1>
                    <p>CAD Designer • SOLIDWORKS • Prototyping</p>
                </div>
                <div className="project-content">
                    <div className="project-single-img">
                        <img
                            src={jetAssemblyDrawingImage}
                            alt="Jet Assembly Drawing"
                        />
                    </div>
                    <div className="project-text-container">
                        <h2 className="project-sub-heading">The Problem</h2>
                        <p className="para-text">
                            I have always been intrigued by the concept of being
                            able to fly from one place to another thanks to the
                            Wright Brothers! My curiosity led me to dive deeper
                            into some of the concepts behind jet engines and how
                            they are engineered. The main focus on this project
                            was to not only further understand the concept of
                            jet engines but to also deepen my understanding of
                            the 3D modeling program SOLIDWORKS.
                        </p>
                    </div>
                    <div className="project-single-img">
                        <img
                            src={jetAssemblyModelImage}
                            alt="Jet Assembly Model"
                        />
                        <p className="project-img-pointing-text">
                            ☝️ 3D Model Assembly of an Axial Jet Engine on
                            SOLIDWORKS ☝️
                        </p>
                    </div>
                    <div className="project-text-container">
                        <h2 className="project-sub-heading">Overview</h2>
                        <p className="para-text">
                            In retrospect the jet engine, also known as a gas
                            turbine works like so. The blades of a fan spin at
                            high speed and compress or squeeze the air. The
                            compressed air is then sprayed with fuel and an
                            electric spark lights the mixture. The burning gases
                            expand and blast out through the nozzle, at the back
                            of the engine. As the jets of gas shoot backward,
                            the engine and the aircraft are thrust forward.
                        </p>
                    </div>
                    <div className="project-single-img">
                        <img src={airFlowImage} alt="Air Flow" />
                        <p className="project-img-pointing-text">
                            ☝️ How air flows in an engine ☝️
                        </p>
                    </div>

                    <div className="project-text-container">
                        <h2 className="project-sub-heading">
                            Parts: Compressor
                        </h2>
                        <p className="para-text">
                            The compressor rotates to continuously pressurized
                            gases. Its primary function is to supply air in
                            enough quantity to meet the requirements of the
                            combustion burners.
                        </p>
                    </div>

                    <div className="project-img-flex">
                        <div>
                            <img
                                src={propellerModelImage}
                                alt="Propeller Model"
                            />
                            <p className="project-img-pointing-text">
                                ☝️ 3D Model of the compressor ☝️
                            </p>
                        </div>
                        <div>
                            <img
                                src={propellerDrawingImage}
                                alt="Propeller Drawing"
                            />
                            <p className="project-img-pointing-text">
                                ☝️ Annotation Drawing of the compressor ☝️
                            </p>
                        </div>
                    </div>

                    <div className="project-text-container">
                        <h2 className="project-sub-heading">
                            Parts: Combustion Chamber
                        </h2>
                        <p className="para-text">
                            Once air enters the front intake and is compressed,
                            the air is forced into combustion chambers where
                            fuel is sprayed into it, and the mixture of air and
                            fuel is ignited. Gases that form expand rapidly and
                            are exhausted through the rear of the combustion
                            chambers.
                        </p>
                    </div>

                    <div className="project-img-flex">
                        <div>
                            <img
                                src={combustionModelImage}
                                alt="Combution Model"
                            />
                            <p className="project-img-pointing-text">
                                ☝️ 3D Model of the Combustion Chamber ☝️
                            </p>
                        </div>
                        <div>
                            <img
                                src={combustionDrawingImage}
                                alt="Combustion Drawing"
                            />
                            <p className="project-img-pointing-text">
                                ☝️ Annotation Drawing of the Combustion Chamber
                                ☝️
                            </p>
                        </div>
                    </div>

                    <div className="project-text-container">
                        <h2 className="project-sub-heading">
                            Parts: Mid Frame
                        </h2>
                        <p className="para-text">
                            A gas turbine engine mid turbine frame having an
                            inner case See application file for complete search
                            history. Supporting at least one bearing and at
                            least three spokes extending radially outwardly to
                            an outer case, the mid turbine frame having an
                            interturbine duct extending through the mid turbine
                            frame, the interturbine duct spaced axially closer
                            to an upstream turbine disc than a bearing.
                            Supporting structure of the mid turbine frame and
                            mounted axially slidingly relative to the bearing
                            supporting structure to substantially isolate the
                            bearing supporting structure from axial loads, for
                            example such as disc loads incurred in the unlikely
                            event a turbine disc shaft shears within the engine.
                        </p>
                    </div>

                    <div className="project-img-flex">
                        <div>
                            <img
                                src={midFrameModelImage}
                                alt="Mid Frame Model"
                            />
                            <p className="project-img-pointing-text">
                                ☝️ 3D Model of the Mid Frame System ☝️
                            </p>
                        </div>
                        <div>
                            <img
                                src={midFrameDrawingImage}
                                alt="Mid Frame Drawing"
                            />
                            <p className="project-img-pointing-text">
                                ☝️ Annotation Drawing of the Mid Frame System ☝️
                            </p>
                        </div>
                    </div>

                    <div className="project-text-container">
                        <h2 className="project-sub-heading">Parts: Turbine</h2>
                        <p className="para-text">
                            The turbines are linked by a shaft to turn the
                            blades in the compressor and to spin the intake fan
                            at the front. This rotation takes some energy from
                            the high-energy flow that is used to drive the fan
                            and the compressor. The gases produced in the
                            combustion chamber move through the turbine and spin
                            its blades.
                        </p>
                    </div>

                    <div className="project-img-flex">
                        <div>
                            <img src={turbineModelImage} alt="Turbine Model" />
                            <p className="project-img-pointing-text">
                                ☝️ 3D Model of the Turbine ☝️
                            </p>
                        </div>
                        <div>
                            <img
                                src={turbineDrawingImage}
                                alt="Turbine Drawing Drawing"
                            />
                            <p className="project-img-pointing-text">
                                ☝️ Annotation Drawing of the Turbine ☝️
                            </p>
                        </div>
                    </div>

                    <div className="project-text-container">
                        <h2 className="project-sub-heading">
                            Parts: Rear Frame System
                        </h2>
                        <p className="para-text">
                            A turbine rear frame for a gas turbine engine
                            comprises a plurality of struts disposed between an
                            outer ring and an inner ring. The struts can be
                            mounted adjacent to one or more mount surfaces
                            defined within the outer ring. The mount surface can
                            comprise a recess in the outer ring having a maximum
                            radial distance upstream of engine mounts inserted
                            therein. The struts can further comprise a pitch
                            angle offset from a centerline of the mount surface
                            and a tangentially curved trailing edge at a tip to
                            improve aerodynamic performance of the turbine rear
                            frame.
                        </p>
                    </div>

                    <div className="project-img-flex">
                        <div>
                            <img
                                src={rearFrameModelImage}
                                alt="Rear Frame Model Model"
                            />
                            <p className="project-img-pointing-text">
                                ☝️ 3D Model of the Rear Frame ☝️
                            </p>
                        </div>
                        <div>
                            <img
                                src={rearFrameDrawingImage}
                                alt="Rear Frame Drawing"
                            />
                            <p className="project-img-pointing-text">
                                ☝️ Annotation Drawing of the Rear Frame ☝️
                            </p>
                        </div>
                    </div>

                    <div className="project-text-container">
                        <h2 className="project-sub-heading">
                            Parts: Exhaust Nozzle
                        </h2>
                        <p className="para-text">
                            The nozzle is the end module of the engine which
                            accelerates the flow of exhaust gases out of the
                            engine. As hot air from the engine core mixes with
                            cooler air blowing through the engine fan, the
                            shaped edges serve to smooth the mixing, which
                            reduces turbulence that creates noise.
                        </p>
                    </div>

                    <div className="project-img-flex">
                        <div>
                            <img src={exhaustImage} alt="Exhaust Nozzle" />
                            <p className="project-img-pointing-text">
                                ☝️ 3D Model of the Exhaust Nozzle ☝️
                            </p>
                        </div>
                        <div>
                            <img
                                src={exhaustDrawingImage}
                                alt=" Exhaust Nozzle Drawing"
                            />
                            <p className="project-img-pointing-text">
                                ☝️ Annotation Drawing of the Exhaust Nozzle ☝️
                            </p>
                        </div>
                    </div>

                    <div className="project-text-container">
                        <h2 className="project-sub-heading">
                            Improvement / Analysis
                        </h2>
                        <p className="para-text">
                            The next step I would take in progressing this
                            project is to perform a flow and thermal simulation
                            on the air flow and combustion processes that the
                            jet engine take to verify design functionality.
                            After confirming that both processes confirm design
                            functionality, the next step would be to build a
                            prototype for testing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AxialJetEngineProject;
