import React from 'react';
import Lottie from 'react-lottie';
import Navbar from './navbar.jsx';
import Elvis from '../img/elvis.JPG';
import "../styles/about.css";

function About() {

    return (
    <div className='parent'>
        <Navbar />
        <div className='elvis'>
            <img src={Elvis}alt='elvis' width={600} height={500} />
        </div>
    </div>   
    )
}

export default About;