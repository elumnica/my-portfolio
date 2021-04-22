import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../lotties/software-dev.json';
import Navbar from './navbar.jsx';
import ProjectCard from './projectCard.jsx';
import Footer from './footer.jsx';
import "../styles/header.css";

function Header() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return (
        <div>
                <Navbar />
                <section className="main-container">
                    <div>
                        <h1 className='title'>Hi, I'm Elvis.<br></br>A Creative Engineer.</h1>
                        {/* I love to bring user friendly and asthetic websites to life. Software development is my passion and is something I would love to pursue professionally.*/}
                        <p className='text-two'>I love to solve complex problems with creativity <br></br> and immersive solutions. Engineering is my passion <br></br> and is something I would love to pursue professionally.</p>
                    </div>
                <div className='lottie'>
                        <Lottie 
	                        options={defaultOptions}
                            height={450}
                            width={450}
                        />
                </div>
                </section>
                <div className='cd-one'>
                    <ProjectCard category={'SOLIDWORKS'} title={'Jet Engine'} name={require('../img/jet-assembly-model.JPG')} anchor='/engine'/>
                </div>
                <div className='cd-two'>
                    <ProjectCard category={'F.S. Elliott'} title={'Hydraulic Manifold'} name={require('../img/hydraulic-model.png')} anchor='/manifold'/>
                </div>
                <div className='cd-three'>
                    <ProjectCard category={'SOLIDWORKS'} title={'Iron Man Helmet'} name={require('../img/3D-iron-man.JPG')} anchor='/iron'/>
                </div>
                <div className='footer'>
                    <Footer />
                </div>
        </div>
    );
}

export default Header;