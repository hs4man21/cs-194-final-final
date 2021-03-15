import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout";

const LoginPage = ({ setToken, setController }) => {

  const usernameRef = useRef(null);
  const [usernameError, setUsernameError] = useState(false);

  function onButtonPress() {
    fetch(`https://street-smarts-demo.herokuapp.com/get-user/${usernameRef.current.value}`).then((res) => {
            res.json().then((json) => {
                console.log(json);
                if (json.length > 0) {
                  setToken(json);
                  setController(Math.random());
                  setUsernameError(false);
                } else {
                  setUsernameError(true);
                }
            })
        })
  }

  return (
    <Layout setController={setController}>
      <div className="student-page-container" style={{ backgroundColor: "#FFFFFF", height: "90vh", justifyContent: "center", width: "100%", paddingTop: "5vh", borderStyle: "solid", border: "10px", borderColor: "#5A4FCF"}}>
        <div style={{margin: "auto", width: "20%"}}>
          <div id="register">Login</div>
          <input ref={usernameRef} className="student-signup-text-input" type="text" placeholder="Username"></input>
          {/* <input className="student-signup-text-input" type="text" placeholder="Enter Password"></input> */}
          {sessionStorage.token ? <Link style={{ width: 200 }} className="student-trial-button" to={sessionStorage.token.slice(-2) === ",1" ? "/dashboard" : "/tutor-dashboard"}>Go to dashboard</Link> : <button style={{ width: 100 }} className="student-trial-button" onClick={() => onButtonPress()}>Log in</button>}
          {usernameError && <div style={{ marginTop: 5, color: "red" }}>Invalid username</div>}
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;