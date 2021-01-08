import React, { Component } from "react";
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

class LoginPage extends Component {

  state={
    activeClass : 'container',
    email:'',
    password:'',
    newemail:'',
    newpassword:'',
    validatenewpassword:'',
    name:''
  }


    signInShow = (e) =>{
      e.preventDefault();
      this.setState({activeClass:'container'});
    }

    signUpShow = (e) =>{
      e.preventDefault();
      this.setState({activeClass:'container right-panel-active'});
    }

    setLogin = (e) =>{
      e.preventDefault();
      console.log(process.env.PUBLIC_API_URL);
      this.props.reduxLogin(this.state.email,this.state.password);
    }

    setSignup = (e) =>{

      e.preventDefault();

      if(this.state.validatenewpassword===this.state.newpassword){
        this.props.reduxSignup(this.state.name,this.state.newemail,this.state.newpassword);
      }
      else{
        console.log("Password Not Same");
      }
      
    }


  render() {
    
    
    return (
      <>
        
        <div className={this.state.activeClass} id="container">
          <div class="form-container sign-up-container">
            <form action="#" className="login-signup">
              <h1>Create Account</h1>
             
              <span>Use your email for registration</span>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
              <button className="login-button" onSubmit={e => this.setSignup(e)}>Sign Up</button>
            </form>
          </div>
          <div class="form-container sign-in-container">
            <form className="login-signup" onSubmit={e => this.setLogin(e)}>
              <h1>Sign in</h1>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#">Forgot your password?</a>
              <button className="login-button" >Sign In</button>
            </form>
          </div>
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button class="ghost login-button" onClick = {e=> this.signInShow(e)}>
                  Sign In
                </button>
              </div>
              <div class="overlay-panel overlay-right">
                <h1>Hello, Geek!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button class="ghost login-button" onClick={ e => this.signUpShow(e)} >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
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
    reduxSignup: (name, newemail,newpassword) => {
      dispatch(actions.reduxSignup(name,newemail, newpassword));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
