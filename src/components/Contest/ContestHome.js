import React, { Component } from "react";
import ContestHeader from "./ContestHeader";
import { Link } from "react-router-dom";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import Modal from "../utils/modals/modal";
import { Redirect } from "react-router-dom";

class ContestHome extends Component {
  state = {
    open: false,
    message: "",
    redirect: false,
    confirm:"false",
    header:""
  };

  CompareDate = (e, start, end) => {
    e.preventDefault();
    var startdate = Date.parse(start);
    var enddate = Date.parse(end);
    var nowdate = new Date();

    if (startdate < nowdate || enddate > nowdate) {
      this.setState({ open: true, message: "The contest is not active. Either, it has not started or you have passed the contest date", header:"Message!" });
    }
    else{
        this.setState({
            open:true,
            header:"Confirm Message!",
            message:"Are you sure you want to start the contest. After clicking this you won't be able to backoff",
            confirm:true
        })
    }
  };

  onRedirect = (e) => {
      e.preventDefault();
      this.setState({redirect:true})
  };

  render() {
    var id = JSON.parse(localStorage.getItem("activecontest")) - 1;
    let authRedirect = null;

    if (this.state.redirect) {
      authRedirect = (
        <Redirect to={"/contests/" + this.props.data[id].name + "/questions"} />
      );
    }

    return (
      <div id="contest-home">
        <ContestHeader content="Contests" />
        <div className="row">
          <div className="col-md-7">
            <div className="contest-name">{this.props.data[id].name}</div>
            <div className="contest-remaining-time">
              The contest will start at {this.props.data[id].starttime} on{" "}
              {this.props.data[id].startdate}
            </div>
            <div className="contest-instructions-container">
              <div className="contest-instructions-heading">Instructions</div>
              <div className="contest-instructions">
                {this.props.data[id].rules}
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <button
              onClick={(e) =>
                this.CompareDate(
                  e,
                  this.props.data[id].startdate,
                  this.props.data[id].starttime,
                  this.props.data[id].enddate,
                  this.props.data[id].endtime
                )
              }
              className="contest-register-button"
            >
              Start Now
            </button>
          </div>
        </div>
        <Modal
          show={this.state.open}
          message={this.state.message}
          redirect={e=>this.onRedirect(e)}
          confirm={this.state.confirm}
          heading={this.state.header}
        />
        {authRedirect}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    data: state.contest.contestdata,
  };
};

export default connect(mapStateToProps)(ContestHome);
