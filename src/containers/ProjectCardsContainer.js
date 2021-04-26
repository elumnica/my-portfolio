import React from "react";
import ProjectCard from "../components/ProjectCard.js";
import projectCardData from "../data/projectCardData.js";

function ProjectCardsContainer() {
    const projectCardsCreator = projectCardData.map((card) => (
        <ProjectCard
            key={card.id}
            category={card.category}
            title={card.title}
            image={card.image}
            anchor={card.anchor}
        />
    ));
    return (
        <div className="main-container">
            <div className="project-card-grid-container">
                <p className="sub-heading">Projects</p>
            </div>
            <div className="project-card-grid">{projectCardsCreator}</div>
        </div>
    );
}

export default ProjectCardsContainer;
