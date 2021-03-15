import React from "react";
import Layout from "../components/layout";
import StudentLayout from "../components/student-layout";

import { studentData } from "../mockData/student1.jsx"
import { imageToURL } from "../mockData/importImages.jsx"
import { userToTutor } from "../mockData/userToTutor.jsx"
import { courseData } from "../mockData/courseData.jsx"

import NeedStudentAccountNotice from "../components/need-student-account-notice";

const upcoming = studentData.upcoming
const courseURLs = studentData.courseURLs
const past = studentData.past
const ratings = courseData.ratings

function LeftUpcoming() {
  return (
    <div>
      {upcoming.map((session, index) => index < (upcoming.length/2) && (<div> <div id="smaller-header">{courseData[session.course].name}</div>
            <div id="row-boxes">
              <img src= {imageToURL[session.course]} style={{width: "80px", height: "80px", marginRight: "20px"}}/>
              <div style={{display: "flex", flexDirection: "column"}}>
                <div id="even-smaller-header">Tutor: {userToTutor[session.tutor].name}</div>
                <div id="even-smaller-header">Duration: {session.hours} hour(s)</div>
                <div id="even-smaller-header">Date: {session.date}</div>
                <div id="even-smaller-header">Time: {session.time}</div>
              </div>
            </div></div>))}
    </div>
  )
}

function RightUpcoming() {
  return (
    <div>
      {upcoming.map((session, index) => index >= (upcoming.length/2) && (<div> <div id="smaller-header">{courseData[session.course].name}</div>
            <div id="row-boxes">
              <img src= {imageToURL[session.course]} style={{width: "80px", height: "80px", marginRight: "20px"}}/>
              <div style={{display: "flex", flexDirection: "column"}}>
                <div id="even-smaller-header">Tutor: {userToTutor[session.tutor].name}</div>
                <div id="even-smaller-header">Duration: {session.hours} hour(s)</div>
                <div id="even-smaller-header">Date: {session.date}</div>
                <div id="even-smaller-header">Time: {session.time}</div>
              </div>
            </div></div>))}
    </div>
  )
}

function PadUpcoming() {
  return (
    <div>
      {(upcoming.length % 2 == 1) && (<div style={{marginTop: "130px"}}/>)}
    </div>)
}

function LeftPast() {
  return (
    <div>
      {past.map((session, index) => index < (past.length/2) && (<div> <div id="smaller-header">{courseData[session.course].name}</div>
            <div id="row-boxes">
              <img src= {imageToURL[session.course]} style={{width: "80px", height: "80px", marginRight: "20px"}}/>
              <div style={{display: "flex", flexDirection: "column"}}>
                <div id="even-smaller-header">Tutor: {userToTutor[session.tutor].name}</div>
                <div id="even-smaller-header">Duration: {session.hours} hour(s)</div>
                <div id="even-smaller-header">Date:  {session.date}</div>
                <div id="even-smaller-header">Time:  {session.time}</div>
                <div id="even-smaller-header">Rating: {ratings[session.rating]}</div>
              </div>
            </div></div>))}
    </div>
  )
}

function RightPast() {
  return (
    <div>
      {past.map((session, index) => index >= (past.length/2) && (<div> <div id="smaller-header">{courseData[session.course].name}</div>
            <div id="row-boxes">
              <img src= {imageToURL[session.course]} style={{width: "80px", height: "80px", marginRight: "20px"}}/>
              <div style={{display: "flex", flexDirection: "column"}}>
                <div id="even-smaller-header">Tutor: {userToTutor[session.tutor].name}</div>
                <div id="even-smaller-header">Duration: {session.hours} hour(s)</div>
                <div id="even-smaller-header">Date:  {session.date}</div>
                <div id="even-smaller-header">Time:  {session.time}</div>
                <div id="even-smaller-header">Rating: {ratings[session.rating]}</div>
              </div>
            </div></div>))}
    </div>
  )
}

const HistoryPage = ({ token, setController }) => {
  return token.slice(-2) === ",1" ? (
    <Layout setController={setController}>
      <StudentLayout>
        <div className="student-page-container" style={{ backgroundColor: "#FFFFFF", height: "100vh", justifyContent: "center", width: "100%"}}>
          <div style={{marginRight: "100px"}}>
            <div id="user-name">History</div>
            <div id="small-header">Upcoming Sessions</div>
            <LeftUpcoming/>
            
            <div id="small-header">Past Sessions</div>


            <LeftPast/>



          </div>

          



          <div style={{marginRight: "100px", marginTop: "125px"}}>
          

          <RightUpcoming/>
          <PadUpcoming/>

          <div id="small-header"></div>
            
          <RightPast/>
            

          </div>
        </div>
      </StudentLayout>
    </Layout>
    
  ) : <NeedStudentAccountNotice />;
};

export default HistoryPage;