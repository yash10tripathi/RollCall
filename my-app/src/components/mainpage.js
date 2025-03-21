import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route, Link } from "react-router-dom";
import "./mainpage.css";
import pic from "../images/overlay.png";
import pic2 from "../images/y.jpg";

export default function MainPage() {
  return (
    <>
      <header className="header-style">
        <div className="toolbar-style">
          <div className="container-style">
            <div className="logostyle"></div>
            <span className="logo-line">
              <em>
                <i class="fa fa-graduation-cap" aria-hidden="true"></i>{" "}
                Roll-Call.com
              </em>
            </span>
            <div className="space"></div>
            <div className="header-tag">
              <Link className="header-one" to="/">
                Home
              </Link>
              <Link className="header-two" to="/signup">
                Signup
              </Link>
              <Link className="header-four" to="/signin">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="wrapper-main">
        <div>
          <img src={pic} className="wrap-img" />
          <img src={pic2} className="img-overlay-wrap" />
        </div>
        <div className="text-main">
          <div className="text-main-body">
            <div>
              <h1 className="text-main-text">
                Dive into
                <br />a new way of taking
                <br />
              </h1>
              <span className="text-main-green">attendance</span>
            </div>
            <div>
              <p className="text-main-para">
                Use of Face Recognition which ensures authencity
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
