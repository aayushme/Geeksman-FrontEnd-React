import React, { Component, useState } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";

function LoginModal(props) {
  const [modal, setModal] = useState(true);
  const toggle = () => {
    
  };
  return (
    <MDBContainer>
      <MDBModal isOpen={modal&&props.show} toggle={toggle()} size="lg">
        <MDBModalHeader toggle={toggle()}>MDBModal title</MDBModalHeader>
        <MDBModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={toggle()}>
            Close
          </MDBBtn>
          <MDBBtn color="primary">Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
}

export default LoginModal;
