import React from "react";
import ironManDrawingImage from "../assets/images/iron-man-drawing.webp";
import ironManHelmetImage from "../assets/images/3D-iron-man.webp";
import ironMaskImage from "../assets/images/iron-mask.webp";
import ironTopImage from "../assets/images/iron-top.webp";
import ironBackPieceImage from "../assets/images/back-piece-ironman.webp";
import ironManPrint from "../assets/images/ironManPrint.jpeg";
import ironMan3dPrintedHelmetImage from "../assets/images/pic1.webp";
import ironMan3dPrintedHelmetImage2 from "../assets/images/pic2.webp";

function IronManHelmetProject() {
    return (
        <div className="main-container">
            <div className="project-container">
                <div className="project-heading-container">
                    <h1 className="project-heading">Iron Man Helmet</h1>
                    <p>CAD Designer • SOLIDWORKS • 3D Printing</p>
                </div>
                <div className="project-content">
                    <div className="project-single-img">
                        <img src={ironManDrawingImage} alt="Iron Man Drawing" />
                    </div>
                    <div className="project-text-container">
                        <h2 className="project-sub-heading">The Problem</h2>
                        <p className="para-text">
                            The task at hand was learning how to create a full
                            assembly on SOLIDWORKS and then being able to 3D
                            print the design to create a prototype. Much of the
                            learning process was making sure that each of the
                            parts were able to be assembled correctly. I learned
                            a lot of different commands SOLIDWORKS offers which
                            helped deepen my knowledge on the designing aspect
                            of the software.
                        </p>
                    </div>
                    <div className="project-single-img">
                        <img src={ironManHelmetImage} alt="Iron Man Helmet" />
                        <p className="project-img-pointing-text">
                            ☝️ 3D Model Assembly of an Iron Man Helmet Design ☝️
                        </p>
                    </div>
                    <div className="project-text-container">
                        <h2 className="project-sub-heading">Parts</h2>
                        <p className="para-text">
                            Below you can see the 3D Model of parts that were
                            designed for this assembly. As you can see the
                            geometry of the helmet parts were complex and were
                            done using line references mixed with the revolve
                            commands. The shell comamand also allowed for the
                            cover like features the parts possess.
                        </p>
                    </div>

                    <div className="project-img-flex">
                        <div>
                            <img src={ironMaskImage} alt="Iron Mask" />
                            <p className="project-img-pointing-text">
                                ☝️ 3D Model of the mask shell ☝️
                            </p>
                        </div>
                        <div>
                            <img src={ironTopImage} alt="Iron Top" />
                            <p className="project-img-pointing-text">
                                ☝️ 3D Model of the top shell ☝️
                            </p>
                        </div>
                    </div>

                    <div className="project-img-flex">
                        <div>
                            <img
                                src={ironBackPieceImage}
                                alt="Iron Back Piece"
                            />
                            <p className="project-img-pointing-text">
                                ☝️ 3D Model of the back shell ☝️
                            </p>
                        </div>
                        <div>
                            <img
                                src={ironManPrint}
                                alt="3D Print of the Helmet"
                            />
                            <p className="project-img-pointing-text">
                                ☝️ 3D Print of the Helmet ☝️
                            </p>
                        </div>
                    </div>

                    <div className="project-text-container">
                        <h2 className="project-sub-heading">
                            Improvements / Analysis
                        </h2>
                        <p className="para-text">
                            The next step I would take in progressing this
                            project is to perform a stress/shock absorption
                            analysis simulation on a certain type of material I
                            would choose. If I were to progress this design into
                            a helmet for outside activity I would think about
                            different materials and layers needed to provide
                            impact protection. Often layers are used together to
                            provide impact protection. The outer layer is
                            generally a hard shell or a micro-shell made of
                            fiberglass, Lexan or ABS plastic. This shell serves
                            many purposes: it distributes the force of the
                            collision over a large area, it allows the helmet to
                            slide, thereby causing a slower deceleration; it
                            provides a shield against puncture and it holds the
                            middle layer together. The middle layer is usually a
                            crushable liner that absorbs the shock of collision.
                            This layer is often made of expanded polystyrene,
                            also known as EPS. The inner layer, which may be
                            more segmented, helps to ensure proper fit and
                            comfort.
                        </p>
                    </div>

                    <div className="project-img-flex">
                        <div>
                            <img
                                src={ironMan3dPrintedHelmetImage}
                                alt="Iron Man 3D Printed Helmet"
                            />
                            <p className="project-img-pointing-text">
                                ☝️ Another 3D Print of the Helmet Design ☝️
                            </p>
                        </div>
                        <div>
                            <img
                                src={ironMan3dPrintedHelmetImage2}
                                alt="Iron Man 3D Printed Helmet"
                            />
                            <p className="project-img-pointing-text">
                                ☝️ Material used is ABS Plastic. ☝️
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IronManHelmetProject;
