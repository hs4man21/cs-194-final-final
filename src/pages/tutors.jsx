import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout";
import S3FileUpload from "react-s3";
import { configS3 } from "../constants.js";

const TutorsPage = () => {

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const universityRef = useRef(null);
  const employerRef = useRef(null);
  const fileRef = useRef(null);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [usernameError, setUsernameError] = useState(false);

  const buttonClick = () => {
    const data = new FormData();
    data.append('first_name', firstNameRef.current.value);
    data.append('last_name', lastNameRef.current.value);
    data.append('email', emailRef.current.value);
    data.append('school', universityRef.current.value);
    data.append('employer', employerRef.current.value);

    S3FileUpload.uploadFile(fileRef?.current?.files[0], configS3).then((res) => {
      data.append('photo', res.key);
      fetch('https://street-smarts-demo.herokuapp.com/add-tutor', {
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
      <div className="tutor-page-container" style={{ backgroundColor: "#18A0FB", height: "90vh" }}>
        <div id="opportunity-everywhere">Opportunity is everywhere</div>
        <div id="tutor-signup-rectangle">
          <div style={{ font: "Montserrat", fontSize: "36px" }}>Become a tutor</div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <input ref={firstNameRef} className="tutor-signup-text-input" style={{ width: "40%" }} type="text" placeholder="First Name"></input>
            <input ref={lastNameRef} className="tutor-signup-text-input" style={{ width: "45%" }} type="text" placeholder="Last Name"></input></div>
          <input ref={emailRef} className="tutor-signup-text-input" type="text" placeholder="Username"></input>
          <input ref={universityRef} className="tutor-signup-text-input" type="text" placeholder="School (if applicable)"></input>
          <input ref={employerRef} className="tutor-signup-text-input" type="text" placeholder="Employer (if applicable)"></input>
          <div style={{ margin: "auto", marginTop: "3vh" }}>
            <div style={{ marginBottom: "2vh" }}>Profile picture (square please)</div>
            <input
              type="file"
              ref={fileRef}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {!isSubmitted ? (
              <button id="tutor-signup-submit" onClick={() => buttonClick()}>Sign up</button>
            ) : (
                <Link className="tutor-signup-return-home" to="/login">Go to login</Link>
              )}
            <Link className="tutor-signup-return-home" to="/">Return to home</Link></div>
          </div>
          {usernameError && <div style={{marginTop: 5, color:"red"}}>Username already taken</div>}
          {isSubmitted && <div style={{marginTop: 5, color:"red"}}>Logged in successfully!</div>}
        <div id="tutor-signup-page-pic"></div>
      </div>
    </Layout>
  );
};

export default TutorsPage;
