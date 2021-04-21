import React from 'react';
import "../styles/card.css";

function CharacterCard(props) {
    return (
        <div className='work-card'>
            <a className='card-header'>
                <span className='category' styles={props.padding}>{props.category}</span>
                <h2 className='card-title'>{props.title}</h2>
                <a href={props.anchor}>
                    <img className='card-icon' src={props.name}></img>
                </a>
            </a>
            
            
        </div>
    );
}

export default CharacterCard;