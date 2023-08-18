import React from "react";

const ScrollUp = () => {
    window.addEventListener("scroll", function () {
        const scrollBtn = document.querySelector(".scrollup");
        if (this.scrollY >= 560) scrollBtn.classList.add("showScroll")
        else scrollBtn.classList.remove("showScroll")
    })
    return (
        <a href="#" className="scrollup">
            <i className="uil uil-arrow-up scrollupIcon"></i>
        </a>
    )
}



export default ScrollUp;