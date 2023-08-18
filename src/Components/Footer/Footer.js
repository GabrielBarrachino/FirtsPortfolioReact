import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerContainer container">
               <h1 className="footerTitle">Smith</h1>

               <ul className="footerList">
                    <li>
                        <a href="#about" className="footerLink">About</a>
                    </li>

                    <li>
                        <a href="#projects" className="footerLink">Projects</a>
                    </li>

                    <li>
                        <a href="#testimonials" className="footerLink">Testimonials</a>
                    </li>
               </ul>

               <div className="footerSocial">
                    <a href="https://www.facebook.com/" className="footerSocialLink" target="_blank">
                        <i class="bx bxl-facebook"></i>
                    </a>

                    <a href="https://www.isntagram.com/"  className="footerSocialLink" target="_blank">
                        <i class="bx bxl-instagram"></i>
                    </a>

                    <a href="https://www.twitter.com/"  className="footerSocialLink" target="_blank">
                        <i class="bx bxl-twitter"></i>
                    </a>
               </div>

               <span className="footerCopy">
                    &#169; Crypticalcoder. All rights reserved
               </span>
            </div>
        </footer>
    )
}


export default Footer;