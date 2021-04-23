import React from 'react';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import "./iron.css";

function Iron() {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
                <Navbar />
                <section className="second-container">
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
                    <p className='statement'>The task at hand was learning how to create a full assembly on SOLIDWORKS and then being able to 3D print the design to create a prototype. 
                    Much of the learning process was making sure that each of the parts were able to be assembled correctly. I learned a lot of different commands SOLIDWORKS offers which helped deepen my knowledge on the designing aspect of the software.</p>
               
                    <img className='three-model' src={require('../img/3D-iron-man.JPG')}></img>
                </div>
                <span className='work-caption'>☝️ 3D Model Assembly of an Iron Man Helmet Design ☝️ </span>

               
                <div className='problem'>
                    <h2 className='title'>Parts</h2>
                        <p className='statement'>Below you can see the 3D Model of parts that were designed for this assembly.
                        As you can see the geometry of the helmet parts were complex and were done
                        using line references mixed with the revolve commands. The shell comamand also 
                        allowed for the cover like features the parts possess.</p>
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
                    <p className='statement'>The next step I would take in progressing this project is to perform a stress/shock absorption analysis simulation on a certain type of
                    material I would choose. If I were to progress this design into a helmet for outside activity I would think about different materials and layers 
                    needed to provide impact protection. Often layers are used together to provide impact protection. The outer layer is generally a hard shell or a micro-shell 
                    made of fiberglass, Lexan or ABS plastic. This shell serves many purposes: it distributes the force of the collision over a large area, it allows the helmet to slide,
                    thereby causing a slower deceleration; it provides a shield against puncture and it holds the middle layer together. The middle layer is usually a crushable liner that absorbs the shock of collision. 
                    This layer is often made of expanded polystyrene, also known as EPS. The inner layer, 
                    which may be more segmented, helps to ensure proper fit and comfort.</p>
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


