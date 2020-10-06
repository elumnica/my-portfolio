import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../lotties/software-dev.json';
import Navbar from './navbar.jsx'
import ProjectCard from './projectCard.jsx'
import Footer from './footer.jsx'
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
                        <h1 className='title'>Hi, I'm Elvis.<br></br>A Software Developer.</h1>
                        <p className='text-two'>I love to bring user friendly and asthetic websites to life. <br></br>Software development is my passion and is something <br></br>I would love to pursue professionally.</p>
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
                    <ProjectCard category={'Mobile'} title={'Ez Bet'}/>
                </div>
                <div className='cd-two'>
                    <ProjectCard category={'Web App'} title={'Workout Tracker'}/>
                </div>
                <div className='cd-three'>
                    <ProjectCard category={'Web App'} title={'Heroes & Villains'}/>
                </div>
                <div className='footer'>
                    <Footer />
                </div>
        </div>
           
    );
}

export default Header;