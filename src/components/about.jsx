import React from 'react';
import Lottie from 'react-lottie';
import Navbar from './navbar.jsx';
import Elvis from '../img/elvis.jpg';
import Footer from './footer.jsx';
import GantCard from './gantCard.jsx';
import "../styles/about.css";

function About() {

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
        <div className='parent'>
            <div className='timecard'>
                <h2 className='gant-title'>A brief history</h2>
            </div>
            <div className='gant-chart'>
                <div className='card-one'>
                    <GantCard company={'SUNY Buffalo State'} position={'Engineering Student'} tenure={'14-19'}/>
                </div>
                <div className='card-two'>
                    <GantCard company={'Jack Green Assoc.'} position={'Electrical Engineer'} tenure={'19-20'}/>
                </div>
                <div className='card-three'>
                    <GantCard company={'Columbia University'} position={'Web Dev Student'} tenure={'19-20'}/>
                </div>
                <div className='card-four'>
                    <GantCard company={'Freelance'} position={'Dev Consultant'} tenure={'20 ~ curr.'}/>
                </div>
            </div>
            <div className='books'>
                <h2 className='reading-title'>Currently Reading</h2>
                <div className='row-books'>
                    <div className='first'>
                        <img src='https://cdn.shopify.com/s/files/1/2091/2603/products/TheAlchemistBack_2048x2048.jpg?v=1597410257' alt='The Alchemist Cover' width={250} height={350}></img>
                        <div className='book-w'>
                            <span className='b-title'>The Alchemist</span>
                            <span className='author'>Paulo Coelho</span>
                        </div>
                    </div>
                    <div className='second'>
                        <img src='https://images-na.ssl-images-amazon.com/images/I/81eEdLQLOKL.jpg' alt='The Alchemist Cover' width={250} height={350}></img>
                        <div className='book-w'>
                            <span className='b-title'>My Hero Academia Series</span>
                            <span className='author'>Kohei Horikoshi</span>
                        </div>
                    </div>
                    <div className='third'>
                        <img src='https://images-na.ssl-images-amazon.com/images/I/71VTW2Zld6L.jpg' alt='The Alchemist Cover' width={250} height={350}></img>
                        <div className='book-w'>
                            <span className='b-title'>Clipping our Wings</span>
                            <span className='author'>Margaritë Camaj</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    </div>  
    )
}

export default About;