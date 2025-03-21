import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./dashboardt.css";
import Header from "./header.js";
import Sidebar from "./sidebar.js";
import { Link } from "react-router-dom";
import pic from "../images/user3.png";

const Dashboardt = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="main-wrapper">
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">Welcome!</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item active">Dashboard</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div className="card dash-widget">
                  <div className="card-body">
                    <span className="dash-widget-icon">
                      <i className="fa fa-users"></i>
                    </span>
                    <div className="dash-widget-info">
                      <h3>112</h3>
                      <span>Total Students</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div className="card dash-widget">
                  <div className="card-body">
                    <span className="dash-widget-icon">
                      <i className="fa fa-check"></i>
                    </span>
                    <div className="dash-widget-info">
                      <h3>44</h3>
                      <span>Today Present</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div className="card dash-widget">
                  <div className="card-body">
                    <span className="dash-widget-icon">
                      <i className="fa fa-times"></i>
                    </span>
                    <div className="dash-widget-info">
                      <h3>37</h3>
                      <span>Today Absent</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div className="card dash-widget">
                  <div className="card-body">
                    <span className="dash-widget-icon">
                      <i className="fa fa-clock-o"></i>
                    </span>
                    <div className="dash-widget-info">
                      <h3>5</h3>
                      <span>Today Left</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-12 col-xl-4 d-flex">
                <div className="card flex-fill dash-statistics">
                  <div className="card-body">
                    <h5 className="card-title">Attendance Statistics</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 col-xl-4 d-flex">
                <div className="card flex-fill">
                  <div className="card-body">
                    <h4 className="card-title">Leave Requests Statistics</h4>
                    <div className="statistics">
                      <div className="row">
                        <div className=" text-center">
                          <div className="stats-box mb-4">
                            <p>Total Requests</p>
                            <h3>385</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="progress mb-4">
                      <div
                        className="progress-bar bg-warning"
                        style={{ width: "54%" }}
                      >
                        54%
                      </div>
                      <div
                        className="progress-bar bg-success"
                        style={{ width: "22%" }}
                      >
                        22%
                      </div>
                      <div
                        className="progress-bar bg-danger"
                        style={{ width: "24%" }}
                      >
                        24%
                      </div>
                    </div>
                    <div>
                      <p>
                        <i className="fa fa-dot-circle-o text-warning me-2"></i>
                        Pending Requests <span className="float-end">115</span>
                      </p>
                      <p>
                        <i className="fa fa-dot-circle-o text-success me-2"></i>
                        Accepted Requests <span className="float-end">31</span>
                      </p>
                      <p>
                        <i className="fa fa-dot-circle-o text-danger me-2"></i>
                        Declined Requests <span className="float-end">47</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 col-xl-4 d-flex">
                <div className="card flex-fill">
                  <div className="card-body">
                    <h4 className="card-title">
                      Absent Today{" "}
                      <span className="badge bg-inverse-danger ms-2">5</span>
                    </h4>
                    <div className="leave-info-box">
                      <div className="media d-flex align-items-center">
                        <Link to="/profile" className="avatar">
                          <img src={pic} />
                        </Link>
                        <div className="media-body flex-grow-1">
                          <div className="text-sm ">Mansi Lohiya</div>
                        </div>
                      </div>
                      <div className="row align-items-center mt-3">
                        <div className="col-6">
                          <h6>23 Aug 2022</h6>
                          <span className="text-sm text-muted">Leave Date</span>
                        </div>
                        <div className="col-6 text-end">
                          <span className="badge bg-inverse-danger">
                            Pending
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="leave-info-box">
                      <div className="media d-flex align-items-center">
                        <a href="profile" className="avatar">
                          <img src={pic} />
                        </a>
                        <div className="media-body flex-grow-1">
                          <div className="text-sm my-0">Sakshi Sharma</div>
                        </div>
                      </div>
                      <div className="row align-items-center mt-3">
                        <div className="col-6">
                          <h6 className="mb-0">3 July 2022</h6>
                          <span className="text-sm text-muted">Leave Date</span>
                        </div>
                        <div className="col-6 text-end">
                          <span className="badge bg-inverse-success">
                            Approved
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="load-more text-center">
                      <a className="text-dark">Load More</a>
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
export default Dashboardt;
