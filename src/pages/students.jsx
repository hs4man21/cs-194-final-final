/*students.jsx*/
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout";

const StudentsPage = () => {
  return (
    <Layout>
      <div className="student-page-container" style={{ backgroundColor: "#5A4FCF", height: "50vh", justifyContent: "center", width: "100%", paddingTop: "30vh"}}>
        <div style={{marginRight: "100px"}}>
          <div id="looking-for-tutor">Looking for a tutor? We got you covered.</div>
          <div style={{margin: "auto", width: "50%"}}>
          <button className="student-trial-button"><Link style={{ textDecoration: "none", color: "white"}} to="/signup">Sign up for a free account</Link></button>
          </div>
        </div>
        <div id="student-signup-page-pic"></div>
      </div>
    </Layout>
  );
};

export default StudentsPage;