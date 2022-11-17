import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
    return (
        <article>
            <h2>About Me</h2>
            <img src="./logo512.png" alt="Profile photo"></img>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <section>
                <a href="https://github.com/MichaelSinn" target="_blank">GitHub</a>
                <a href="https://www.linkedin.com/in/michael-sinn" target="_blank">LinkedIn</a>
                <a href="mailto:michaelsinn.contact@gmail.com">Email</a>
            </section>
        </article>
    );
}

export default About;