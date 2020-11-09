import React from "react";
import "./Header.css";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

import { IconContext } from "react-icons";
import { IoIosRocket, IoMdImages, IoIosAlbums } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { GoSignOut, GoSignIn } from "react-icons/go";
import { BsFilePost } from "react-icons/bs";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user-selector";
const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <IconContext.Provider value={{ size: "40px", color: "#214252" }}>
        <Link to="/" className="logo-container">
          <IoIosRocket />{" "}
          <Link to="/" className="option">
            NASA
          </Link>
        </Link>{" "}
      </IconContext.Provider>
      {currentUser ? (
        <div className="options">
          {" "}
          <Link className="option" to="/">
            <AiFillHome className="react-icons-header" />
            Home
          </Link>
          <Link className="option" to="/images">
            {" "}
            <IoMdImages className="react-icons-header" />
            Images
          </Link>{" "}
          <Link className="option" to="/posts">
            {" "}
            <BsFilePost className="react-icons-header" />
            Posts
          </Link>{" "}
          <Link className="option" to="/albums">
            {" "}
            <IoIosAlbums className="react-icons-header" />
            Albums
          </Link>
          <Link to="/welcome">
            {" "}
            <div className="option" onClick={() => auth.signOut()}>
              <GoSignOut className="react-icons-header" />
              Sign Out
            </div>
          </Link>
        </div>
      ) : (
        <div className="options">
          <div className="option" onClick={() => auth.signOut()}>
            <Link to="/welcome">
              <GoSignIn className="react-icons-header" />
              Sign In
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
