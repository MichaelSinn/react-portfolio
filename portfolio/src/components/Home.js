import React from "react";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";
import ProjectCard from "./ProjectCard";
import 'bootstrap/dist/css/bootstrap.min.css';

const projects = [
    {
        title: "Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \n" +
            "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\n" +
            " ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n" +
            " aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n" +
            " in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur \n",
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