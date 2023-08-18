import React, { useState } from "react";
import "./_header.scss";

const Header = () => {
    window.addEventListener("scroll", function () {
        const headerScroll = document.querySelector(".header");
        if (this.scrollY >= 80) headerScroll.classList.add("scrollHeader")
        else headerScroll.classList.remove("scrollHeader")
    });

    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="navLogo">Smith</a>

                <div className={Toggle ? "navMenu showMenu" : "navMenu"}>
                    <ul className="navList grid">
                        <li className="navItem">
                            <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "navLink activeLink" : "navLink"}>
                                <i className="uil uil-estate navIcon"></i>
                                <span>Home</span>
                            </a>
                        </li>

                        <li className="navItem">
                            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "navLink activeLink" : "navLink"}>
                                <i className="uil uil-user navIcon"></i>
                                <span>About</span>
                            </a>
                        </li>

                        <li className="navItem">
                            <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === "#skills" ? "navLink activeLink" : "navLink"}>
                                <i className="uil uil-file-alt navIcon"></i>
                                <span>Skills</span>
                            </a>
                        </li>

                        <li className="navItem">
                            <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === "#services" ? "navLink activeLink" : "navLink"}>
                                <i className="uil uil-briefcase-alt navIcon"></i>
                                <span>Services</span>
                            </a>
                        </li>

                        <li className="navItem">
                            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === "#portfolio" ? "navLink activeLink" : "navLink"}>
                                <i className="uil uil-scenery navIcon"></i>
                                <span>Portfolio</span>
                            </a>
                        </li>

                        <li className="navItem">
                            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "navLink activeLink" : "navLink"}>
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