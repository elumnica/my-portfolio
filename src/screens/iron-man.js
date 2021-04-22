import React from 'react';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
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