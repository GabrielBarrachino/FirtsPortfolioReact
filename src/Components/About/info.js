import React from "react";

const Info = () => {
    return (
        <div className="aboutInfo grid">
            <div className="aboutBox">
                <i className="bx bx-award aboutIcon"></i>
                <h3 className="aboutTitle">Experience</h3>
                <span className="aboutSubtitle">8 Years Working</span>
            </div>

            <div className="aboutBox">
                <i className="bx bx-briefcase-alt aboutIcon"></i>
                <h3 className="aboutTitle">Completed</h3>
                <span className="aboutSubtitle">48+ Projects</span>
            </div>

            <div className="aboutBox">
                <i className="bx bx-support aboutIcon"></i>
                <h3 className="aboutTitle">Support</h3>
                <span className="aboutSubtitle">Online 24/7</span>
            </div>
        </div>
    )
}


export default Info;