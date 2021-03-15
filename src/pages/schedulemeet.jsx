import React from "react";
import Layout from "../components/layout";
import StudentLayout from "../components/student-layout";
import { Link } from "react-router-dom";

const ScheduleMeetPage = () => {
  return (
    <Layout>
      <StudentLayout>
      <div className="student-page-container" style={{ backgroundColor: "#FFFFFF", height: "90vh", justifyContent: "center", width: "100%"}}> 
        <div id="dropdown-placeholder">Choose Tutor</div>
        <div style={{marginRight: "0px"}}>
          <div id="row-calendar-boxes" style={{marginTop:"100px"}}>
            <div className="calendar-box">Sunday</div>
            <div className="calendar-box">28</div>
            <div className="calendar-box">7</div>
            <div className="calendar-box">14</div>
            <div className="calendar-box">21</div>
            <div className="calendar-box">28</div>
          </div>
        </div>
        <div style={{marginRight: "0px"}}>
          <div id="row-calendar-boxes" style={{marginTop:"100px"}}>
            <div className="calendar-box">Monday</div>
            <div className="calendar-box"><Link to="/schedulemeet">1</Link></div>
            <div className="calendar-box">8</div>
            <div className="calendar-box">15</div>
            <div className="calendar-box">22</div>
            <div className="calendar-box">29</div>
          </div>
        </div>
        <div style={{marginRight: "0px"}}>
          <div id="row-calendar-boxes" style={{marginTop:"100px"}}>
            <div className="calendar-box">Tuesday</div>
            <div className="calendar-box"><Link to="/schedulemeet">2</Link></div>
            <div className="calendar-box">9</div>
            <div className="calendar-box">16</div>
            <div className="calendar-box">23</div>
            <div className="calendar-box">30</div>
          </div>
        </div>
        <div style={{marginRight: "0px"}}>
          <div id="row-calendar-boxes" style={{marginTop:"100px"}}>
            <div className="calendar-box">Wednesday</div>
            <div className="calendar-box"><Link to="/schedulemeet">3</Link></div>
            <div className="calendar-box">10</div>
            <div className="calendar-box">17</div>
            <div className="calendar-box">24</div>
            <div className="calendar-box">31</div>
          </div>
        </div>
        <div style={{marginRight: "0px"}}>
          <div id="row-calendar-boxes" style={{marginTop:"100px"}}>
            <div className="calendar-box">Thursday</div>
            <div className="calendar-box"><Link to="/schedulemeet">4</Link></div>
            <div className="calendar-box">11</div>
            <div className="calendar-box">18</div>
            <div className="calendar-box">25</div>
            <div className="calendar-box">1</div>
          </div>
        </div>
        <div style={{marginRight: "0px"}}>
          <div id="row-calendar-boxes" style={{marginTop:"100px"}}>
            <div className="calendar-box">Friday</div>
            <div className="calendar-box"><Link to="/schedulemeet">5</Link></div>
            <div className="calendar-box">12</div>
            <div className="calendar-box">19</div>
            <div className="calendar-box">26</div>
            <div className="calendar-box">2</div>
          </div>
        </div>
        <div style={{marginRight: "0px"}}>
          <div id="row-calendar-boxes" style={{marginTop:"100px"}}>
            <div className="calendar-box">Saturday</div>
            <div className="calendar-box">6</div>
            <div className="calendar-box">13</div>
            <div className="calendar-box">20</div>
            <div className="calendar-box">27</div>
            <div className="calendar-box">3</div>
          </div>
        </div>
        
      </div>
        {/* FIX!! */}
        
        {/* <div className="student-page-container" style={{ backgroundColor: "#FFFFFF", height: "90vh", justifyContent: "center", width: "100%"}}>
          <div id="e39_5"><div id="e39_11"></div><div id="e2_4"><div id="e4_0"></div><div id="e4_1"></div><div id="e5_0"></div><div id="e5_1"></div><span id="e5_2">Feb. 2021</span><span id="e14_0">S</span><span id="e15_0">S</span><span id="e15_1">S</span><span id="e15_2">S</span><span id="e15_3">S</span><span id="e15_4">S</span><span id="e15_5">S</span></div><div id="e40_2"></div><div id="e44_27"></div><span id="e40_4">Choose your tutor</span><div id="e15_12"></div><span id="e15_13">SCHEDULE</span></div>

        </div> */}
      </StudentLayout>
    </Layout>
    
  );
};

export default ScheduleMeetPage;