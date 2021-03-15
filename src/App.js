import React, { Fragment, useState } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

// Pages
import MainPage from "./pages/index";
import StudentsPage from "./pages/students";
import TutorsPage from "./pages/tutors";
import NotFoundPage from "./pages/404";
import TutorDashboard from "./pages/tutor-dashboard";
import TutorContentUpload from "./pages/tutor-content-upload";
import TutorLessonUpload from "./pages/tutor-content-upload-2";
import MatchPage from "./pages/match";
import LoginPage from "./pages/login"
import SignUpPage from "./pages/signup"
import CoursesPage from "./pages/courses"
import DashboardPage from "./pages/dashboard";
import HistoryPage from "./pages/history";
import DiscoverPage from "./pages/discover";
import TutorProfile from "./pages/tutor-profile";

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authed
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
}

function setToken(userToken) {
  sessionStorage.setItem('token', userToken);
}

function getToken() {
  return sessionStorage.token;
}

function App() {
  const [controller, setController] = useState();
  const token = getToken();

  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={() => <MainPage setController={setController} />} />
          <Route exact path="/students" component={StudentsPage} />
          <Route exact path="/tutors" component={TutorsPage} />
          <PrivateRoute authed={token} path="/tutor-dashboard" component={() => <TutorDashboard token={token} setController={setController} />} />
          <PrivateRoute authed={token} path="/tutor-content-upload" component={() => <TutorContentUpload token={token} setController={setController} />} />
          <Route exact path="/login" component={() => <LoginPage setToken={setToken} setController={setController} />} />
          <Route exact path="/signup" component={SignUpPage} />
          <PrivateRoute authed={token} path="/courses" component={() => <CoursesPage token={token} setController={setController} />} />
          <PrivateRoute authed={token} path="/dashboard" component={() => <DashboardPage token={token} setController={setController} />} />
          <PrivateRoute authed={token} path="/history" component={() => <HistoryPage token={token} setController={setController} />} />
          <PrivateRoute authed={token} path='/discover' component={() => <DiscoverPage token={token} setController={setController} />} />
          <PrivateRoute authed={token} path='/match' component={() => <MatchPage token={token} setController={setController} />} />
          <PrivateRoute authed={token} path="/404" component={NotFoundPage} />
          <PrivateRoute authed={token} path="/tutor-profile/:id" component={() => <TutorProfile token={token} setController={setController} />} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
