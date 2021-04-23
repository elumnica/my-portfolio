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
                        <img src={require('../img/jet-assembly-drawing.JPG')}></img>
                </div>
                <div className='problem'>
                    <h2 className='title'>The Problem</h2>
                    <p className='statement'>I have always been intrigued by the concept of being able to fly from one place to another thanks 
                    to the Wright Brothers! My curiosity led me to dive deeper into some of the concepts 
                    behind jet engines and how they are engineered. The main focus on this project was to not only 
                    further understand the concept of jet engines but to also deepen my understanding of the 3D modeling program SOLIDWORKS.</p>
               
                    <img className='three-model' src={require('../img/jet-assembly-model.JPG')}></img>
                </div>
                <span className='work-caption'>☝️ 3D Model Assembly of an Axial Jet Engine on SOLIDWORKS ☝️ </span>

                <div className='problem'>
                    <h2 className='title'>Overview</h2>
                    <p className='statement'>In retrospect the jet engine, also known as a gas turbine works like so. The blades of a fan spin at high speed and compress or squeeze the air. The compressed air is then sprayed with fuel and an electric spark lights the mixture. The burning gases expand and blast out through the nozzle, at the back of the engine. As the jets of gas shoot backward, the engine and the aircraft are thrust forward.</p>
               
                    <img className='four-model' src={require('../img/air-flow.png')}></img>
                </div>
                <span className='work-caption'>☝️ How air flows in an engine ☝️ </span>

                <div className='problem'>
                    <h2 className='title'>Parts: Compressor</h2>
                        <p className='statement'>The compressor rotates to continuously pressurized gases. Its primary function is to supply air in enough quantity to meet 
                        <br></br>the requirements of the combustion burners.</p>
                </div>
                <div className='row'>
                        <div className='column'>
                            <img className='four-model' src={require('../img/propeller-model.JPG')}></img>
                            <span className='work-caption'>☝️ 3D Model of the compressor ☝️ </span>
                        </div>
                        <div className='column'>
                            <img className='four-model' src={require('../img/propeller-drawings.JPG')}></img>
                            <span className='work-caption'>☝️ Annotation Drawing of the compressor ☝️ </span>
                        </div>
                </div>
                //Combustion Chamber
                <div className='problem'>
                    <h2 className='title'>Parts: Combustion Chamber</h2>
                        <p className='statement'>Once air enters the front intake and is compressed, the air is forced into combustion chambers where fuel is sprayed into it, and the mixture of air and fuel is ignited. Gases that form expand rapidly and are exhausted through the rear of the combustion chambers.</p>
                </div>
                <div className='row'>
                        <div className='column'>
                            <img className='four-model' src={require('../img/combustion-model.JPG')}></img>
                            <span className='work-caption'>☝️ 3D Model of the Combustion Chamber ☝️ </span>
                        </div>
                        <div className='column'>
                            <img className='four-model' src={require('../img/combustion-drawing.JPG')}></img>
                            <span className='work-caption'>☝️ Annotation Drawing of the Combustion Chamber ☝️ </span>
                        </div>
                </div>
                //Mid Frame
                <div className='problem'>
                    <h2 className='title'>Parts: Mid Frame</h2>
                        <p className='statement'>A gas turbine engine mid turbine frame having an inner case See application file for complete search history. Supporting at least one bearing and at least three spokes extending radially outwardly to an outer case, the mid turbine frame having an interturbine duct extending through the mid turbine frame, the interturbine duct spaced axially closer to an upstream turbine disc than a bearing. Supporting structure of the mid turbine frame and mounted axially slidingly relative to the bearing supporting structure to substantially isolate the bearing supporting structure from axial loads, for example such as disc loads incurred in the unlikely event a turbine disc shaft shears within the engine.</p>
                </div>
                <div className='row'>
                        <div className='column'>
                            <img className='four-model' src={require('../img/mid-frame-model.JPG')}></img>
                            <span className='work-caption'>☝️ 3D Model of the Mid Frame System ☝️ </span>
                        </div>
                        <div className='column'>
                            <img className='four-model' src={require('../img/mid-frame-drawing.JPG')}></img>
                            <span className='work-caption'>☝️ Annotation Drawing of the Mid Frame System ☝️ </span>
                        </div>
                </div>
                //Turbine
                <div className='problem'>
                    <h2 className='title'>Parts: Turbine</h2>
                        <p className='statement'>The turbines are linked by a shaft to turn the blades in the compressor and to spin the intake fan at the front. This rotation takes some energy from the high-energy flow that is used to drive the fan and the compressor. The gases produced in the combustion chamber move through the turbine and spin its blades.</p>
                </div>
                <div className='row'>
                        <div className='column'>
                            <img className='four-model' src={require('../img/turbine-model.JPG')}></img>
                            <span className='work-caption'>☝️ 3D Model of the Turbine ☝️ </span>
                        </div>
                        <div className='column'>
                            <img className='four-model' src={require('../img/turbine-drawing.JPG')}></img>
                            <span className='work-caption'>☝️ Annotation Drawing of the Turbine ☝️ </span>
                        </div>
                </div>
                //Rear Frame System
                <div className='problem'>
                    <h2 className='title'>Parts: Rear Frame System</h2>
                        <p className='statement'>A turbine rear frame for a gas turbine engine comprises a plurality of struts disposed between an outer ring and an inner ring. The struts can be mounted adjacent to one or more mount surfaces defined within the outer ring. The mount surface can comprise a recess in the outer ring having a maximum radial distance upstream of engine mounts inserted therein. The struts can further comprise a pitch angle offset from a centerline  of the mount surface and a tangentially curved trailing edge at a tip to improve aerodynamic performance of the turbine rear frame.</p>
                </div>
                <div className='row'>
                        <div className='column'>
                            <img className='four-model' src={require('../img/rear-frame-model.JPG')}></img>
                            <span className='work-caption'>☝️ 3D Model of the Rear Frame ☝️ </span>
                        </div>
                        <div className='column'>
                            <img className='four-model' src={require('../img/rear-frame-drawing.JPG')}></img>
                            <span className='work-caption'>☝️ Annotation Drawing of the Rear Frame ☝️ </span>
                        </div>
                </div>
                //Exhaust Nozzle
                <div className='problem'>
                    <h2 className='title'>Parts: Exhaust Nozzle</h2>
                        <p className='statement'>The nozzle is the end module of the engine which accelerates the flow of exhaust gases out of the engine. As hot air from the engine core mixes with cooler air blowing through the engine fan, the shaped edges serve to smooth the mixing, which reduces turbulence that creates noise.</p>
                </div>
                <div className='row'>
                        <div className='column'>
                            <img className='four-model' src={require('../img/exhaust.JPG')}></img>
                            <span className='work-caption'>☝️ 3D Model of the Exhaust Nozzle ☝️ </span>
                        </div>
                        <div className='column'>
                            <img className='four-model' src={require('../img/exhuast-drawing.JPG')}></img>
                            <span className='work-caption'>☝️ Annotation Drawing of the Exhaust Nozzle ☝️ </span>
                        </div>
                </div>
                <div className='problem'>
                    <h2 className='title'>Improvement/Analysis</h2>
                    <p className='statement'>The next step I would take in progressing this project is to perform a flow and thermal simulation on the air flow 
                    and combustion processes that the jet engine take to verify design functionality. After confirming that 
                    both processes confirm design functionality, the next step would be to build a prototype for testing.</p>
               </div>
                <div className='footer'>
                    <Footer />
                </div>
        </div>
    );
}

export default Manifold;


