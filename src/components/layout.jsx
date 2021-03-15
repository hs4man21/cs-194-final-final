import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

const Header = ({ setController }) => {
    return (
        <div style={{ alignItems: "center", display: "flex", backgroundColor: "white", height: "5vh", paddingLeft: "100px", paddingRight: "100px", marginBottom: "2.5vh", marginTop: "2.5vh" }}>
            <Link style={{ marginRight: "42vw" }} className="header-link" to="/">Street Smarts</Link>
            <Link style={{ marginRight: "2.5vw" }} className="header-link" to="/">Features</Link>
            {/* <Link style={{ marginRight: "2.5vw" }} className="header-link" to="/">Categories</Link> */}
            <Link style={{ marginRight: "2.5vw" }} className="header-link" to="/login">Login</Link>
            <Link style={{ marginRight: "2.5vw" }} className="header-link" to="/signup">Student signup</Link>
            <Link style={{ marginRight: "2.5vw" }} className="header-link" to="/tutors">Tutor signup</Link>
            {/* <button className="register-button" style={{ backgroundColor: "18A0FB", height: 40, width: 100, marginRight: "1vw" }}>Register</button> */}
            <button className="login-button" onClick={() => {
                sessionStorage.setItem('token', "");
                setController(Math.random());
                }} style={{ backgroundColor: "18A0FB", height: 40, width: 100 }}>Log out</button>
        </div>
    );
};

const Footer = () => {
    return (
        <div style={{ paddingLeft: "100px", paddingRight: "100px" }} >
            <div style={{ display: "flex", backgroundColor: "white", marginTop: 60 }}>
                <Link className="header-link" style={{ marginRight: "50vw" }} to="/">Street Smarts</Link>
                <div style={{ display: "flex", flexDirection: "column", marginRight: "2.5vw" }}>
                    <Link className="footer-link-top" to="/">Partners</Link>
                    <Link className="footer-link" to="/">Partner Schools</Link>
                    <Link className="footer-link" to="/">Partner Organizations</Link>
                    <Link className="footer-link" to="/">Other Partners</Link>
                </div>
                <div style={{ display: "flex", flexDirection: "column", marginRight: "2.5vw" }}>
                    <Link className="footer-link-top" to="/">Community</Link>
                    <Link className="footer-link" to="/">Featured Tutors</Link>
                    <Link className="footer-link" to="/">Recorded Courses</Link>
                    <Link className="footer-link" to="/">Ongoing Courses</Link>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Link className="footer-link-top" to="/">Company</Link>
                    <Link className="footer-link" to="/">About Us</Link>
                    <Link className="footer-link" to="/">Contact</Link>
                    <Link className="footer-link" to="/">History</Link>
                </div>
                {/* <div style={{ display: "flex", flexDirection: "column" }}>
                    <button className="register-button" style={{ backgroundColor: "18A0FB", marginBottom: 16, height: 40, width: 100 }}>Register</button>
                    <button className="login-button" style={{ backgroundColor: "18A0FB", height: 40, width: 100 }}>Log in</button>
                </div> */}
            </div>
            <div style={{ borderTop: "1px grey solid", paddingBottom: "40px", marginTop: "40px" }} />
            <div style={{ display: "flex", backgroundColor: "white", fontSize: "12px", paddingBottom: "40px" }}>
                <span style={{ marginRight: "50vw" }}>Street Smarts, Inc. 2021. We love our users!</span>
                <span style={{ marginRight: 10 }}>Follow us:</span>
                <SocialIcon url="http://twitter.com/jaketrent" style={{ height: 40, width: 40, marginRight: 10 }} />
                <SocialIcon url="http://twitter.com/jaketrent" network="facebook" style={{ height: 40, width: 40, marginRight: 10 }} />
                <SocialIcon url="http://twitter.com/jaketrent" network="linkedin" style={{ height: 40, width: 40, marginRight: 10 }} />
                <SocialIcon url="http://twitter.com/jaketrent" network="instagram" bgColor="#C13584" style={{ height: 40, width: 40, marginRight: 10}} />
            </div>
        </div>
    );
}

const Layout = ({ children, setController }) => {
    return (
        <Fragment>
            <Header setController={setController} />
            {children}
            <Footer/>
        </Fragment>
    );
};

export default Layout;
