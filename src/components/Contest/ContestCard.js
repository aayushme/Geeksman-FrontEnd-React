import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Redirect} from 'react-router-dom'

class ContestCard extends Component {
  state = {
    open: false,
    message: "NULL",
    yesbutton: false,
    redirect:false
  };

  handleActiveContest = (e, id) => {
    localStorage.setItem("activecontest", id);
    this.setState({redirect:true})
  };


  

  render() {
    let authRedirect = null;

    if (this.state.redirect) {
      authRedirect = <Redirect to={"/contests/"+this.props.contestname+"/"} />;
    }

    return (
      <div className="contest-card">
        {authRedirect}
        <div className="contest-card-heading">
          <Link onClick={(e) => this.handleActiveContest(e, this.props.id)}>
            {this.props.contestname}
          </Link>
        </div>

        <div className="contest-card-description">
          {this.props.smalldescription}
        </div>
        <div className="contest-card-timer">
          <span className="contest-card-timer-prefix">Starts at </span>
          {(this.props.startdate)}{" "}
          <span className="contes-card-time">{this.props.starttime}</span>
        </div>
        <div className="contest-card-timer">
          <span className="contest-card-timer-prefix">Ends at </span>
          {this.props.enddate}{" "}
          <span className="contes-card-time">{this.props.endtime}</span>
        </div>

        <div className="contest-card-register-button">
          <Link onClick={(e) => this.handleActiveContest(e, this.props.id)}>
            Register Now
          </Link>
        </div>
        
      </div>
    );
  }
}

export default ContestCard;
