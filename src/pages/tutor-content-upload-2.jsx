/*tutor-setup.jsx*/
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout";
import NeedTutorAccountNotice from "../components/need-tutor-account-notice";

const TutorLessonUpload = ({ token, setController }) => {
    return token.slice(-2) === ",0" ? (
        <Layout setController={setController}>
            <div style={{ margin: "auto", width: "60%", textAlign: "center", height: "90vh" }}>
                <span style={{ fontSize: "40px" }}>Upload a course lesson</span>
                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                    <div>
                        <div style={{ backgroundColor: "#C4C4C4", height: "30vh", width: "40vh", margin: "auto", marginTop: "15vh" }}></div>
                        <div style={{ margin: "auto", marginTop: "5vh" }}><button>Choose File</button></div>
                    </div>
                    <div style={{ marginLeft: "5vw" }}>
                        <input className="tutor-signup-text-input" style={{ width: "100%", marginRight: "5%" }} type="text" placeholder="Title"></input>
                        <input className="tutor-signup-text-input" style={{ width: "100%", marginRight: "5%", height: "30vh" }} type="text" placeholder="Description"></input>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                    <Link className="tutor-signup-return-home" style={{ width: "20%", marginRight: "5%" }} to="/tutor-course-dashboard">Back</Link>
                    <Link className="tutor-signup-return-home" style={{ width: "20%" }} to="/tutor-course-dashboard">Next</Link>
                </div>
            </div>
        </Layout>
    ) : <NeedTutorAccountNotice />;
};

export default TutorLessonUpload;
