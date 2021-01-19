import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import LoginSlide from "./LoginSlide";
import TopPerformersSlide from "./TopPerformersSlide";
import ContestSlide from "./ContestSlide";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";

class HomepageCarousel extends Component {
  render() {
    return (
      <div className="homepage-carousel-container">
        <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          items={1}
          nav={false}
          autoplay
          autoplayTimeout={400000}
        >
          <div className="item">
            <LoginSlide />
          </div>
          <div className="item">
            <ContestSlide
              name={this.props.data[0].name}
              startdate={this.props.data[0].startdate}
              starttime={this.props.data[0].starttime}
              enddate={this.props.data[0].enddate}
              endtime={this.props.data[0].endtime}
            />
          </div>
          <div className="item">
            <TopPerformersSlide />
          </div>
          
        </OwlCarousel>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getContest: (token) => {
      dispatch(actions.getContest(token));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    data: state.contest.contestdata,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomepageCarousel);
