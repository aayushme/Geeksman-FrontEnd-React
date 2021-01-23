import React,{Component} from 'react';
import { Route } from 'react-router-dom';
import ContestsHome from './ContestsHome';
import ContestHome from './ContestHome';
import ContestProblem from '../questionpage/Questiondrawer';
import Navbar from '../Navbar';
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";

class Contests extends Component {

  componentDidMount(){
    this.props.getUserContest(this.props.userid)
  }
   
  DynamicRoutes = (
    
    this.props.data.map((contest, index) => (
        <>
        <Route exact path={"/contests/"+contest.Contestname+"/"} component={ContestHome} />
        <Route exact path={"/contests/"+contest.Contestname+"/questions/"} component={ContestProblem} />
        </>
    ))
);

    render(){
    return (
        <div className="contests-container">
            <div className="contests">
                <Navbar />
                <Route exact path="/contests/" component={ContestsHome} />
                {this.DynamicRoutes} 
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
      getUserContest: (uid) => {
        dispatch(actions.getUserContest(uid));
      },

    };
  };
  
  const mapStateToProps = (state) => {
    return {
      token: state.auth.token,
      data: state.contest.contestdata,
      userid:state.auth.userid
    };
  };



  export default connect(mapStateToProps, mapDispatchToProps)(Contests);