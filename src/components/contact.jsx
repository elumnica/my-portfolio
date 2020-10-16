import React from 'react';
import Lottie from 'react-lottie';
import Navbar from './navbar.jsx';
import Elvis from '../img/elvis.jpg';
import Footer from './footer.jsx';
import GantCard from './gantCard.jsx';
import "../styles/contact.css";

function Contact() {

    return (
    <div className='parent'>
        <Navbar />
        <div className='split'>
            <div className='elvis'>
            <img src={Elvis}alt='elvis' width={400} height={400} style={{'borderRadius' : '85px'}}/>
            </div>
            <div className='text'>
                    <h1 className='title'>
                    Hi, I'm Elvis, a freelancing Software Developer looking to land my first dev job!
                    </h1>
                    <p className='p-tag'>
                        I've spent the last 4+ years working on many skills across different areas of engineering - mechanical, electrical, full-stack development + more! 
                        
                        My background helps me to bring a different thought process to the table.
                    </p>
                    <p className='p-tag'>
                        My days are spent researching and studying, coding, and writing. 
                        
                        Besides this, you can find me playing acoustic guitar, playing soccer, 
                       
                        working out, or just exploring around New York City!
                    </p>
            </div>
        </div>
    </div>  
    )
}

export default Contact;