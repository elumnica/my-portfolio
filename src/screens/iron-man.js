import React from 'react';
import Navbar from './navbar.jsx';
import Footer from './footer.jsx';
import './iron.css';

function Iron() {

    return (
        <div>
                <Navbar />
                <section className="main-container">
                    <div>
                        <h1>Iron Man Solidworks Model</h1>
                    </div>
                <div className='iron-assembly'>
                </div>
                </section>
                <div className='footer'>
                    <Footer />
                </div>
        </div>
    );
}

export default Iron;