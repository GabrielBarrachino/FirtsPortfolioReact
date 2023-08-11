import React, { useState } from "react";
import "./_header.scss";

const Header = () => {
    const [Toggle, showMenu] = useState(false);

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="navLogo">Smith</a>

                <div className={Toggle ? "navMenu showMenu" : "navMenu"}>
                    <ul className="navList grid">
                        <li className="navItem">
                            <a href="#home" className="navLink activeLink">
                                <i className="uil uil-estate navIcon"></i>
                                <span>Home</span>
                            </a>
                        </li>

                        <li className="navItem">
                            <a href="#about" className="navLink">
                                <i className="uil uil-user navIcon"></i>
                                <span>About</span>
                            </a>
                        </li>

                        <li className="navItem">
                            <a href="#skills" className="navLink">
                                <i className="uil uil-file-alt navIcon"></i>
                                <span>Skills</span>
                            </a>
                        </li>

                        <li className="navItem">
                            <a href="#services" className="navLink">
                                <i className="uil uil-briefcase-alt navIcon"></i>
                                <span>Services</span>
                            </a>
                        </li>

                        <li className="navItem">
                            <a href="#portfolio" className="navLink">
                                <i className="uil uil-scenery navIcon"></i>
                                <span>Portfolio</span>
                            </a>
                        </li>

                        <li className="navItem">
                            <a href="#contact" className="navLink">
                                <i className="uil uil-message navIcon"></i>
                                <span>Contact</span>
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times navClose" onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="navToggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;