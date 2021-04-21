import React from 'react';
import Navbar from './navbar.jsx';
import Footer from './footer.jsx';
import "../styles/header.css";

function Engine() {

    return (
        <div>
                <Navbar />
                <section className="main-container">
                    <h1 >Helllo World!</h1>
                </section>
                <div className='footer'>
                    <Footer />
                </div>
        </div>
    );
}

export default Engine;