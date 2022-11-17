import React from "react";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";
import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Title",
        description: "Description",
        technologies: ["React", "Node", "MongoDB", "Express"],
        src: "",
        alt: "Project hero image"
    }
];

function Home(){
    return(
        <div>
            <Header/>
            <main>
                <About/>
                {projects.map(project =>{
                    return (
                        <ProjectCard project={project}/>
                    );
                })}
            </main>
            <Footer/>
        </div>
    );
}

export default Home;