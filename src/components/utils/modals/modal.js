import React, { Component, useState } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";

class LoginModal extends Component {

  state={
    modal:localStorage.getItem("LoginModal"),
  }

  toggle = (e) =>{
    e.preventDefault();
    console.log("hello");
    this.setState({modal:false});
    localStorage.setItem("LoginModal",false);
  }
  
  render(){
  return (
    <MDBContainer>
      <MDBModal isOpen={this.state.modal}  size="lg">
        <MDBModalHeader >MDBModal title</MDBModalHeader>
        <MDBModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.toggle}>
            Close
          </MDBBtn>
          <MDBBtn color="primary">Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
}
}

export default LoginModal;
