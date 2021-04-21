import React from 'react';
import Navbar from './navbar.jsx';
import Footer from './footer.jsx';
import "../styles/header.css";

function Header() {

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

export default Header;