import React from 'react';
import "../styles/gantCard.css";


function GantCard(props) {
    return (
        <div className='parent'>
            <div className='gant-bubble'>
            <div className='gant-row'>
                <div className='gant-company'>
                    <span className='company'>{props.company}</span>
                    <span className='position'>{props.position}</span>
                </div>
                <div className='tenure'>{props.tenure}</div>
            </div>
            </div>
        </div>   
    )
}

export default GantCard;