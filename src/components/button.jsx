import React from 'react';
import "../styles/button.css";


function Button() {
    return (
    <button>    
        <div className='button'>
            <img src={require('../img/button.png')} alt='Chat bot button' width={50} height={50}>
            </img>
        </div>
    </button>   
    )
}

export default Button;