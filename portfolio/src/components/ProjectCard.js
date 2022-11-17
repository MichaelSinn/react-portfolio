import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectCard({project}) {
    return (
        <article>
            <section>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <section>
                    <button>Learn More</button>
                    {project.technologies.map(tech => {
                        return (
                            <div>{tech}</div>
                        );
                    })}
                </section>
            </section>
            <section>
                <img src={project.src} alt={project.alt}></img>
            </section>
        </article>
    );
}

export default ProjectCard;