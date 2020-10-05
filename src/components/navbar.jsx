import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Icon from '../lotties/eye-icon.json';
import Lottie from 'react-lottie';
import Work from "./work.jsx";
import About from "./about.jsx";
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
                            <ul className='nav-links'><Link to={'/'}>Work</Link></ul>
                            <ul className='nav-links'><Link to={'/about'}>About</Link></ul>
                            <ul className='nav-links'><Link to={'/about'}>Contact</Link></ul>
                        </div>
                        <div className= "icon">
                        <Lottie 
	                        options={defOptions}
                            height={70}
                            width={70}
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