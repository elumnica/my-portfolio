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
                            <a class='active' href=''>About</a>
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
                            <a href='https://www.linkedin.com/in/elvislumnica/'>
                            <img alt='LinkedIn Icon' src='https://www.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-22-512.png'
                            width='50' height='50'></img>
                            </a>
                            <a href='https://github.com/elumnica'>
                            <img src='https://cdn3.iconfinder.com/data/icons/flat-and-simple-part-3/128/github-512.png' alt='Github icon' 
                            width='50' height='50'></img>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="main-container">
                    <div>
                        <h1 className='title'>Hi, I'm Elvis.<br></br>A Software Developer.</h1>
                        <p className='textTwo'>I love to bring user friendly and asthetic websites to life.</p>
                    </div>
                </div>
                <div className='lottie'>
                        <Lottie 
	                        options={defaultOptions}
                            height={400}
                            width={400}
                        />
                    </div>
                </div>
           
    );
}

export default Header;