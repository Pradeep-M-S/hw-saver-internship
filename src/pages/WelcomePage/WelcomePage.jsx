import React, { Component } from "react";
import "./WelcomePage.css";
import SignIn from "../../components/SignIn/SignIn";
class WelcomePage extends Component {
  render() {
    return (
      <div className="welcome-page">
        <div className="left-content">
          {" "}
          <SignIn />
        </div>
        <div className="right-content"></div>
      </div>
    );
  }
}

export default WelcomePage;
