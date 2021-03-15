import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout";
import NeedTutorAccountNotice from "../components/need-tutor-account-notice";

const TutorSetupPage2 = ({ token }) => {
  
    return token.slice(-2) === ",0" ? (
      <Layout>
        <div style={{ margin: "auto", width: "60%", textAlign: "center", height: "90vh" }}>
          <span style={{ fontSize: "40px" }}>Upload a photo</span>
          <div style={{ fontSize: "20px", color: "#707070", marginTop: "5vh" }}>Make sure to look friendly and professional</div>
          <div style={{ backgroundColor: "#C4C4C4", height: "30vh", width: "30vh", margin: "auto", marginTop: "5vh" }}></div>
          <div style={{ margin: "auto", marginTop: "5vh" }}><button>Choose File</button></div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
            <Link className="tutor-signup-return-home" style={{ width: "20%", marginRight: "5%" }} to="/tutor-setup">Back</Link>
            <Link className="tutor-signup-return-home" style={{ width: "20%" }} to="/tutor-setup-3">Next</Link>
          </div>
        </div>
      </Layout>
    ) : <NeedTutorAccountNotice />;
  };
  
  export default TutorSetupPage2;