import React from "react";
import { Link } from "react-router-dom";
import "./Header2.css";
import { AiFillHome } from "react-icons/ai";
import { IoMdImages, IoIosAlbums } from "react-icons/io";
import { BsFilePost } from "react-icons/bs";
import { GoSignOut } from "react-icons/go";
import { auth } from "../../firebase/firebase.utils";

const Navbar = ({ navClass, linkClassName, currentUser }) => (
  <NavComponent
    currentUser={currentUser}
    navClass={navClass}
    linkClassName={linkClassName}
  />
);

export const NavComponent = ({ navClass, linkClassName, currentUser }) => (
  <div>
    {currentUser ? (
      <nav className={navClass}>
        <Link className={linkClassName} to="/">
          <AiFillHome className="react-icons-header" />
          Home
        </Link>
        <Link className={linkClassName} to="/images">
          {" "}
          <IoMdImages className="react-icons-header" />
          Images
        </Link>{" "}
        <Link className={linkClassName} to="/posts">
          {" "}
          <BsFilePost className="react-icons-header" />
          Posts
        </Link>{" "}
        <Link className={linkClassName} to="/albums">
          {" "}
          <IoIosAlbums className="react-icons-header" />
          Albums
        </Link>
        <Link to="/welcome">
          {" "}
          <div className={linkClassName} onClick={() => auth.signOut()}>
            <GoSignOut className="react-icons-header" />
            Sign Out
          </div>
        </Link>
      </nav>
    ) : (
      <Link to="/welcome">
        {" "}
        <div className={linkClassName} onClick={() => auth.signOut()}>
          <GoSignOut className="react-icons-header" />
          Sign In
        </div>
      </Link>
    )}
  </div>
);
export default Navbar;
