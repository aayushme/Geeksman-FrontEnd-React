import React from "react";
import image from "../images/image.jpeg";
import { Link } from "react-router-dom";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";

function Aboutprofilecard(props) {
  var members = (
    <>
      {props.member.map((member, index) => (
        <>
          <div class="card" style={{width:'18rem'}}>
            <div class="banner">
              <img src={member.image} />
            </div>
            <div class="menu"></div>
            <h2 class="name">{member.name}</h2>
            <div class="title">{member.post}</div>
            <div className="branch">
              <span>
                <b>Branch</b>:-{member.batch} Year {member.branch}
              </span>
            </div>
            <div className="sociallinks">
              <span>
                <b>Social</b>:-&nbsp;&nbsp;
              </span>
              <Link href={member.github} className="github">
                <i class="fab fa-github" aria-hidden="true"></i>
              </Link>
              <Link href={member.instagram} className="insta">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link href={member.linkedln} className="linkedin">
                <i class="fab fa-linkedin"></i>
              </Link>
            </div>
            <div class="actions"></div>
          </div>
        </>
      ))}
    </>
  );

  return (
    <div className="faculty__content">
      {members}
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    member: state.about.memberdata,
  };
};

export default connect(mapStateToProps)(Aboutprofilecard);
