/*index.jsx*/
import React from "react";
import Layout from "../components/layout";
import StudentLayout from "../components/student-layout";
import { Link } from "react-router-dom";


const MainPage = ({ setController }) => {
  return (
    <Layout setController={setController}>
      <div className="student-page-container" style={{ backgroundColor: "#FFFFFF", height: "140vh", justifyContent: "center", width: "100%"}}>
          <div style={{marginLeft: "100px"}}>
            <div id="user-name">Homepage</div>
            <div id="long-header">Here's what our app has to offer!</div>
            
            <div id="row-boxes">
            <div id="column-boxes">
                <div id="smaller-header">Tutor Features</div>
                <div id="features-text" style={{marginTop: "20px"}}>Tutors Homepage - start here!</div>
                <div id="features-header"><Link id="course-button" to='/tutors'>Register</Link></div>
                <div id="features-text" style={{marginTop: "20px"}}>Sign-In Page</div>
                <div id="features-header"><Link id="course-button" to='/login'>Sign In</Link></div>
                <div id="features-text" style={{marginTop: "20px"}}>Tutors Dashboard</div>
                <div id="features-header"><Link id="course-button" to='/tutor-dashboard'>Dashboard</Link></div>
                {/* <div id="features-text" style={{marginTop: "20px"}}>History -- past/upcoming tutoring sessions!</div>
                <div id="features-header"><Link id="course-button" to='/'>History</Link></div> */}
              </div>
              <div id="column-boxes" style ={{marginLeft: '0px'}}>
                <div id="smaller-header">Student Features</div>
                <div id="features-text" style={{marginTop: "20px"}}>Students Homepage - start here!</div>
                <div id="features-header"><Link id="course-button" to='/students'>Students</Link></div>
                <div id="features-text" style={{marginTop: "20px"}}>Register Page</div>
                <div id="features-header"><Link id="course-button" to='/signup'>Register</Link></div>
                <div id="features-text" style={{marginTop: "20px"}}>Sign-In Page</div>
                <div id="features-header"><Link id="course-button" to='/login'>Sign In</Link></div>
                <div id="features-text" style={{marginTop: "20px"}}>Students Dashboard -- click around!</div>
                <div id="features-header"><Link id="course-button" to='/dashboard'>Dashboard</Link></div>
                <div id="features-text" style={{marginTop: "20px"}}>All Courses -- explore new courses</div>
                <div id="features-header"><Link id="course-button" to='/courses'>Courses</Link></div>
                <div id="features-text" style={{marginTop: "20px"}}>All Tutors -- explore new tutors</div>
                <div id="features-header"><Link id="course-button" to='/discover'>Tutors</Link></div>
                <div id="features-text" style={{marginTop: "20px"}}>History -- past/upcoming tutoring sessions!</div>
                <div id="features-header"><Link id="course-button" to='/history'>History</Link></div>
                {/* <div id="features-text" style={{marginTop: "20px"}}>Sample Tutor -- dashboard has your tutor pages!</div>
                <div id="features-header"><Link id="course-button" to='/sampleTutor'>Sample 1</Link></div>
                <div id="features-header"><Link id="course-button" to='/sampleTutor2'>Sample 2</Link></div> */}
              </div>
            </div>
            

          </div>
          <div style={{marginRight: "100px", marginTop: "123px"}}>


          </div>
        </div>
    </Layout>
  );
};

export default MainPage;