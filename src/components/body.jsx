import React from 'react';
import Me from './me.jsx';
import EngineerPic from './engineerPic.jsx';
import Helping from './helping.jsx';
import "../styles/body.css";

function Body() {
    return (
        <div className='parent'>
                <div className='div'>
                    <Me />
                    <div className='text'>
                    <div className='h2'>
                        <h2>Hi!</h2>
                    </div>
                        <p>
                            I'm a software engineer based in New York City.
                            <br></br>
                            <br></br> 
                            I have a passion for web design and love to 
                            <br></br>
                            <br></br> 
                            create apps for web and mobile devices.
                        </p>
                    </div>
                    <div className='paragraph'>
                        
                        <div className='me'>
                            <EngineerPic/>
                        </div>
                        <div className='h1'>
                            <h1>What I can do.</h1>
                        </div>
                        <div className='text'>
                            <div className='etext'>
                                <p>
                                    Engineer what you want.
                                </p>
                            </div>
                        <p>
                        I like to keep it simple. My goals are to focus on
                        <br></br>
                        <br></br> 
                        design, accessibility, user experience as well 
                        <br></br>
                        <br></br> 
                        as conveying the message that you want to send.
                        </p>
                        </div>
                    </div>
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
        </div>
    );
}

export default Body;