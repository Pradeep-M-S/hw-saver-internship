import React from "react";
import Navbar from "./Navbar";
import SmallScreensNavbar from "./SmallScreensNavbar";
import { Link } from "react-router-dom";
import "./Header2.css";
import { useWindowWidthAndHeight } from "../../CustomHooks";
import { IconContext } from "react-icons";
import { IoIosRocket } from "react-icons/io";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user-selector";
const Header2 = ({ currentUser }) => {
  // use our custom hook to get the the window size
  const [width] = useWindowWidthAndHeight();
  return (
    <header>
      <div className="header-inner">
        {" "}
        <IconContext.Provider
          value={{ size: "40px", color: "#030c1c", marginRight: "40px" }}
        >
          <Link to="/" className="logo nav-link">
            <IoIosRocket /> Intern Project{" "}
          </Link>{" "}
        </IconContext.Provider>
        {/*if the width of the window is bigger than 1000px use <Navebar/>,
                   else user <SmallScreensNavbar/>*/}
        {width > 1000 ? (
          <Navbar
            currentUser={currentUser}
            navClass="nav-big"
            linkClassName="nav-big-link"
          />
        ) : (
          <SmallScreensNavbar
            currentUser={currentUser}
            navClass="nav-small"
            linkClassName="nav-small-link"
          />
        )}
      </div>
    </header>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header2);
