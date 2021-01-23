import React, { Component } from "react";
import ContestCard from "./ContestCard";
import ContestHeader from "./ContestHeader";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";

class ContestsHome extends Component {
  componentDidMount() {
    console.log(this.props.data);
  }


  classes = {
      cards:
        "col-md-6"
  }

  cards = (
    
      this.props.data.map((contest, index) => (
        <div class={this.classes.cards}>
        <ContestCard
          contestname={contest.Contestname}
          starttime={contest.starttime}
          smalldescription={contest.contestdetails}
          startdate={contest.startdate}
          enddate={contest.enddate}
          endtime={contest.endtime}
          id={index}
          cid={contest.id}
        />
        </div>
      ))
  );

  render() {
    return (
      <div>
        <ContestHeader content="Contests" />
        <div className="row">
          <div className="col-lg-8">
            <div className="contests-section-heading">Live Contests</div>
            <div className="row no-gutters">
              {this.cards}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getQuestions: (token) => {
      dispatch(actions.getQuestions(token));
    },
    postQuestions: (token, data) => {
      dispatch(actions.postQuestions(token, data));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    data: state.contest.contestdata,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContestsHome);
