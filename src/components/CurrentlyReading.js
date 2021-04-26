import React from "react";
import "../css/currently-reading.css";

function CurrentlyReading(props) {
    return (
        <div className="book-container">
            <div className="book-img-container">
                <img
                    className="book-img"
                    alt={props.title}
                    src={props.image}
                ></img>
            </div>
            <div className="book-text-container">
                <p className="book-title">{props.title}</p>
                <h2 className="book-author">{props.author}</h2>
            </div>
        </div>
    );
}

export default CurrentlyReading;
