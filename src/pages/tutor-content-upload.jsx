/*tutor-setup.jsx*/
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout";
import NeedTutorAccountNotice from "../components/need-tutor-account-notice";
import S3FileUpload from "react-s3";
import { configS3 } from "../constants.js";

const TutorContentUpload = ({ token, setController }) => {

    const currTutor = token.split(",");
    const fileRef = useRef(null);
    const photoRef = useRef(null);
    const nameRef = useRef(null);
    const descriptionRef = useRef(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const buttonClick = () => {

        const data = new FormData();
        data.append('name', nameRef.current.value);
        data.append('description', descriptionRef.current.value);
        data.append('creator', currTutor[0]);
        S3FileUpload.uploadFile(fileRef?.current?.files[0], configS3).then((res) => {
            data.append("content", res.key);
            S3FileUpload.uploadFile(photoRef?.current?.files[0], configS3).then((res2) => {
                data.append("photo", res2.key);
                fetch('https://street-smarts-demo.herokuapp.com/add-content', {
                    method: 'POST',
                    body: data,
                }).then(() => {
                    setIsSubmitted(true);
                    nameRef.current.value = "";
                    descriptionRef.current.value = "";
                    fileRef.current.value = null;
                    photoRef.current.value = null;
                });
            })
        });
    };

    return token.slice(-2) === ",0" ? (
        <Layout setController={setController}>
            <div style={{ margin: "auto", width: "60%", textAlign: "center", height: "90vh" }}>
                <span style={{ fontSize: "40px" }}>Create a course</span>
                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                    <div>
                        <div style={{ backgroundColor: "#C4C4C4", height: "30vh", width: "40vh", margin: "auto", marginTop: "15vh" }}/>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%" }}>
                        <div style={{ margin: "auto", marginTop: "5vh" }}>
                            <div style={{ display: "inline", marginRight: 20 }}>Course pdf</div>
                            <input
                                type="file"
                                ref={fileRef}
                            />
                        </div>
                        <div style={{ margin: "auto", marginTop: "5vh" }}>
                            <div style={{ display: "inline", marginRight: 20 }}>Course thumbnail</div>
                            <input
                                type="file"
                                ref={photoRef}
                            />
                        </div>
                        </div>
                    </div>
                    <div style={{ marginLeft: "5vw" }}>
                        <input ref={nameRef} className="tutor-signup-text-input" style={{ width: "100%", marginRight: "5%", marginTop: "35%" }} type="text" placeholder="Title"></input>
                        <textarea ref={descriptionRef} className="tutor-signup-text-input" style={{ width: "100%", marginRight: "5%", height: "30vh" }} placeholder="Description (200 characters or less)"></textarea>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                    <Link className="tutor-signup-return-home" style={{ width: "20%", marginRight: "5%" }} to="/tutor-dashboard">Back to Dashboard</Link>
                    <button id="tutor-signup-submit" style={{ width: "20%", marginRight: "5%" }} onClick={() => buttonClick()}>Submit</button>
                </div>
                {isSubmitted && <div style={{marginTop: 5, color:"red"}}>Course successfully uploaded!</div>}
            </div>
        </Layout>
    ) : <NeedTutorAccountNotice />;
};

export default TutorContentUpload;
