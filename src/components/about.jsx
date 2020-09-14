import React from 'react';
import Header from './header.jsx';
import Body from './body.jsx';
import Footer from './footer.jsx';
import "../styles/about.css";

function About() {
    return (
        <div className='main'>
            <div className='header'>
                <Header />
            </div>
            <div className='body'>
                <Body />
            </div>
            <div className= 'footer'>
            </div>
        </div>
    );
}

export default About;