import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import StudentLayout from "../components/student-layout";
import { Link } from "react-router-dom";
import { studentData } from "../mockData/student1";
import { imageToURL } from "../mockData/importImages";
import { userToTutor } from "../mockData/userToTutor";
import { courseData } from "../mockData/courseData";
import NeedStudentAccountNotice from "../components/need-student-account-notice";

function LeftCourses({ courses, courseURLs }) {
  return (
    <div>
      {courses.map((course, index) => index < (courses.length/2) && (<div> <div id="smaller-header">Course #{index + 1}</div>
        <div id="row-boxes">
          <img src={imageToURL[course]} style={{ width: "80px", height: "80px", marginRight: "20px" }} />
          <div id="smaller-header"><Link id="course-button" to={courseURLs[0]}>{courseData[course].name}</Link></div>
        </div></div>))}
    </div>
  )
}

function RightCourses({ courses, courseURLs }) {
  return (
    <div>
      {courses.map((course, index) => index >= (courses.length/2) && (<div> <div id="smaller-header">Course #{index + 1}</div>
        <div id="row-boxes">
          <img src={imageToURL[course]} style={{ width: "80px", height: "80px", marginRight: "20px" }} />
          <div id="smaller-header"><Link id="course-button" to={courseURLs[0]}>{courseData[course].name}</Link></div>
        </div></div>))}
    </div>
  )
}

function PadCourses({ courses }) {
  return (
    <div>
      {(courses.length % 2 == 1) && (<div style={{marginTop: "130px"}}/>)}
    </div>)
}

function LeftTutors({ tutors }) {
  return (
    <div>
      {tutors.map((tutor, index) => index < (tutors.length/2) && (<div> <div id="smaller-header">Tutor #{index + 1}</div>
            <div id="row-boxes">
              <img src={imageToURL[userToTutor[tutor].img]} style={{ width: "80px", height: "80px", marginRight: "20px" }} />
              <div id="column-boxes">
                <div id="smaller-header"><Link id="course-button" to={userToTutor[tutor].url}>{userToTutor[tutor].name}</Link></div>
                <div id="rating-text">{userToTutor[tutor].overallRating} ⭑</div>
              </div>
            </div></div>))}
    </div>
  )
}

function RightTutors({ tutors }) {
  return (
    <div>
      {tutors.map((tutor, index) => index >= (tutors.length/2) && (<div> <div id="smaller-header">Tutor #{index + 1}</div>
            <div id="row-boxes">
              <img src={imageToURL[userToTutor[tutor].img]} style={{ width: "80px", height: "80px", marginRight: "20px" }} />
              <div id="column-boxes">
                <div id="smaller-header"><Link id="course-button" to={userToTutor[tutor].url}>{userToTutor[tutor].name}</Link></div>
                <div id="rating-text">{userToTutor[tutor].overallRating} ⭑</div>
              </div>
            </div></div>))}
    </div>
  )
}

const DashboardPage = ({ token, setController }) => {
  const [yourTutors, setYourTutors] = useState([]);

  const currUser = token.split(",");
  console.log(currUser);
  const courses = studentData.courses
  const courseURLs = studentData.courseURLs
  
  useEffect(() => {
    fetch(`https://street-smarts-demo.herokuapp.com/get-student-tutors/${currUser[0]}`).then((res) => {
      res.json().then((json) => {
        console.log(json);
        setYourTutors(json);
      })
    })
  }, []);
  const tutors = studentData.tutors

  return token.slice(-2) === ",1" ? (
    <Layout setController={setController}>
      <StudentLayout>
        <div className="student-page-container" style={{ backgroundColor: "#FFFFFF", height: "85vh", padding: 100, width: "100%" }}>
          <div style={{ marginRight: "100px" }}>
            <img src={`https://street-smarts-files.s3.amazonaws.com/${currUser[5]}`} style={{ width: "80px", height: "80px", marginRight: "20px" }} />
            <div style={{width: "100%"}} id="user-name">{`${currUser[1]} ${currUser[2]}`}</div>
           {/* <LeftCourses courses={courses} courseURLs={courseURLs} /> */}
            <div id="small-header">Your Tutors</div>
            {/* <LeftTutors tutors={tutors} /> */}
            {yourTutors.map((tutor) => (
              <div style={{width: "33vw"}}>
              <div id="smaller-header">{tutor[0][0]}</div>
              {/* <div id="description-text">One of your current tutors!</div> */}
              <div id="row-boxes">
                <img src={`https://street-smarts-files.s3.amazonaws.com/${tutor[0][5]}`} style={{width: "80px", height: "80px", marginRight: "20px"}}/>
                <div id="column-boxes">
                  <div><Link className="tutor-profile-link" to={`/tutor-profile/${tutor[0][0]}`}>See profile</Link></div>
                  {/* <div id="rating-text">{"5"} ⭑</div> */}
                </div>
              </div>
              </div>
            ))}

            {/* <div id="small-header">Payment Methods</div>
            <div id="visa-pic"></div> */}
          </div>
          <div style={{ marginRight: "100px", marginTop: "150px" }}>
          {/* <div id="small-header">Your Courses</div>

          <RightCourses courses={courses} courseURLs={courseURLs} />
          <PadCourses courses={courses} />
            <div id="small-header"></div>
            <RightTutors tutors={tutors} /> */}

          </div>
        </div>
      </StudentLayout>
    </Layout>

  ) : <NeedStudentAccountNotice />;
};

export default DashboardPage;