import React, { useState } from "react";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="services section" id="services">
            <h2 className="sectionTitle">Services</h2>
            <span className="sectionSubtitle">What I offer</span>

            <div className="servicesContainer container grid">
                <div className="servicesContent">
                    <div>
                        <i className="uil uil-web-grid servicesIcon"></i>
                        <h3 className="servicesTitle">
                            Product <br /> Designer
                        </h3>
                    </div>

                    <span className="servicesButton" onClick={() => toggleTab(1)}>View More
                    <i className="uil uil-arrow-right servicesButtonIcon"></i>
                    </span>

                    <div className={toggleState === 1 ? "servicesModal activeModal" : "servicesModal"}>
                        <div className="servicesModalContent">
                            <i className="uil uil-times servicesModalClose" onClick={() => toggleTab(0)}></i>

                            <h3 className="servicesModalTitle">Product Designer</h3>
                            <p className="servicesModalDescription">Service with more than 3 years of experience. Providing quality work to clients and companies.</p>

                            <ul className="servicesModalServices grid">
                                <li className="servicesModalService">
                                    <i className="uil uil-check-circle servicesModalIcon"></i>
                                    <p className="servicesModalInfo">
                                        I develop the user interface.
                                    </p>
                                </li>

                                <li className="servicesModalService">
                                    <i className="uil uil-check-circle servicesModalIcon"></i>
                                    <p className="servicesModalInfo">
                                        Web page development
                                    </p>
                                </li>

                                <li className="servicesModalService">
                                    <i className="uil uil-check-circle servicesModalIcon"></i>
                                    <p className="servicesModalInfo">
                                        I create UX element interactions
                                    </p>
                                </li>

                                <li className="servicesModalService">
                                    <i className="uil uil-check-circle servicesModalIcon"></i>
                                    <p className="servicesModalInfo">
                                        I position your company brand
                                    </p>
                                </li>

                                <li className="servicesModalService">
                                    <i className="uil uil-check-circle servicesModalIcon"></i>
                                    <p className="servicesModalInfo">
                                        Design and mockups of products for companies
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="servicesContent">
                    <div>
                        <i className="uil uil-arrow servicesIcon"></i>
                        <h3 className="servicesTitle">
                            UI/UX <br /> Designer
                        </h3>
                    </div>

                    <span className="servicesButton" onClick={() => toggleTab(2)}>View More
                    <i className="uil uil-arrow-right servicesButtonIcon"></i>
                    </span>

                    <div className={toggleState === 2 ? "servicesModal activeModal" : "servicesModal"}>
                        <div className="servicesModalContent">
                            <i className="uil uil-times servicesModalClose" onClick={() => toggleTab(0)}></i>

                            <h3 className="servicesModalTitle">UI/UX</h3>
                            <p className="servicesModalDescription">Service with more than 3 years of experience. Providing quality work to clients and companies.</p>

                            <ul className="servicesModalServices grid">
                                <li className="servicesModalService">
                                    <i className="uil uil-check-circle servicesModalIcon"></i>
                                    <p className="servicesModalInfo">
                                        I develop the user interface.
                                    </p>
                                </li>

                                <li className="servicesModalService">
                                    <i className="uil uil-check-circle servicesModalIcon"></i>
                                    <p className="servicesModalInfo">
                                        Web page development
                                    </p>
                                </li>

                                <li className="servicesModalService">
                                    <i className="uil uil-check-circle servicesModalIcon"></i>
                                    <p className="servicesModalInfo">
                                        I create UX element interactions
                                    </p>
                                </li>

                                <li className="servicesModalService">
                                    <i className="uil uil-check-circle servicesModalIcon"></i>
                                    <p className="servicesModalInfo">
                                        I position your company brand
                                    </p>
                                </li>

                                <li className="servicesModalService">
                                    <i className="uil uil-check-circle servicesModalIcon"></i>
                                    <p className="servicesModalInfo">
                                        Design and mockups of products for companies
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="servicesContent">
                    <div>
                        <i className="uil uil-edit servicesIcon"></i>
                        <h3 className="servicesTitle">
                            Visual <br /> Designer
                        </h3>
                    </div>

                    <span className="servicesButton" onClick={() => toggleTab(3)}>View More
                    <i className="uil uil-arrow-right servicesButtonIcon"></i>
                    </span>

                    <div className={toggleState === 3 ? "servicesModal activeModal" : "servicesModal"}>
                        <div className="servicesModalContent">
                            <i className="uil uil-times servicesModalClose" onClick={() => toggleTab(0)}></i>

                            <h3 className="servicesModalTitle">Visual Designer</h3>
                            <p className="servicesModalDescription">Service with more than 3 years of experience. Providing quality work to clients and companies.</p>

                            <ul className="servicesModalServices grid">
                                <li className="servicesModalService">
                                    <i className="uil uil-check-circle servicesModalIcon"></i>
                                    <p className="servicesModalInfo">
                                        I develop the user interface.
                                    </p>
                                </li>

                                <li className="servicesModalService">
                                    <i className="uil uil-check-circle servicesModalIcon"></i>
                                    <p className="servicesModalInfo">
                                        Web page development
                                    </p>
                                </li>

                                <li className="servicesModalService">
                                    <i className="uil uil-check-circle servicesModalIcon"></i>
                                    <p className="servicesModalInfo">
                                        I create UX element interactions
                                    </p>
                                </li>

                                <li className="servicesModalService">
                                    <i className="uil uil-check-circle servicesModalIcon"></i>
                                    <p className="servicesModalInfo">
                                        I position your company brand
                                    </p>
                                </li>

                                <li className="servicesModalService">
                                    <i className="uil uil-check-circle servicesModalIcon"></i>
                                    <p className="servicesModalInfo">
                                        Design and mockups of products for companies
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;