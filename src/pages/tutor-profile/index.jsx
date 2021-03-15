import React, { useState, useRef, useEffect } from "react";
import Layout from "../../components/layout";
import StudentLayout from "../../components/student-layout";
import StudentProfilePic from "../../User-Circle.png";
import NeedStudentAccountNotice from "../../components/need-student-account-notice";
import { withRouter } from "react-router-dom";

const TutorProfile = ({ match, token, setController }) => {
    const currUser = token.split(",");
    const [yourTutors, setYourTutors] = useState([]);
    const [tutor, setTutor] = useState(null);
    const [render, setRender] = useState(null);
    const [tutorCourses, setTutorCourses] = useState(null);
    const ratingRef = useRef(null);
    const [ratingError, setRatingError] = useState(null);
    const [ratings, setRatings] = useState([]);
    const [avgRating, setAvgRating] = useState(null);

    useEffect(() => {
        fetch(`https://street-smarts-demo.herokuapp.com/get-tutor/${match.params.id}`).then((res) => {
            res.json().then((json) => {
                setTutor(json[0]);
            });
        });
        fetch(`https://street-smarts-demo.herokuapp.com/get-tutor-content/${match.params.id}`).then((res) => {
            res.json().then((json) => {
                setTutorCourses(json);
            });
        });
    }, []);

    useEffect(() => {
        fetch(`https://street-smarts-demo.herokuapp.com/get-student-tutors/${currUser[0]}`).then((res) => {
            res.json().then((json) => {
                let list = [];
                json.forEach((el) => {
                    list.push(el[0][0]);
                })
                setYourTutors(list);
            })
        });
        fetch(`https://street-smarts-demo.herokuapp.com/get-tutor-ratings/${match.params.id}`).then((res) => {
            res.json().then((json) => {
                console.log("Yeet");
                console.log(json);
                let numOfRatings = 0;
                let sumOfRatings = 0;
                json.forEach((rating) => {
                    if (rating[3] !== null) {
                        numOfRatings += 1;
                        sumOfRatings += parseInt(rating[3]);
                    }
                });
                console.log(sumOfRatings);
                console.log(numOfRatings);
                setAvgRating(sumOfRatings / numOfRatings);
                setRatings(numOfRatings);
            });
        });
    }, [render]);

    function addTutor() {
        fetch(`https://street-smarts-demo.herokuapp.com/add-student-tutor/${currUser[0]}/${match.params.id}`).then(() => {
            setRender(Math.random());
        });
    }

    function removeTutor() {
        fetch(`https://street-smarts-demo.herokuapp.com/remove-student-tutor/${currUser[0]}/${match.params.id}`).then(() => {
            setRender(Math.random());
        });
    }

    function updateTutorRating() {
        fetch(`https://street-smarts-demo.herokuapp.com/update-tutor-rating/${currUser[0]}/${match.params.id}/${ratingRef.current.value}`).then(() => {
            setRatingError(false);
            setRender(Math.random());
        });
    }

    return token ? (
        <Layout setController={setController}>
            <StudentLayout>
                <div style={{ width: "80%", margin: "auto", height: "85vh" }}>
                    <div style={{ display: "flex", marginTop: "10vh" }}>
                        <img src={tutor ? `https://street-smarts-files.s3.amazonaws.com/${tutor[5]}` : StudentProfilePic} style={{ marginRight: 80, height: 160, width: 160, objectFit: "contain", backgroundColor: "lightgray" }} />
                        <div>
                            <div style={{ fontSize: 48 }}>{tutor ? `${tutor[0]} ${tutor[1]}` : "Tutor name"}</div>
                            <div style={{ marginTop: 20, fontSize: 24 }}>{tutor ? `Works at ${tutor[4]} and studied at ${tutor[3]}` : ""}</div>
                            {tutor && yourTutors.includes(tutor[0]) ? (
                                <div style={{ marginTop: 20 }}>
                                    <button onClick={() => removeTutor()}>Remove from your tutors</button>
                                    <input ref={ratingRef} style={{ marginLeft: 15, marginRight: 15, width: 75 }} type="text" placeholder="Rate (1-10)" />
                                    <button onClick={() => {
                                        if (ratingRef.current.value === "1"
                                            || ratingRef.current.value === "2"
                                            || ratingRef.current.value === "3"
                                            || ratingRef.current.value === "4"
                                            || ratingRef.current.value === "5"
                                            || ratingRef.current.value === "6"
                                            || ratingRef.current.value === "7"
                                            || ratingRef.current.value === "8"
                                            || ratingRef.current.value === "9"
                                            || ratingRef.current.value === "10") {
                                            updateTutorRating();
                                        } else {
                                            setRatingError(true);
                                        }
                                    }}>Submit rating</button>
                                    {ratingError && <span style={{ marginRight: 15, color: "red" }}>Error: Rating must be a whole number between 1 and 10</span>}
                                </div>
                            ) : (
                                    <div style={{ marginTop: 20 }}>
                                        <button onClick={() => addTutor()}>Add to your tutors</button>
                                    </div>
                                )}
                        </div>
                    </div>
                    <div style={{ marginTop: "5vh" }}>
                        <div style={{ fontSize: 24 }}>{tutor ? `${tutor[0]}'s` : "This tutor's"} courses</div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "flex-start", height: "25vh" }}>
                        {tutorCourses?.map((course) => (
                            <div style={{ marginRight: "5vw" }}>
                                <a href={`https://street-smarts-files.s3.amazonaws.com/${course[5]}`} target="_blank"><div style={{ backgroundColor: "#C4C4C4", width: "15vw", height: "10vw", marginTop: "2.5vh", marginBottom: "2.5vh" }}><img src={`https://street-smarts-files.s3.amazonaws.com/${course[4]}`} objectFit="contain" height="100%" width="100%" /></div></a>
                                <div>{course[1]}</div>
                            </div>
                        ))}
                        {/* <div style={{ backgroundColor: "#C4C4C4", width: "15vw", marginTop: "2.5vh", marginBottom: "2.5vh" }}></div>
                        <div style={{ backgroundColor: "#C4C4C4", width: "15vw", marginTop: "2.5vh", marginBottom: "2.5vh" }}></div>
                        <div style={{ backgroundColor: "#C4C4C4", width: "15vw", marginTop: "2.5vh", marginBottom: "2.5vh" }}></div>
                        <div style={{ backgroundColor: "#C4C4C4", width: "15vw", marginTop: "2.5vh", marginBottom: "2.5vh" }}></div> */}
                    </div>
                    <div style={{ marginTop: "5vh", display: "flex" }}>
                        <div>
                            <div style={{ fontSize: 24 }}>Average rating: {avgRating ? `${avgRating} / 10` : "N/A"}</div>
                            <div style={{ marginTop: "2vh", fontSize: 18, color: "darkslategray" }}>({ratings} {ratings === 1 ? "rating" : "ratings"} received)</div>
                        </div>
                        <div style={{ marginLeft: "10vw", display: "flex", justifyContent: "space-between" }}>
                            <div style={{ boxShadow: "0px 4px 6px 2px rgba(0, 0, 0, 0.25)", width: "15vw", marginRight: "5vw" }}></div>
                            <div style={{ boxShadow: "0px 4px 6px 2px rgba(0, 0, 0, 0.25)", width: "15vw", marginRight: "5vw" }}></div>
                            <div style={{ boxShadow: "0px 4px 6px 2px rgba(0, 0, 0, 0.25)", width: "15vw", marginRight: "5vw" }}></div>
                        </div>
                    </div>
                </div>
            </StudentLayout>
        </Layout >
    ) : <NeedStudentAccountNotice />;
}

export default withRouter(TutorProfile);