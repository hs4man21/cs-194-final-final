import React, { Fragment } from "react";
import { Link } from "react-router-dom";


const StudentHeader = () => {
    return (
        <div style={{ alignItems: "center", display: "flex", backgroundColor: "#5A4FCF", height: "5vh", paddingLeft: "100px", paddingRight: "100px", marginBottom: "2.5vh", marginTop: "2.5vh"}}>
            <div style={{ margin: "auto", width: "100%"}}>
                <Link style={{ marginLeft: "5vw", marginRight: "2.5vw", color: "#FFFFFF", width:"80px"}} className="header-link" to="/dashboard">Dashboard</Link>
                <Link style={{ marginRight: "2.5vw", marginLeft: "6vw", color: "#FFFFFF", width:"58px"}} className="header-link" to="/match">Match With a Tutor</Link>
                <Link style={{ marginRight: "2.5vw", marginLeft: "6vw", color: "#FFFFFF", width:"80px"}} className="header-link" to="/schedulemeet">Schedule a Meeting</Link>
                <Link style={{ marginRight: "2.5vw", marginLeft: "6vw", color: "#FFFFFF", width:"80px"}} className="header-link" to="/history">History</Link>
                <Link style={{ marginLeft: "6vw", color: "#FFFFFF"}} className="header-link" to="/courses">Courses</Link>
                <Link style={{ marginLeft: "6vw", color: "#FFFFFF"}} className="header-link" to="/discover">Discover</Link>
            </div>
        </div>
    );
};

const StudentLayout = ({ children }) => {
    return (
        <Fragment>
            <StudentHeader/>
            {children}
        </Fragment>
    );
};

export default StudentLayout;