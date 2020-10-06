import React from 'react';
import "../styles/card.css";

function CharacterCard(props) {
    return (
        <div className='work-card'>
            <a className='card-header'>
                <span className='category'>{props.category}</span>
                <h2 className='card-title'>{props.title}</h2>
            </a>
        </div>
    );
}

export default CharacterCard;