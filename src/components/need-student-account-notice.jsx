import React from "react";

const NeedStudentAccountNotice = () => {
    return (
        <>
        <h1>This page is for students only.</h1>
        <p>Please <a href="/signup">register for a student account</a> and log in with that if you would like to access this page.</p>
        </>
    );
}

export default NeedStudentAccountNotice;
