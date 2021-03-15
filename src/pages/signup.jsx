import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout";
import S3FileUpload from "react-s3";
import { configS3 } from "../constants.js";

const SignUpPage = () => {

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const schoolRef = useRef(null);
  const fileRef = useRef(null);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [usernameError, setUsernameError] = useState(false);

  const buttonClick = () => {
    const data = new FormData();
    data.append('first_name', firstNameRef.current.value);
    data.append('last_name', lastNameRef.current.value);
    data.append('email', emailRef.current.value);
    data.append('school', schoolRef.current.value);

    S3FileUpload.uploadFile(fileRef?.current?.files[0], configS3).then((res) => {
      data.append('photo', res.key);
      fetch('https://street-smarts-demo.herokuapp.com/add-student', {
        method: 'POST',
        body: data,
      }).then((res) => {
        res.json().then((json) => {
          console.log(json);
          if (json === 200) {
            setIsSubmitted(true);
            setUsernameError(false);
          } else if (json === 406) {
            setUsernameError(true);
          }
        });
      });
    })
  };

  return (
    <Layout>
      <div className="student-page-container" style={{ backgroundColor: "#FFFFFF", height: "90vh", justifyContent: "center", width: "100%", paddingTop: "5vh", borderStyle: "solid", border: "10px", borderColor: "#5A4FCF"}}>
        <div style={{margin: "auto", width: "20%"}}>
          <div id="register">Register</div>
          <input ref={firstNameRef} className="student-signup-text-input" type="text" placeholder="First Name"></input>
          <input ref={lastNameRef} className="student-signup-text-input" type="text" placeholder="Last Name"></input>
          <input ref={emailRef} className="student-signup-text-input" type="text" placeholder="Username"></input>
          <input ref={schoolRef} className="student-signup-text-input" type="text" placeholder="School (if applicable)"></input>
          <div style={{ margin: "auto", marginTop: "3vh", marginBottom: "3vh" }}>
            <div style={{ marginBottom: "2vh" }}>Profile picture (square please)</div>
            <input
              type="file"
              ref={fileRef}
            />
          </div>
          {/* <input className="student-signup-text-input" type="text" placeholder="Phone Number"></input> */}
          {/* <input className="student-signup-text-input" type="text" placeholder="Enter Password"></input> */}
          {/* <input className="student-signup-text-input" type="text" placeholder="Re-enter Password"></input>
          <input className="student-signup-text-input" type="text" placeholder="Invite Code (Optional)"></input> */}
          {!isSubmitted ? (
              <button className="student-trial-button" onClick={() => buttonClick()}>Sign up</button>
            ) : (
              <button className="student-trial-button"><Link id="student-trial-button" to="/login">Next</Link></button>
              )}
          {usernameError && <div style={{marginTop: 5, color:"red"}}>Username already taken</div>}
          {isSubmitted && <div style={{marginTop: 5, color:"red"}}>Logged in successfully!</div>}
        </div>
      </div>
    </Layout>
  );
};

export default SignUpPage;