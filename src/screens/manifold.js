import React from 'react';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import "./manifold.css";

function Manifold() {
    return (
        <div  style={{display: 'flex', flexDirection: 'column'}}>
                <Navbar />
                <section className="second-container">
                    <div>
                        <h1 className='title'>Hydraulic Manifold</h1>
                        <span className='text-two'>R & D • F.S. Elliott • Flow Simulation</span>
                    </div>
                </section>
                <div className='assembly'>
                        <img src={require('../img/full-model.png')}></img>
                </div>
                <div className='problem'>
                    <h2 className='title'>The Problem</h2>
                    <p className='statement'>In tandem with the P300+ line of compressors, there is a lubrication system with ISO 32
                    grade oil. Within this external system lies one crucial flaw, it is too intricate to work on. There
                    are too many physical piping connections that hinders certain aspects of maintenance processes.
                    The design task involves decreasing the amount of piping connections to ideally have one inlet
                    and one outlet total through each connection to the compressor. A proper solution would be to
                    modularize the lubrication system to act on one platform were all the connections would be
                    within a block and the main components would be mounted on the block.</p>
               
                    <img className='three-model' src={require('../img/aircompressor.png')}></img>
                </div>
                <span className='work-caption'>☝️ Current F.S. Elliott P300+ Air Compressor System  ☝️ </span>

                <div className='problem'>
                    <h2 className='title'>Overview</h2>
                    <p className='statement'>The new design will be prototyped using solidworks technology to conduct computational
                    fluid flow analysis throughout the lubrication system. This analysis will be crucial in determining
                    if the design meets the specifications given by the sponsor as it will provide the experimental
                    justification stating if the design works. After the design is evaluated and further improved, the
                    system maybe scaled to met the specifications for other air compressors made by FS-Elliott. The modular block design implements the main components of a lubrication oil system
                    into an hydraulic manifold. The manifold would be made out of an 6061-T6511 Aluminum
                    extrusion material with a bare surface finish. Wrought aluminum alloys are worked by extruding,
                    rolling or forgoing them into specified shapes. These aluminums are graded by a 4 digit number
                    which identifies their major alloying element. The “6511” number included magnesium and
                    silicon. The alpha numeric suffixes attached to alloy represent the temper or degree of hardness
                    and also represent the method by which the hardness was obtained. T6 indicates that the
                    material was solution heat treated and artificially aged while the T6511 indicates that the alloy
                    was solution heat treated, stress relieved by stretching and artificially aged to reduce the
                    possibility of distortion in machined parts. This grade of aluminum is the most versatile of the
                    heat treated aluminum alloys. It has excellent corrosion resistant, can be easily fabricated, has
                    good formability and can be easily machined.</p>
               
                    <img className='four-model' src={require('../img/3D Model.png')}></img>
                </div>
                <span className='work-caption'>☝️ Proposed 3D Model Hydraulic Design ☝️ </span>

                <div className='problem'>
                    <h2 className='title'>Equipment: Gerotor Pump & Thermo Control Valve</h2>
                        <p className='statement'>A gerotor pump from Parker will be used as the mounted auxiliary oil pump. A gerotor
pump consists of an internal drive gear and an external driven gear that are always in sliding
contact. Gerotor pumps are generally used for low pressure applications or hot oil filtration
systems. The AMOT Model C thermostatic control element.
Typical applications for this valve is that it controls the oil temperature, temperature mixing and
water saving applications. The key benefits of this model is that it requires no external power
source, has small number of parts, low cost installation, and can be operated in any mounting
position.</p>
                </div>
                <div className='row'>
                        <div className='column'>
                            <img className='four-model' src={require('../img/gerotor-pump.png')}></img>
                            <span className='work-caption'>☝️ 3D Model of the Gerotor Pump ☝️ </span>
                        </div>
                        <div className='column'>
                            <img className='four-model' src={require('../img/thermostatic-control.png')}></img>
                            <span className='work-caption'>☝️ 3D Model of the Thermostatic Control Valve ☝️ </span>
                        </div>
                </div>
                //Combustion Chamber
                <div className='problem'>
                    <h2 className='title'>Equipment: Oil Filter & Relief Valve </h2>
                        <p className='statement'>A screw on oil filter is a low pressure hydraulic filter that is used as suction filter or to
filter the return line of the hydraulic circuit. Spin on filters are easy to service due to the
disposable filter cans which can be replaced by a replacement element completely. The oil filter
implements both a one inch pressure line and discharge connection. A direct acting pressure relief valve from Sun Hydraulics would be implemented after the
auxiliary oil pump. Direct-acting relief cartridges are normally closed, pressure-limiting valves
used to protect hydraulic components from pressure transients.</p>
                </div>
                <div className='row'>
                        <div className='column'>
                            <img className='four-model' src={require('../img/oil-filter.png')}></img>
                            <span className='work-caption'>☝️ 3D Model of the Oil Filter ☝️ </span>
                        </div>
                        <div className='column'>
                            <img className='four-model' src={require('../img/relief-valve.png')}></img>
                            <span className='work-caption'>☝️ 3D Model of the Relief Valve ☝️ </span>
                        </div>
                </div>
                <div className='row'>
                        <div className='column'>
                            <img className='four-model' src={require('../img/oil-calc.png')}></img>
                            <span className='work-caption'>☝️ Iso 32 Oil Calculations ☝️ </span>
                        </div>
                        <div className='column'>
                            <img className='four-model' src={require('../img/objectives-table.png')}></img>
                            <span className='work-caption'>☝️ Current Objectives New Design Implements ☝️ </span>
                        </div>
                </div>
                //Turbine
                <div className='problem'>
                    <h2 className='title'>Flow Simulation</h2>
                        <p className='statement'>SOLIDWORKS Flow Simulation is an accessible Computational Fluid Dynamics (CFD)
solution that enables simulation of a liquid or gas to flow through and around designs to
calculate product performance and capabilities. It uses the Finite Volume Method to calculate
product performance through what if situations that allow you to perform optimization using
results. Finite Volume Method (FVM) can be defined as the method for evaluating partial
differential equations in the form of algebraic equations. These values are calculated as
discrete places on a meshed geometry.</p>
                </div>
                <div className='row'>
                        <div className='column'>
                            <img className='four-model' src={require('../img/flow-sim.png')}></img>
                            <span className='work-caption'>☝️ Flow simulation across the manifold ☝️ </span>
                        </div>
                        <div className='column'>
                            <img className='four-model' src={require('../img/flow-sim-2.png')}></img>
                            <span className='work-caption'>☝️ Flow simulation across the manifold ☝️ </span>
                        </div>
                </div>
                //Rear Frame System
                <div className='problem'>
                    <h2 className='title'>Conclusion/Results</h2>
                        <p className='statement'>A proper solution would be to
                            modularize the lubrication system to act on one platform were all the connections would be
                            within a block and the main components would be mounted on the block. Limitations of design included the location of the main shaft driven pump and the shaft
                            that is on top of the reservoir. The main shaft driven pump and auxiliary oil pump work in
                            succession to regulate the 18 gallons per minute required flow rate of the lubrication system.
                            Some aspects of design were inevitable when working with hydraulic hose. It was needed to
                            provide a functional working design. This design assures the customer efficient reliability in
                            terms of service. With a cost savings of about 20% and efficient reliability, the Modular
                            Box with External Heat Exchanger is the design that is recommended. The company is now undergoing
                            building a prototype and setting up for testing. If you would like to see the full technical report,
                            please click on this link <a style={{color: 'lightblue'}}href='https://www.dropbox.com/s/lke34iu45jvdy6e/Elvis%20Hydraulic%20Manifold%20Portfolio.pdf?dl=0'>here</a> to read more about this project.</p>
                </div>
                <div className='row'>
                        <div className='column'>
                            <img className='four-model' src={require('../img/costs.png')}></img>
                            <span className='work-caption'>☝️ Total Costs of preposed Hydraulic Design ☝️ </span>
                        </div>
                        <div className='column'>
                            <img className='four-model' src={require('../img/specs.png')}></img>
                            <span className='work-caption'>☝️ Calculations of fluid flow ☝️ </span>
                        </div>
                </div>
                
                <div className='footer'>
                    <Footer />
                </div>
        </div>
    );
}

export default Manifold;


