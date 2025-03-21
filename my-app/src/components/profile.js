import React from "react";
import Header from "./header.js";
import Sidebar from "./sidebar.js";
import pic from '../images/user3.png';
import {Link} from 'react-router-dom';
const Profilet = () => {
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <Sidebar />
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">Profile</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/dashboardt">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Profile</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card ">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="profile-view">
                      <div className="profile-img-wrap">
                        <div className="profile-img">
                          <div>
                            <img
                              src={pic}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="profile-basic">
                        <div className="row">
                          <div className="col-md-5">
                            <div className="profile-info-left">
                              <h3 className="user-name">StudentABC</h3>
                              <small className="text-muted">Student</small>
                              <div className="staff-id">
                                Student ID : 2009459
                              </div>
                              <div className="staff-msg">
                                <a className="btn btn-custom" href="apps-chat">
                                  Send Message
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-7">
                            <ul className="personal-info">
                              <li>
                                <div className="title">Phone: 123456789</div>
                              </li>
                              <li>
                                <div className="title">Email:  abc@gmail.com</div>
                              </li>
                              <li>
                                <div className="title">Birthday: 2nd February</div>
                              </li>
                              <li>
                                <div className="title">Address: 123 xyx colony</div>
                              </li>
                              <li>
                                <div className="title">Gender: Male</div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profilet;
