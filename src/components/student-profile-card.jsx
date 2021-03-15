import React from "react";

const StudentProfileCard = ({ username, profilePic }) => {
    return (
            <div style={{ display: "flex", paddingTop: 10, paddingRight: 5, paddingLeft: 5, paddingBottom: 10, marginTop: "2.5vh", marginBottom: "2.5vh" }}>
                <img style={{ height: 100, width: 100 }} src={`https://street-smarts-files.s3.amazonaws.com/${profilePic}`} />
                <div style={{ marginLeft: 5, marginTop: 15 }}>{username}</div>
            </div>
    );
}

export default StudentProfileCard;
