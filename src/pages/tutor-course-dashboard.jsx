/*tutor-setup.jsx*/
import React from "react";
import Layout from "../components/layout";
import { Link } from "react-router-dom";
import StudentProfileCard from "../components/student-profile-card";
import NeedTutorAccountNotice from "../components/need-tutor-account-notice";

const TutorCourseDashboard = ({ token, setController }) => {
    return token.slice(-2) === ",0" ? (
      <Layout setController={setController}>
        <div style={{ margin: "auto", width: "60%", textAlign: "center", height: "25vh", paddingTop: "5vh" }}>
          <span style={{ fontSize: "40px" }}>[Course name] dashboard</span>
          <div style={{ fontSize: "20px", color: "#707070", marginTop: "5vh" }}>Last week, X students accessed content from this course. You earned $X.</div>
        </div>
        <div style={{ width: "80%", margin: "auto", height: "5vh" }}>
            <div style={{ fontSize: "20px", color: "#707070" }}>Students in this course</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around", height: "25vh", width: "80%", margin: "auto" }}>
          <StudentProfileCard />
          <StudentProfileCard />
          <StudentProfileCard />
          <StudentProfileCard />
        </div>
        <div style={{ width: "80%", margin: "auto", height: "5vh" }}>
            <div style={{ fontSize: "20px", color: "#707070" }}>Lessons in this course</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around", height: "25vh", width: "80%", margin: "auto" }}>
          <div style={{ backgroundColor: "#F0F0F0", width: "15vw", marginTop: "2.5vh", marginBottom: "2.5vh" }}>
              <div style={{ width: "50%", margin: "auto", textAlign: "center", marginTop: "17.5%", fontSize: 50 }}><Link style={{ color: "black", textDecoration: "none" }} to="/tutor-content-upload-2">+</Link></div>
          </div>
          <div style={{ backgroundColor: "#C4C4C4", width: "15vw", marginTop: "2.5vh", marginBottom: "2.5vh" }}></div>
          <div style={{ backgroundColor: "#C4C4C4", width: "15vw", marginTop: "2.5vh", marginBottom: "2.5vh" }}></div>
          <div style={{ backgroundColor: "#C4C4C4", width: "15vw", marginTop: "2.5vh", marginBottom: "2.5vh" }}></div>
        </div>
      </Layout>
    ) : <NeedTutorAccountNotice />;
  };
  
  export default TutorCourseDashboard;
