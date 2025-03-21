import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./header.js";
import Sidebar from "./sidebar.js";
import "./leavereqteacher.css";
import pic from "../images/user3.png";
const LeavereqT = () => {
  const [isvisible, setisvisible] = useState(true);
  const [isdropvisible, setdropisvisible] = useState(true);
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <Sidebar />
        <div className="page-wrapper" style={{ minHeight: " 535px" }}>
          <div className="content container-fluid">
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="page-title">Leaves</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="dashboard">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">Leaves</li>
                  </ul>
                </div>
                <div className="col-auto float-end ms-auto">
                  <div
                    className="btn add-btn"
                    onClick={() => setisvisible(!isvisible)}
                  >
                    <i className="fa fa-plus"></i> Add Leave
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-3">
                <div className="stats-info">
                  <h6>Present</h6>
                  <h4> 48/76</h4>
                </div>
              </div>
              <div className="col-md-3">
                <div className="stats-info">
                  <h6>No. Of Planned Leaves</h6>
                  <h4>
                    6
                  </h4>
                </div>
              </div>
              <div className="col-md-3">
                <div className="stats-info">
                  <h6>No. of Unplanned Leaves</h6>
                  <h4>
                    6
                  </h4>
                </div>
              </div>
              <div className="col-md-3">
                <div className="stats-info">
                  <h6>Requests Pending</h6>
                  <h4>5</h4>
                </div>
              </div>
            </div>

            <div className="row filter-row">
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                <div className="form-group form-focus">
                  <input type="text" className="form-control" />
                  <label className="focus-label">Student Name</label>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                <div>
                  <select>
                    <option>Leave Type</option>
                    <option>Casual Leave</option>
                    <option>Medical Leave</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                <div>
                  <select>
                    <option>Leave Status</option>
                    <option> Pending </option>
                    <option> Approved </option>
                    <option> Rejected </option>
                  </select>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                <div className="form-group form-focus">
                  <div className="cal-icon">
                    <input
                      className="form-control floating datetimepicker"
                      type="text"
                    />
                  </div>
                  <label className="focus-label">From</label>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                <div className="form-group form-focus">
                  <div className="cal-icon">
                    <input
                      className="form-control floating datetimepicker"
                      type="text"
                    />
                  </div>
                  <label className="focus-label">To</label>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                <button className="btn btn-success btn-lg"> Search </button>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <div className="dataTables_wrapper dt-bootstrap4">
                    <div className="row">
                      <div className="col-sm-12">
                        <table
                          className="table table-striped custom-table  no-footer"
                        >
                          <thead>
                            <tr role="row">
                              <th style={{ width: "310px" }}>Student</th>
                              <th style={{ width: "155px" }}>Leave Type</th>
                              <th style={{ width: "150px" }}>From</th>
                              <th style={{ width: "180px" }}>To</th>
                              <th>No of Days</th>
                              <th style={{ width: "180px" }}>Reason</th>
                              <th style={{ width: "111px" }}>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="odd">
                              <td >
                                <h2 className="table-avatar">
                                  <a href="profile" className="avatar">
                                    <img
                                      src={pic}
                                    />
                                  </a>
                                  <a>
                                    {" "}
                                    Hashmita
                                  </a>
                                </h2>
                              </td>
                              <td>Medical Leave</td>
                              <td>7 July 2022</td>
                              <td>9 July 2022</td>
                              <td>2 day</td>
                              <td>Had Fever</td>
                              <td className="text-center">
                                <div className="dropdown action-label">
                                  <a
                                    className=" btn-sm btn-rounded dropdown-toggle"
                                  >
                                    <i className="fa fa-dot-circle-o text-success"></i>{" "}
                                    Approved
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="#">
                                      <i className="fa fa-dot-circle-o text-purple"></i>{" "}
                                      New
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      <i className="fa fa-dot-circle-o text-info"></i>{" "}
                                      Pending
                                    </a>
                                    <a
                                      className="dropdown-item"
                                      href="#"
                                    >
                                      <i className="fa fa-dot-circle-o text-success"></i>{" "}
                                      Approved
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      <i className="fa fa-dot-circle-o text-danger"></i>{" "}
                                      Declined
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>

                            <tr className="odd">
                              <td className="sorting_1">
                                <h2 className="table-avatar">
                                  <div className="avatar">
                                    <img
                                      src={pic}
                                    />
                                  </div>
                                  <a>
                                    {" "}
                                    Mansi Sharma
                                  </a>
                                </h2>
                              </td>
                              <td>Casual Leave</td>
                              <td>5 July 2022</td>
                              <td>7 July 2022</td>
                              <td>2 day</td>
                              <td>Going Out of Station</td>
                              <td className="text-center">
                                <div className="dropdown action-label">
                                  <a
                                    className=" btn-sm btn-rounded dropdown-toggle"
                                  >
                                    <i className="fa fa-dot-circle-o text-success"></i>{" "}
                                    Approved
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="#">
                                      <i className="fa fa-dot-circle-o text-purple"></i>{" "}
                                      New
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      <i className="fa fa-dot-circle-o text-info"></i>{" "}
                                      Pending
                                    </a>
                                    <a
                                      className="dropdown-item"
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#approve_leave"
                                    >
                                      <i className="fa fa-dot-circle-o text-success"></i>{" "}
                                      Approved
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      <i className="fa fa-dot-circle-o text-danger"></i>{" "}
                                      Declined
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="addleave"
            className={`modal custom-modal fade ${isvisible ? "" : "show"}`}
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add Leave</h5>
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setisvisible(!isvisible)}
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label>
                        Leave Type <span className="text-danger">*</span>
                      </label>
                      <select
                        className="select "
                        onClick={() => setdropisvisible(!isdropvisible)}
                      >
                        <option>Select Leave Type</option>
                        <option>Casual Leave 12 Days</option>
                        <option>Medical Leave</option>
                        <option>Loss of Pay</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>
                        From <span className="text-danger">*</span>
                      </label>
                      <div className="cal-icon">
                        <input
                          className="form-control datetimepicker"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>
                        To <span className="text-danger">*</span>
                      </label>
                      <div className="cal-icon">
                        <input
                          className="form-control datetimepicker"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>
                        Number of days <span className="text-danger">*</span>
                      </label>
                      <input className="form-control" readonly="" type="text" />
                    </div>
                    <div className="form-group">
                      <label>
                        Remaining Leaves <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        readonly=""
                        value="12"
                        type="text"
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        Leave Reason <span className="text-danger">*</span>
                      </label>
                      <textarea rows="4" className="form-control"></textarea>
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

          <div
            className="modal custom-modal fade"
            id="approveleave"
            role="dialog"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="form-header">
                    <h3>Leave Approve</h3>
                    <p>Are you sure want to approve for this leave?</p>
                  </div>
                  <div className="modal-btn delete-action">
                    <div className="row">
                      <div className="col-6">
                        <button className="btn btn-primary continue-btn">
                          Approve
                        </button>
                      </div>
                      <div className="col-6">
                        <button className="btn btn-primary cancel-btn">
                          Decline
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal custom-modal fade"
            id="delete_approve"
            role="dialog"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="form-header">
                    <h3>Delete Leave</h3>
                    <p>Are you sure want to delete this leave?</p>
                  </div>
                  <div className="modal-btn delete-action">
                    <div className="row">
                      <div className="col-6">
                        <a
                          href="javascript:void(0);"
                          className="btn btn-primary continue-btn"
                        >
                          Delete
                        </a>
                      </div>
                      <div className="col-6">
                        <a
                          href="javascript:void(0);"
                          data-bs-dismiss="modal"
                          className="btn btn-primary cancel-btn"
                        >
                          Cancel
                        </a>
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
export default LeavereqT;
