import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import StudentLayout from "../components/student-layout";
import { Link } from "react-router-dom";
import NeedStudentAccountNotice from "../components/need-student-account-notice";

const DiscoverPage = ({ token, setController }) => {
  const [tutorList, setTutorList] = useState([]);

  useEffect(() => {
    fetch('https://street-smarts-demo.herokuapp.com/get-tutors').then((res) => {
      res.json().then((json) => {
        setTutorList(json);
      })
    })
  }, [])

  return token.slice(-2) === ",1" ? (
    <Layout setController={setController}>
      <StudentLayout>
      <div style={{ backgroundColor: "#FFFFFF", height: "120vh", justifyContent: "center", width: "100%"}}>
          <div style={{ marginLeft: "100px", marginRight: "100px"}}>
            <div id="user-name">Discover</div>
            <div id="long-header">Tutors you might be interested in!</div>
            
            <div className="student-page-container" style={{ height: "80vh" }}>
            {tutorList.map((tutor) => (
              <div style={{width: "33vw"}}>
              <div id="smaller-header">{tutor[0]}</div>
              {/* <div id="description-text">One of your current tutors!</div> */}
              <div id="row-boxes">
                <img src={`https://street-smarts-files.s3.amazonaws.com/${tutor[5]}`} style={{width: "80px", height: "80px", marginRight: "20px"}}/>
                <div id="column-boxes">
                  <div><Link className="tutor-profile-link" to={`/tutor-profile/${tutor[0]}`}>See profile</Link></div>
                  {/* <div id="rating-text">{"5"} ⭑</div> */}
                </div>
              </div>
              </div>
            ))}
            </div>

          </div>
        </div>

      </StudentLayout>
    </Layout>
    
  ) : <NeedStudentAccountNotice />;
};

export default DiscoverPage;