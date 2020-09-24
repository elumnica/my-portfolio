import React from 'react';
import Me from "./me.jsx";
import Lottie from 'react-lottie';
import Icon from '../lotties/eye-icon.json';
import animationData from '../lotties/software-dev.json';
import "../styles/header.css";

function Header() {

    const defOptions = {
        loop: true,
        autoplay: true,
        animationData: Icon,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return (
        <div className='backgroundImage'>
                <div className='container'>
                    <div className='topnav'>
                        <div>
                            <a class='active' href='#'>About</a>
                            <a href='#'>Work</a>
                            <a href='#'>Notes</a>
                        </div>
                        <div className= "icon">
                        <Lottie 
	                        options={defOptions}
                            height={100}
                            width={100}
                        />
                        </div>
                        <div className="social-media">
                            <a href='#'>LinkedIn</a>
                            <a href='#'>Github</a>
                        </div>
                    </div>
                </div>
                <div className="main-container">
                    <div className='title'>
                        <h2 className='textOne'>I'm Elvis.</h2>
                        <p className='textTwo'>a Software Engineer.</p>
                    </div>
                    <div className='lottie'>
                        <Lottie 
	                        options={defaultOptions}
                            height={400}
                            width={400}
                        />
                    </div>
                </div>
            </div>
    );
}

export default Header;