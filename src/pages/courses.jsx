import React from "react";
import Layout from "../components/layout";
import StudentLayout from "../components/student-layout";
import { Link } from "react-router-dom";
import { imageToURL } from "../mockData/importImages.jsx"
import { courseData } from "../mockData/courseData.jsx"
import NeedStudentAccountNotice from "../components/need-student-account-notice";

var key_list = courseData.key_list

function LeftCourses() {
  return (
    <div>
      {key_list.map((key, index) => index < (key_list.length/2) && (<div> <div id="smaller-header" style={{marginTop: "50px"}}> {courseData[key].name}</div>
            <div id="row-boxes">
              <img src= {imageToURL[key]} style={{width: "80px", height: "80px", marginRight: "20px"}}/>
              <div id="smaller-header"><Link id="course-button" to={courseData[key].url}></Link></div>
            </div></div>))}
    </div>
  )
}

function RightCourses() {
  return (
    <div>
      {key_list.map((key, index) => index >= (key_list.length/2) && (<div> <div id="smaller-header" style={{marginTop: "50px"}}> {courseData[key].name}</div>
            <div id="row-boxes">
              <img src= {imageToURL[key]} style={{width: "80px", height: "80px", marginRight: "20px"}}/>
              <div id="smaller-header"><Link id="course-button" to={courseData[key].url}></Link></div>
            </div></div>))}
    </div>
  )
}

const CoursesPage = ({ token, setController }) => {
  return token.slice(-2) === ",1" ? (
    <Layout setController={setController}>
      <StudentLayout>
      <div className="student-page-container" style={{ backgroundColor: "#FFFFFF", height: "120vh", justifyContent: "center", width: "100%"}}>
          <div style={{marginRight: "100px"}}>
            <div id="user-name">Courses</div>
            <div id="long-header">Courses you might be interested in!</div>
            <LeftCourses/>
            
          </div>
          <div style={{marginRight: "100px", marginTop: "120px"}}>
            <RightCourses/>
          </div>
        </div>
      </StudentLayout>
    </Layout>
  ) : <NeedStudentAccountNotice />;
};

export default CoursesPage;