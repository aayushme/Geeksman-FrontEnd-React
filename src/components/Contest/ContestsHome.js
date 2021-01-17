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
          contestname={contest.name}
          starttime={contest.starttime}
          smalldescription={contest.contestdetails}
          startdate={contest.startdate}
          enddate={contest.enddate}
          endtime={contest.endtime}
          id={contest.id}
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
          <div className="col-lg-4">
            <div className="contests-section-heading">Our Top Performers</div>
            <div className="contests-top-performers-container">
              <div className="contests-top-performer">
                <img
                  src="/images/svg/gold-medal.svg"
                  alt="gold"
                  className="contests-medal-img"
                />
                <div className="contests-top-performer-name">Aayush Tyagi</div>
              </div>
              <div className="contests-top-performer">
                <img
                  src="/images/svg/silver-medal.svg"
                  alt="silver"
                  className="contests-medal-img"
                />
                <div className="contests-top-performer-name">Shubham Bansal</div>
                <div className="contests-top-performer"></div>
                <img
                  src="/images/svg/bronze-medal.svg"
                  alt="bronze"
                  className="contests-medal-img"
                />
                <div className="contests-top-performer-name">Parag Thakur</div>
              </div>
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
