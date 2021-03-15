import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout";
import NeedTutorAccountNotice from "../components/need-tutor-account-notice";

const TutorSetupPage3 = ({ token }) => {
    return token.slice(-2) === ",0" ? (
      <Layout>
        <div style={{ margin: "auto", width: "60%", textAlign: "center", height: "90vh" }}>
          <span style={{ fontSize: "40px" }}>You're all set!</span>
          <div style={{ fontSize: "20px", color: "#707070", marginTop: "5vh" }}>Your profile is live. Start tutoring today!</div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
            <Link className="tutor-signup-return-home" style={{ width: "20%" }} to="/tutor-dashboard">Done</Link>
          </div>
        </div>
      </Layout>
    ) : <NeedTutorAccountNotice />;
  };
  
  export default TutorSetupPage3;