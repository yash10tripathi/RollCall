import React, { useState, Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./signup.css";
import pic from "../images/register.png";
class Signup extends Component {
  state = {
    credentials: { username: "", password: "" },
  };

  register = (event) => {
    fetch("http://127.0.0.1:8000/backapi/users/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.credentials),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data.token);
      })
      .catch((error) => console.error(error));
  };
  inputChanged = (event) => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({ credentials: cred });
  };

  render() {
    return (
      <>
        <div className="wrap">
          <header className="head-wrap">
            <div class="head-space"></div>
            <p className="sign-head-text">
              Already have an account?
              <Link className="sign-head-text-green" to="/signin">
                Sign In
              </Link>
            </p>
          </header>
          <div className=" sign-main-text">
            <h3 className="sign-bold">
              Manage attendance more efficiently.
              <br /> Let's Get Started !
            </h3>
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
                  <h4 className="sign-form-text">Register for your Account</h4>
                  <p className="sign-form-para">Enter your details below.</p>
                </div>
              </div>

              <form>
                <div className="sign-form-wrap-one">
                  <div className="sign-form-wrap-two">
                    <div className="sign-form-div">
                      <input
                        type="text"
                        placeholder="UserName"
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
                        name="password"
                        className="sign-form-input"
                        value={this.state.credentials.password}
                        onChange={this.inputChanged}
                      />
                    </div>
                  </div>
                </div>
                <button
                  className="sign-form-button"
                  type="submit"
                  onClick={this.register}
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
          <div className="sign-color"></div>
        </div>
      </>
    );
  }
}

export default Signup;
