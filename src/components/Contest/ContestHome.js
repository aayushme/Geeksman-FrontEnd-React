import React,{Component} from 'react';
import ContestHeader from './ContestHeader';
import { Link } from 'react-router-dom';
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import { data } from 'jquery';


class ContestHome extends Component {
    
    
    render(){
        var id=JSON.parse(localStorage.getItem("activecontest"))-1;
    return (
        <div id="contest-home">
            <ContestHeader content="Contests" />
            <div className="row">
                <div className="col-md-7">
                    <div className="contest-name">
                        {this.props.data[id].name}
                    </div>
                    <div className="contest-remaining-time">
                        The contest will start at {this.props.data[id].starttime} on {this.props.data[id].startdate}
                    </div>
                    <div className="contest-instructions-container">
                        <div className="contest-instructions-heading">
                            Instructions
                        </div>
                        <div className="contest-instructions">
                            {this.props.data[id].rules}
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    
                    <Link to={"/contests/"+this.props.data[id].name+"/questions/"}>
                        <button className="contest-register-button">Start Now</button>
                    </Link>
                </div>
            </div>
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
