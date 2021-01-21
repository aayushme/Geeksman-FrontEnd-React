import React, { Component } from "react";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Modal from "../utils/modals/modal";
import { Redirect } from "react-router-dom";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class LoginPage extends Component {
  state = {
    activeClass: "container",
    email: "",
    password: "",
    newemail: "",
    newpassword: "",
    validatenewpassword: "",
    name: null,
    success: false,
    alert: "",
    modal: false,
    modalmessage: "",
    modalheader: "",
  };

  signInShow = (e) => {
    e.preventDefault();
    this.setState({ activeClass: "container" });
  };

  signUpShow = (e) => {
    e.preventDefault();
    this.setState({ activeClass: "container right-panel-active" });
  };

  setLogin = (e) => {
    e.preventDefault();
    if (this.state.password === "") {
      this.setState({
        alert: "Please Enter Password",
        success: true,
      });
    } else if (this.state.email === "") {
      this.setState({
        alert: "Please Enter Email",
        success: true,
      });
    } else {
      this.props.reduxLogin(this.state.email, this.state.password);
    }
  };

  handleClose = () => {
    this.setState({ success: false });
  };

  handleForgetPassword = () => {
    this.setState({
      modal: true,
      modalmessage:
        "We have sent an email to you, check your email inbox to reset your password. If you are unable to find the reset email please check your spam folder.",
      modalheader: "Reset your password",
    });
  };

  setSignup = (e) => {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var passwordformat = /^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,}$/;

    if (this.state.name === null) {
      this.setState({ alert: "Enter Valid Name", success: true });
      console.log("enter name");
    } else if (!this.state.newemail.match(mailformat)) {
      this.setState({ alert: "Enter Valid Email", success: true });
    } else if (this.state.newpassword === "") {
      this.setState({ alert: "Enter Password", success: true });
    } else if (!this.state.newpassword.match(passwordformat)) {
      this.setState({
        alert: "Password must be minimun 8 digits with atleast 2 numericals",
        success: true,
      });
    } else if (this.state.validatenewpassword === this.state.newpassword) {
      this.setState({
        modal: true,
        modalmessage:
          "Please check your email inbox to confirm your email address. If you are unable to find the confirmation email please check your spam folder.",
        modalheader: "Confirm your email address",
      });
      this.props.postUser(
        this.state.name,
        this.state.newemail,
        this.state.newpassword
      );
    } else {
      this.setState({ alert: "Password doesnot match", success: true });
    }
  };

  render() {
    let authRedirect = null;

    if (this.props.isAuthenticated) {
      authRedirect = <Redirect to="/contests" />;
    }
    
    return (
      <>
        <div className={this.state.activeClass} id="container">
          <div class="form-container sign-up-container">
            <form action="#" className="login-signup">
              <h1>Create Account</h1>

              <span>Use your email for registration</span>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) =>
                  this.setState({
                    name: e.target.value,
                  })
                }
                value={this.state.name}
              />
              <input
                type="email"
                placeholder="Email"
                onChange={(e) =>
                  this.setState({
                    newemail: e.target.value,
                  })
                }
                value={this.state.newemail}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  this.setState({
                    newpassword: e.target.value,
                  })
                }
                value={this.state.newpassword}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                onChange={(e) =>
                  this.setState({
                    validatenewpassword: e.target.value,
                  })
                }
                value={this.state.validatenewpassword}
              />
              <button
                className="login-button"
                onClick={(e) => this.setSignup(e)}
              >
                Sign Up
              </button>
            </form>
          </div>
          <div class="form-container sign-in-container">
            <form className="login-signup" onSubmit={(e) => this.setLogin(e)}>
              <h1>Sign in</h1>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) =>
                  this.setState({
                    email: e.target.value,
                  })
                }
                value={this.state.email}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  this.setState({
                    password: e.target.value,
                  })
                }
                value={this.state.password}
              />
              <a href="#" onClick={(e) => this.handleForgetPassword(e)}>
                Forgot your password?
              </a>
              <button className="login-button">Sign In</button>
            </form>
          </div>
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button
                  class="ghost login-button"
                  onClick={(e) => this.signInShow(e)}
                >
                  Sign In
                </button>
              </div>
              <div class="overlay-panel overlay-right">
                <h1>Hello, Geek!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button
                  class="ghost login-button"
                  onClick={(e) => this.signUpShow(e)}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>

          <Snackbar
            open={this.state.success}
            autoHideDuration={6000}
            onClose={this.handleClose}
          >
            <Alert onClose={this.handleClose} severity="error">
              {this.state.alert}
            </Alert>
          </Snackbar>
          <Modal
            show={this.state.modal}
            message={this.state.modalmessage}
            confirm="false"
            heading={this.state.modalheader}
          />
          {authRedirect}
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    reduxLogin: (email, password) => {
      dispatch(actions.reduxLogin(email, password));
    },
    postUser: (name, newemail, newpassword) => {
      dispatch(actions.postUser(name, newemail, newpassword));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
