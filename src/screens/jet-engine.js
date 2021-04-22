import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../lotties/software-dev.json';
import Navbar from '../components/navbar.jsx';
import ProjectCard from '../components/projectCard.jsx';
import Footer from '../components/footer.jsx';
import "./jet.css";

function Engine() {
    return (
        <div>
                <Navbar />
                <section className="main-container">
                    <div>
                        <h1 className='title'>Axial Jet Engine</h1>
                        <span className='text-two'>CAD Designer • SOLIDWORKS • Prototyping</span>
                    </div>
                </section>
                <div className='assembly'>
                        <img src={require('../img/jet-assembly-drawing.JPG')}></img>
                </div>
                <div className='problem'>
                    <h2 className='title'>The Problem</h2>
                    <p className='statement'>I have always been intrigued by the concept of being able to fly <br></br>from one place to another thanks 
                    to the Wright Brothers! My curiosity <br></br> led me to dive deeper into some of the concepts 
                    behind jet engines <br></br>and how they are engineered. The main focus on this project was to not only <br></br>
                    further understand the concept of jet engines but to also deepen my <br></br> understanding of the 3D modeling program SOLIDWORKS.</p>
               
                    <img className='three-model' src={require('../img/jet-assembly-model.JPG')}></img>
                </div>
                <span className='work-caption'>☝️ 3D Model Assembly of an Axial Jet Engine on SOLIDWORKS ☝️ </span>

                <div className='problem'>
                    <h2 className='title'>Overview</h2>
                    <p className='statement'>In retrospect the jet engine, also known as a gas turbine works like so. <br></br>The blades of a fan spin at high speed and compress or squeeze the air. <br></br>The compressed air is then sprayed with fuel and an electric spark lights the mixture. <br></br>The burning gases expand and blast out through the nozzle, at the back of the engine. <br></br>As the jets of gas shoot backward, the engine and the aircraft are thrust forward.</p>
               
                    <img className='four-model' src={require('../img/air-flow.png')}></img>
                </div>
                <span className='work-caption'>☝️ How air flows in an engine ☝️ </span>

                <div className='problem'>
                    <h2 className='title'>Parts: Compressor</h2>
                        <p className='statement'>The compressor rotates to continuously pressurized gases. <br></br>Its primary function is to supply air in enough quantity to meet 
                        <br></br>the requirements of the combustion burners.</p>
                </div>
                <div className='row'>   
                        <div className='column'>
                            <img className='four-model' src={require('../img/propeller-model.JPG')}></img>
                            <span className='work-caption'>☝️ 3D Model of the propeller ☝️ </span>
                        </div>
                        <div className='column'>
                            <img className='four-model' src={require('../img/propeller-drawings.JPG')}></img>
                            <span className='work-caption'>☝️ Annotation Drawing of the propeller ☝️ </span>
                        </div>
                </div>
                <div className='problem'>
                    <h2 className='title'>Parts: Combustion Chamber</h2>
                        <p className='statement'>Once air enters the front intake and is compressed, the air is forced into combustion chambers where <br></br>fuel is sprayed into it, and the mixture of air and fuel is ignited. Gases that form expand <br></br>rapidly and are exhausted through the rear of the combustion chambers.</p>
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
                

                <div className='footer'>
                    <Footer />
                </div>
        </div>
    );
}

export default Engine;