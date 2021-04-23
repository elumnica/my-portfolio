import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../lotties/software-dev.json';
import Navbar from '../components/navbar.jsx';
import ProjectCard from '../components/projectCard.jsx';
import Footer from '../components/footer.jsx';
import "./iron.css";

function Iron() {
    return (
        <div>
                <Navbar />
                <section className="main-container">
                    <div>
                        <h1 className='title'>Iron Man Helmet</h1>
                        <span className='text-two'>CAD Designer • SOLIDWORKS • 3D Printing</span>
                    </div>
                </section>
                <div className='assembly'>
                        <img src={require('../img/iron-man-drawing.JPG')}></img>
                </div>
                <div className='problem'>
                    <h2 className='title'>The Problem</h2>
                    <p className='statement'>The task at hand was learning how to create a full assembly on SOLIDWORKS and then being able to  <br></br>3D print the design to create a prototype. 
                    Much of the learning process was making sure that each  <br></br> of the parts were able to be assembled correctly. I learned a lot of different commands SOLIDWORKS  <br></br> offers which helped deepen my knowledge on the designing aspect of the software.</p>
               
                    <img className='three-model' src={require('../img/3D-iron-man.JPG')}></img>
                </div>
                <span className='work-caption'>☝️ 3D Model Assembly of an Iron Man Helmet Design ☝️ </span>

               
                <div className='problem'>
                    <h2 className='title'>Parts</h2>
                        <p className='statement'>A lot of the parts.</p>
                </div>
                <div className='row'>
                        <div className='column'>
                            <img className='four-model' src={require('../img/iron-mask.JPG')}></img>
                            <span className='work-caption'>☝️ 3D Model of the mask shell ☝️ </span>
                        </div>
                        <div className='column'>
                            <img className='four-model' src={require('../img/iron-top.JPG')}></img>
                            <span className='work-caption'>☝️ 3D Model of the top shell ☝️ </span>
                        </div>
                </div>
                <div className='row'>
                        <div className='column'>
                            <img className='four-model' src={require('../img/back-piece-ironman.JPG')}></img>
                            <span className='work-caption'>☝️ 3D Model of the back shell ☝️ </span>
                        </div>
                        <div className='column'>
                            <img className='four-model' src={require('../img/combustion-drawing.JPG')}></img>
                            <span className='work-caption'>☝️ Annotation Drawing of the Combustion Chamber ☝️ </span>
                        </div>
                </div>
                <div className='problem'>
                    <h2 className='title'>Improvements/Analysis</h2>
                    <p className='statement'>The next step I would take in progressing this project is to perform a stress/shock absorption analysis simulation on a <br></br> certain type of
                    material I would choose. If I were to progress this design into a helmet for outside activity I would think <br></br>about different materials and layers 
                    needed to provide impact protection. Often layers are used together to provide <br></br>impact protection. The outer layer is generally a hard shell or a micro-shell 
                    made of fiberglass, Lexan or ABS plastic. <br></br>This shell serves many purposes: it distributes the force of the collision over a large area, it allows the helmet to slide, <br></br>
                    thereby causing a slower deceleration; it provides a shield against puncture and it holds the middle layer together. <br></br>The middle layer is usually a crushable liner that absorbs the shock of collision. 
                    This layer is often made of expanded <br></br>polystyrene, also known as EPS. The inner layer, 
                    which may be more segmented, helps to ensure proper fit and comfort.<br></br></p>
               </div>
               //3D Printing
               <div className='row'>
                        <div className='column'>
                            <img className='five-model' src={require('../img/pic1.JPG')}></img>
                            <span className='work-caption'>☝️ 3D Print of the Helmet Design ☝️ </span>
                        </div>
                        <div className='column'>
                            <img className='five-model' src={require('../img/pic2.JPG')}></img>
                            <span className='work-caption'>☝️ Material used is ABS Plastic. ☝️ </span>
                        </div>
                </div>

                <div className='footer'>
                    <Footer />
                </div>
        </div>
    );
}

export default Iron;


