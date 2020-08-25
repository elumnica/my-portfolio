import React from 'react';
import MeCircle from './meCircle.jsx';
import "../styles/header.css";

function Header() {
    return (
        <div className='backgroundImage'>
                <div className='container'>
                    <MeCircle />
                    <div className='topnav'>
                        <a class='active' href='#'>About</a>
                        <a href='#'>Work</a>
                        <a href='#'>Notes</a>
                    </div>
                </div>
                <div className='title'>
                    <h2 className='textOne'>I'm Elvis.</h2>
                    <p className='textTwo'>a Software Engineer.</p>
                </div>
            </div>
    );
}

export default Header;