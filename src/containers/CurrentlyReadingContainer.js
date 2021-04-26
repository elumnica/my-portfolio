import React from "react";
import CurrentlyReading from "../components/CurrentlyReading";
import currentlyReadingData from "../data/currentlyReadingData.js";

function CurrentlyReadingContainer() {
    const readingBookCreator = currentlyReadingData.map((book) => (
        <CurrentlyReading
            key={book.id}
            image={book.image}
            title={book.title}
            author={book.author}
        />
    ));
    return (
        <div className="main-container">
            <div className="currently-reading-grid-container">
                <p className="sub-heading">Currently Reading</p>
                <div className="currently-reading-grid">
                    {readingBookCreator}
                </div>
            </div>
        </div>
    );
}

export default CurrentlyReadingContainer;
