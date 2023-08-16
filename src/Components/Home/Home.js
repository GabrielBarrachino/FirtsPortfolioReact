import React from "react";
import "./_home.scss";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="homeContainer container grid">
                <div className="homeContent grid">
                    <Social />

                    <div className="homeImg"></div>

                    <Data />
                </div>

                <ScrollDown />
            </div>
        </section>
    )
}

export default Home;