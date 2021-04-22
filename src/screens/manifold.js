import React from 'react';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import "./manifold.css";

function Manifold() {

    return (
        <div>
                <Navbar />
                <section className="main-container"></section>
                <div className='footer'>
                    <Footer />
                </div>
        </div>
    );
}

export default Manifold;