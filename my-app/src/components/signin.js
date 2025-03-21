import React, { useState, Component } from "react";
import ReactDOM from "react-dom";
import { Link, useNavigate } from "react-router-dom";

import "./signin.css";
import pic from "../images/login.png";

class Signin extends Component {
  state = {
    credentials: { username: "", password: "" },
  };
  login = (event) => {
    fetch("http://127.0.0.1:8000/auth/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.credentials),
    })
      .then((data) => data.json())
      .then((data) => {
        this.props.user_Login(data.token);
      })
      .catch((error) => console.error(error));

    this.props.navigate("/attendance");
  };
  inputChanged = (event) => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({ credentials: cred });
  };
  render() {
    return (
      <div className="wrap">
        <header className="head-wrap">
          <div class="head-space"></div>
          <p className="sign-head-text">
            Don’t have an account?
            <Link className="sign-head-text-green" to="/signup">
              Get started
            </Link>
          </p>
        </header>
        <div className="sign-main-text ">
          <h3 className="sign-bold">Hi, Welcome Back</h3>
          <span className="sign-img-wrap">
            <span className="wrapper">
              <img className="sign-img" src={pic} alt="login" />
            </span>
          </span>
        </div>

        <div className="sign-wrap-one">
          <div className="sign-wrap-two">
            <div className="sign-wrap-three">
              <div className="sign-wrap-four">
                <h4 className="sign-form-text">Sign in to your Account</h4>
                <p className="sign-form-para">Enter your details below.</p>
              </div>
            </div>

            <form>
              <div className="sign-form-wrap-one">
                <div className="sign-form-wrap-two">
                  <div className="sign-form-div">
                    <input
                      type="text"
                      placeholder="Username"
                      className="sign-form-input"
                      name="username"
                      value={this.state.credentials.username}
                      onChange={this.inputChanged}
                    />
                  </div>

                  <div className="sign-form-div">
                    <input
                      type="password"
                      placeholder="Password"
                      className="sign-form-input"
                      name="password"
                      value={this.state.credentials.password}
                      onChange={this.inputChanged}
                    />
                  </div>
                </div>
              </div>
              <button
                className="sign-form-button"
                type="submit"
                onClick={this.login}
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
        <div className="sign-color"></div>
      </div>
    );
  }
}

function WithNavigate(props) {
  let navigate = useNavigate();
  return <Signin {...props} navigate={navigate} />;
}

export default WithNavigate;
