import React, { Component } from "react";
import ContestCard from "./ContestCard";
import ContestHeader from "./ContestHeader";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";

class ContestsHome extends Component {
  componentDidMount() {
    console.log(this.props.data);  
  }
  livecards=[]
  previouscards=[]
  upcomingcards=[]
  makecard(){
    this.props.data.forEach((contest, index) => {
      let protocard= <div class={this.classes.cards}>
       <ContestCard
         contestname={contest.contestname}
         starttime={contest.starttime}
         smalldescription={contest.contestdetails}
         startdate={contest.startdate}
         enddate={contest.enddate}
         endtime={contest.endtime}
         id={index}
         cid={contest.id}
       />
       </div>
       if(contest.contesttype==="ongoing"){
           this.livecards.push(protocard)
       }else if(contest.contesttype==="previous"){
              this.previouscards.push(protocard)
       }else if(contest.contesttype==="upcoming"){
            this.upcomingcards.push(protocard)
       }
     })
  }
  classes = {
      cards:
        "col-md-6"
  }

  livecards=[];
  upcomingcards=[];
  previouscards=[];
  render() {
    this.makecard()
    return (
      <div className="Contests">
        <ContestHeader content="Contests" />
        <div className="row">
          <div className="col-lg-8">
            <div className="contests-section-heading">Live Contests</div>
            <div className="row no-gutters">
            {this.livecards.length===0&&(
              <h2>There are no live Contests.</h2>
              )}
              {this.livecards.length!==0&&(
                this.livecards
              )}
            </div>
          </div>
          <div className="col-lg-8">
            <div className="contests-section-heading">Upcoming Contests</div>
            <div className="row no-gutters">
              {this.upcomingcards.length!==0&&(
                this.upcomingcards
              )}
              {this.upcomingcards.length===0&&(
                <h2>There are no upcoming contests.</h2>
              )}
            </div>
          </div>
          <div className="col-lg-8">
            <div className="contests-section-heading">Previous Contests</div>
            <div className="row no-gutters">
              {this.previouscards.length!==0&&(
                this.previouscards
              )}
              {this.previouscards.length===0&&(
                <h2>There are no previous contests.</h2>
              )}
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
    ongoingcontest:state.contest.ongoingcontests,
    previouscontest:state.contest.previouscontests,
    upcomingcontest:state.contest.previouscontests
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContestsHome);
