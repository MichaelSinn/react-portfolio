import React from "react";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";
import ProjectCard from "./ProjectCard";
import 'bootstrap/dist/css/bootstrap.min.css';

const projects = [
    {
        title: "Title",
        description: "Description",
        technologies: ["React", "Node", "MongoDB", "Express"],
        src: "",
        alt: "Project hero image"
    }
];

function Home() {
    return (
        <div>
            <Header/>
            <main className="container-fluid">
                <div className="row align-items-center">
                    <section className="col">
                        <About/>
                    </section>
                    <section className="col">
                        {projects.map(project => {
                            return (
                                <ProjectCard project={project}/>
                            );
                        })}
                    </section>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default Home;