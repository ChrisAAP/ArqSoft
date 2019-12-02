import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/login.component";
import Admin from "./components/admin-site.component";
import Signup from "./components/signup-teacher.component";
import Student from "./components/student-site.component";
import Teacher from "./components/teacher-site.component";


// import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              {/* <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" /> */}
            </a>
            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Login</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/signup" className="nav-link">Signup</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/teacher" className="nav-link">Teacher</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/student" className="nav-link">Student</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/admin" className="nav-link">Other</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/teacher" exact component={Teacher} />
          <Route path="/student" exact component={Student} />
          <Route path="/admin" exact component={Admin} />
        </div>
      </Router>
    );
  }
}

export default App;