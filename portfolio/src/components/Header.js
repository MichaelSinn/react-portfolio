import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
    return (
        <header className="mb-4">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <h1 className="text-light">Michael Sinn</h1>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;