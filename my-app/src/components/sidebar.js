import React, { useState } from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar" id="sidebar">
      <div className="slimScrollDiv">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="submenu">
                <li>
                  <Link to="/dashboardt">
                    <i className="fa fa-tachometer"></i>{" "}
                    <span>&nbsp;&nbsp;&nbsp; Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link to="/allstudents">
                    <i className="fa fa-users"></i>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp; All Users</span>
                  </Link>
                </li>
                <li>
                  <Link to="/leavet">
                    <i className="fa fa-bell"></i>
                    <span>&nbsp;&nbsp;&nbsp; Leave Requests</span>
                  </Link>
                </li>
                <li>
                  <Link to="/attendance">
                    <i className="fa fa-user-check"></i>
                    <span>&nbsp;&nbsp;&nbsp; Attendance</span>
                  </Link>
                </li>
              </li>
            </ul>
          </div>
        </div>
        <div className="slimScrollBar"></div>
        <div className="slimScrollRail"></div>
      </div>
    </div>
  );
};
export default Sidebar;
