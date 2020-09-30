import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Icon from '../lotties/eye-icon.json';
import Lottie from 'react-lottie';
import "../styles/navbar.css";

function Navbar() {

    const defOptions = {
        loop: true,
        autoplay: true,
        animationData: Icon,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return (
                <div className='container'>
                    <div className='topnav'>
                        <div className='words'>
                            <a href='#'>Work</a>
                            <a href='./about.jsx'>About</a>
                            <a href='#'>Contact</a>
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
    );
}

export default Navbar;