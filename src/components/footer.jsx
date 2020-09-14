import React from 'react';
import Helping from './helping.jsx';
import "../styles/body.css";

function Footer() {
    return (
    <div className='footer'>
    <div className='paragraph'>
        <div className='me'>
        <Helping />
            </div>
            <div className='h1'>
                <h1>I can help.</h1>
            </div>
            <div className='text'>
                <div className='etext'>
                    <p>
                    I am currently available for freelance work.
                    </p>
                </div>
                <p>
                If you have a project that you want to get 
                <br></br>
                <br></br> 
                think you need my help with something or just
                <br></br>
                <br></br> 
                want to say hi, then get in touch!
                </p>
            </div>
    </div>
    </div> 
    );
}

export default Footer;