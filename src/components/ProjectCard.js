import React from "react";
import "../css/project-card.css";

function ProjectCard(props) {
    return (
        <div className="project-card-container">
            <a href={props.anchor} className="project-card">
                <p className="project-card-category">{props.category}</p>
                <h2 className="project-card-title">{props.title}</h2>
                <div className="project-card-img-container">
                    <img
                        className="project-card-img"
                        alt={props.title}
                        src={props.image}
                    ></img>
                </div>
            </a>
        </div>
    );
}

export default ProjectCard;
