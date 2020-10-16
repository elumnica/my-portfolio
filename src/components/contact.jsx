import React from 'react';
import Lottie from 'react-lottie';
import Navbar from './navbar.jsx';
import Me from './me.jsx';
import Footer from './footer.jsx';
import GantCard from './gantCard.jsx';
import "../styles/contact.css";

function Contact() {

    return (
    <div className='parent'>
        <Navbar />
        <div className='split'>
            <div className='elvis'>
            <Me width={400} height={400} style={{'borderRadius' : '85px'}} />
            </div>
            <div className='text-c'>
                    <h1 className='title'>
                    You can contact me via email or direct message on LinkedIn!
                    </h1>
                    <p className='p-tag'>
                        Feel free to contact me if you have any questions about my portfolio or projects I have worked on!
                    </p>
                    <p className='p-tag'>
                        My email is lumnicaelvis@gmail.com and I usually respond within 24 hours. Looking forward to speaking with you!
                    </p>
            </div>
        </div>  
    </div>  
    )
}

export default Contact;