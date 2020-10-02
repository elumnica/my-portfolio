import React from 'react';
import "../styles/gantCard.css";


function GantCard() {
    return (
        <div className='parent'>
            <div className='gant-bubble'>
                <div className='gant-company'>
                    <span className='company'>SUNY Buffalo State</span>
                    <span className='position'>Engineer Student</span>
                </div>
                <div className='tenure'>14-19</div>
            </div>
        </div>   
    )
}

export default GantCard;