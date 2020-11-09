//SmallScreensNavbar.js
import React, { useState } from "react";
import { NavComponent } from "./Navbar";
import "./Header2.css";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user-selector";

const SmallScreensNavbar = ({ currentUser }) => {
  const [translate, setTranslate] = useState(true);
  return (
    <div>
      <button
        className="hamburger-btn"
        onClick={() => setTranslate(!translate)}
      >
        {" "}
        {/* toggle translate */}
        {/* change the btn text based on whether translate is true or false */}
        {translate ? <span>&#9776;</span> : <span>&times;</span>}
      </button>
      {/*hide and show the sidebar list based on whether translate is true or false*/}
      <div
        id="sidebar-list"
        className={`${translate ? "addTransiton" : "removeTransition"}`}
      >
        <NavComponent
          currentUser={currentUser}
          navClass="nav-small"
          linkClassName="nav-small-link"
          onClick={() => setTranslate(!translate)} //set translate to true to hide the sidebar list
        />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(SmallScreensNavbar);
