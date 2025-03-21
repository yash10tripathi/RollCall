import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import pic from '../images/user3.png';
const Header = () => {
  const [isvisible, setisvisible] = useState(true);
  const [isdropvisible, setdropisvisible] = useState(true);
  return (
    <div className="header">
      <div className="header-left"></div>
      <a id="toggle_btn" href="javascript:void(0);">
        <span className="bar-icon">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </a>

      <div className="page-title-box">
        <h2>
          <i class="fa fa-graduation-cap" aria-hidden="true"></i>
          <em> Roll-Call.com </em>
        </h2>
      </div>

      <a id="mobile_btn" className="mobile_btn" href="#sidebar">
        <i className="fa fa-bars"></i>
      </a>

      <ul className="nav user-menu">
        <li
          className="nav-item dropdown has-arrow main-drop "
          onClick={() => setisvisible(!isvisible)}
        >
          <a
            href="#"
            className="dropdown-toggle nav-link "
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="user-img">
              <img
                src={pic}
              />
              <span className="status online"></span>
            </span>
            <span>&nbsp;&nbsp;User</span>
          </a>
          <div className={`dropdown-menu ${isvisible ? "" : "show"}`}>
            <Link className="dropdown-item" to="/profile">
              My Profile
            </Link>
            <Link className="dropdown-item" to="/signin">
              Logout
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Header;
