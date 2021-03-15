/*tutor-setup.jsx*/
import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import { Link } from "react-router-dom";
import StudentProfileCard from "../components/student-profile-card";
import NeedTutorAccountNotice from "../components/need-tutor-account-notice";

const TutorDashboard = ({ token, setController }) => {
  const [yourStudents, setYourStudents] = useState([]);
  const [yourCourses, setYourCourses] = useState([]);
  const currTutor = token.split(",");

    useEffect(() => {
      fetch(`https://street-smarts-demo.herokuapp.com/get-tutor-students/${currTutor[0]}`).then((res) => {
        res.json().then((json) => {
          setYourStudents(json);
        })
      });
      fetch(`https://street-smarts-demo.herokuapp.com/get-tutor-content/${currTutor[0]}`).then((res) => {
        res.json().then((json) => {
          setYourCourses(json);
        })
      })
    }, []);

    return token.slice(-2) === ",0" ? (
      <Layout setController={setController}>
        <div style={{ margin: "auto", width: "60%", textAlign: "center", height: "20vh", paddingTop: "5vh" }}>
          <span style={{ fontSize: "40px" }}>{`Welcome back, ${currTutor[1]}!`}</span>
          {/* <div style={{ fontSize: "20px", color: "#707070", marginTop: "5vh" }}>Last week, you had X tutor sessions with X students. X students watched your course videos. You earned $X.</div> */}
        </div>
        <div style={{ width: "80%", margin: "auto", height: "5vh" }}>
            <div style={{ fontSize: "20px", color: "#707070" }}>Your students</div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-start", height: "25vh", width: "80%", margin: "auto" }}>
          {yourStudents.map((student) => (
            <StudentProfileCard username={student[0][0]} profilePic={student[0][5]} />
          ))}
        </div>
        <div style={{ width: "80%", margin: "auto", height: "5vh" }}>
            <div style={{ fontSize: "20px", color: "#707070" }}>Your courses</div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-start", height: "25vh", width: "80%", margin: "auto" }}>
          <div style={{ backgroundColor: "#F0F0F0", width: "15vw", height: "10vw", marginTop: "2.5vh", marginBottom: "2.5vh" }}>
              <div style={{ width: "50%", margin: "auto", textAlign: "center", marginTop: "17.5%", fontSize: 50 }}><Link style={{ color: "black", textDecoration: "none" }} to="/tutor-content-upload">+</Link></div>
          </div>
          {yourCourses.map((course) => (
            <div style={{ marginLeft: "5vw" }}>
            <a href={`https://street-smarts-files.s3.amazonaws.com/${course[5]}`} target="_blank"><div style={{ backgroundColor: "#C4C4C4", width: "15vw", height: "10vw", marginTop: "2.5vh", marginBottom: "2.5vh" }}><img src={`https://street-smarts-files.s3.amazonaws.com/${course[4]}`} objectFit="contain" height="100%" width="100%" /></div></a>
            <div>{course[1]}</div>
            </div>
          ))}
          {/* <div style={{ backgroundColor: "#C4C4C4", width: "15vw", marginTop: "2.5vh", marginBottom: "2.5vh" }}></div>
          <div style={{ backgroundColor: "#C4C4C4", width: "15vw", marginTop: "2.5vh", marginBottom: "2.5vh" }}></div>
          <div style={{ backgroundColor: "#C4C4C4", width: "15vw", marginTop: "2.5vh", marginBottom: "2.5vh" }}></div> */}
        </div>
      </Layout>
    ) : <NeedTutorAccountNotice />;
  };
  
  export default TutorDashboard;

