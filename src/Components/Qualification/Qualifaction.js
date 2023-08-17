import React, { useState } from "react";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return(
        <section className="qualification section">
            <h2 className="sectionTitle">Qualification</h2>
            <span className="sectionSubtitle">My personal journey</span>

            <div className="qualificationContainer container">
                <div className="qualificationTabs">
                    <div className={toggleState === 1 ? "qualificationButton qualificationActive buttonFlex" : "qualificationButton buttonFlex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualificationIcon"></i>
                        <span>Education</span>
                    </div>

                    <div className={toggleState === 2 ? "qualificationButton qualificationActive buttonFlex" : "qualificationButton buttonFlex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualificationIcon"></i>
                        <span>Experience</span>
                    </div>
                </div>

                <div className="qualificationSections">
                    <div className={toggleState === 1 ? "qualificationContent qualificationContentActive" : "qualificationContent"}>
                        <div className="qualificationData">
                            <div>
                                <h3 className="qualificationTitle">Web Designer</h3>
                                <span className="qualificationSubtitle">Spain - Institute</span>
                                <div className="qualficationCalender">
                                    <i className="uil uil-calender-alt"></i> 2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualificationRounder"></span>
                                <span className="qualificationLine"></span>
                            </div>
                        </div>

                        <div className="qualificationData">
                            <div></div>

                            <div>
                                <span className="qualificationRounder"></span>
                                <span className="qualificationLine"></span>
                            </div>

                            <div>
                                <h3 className="qualificationTitle">Art Director</h3>
                                <span className="qualificationSubtitle">Spain - Institute</span>
                                <div className="qualficationCalender">
                                    <i className="uil uil-calender-alt"></i> 2021 - Present
                                </div>
                            </div>
                        </div>

                        <div className="qualificationData">
                            <div>
                                <h3 className="qualificationTitle">Web Development</h3>
                                <span className="qualificationSubtitle">Spain - Institute</span>
                                <div className="qualficationCalender">
                                    <i className="uil uil-calender-alt"></i> 2018 - 2020
                                </div>
                            </div>

                            <div>
                                <span className="qualificationRounder"></span>
                                <span className="qualificationLine"></span>
                            </div>
                        </div>

                        <div className="qualificationData">
                            <div></div>

                            <div>
                                <span className="qualificationRounder"></span>
                                <span className="qualificationLine"></span>
                            </div>

                            <div>
                                <h3 className="qualificationTitle">UX Expert</h3>
                                <span className="qualificationSubtitle">Spain - Institute</span>
                                <div className="qualficationCalender">
                                    <i className="uil uil-calender-alt"></i> 2020 - 2022
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualificationContent qualificationContentActive" : "qualificationContent"}>
                        <div className="qualificationData">
                            <div>
                                <h3 className="qualificationTitle">ProductDesigner</h3>
                                <span className="qualificationSubtitle">Microsoft - Spain</span>
                                <div className="qualficationCalender">
                                    <i className="uil uil-calender-alt"></i> 2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualificationRounder"></span>
                                <span className="qualificationLine"></span>
                            </div>
                        </div>

                        <div className="qualificationData">
                            <div></div>

                            <div>
                                <span className="qualificationRounder"></span>
                                <span className="qualificationLine"></span>
                            </div>

                            <div>
                                <h3 className="qualificationTitle">UX Designer</h3>
                                <span className="qualificationSubtitle">Apple Inc - Spain</span>
                                <div className="qualficationCalender">
                                    <i className="uil uil-calender-alt"></i> 2021 - Present
                                </div>
                            </div>
                        </div>

                        <div className="qualificationData">
                            <div>
                                <h3 className="qualificationTitle">Web Designer</h3>
                                <span className="qualificationSubtitle">Figma - Spain</span>
                                <div className="qualficationCalender">
                                    <i className="uil uil-calender-alt"></i> 2018 - 2020
                                </div>
                            </div>

                            <div>
                                <span className="qualificationRounder"></span>
                                <span className="qualificationLine"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification;