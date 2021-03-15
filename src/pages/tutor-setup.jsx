import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout";
import NeedTutorAccountNotice from "../components/need-tutor-account-notice";

const TutorSetupPage = ({ token }) => {

    return token.slice(-2) === ",0" ? (
      <Layout>
        <div style={{ margin: "auto", width: "60%", textAlign: "center", height: "90vh" }}>
          <span style={{ fontSize: "40px" }}>Let's get you started teaching!</span>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
            <input className="tutor-signup-text-input" style={{ width: "20%", marginRight: "5%" }} type="text" placeholder="Subject"></input>
            <input className="tutor-signup-text-input" style={{ width: "20%" }} type="text" placeholder="Hourly Rate"></input>
          </div>
          <input className="tutor-signup-text-input" style={{ width: "45%", height: "30vh", margin: "auto", marginTop: "5vh" }} type="text" placeholder="Experience in this subject"></input>
          <div style={{ borderTop: "1px grey solid", paddingBottom: "40px", margin: "auto", marginTop: "5vh", width: "60%" }} />
          <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
            <Link className="tutor-signup-return-home" style={{ width: "20%", marginRight: "5%" }} to="/tutors">Back</Link>
            <Link className="tutor-signup-return-home" style={{ width: "20%" }} to="/tutor-setup-3">Next</Link>
          </div>
        </div>
      </Layout>
    ) : <NeedTutorAccountNotice />;
  };
  
  export default TutorSetupPage;
