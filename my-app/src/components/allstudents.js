import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./allstudents.css";
import { Link } from "react-router-dom";
import Header from "./header.js";
import Sidebar from "./sidebar.js";
import Dropd from "./dropdown.js";
import pic from "../images/user3.png";
const AllStudents = () => {
  const [isvisible, setisvisible] = useState(true);
  const [datas, setdatas] = useState([]);

  const load_data = () => {
    fetch("http://127.0.0.1:8000/backapi/users/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        setdatas(data);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="main-wrapper">
      <Header />
      <Sidebar />
      <div className="page-wrapper" style={{ minHeight: "574px" }}>
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Student</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/dashboardt">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Student</li>
                </ul>
              </div>
              <div className="col-auto float-end ms-auto">
                <a href="#" className="btn add-btn">
                  <i className="fa fa-plus"></i> Add Student
                </a>
              </div>
            </div>
          </div>

          <div className="row filter-row">
            <div className="col-sm-6 col-md-4">
              <div className="form-group form-focus">
                <input
                  type="text"
                  className="form-control floating"
                  placeholder="Student ID "
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="form-group form-focus">
                <input
                  type="text"
                  className="form-control floating"
                  placeholder="Student Name "
                />
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <a href="#" className="btn btn-success btn-lg">
                {" "}
                Search{" "}
              </a>
            </div>
          </div>

          <div className="row staff-grid-row">
            {load_data()}
            {datas.map((data) => {
              return (
                <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                  <div className="profile-widget">
                    <div className="profile-img">
                      <a href="profile" className="avatar">
                        <img src={pic} alt="" />
                      </a>
                    </div>
                    <Dropd />
                    <h4 className="user-name  text-ellipsis">
                      <Link to="profile">{data.username}</Link>
                    </h4>
                    <div className="small text-muted">Student</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          id="add_employee"
          className="modal custom-modal fade"
          style={{ display: "none" }}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Employee</h5>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">
                          First Name <span className="text-danger">*</span>
                        </label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">Last Name</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">
                          Username <span className="text-danger">*</span>
                        </label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">Password</label>
                        <input className="form-control" type="password" />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">
                          Student ID <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>

                  <div className="submit-section">
                    <button className="btn btn-primary submit-btn">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div id="editstudent" className="modal custom-modal fade">
          <div className=" modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Student Profile</h5>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">
                          Name <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          value="John"
                          type="text"
                        />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-form-label">
                          Student ID <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          value=""
                          className="form-control floating"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="submit-section">
                    <button className="btn btn-primary submit-btn">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal custom-modal fade"
          style={{ display: "none" }}
          id="deletestudent"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete Student</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div className="modal-btn delete-action">
                  <div className="row">
                    <div className="col-6">
                      <button className="btn btn-primary continue-btn">
                        Delete
                      </button>
                    </div>
                    <div className="col-6">
                      <button className="btn btn-primary cancel-btn">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AllStudents;
