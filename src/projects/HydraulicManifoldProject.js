import React from "react";
import fullModelImage from "../assets/images/full-model.webp";
import airCompressorImage from "../assets/images/aircompressor.png";
import model3DImage from "../assets/images/3D Model.webp";
import gerotorPumpImage from "../assets/images/gerotor-pump.webp";
import thermostaticControlImage from "../assets/images/thermostatic-control.webp";
import oilFilterImage from "../assets/images/oil-filter.webp";
import reliefValveImage from "../assets/images/relief-valve.webp";
import oilCalculationsImage from "../assets/images/oil-calc.webp";
import objectivesTableImage from "../assets/images/objectives-table.webp";
import flowSimulationImage from "../assets/images/flow-sim.webp";
import flowSimulationImage2 from "../assets/images/flow-sim-2.webp";
import hydraulicDesignCostImage from "../assets/images/costs.webp";
import fluildFlowSpecsImage from "../assets/images/specs.webp";

function HydraulicManifoldProject() {
    return (
        <div className="main-container">
            <div className="project-container">
                <div className="project-heading-container">
                    <h1 className="project-heading">Hydraulic Manifold</h1>
                    <p>R & D • F.S. Elliott • Flow Simulation</p>
                </div>
                <div className="project-content">
                    <div className="project-single-img">
                        <img src={fullModelImage} alt="Full Model" />
                    </div>
                    <div className="project-text-container">
                        <h2 className="project-sub-heading">The Problem</h2>
                        <p className="para-text">
                            In tandem with the P300+ line of compressors, there
                            is a lubrication system with ISO 32 grade oil.
                            Within this fexternal system lies one crucial flaw,
                            it is too intricate to work on. There are too many
                            physical piping connections that hinders certain
                            aspects of maintenance processes. The design task
                            involves decreasing the amount of piping connections
                            to ideally have one inlet and one outlet total
                            through each connection to the compressor. A proper
                            solution would be to modularize the lubrication
                            system to act on one platform were all the
                            connections would be within a block and the main
                            components would be mounted on the block.
                        </p>
                    </div>
                    <div className="project-single-img">
                        <img
                            src={airCompressorImage}
                            alt="Air Compressor System"
                        />
                        <p className="project-img-pointing-text">
                            ☝️ Current F.S. Elliott P300+ Air Compressor System
                            ☝️
                        </p>
                    </div>
                    <div className="project-text-container">
                        <h2 className="project-sub-heading">Overview</h2>
                        <p className="para-text">
                            The new design will be prototyped using solidworks
                            technology to conduct computational fluid flow
                            analysis throughout the lubrication system. This
                            analysis will be crucial in determining if the
                            design meets the specifications given by the sponsor
                            as it will provide the experimental justification
                            stating if the design works. After the design is
                            evaluated and further improved, the system maybe
                            scaled to met the specifications for other air
                            compressors made by FS-Elliott. The modular block
                            design implements the main components of a
                            lubrication oil system into an hydraulic manifold.
                            The manifold would be made out of an 6061-T6511
                            Aluminum extrusion material with a bare surface
                            finish. Wrought aluminum alloys are worked by
                            extruding, rolling or forgoing them into specified
                            shapes. These aluminums are graded by a 4 digit
                            number which identifies their major alloying
                            element. The “6511” number included magnesium and
                            silicon. The alpha numeric suffixes attached to
                            alloy represent the temper or degree of hardness and
                            also represent the method by which the hardness was
                            obtained. T6 indicates that the material was
                            solution heat treated and artificially aged while
                            the T6511 indicates that the alloy was solution heat
                            treated, stress relieved by stretching and
                            artificially aged to reduce the possibility of
                            distortion in machined parts. This grade of aluminum
                            is the most versatile of the heat treated aluminum
                            alloys. It has excellent corrosion resistant, can be
                            easily fabricated, has good formability and can be
                            easily machined.
                        </p>
                    </div>

                    <div className="project-single-img">
                        <img src={model3DImage} alt="3D Model" />
                        <p className="project-img-pointing-text">
                            ☝️ Proposed 3D Model Hydraulic Design ☝️
                        </p>
                    </div>

                    <div className="project-text-container">
                        <h2 className="project-sub-heading">
                            Equipment: Gerotor Pump & Thermo Control Valve
                        </h2>
                        <p className="para-text">
                            A gerotor pump from Parker will be used as the
                            mounted auxiliary oil pump. A gerotor pump consists
                            of an internal drive gear and an external driven
                            gear that are always in sliding contact. Gerotor
                            pumps are generally used for low pressure
                            applications or hot oil filtration systems. The AMOT
                            Model C thermostatic control element. Typical
                            applications for this valve is that it controls the
                            oil temperature, temperature mixing and water saving
                            applications. The key benefits of this model is that
                            it requires no external power source, has small
                            number of parts, low cost installation, and can be
                            operated in any mounting position.
                        </p>
                    </div>

                    <div className="project-img-flex">
                        <div>
                            <img src={gerotorPumpImage} alt="Gerotor Pump" />
                            <p className="project-img-pointing-text">
                                ☝️ 3D Model of the Gerotor Pump ☝️
                            </p>
                        </div>
                        <div>
                            <img
                                src={thermostaticControlImage}
                                alt="Thermostatic Control Valve"
                            />
                            <p className="project-img-pointing-text">
                                ☝️ 3D Model of the Thermostatic Control Valve ☝️
                            </p>
                        </div>
                    </div>

                    <div className="project-text-container">
                        <h2 className="project-sub-heading">
                            Equipment: Oil Filter & Relief Valve
                        </h2>
                        <p className="para-text">
                            A screw on oil filter is a low pressure hydraulic
                            filter that is used as suction filter or to filter
                            the return line of the hydraulic circuit. Spin on
                            filters are easy to service due to the disposable
                            filter cans which can be replaced by a replacement
                            element completely. The oil filter implements both a
                            one inch pressure line and discharge connection. A
                            direct acting pressure relief valve from Sun
                            Hydraulics would be implemented after the auxiliary
                            oil pump. Direct-acting relief cartridges are
                            normally closed, pressure-limiting valves used to
                            protect hydraulic components from pressure
                            transients.
                        </p>
                    </div>

                    <div className="project-img-flex">
                        <div>
                            <img src={oilFilterImage} alt="Oil Filter" />
                            <p className="project-img-pointing-text">
                                ☝️ 3D Model of the Oil Filter ☝️
                            </p>
                        </div>
                        <div>
                            <img src={reliefValveImage} alt=" Relief Valve" />
                            <p className="project-img-pointing-text">
                                ☝️ 3D Model of the Relief Valve ☝️
                            </p>
                        </div>
                    </div>

                    <div className="project-img-flex">
                        <div>
                            <img
                                src={oilCalculationsImage}
                                alt="Iso 32 Oil Calculations"
                            />
                            <p className="project-img-pointing-text">
                                ☝️ Iso 32 Oil Calculations ☝️
                            </p>
                        </div>
                        <div>
                            <img src={objectivesTableImage} alt="Objectives" />
                            <p className="project-img-pointing-text">
                                ☝️ Current Objectives New Design Implements ☝️
                            </p>
                        </div>
                    </div>

                    <div className="project-text-container">
                        <h2 className="project-sub-heading">Flow Simulation</h2>
                        <p className="para-text">
                            SOLIDWORKS Flow Simulation is an accessible
                            Computational Fluid Dynamics (CFD) solution that
                            enables simulation of a liquid or gas to flow
                            through and around designs to calculate product
                            performance and capabilities. It uses the Finite
                            Volume Method to calculate product performance
                            through what if situations that allow you to perform
                            optimization using results. Finite Volume Method
                            (FVM) can be defined as the method for evaluating
                            partial differential equations in the form of
                            algebraic equations. These values are calculated as
                            discrete places on a meshed geometry.
                        </p>
                    </div>

                    <div className="project-img-flex">
                        <div>
                            <img
                                src={flowSimulationImage}
                                alt="Flow simulation"
                            />
                            <p className="project-img-pointing-text">
                                ☝️ Flow simulation across the manifold ☝️
                            </p>
                        </div>
                        <div>
                            <img
                                src={flowSimulationImage2}
                                alt="Flow simulation"
                            />
                            <p className="project-img-pointing-text">
                                ☝️ Flow simulation across the manifold ☝️
                            </p>
                        </div>
                    </div>

                    <div className="project-text-container">
                        <h2 className="project-sub-heading">
                            Conclusion/Results
                        </h2>
                        <p className="para-text">
                            A proper solution would be to modularize the
                            lubrication system to act on one platform were all
                            the connections would be within a block and the main
                            components would be mounted on the block.
                            Limitations of design included the location of the
                            main shaft driven pump and the shaft that is on top
                            of the reservoir. The main shaft driven pump and
                            auxiliary oil pump work in succession to regulate
                            the 18 gallons per minute required flow rate of the
                            lubrication system. Some aspects of design were
                            inevitable when working with hydraulic hose. It was
                            needed to provide a functional working design. This
                            design assures the customer efficient reliability in
                            terms of service. With a cost savings of about 20%
                            and efficient reliability, the Modular Box with
                            External Heat Exchanger is the design that is
                            recommended. The company is now undergoing building
                            a prototype and setting up for testing. If you would
                            like to see the full technical report, please click
                            on this link{" "}
                            <a href="https://www.dropbox.com/s/lke34iu45jvdy6e/Elvis%20Hydraulic%20Manifold%20Portfolio.pdf?dl=0">
                                here
                            </a>{" "}
                            to read more about this project.
                        </p>
                    </div>

                    <div className="project-img-flex">
                        <div>
                            <img
                                src={hydraulicDesignCostImage}
                                alt="Hydraulic Design Cost"
                            />
                            <p className="project-img-pointing-text">
                                ☝️ Total Costs of preposed Hydraulic Design ☝️
                            </p>
                        </div>
                        <div>
                            <img
                                src={fluildFlowSpecsImage}
                                alt="Calculations of fluid flow"
                            />
                            <p className="project-img-pointing-text">
                                ☝️ Total Costs of preposed Hydraulic Design ☝️
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HydraulicManifoldProject;
