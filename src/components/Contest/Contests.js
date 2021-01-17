import React,{Component} from 'react';
import { Route } from 'react-router-dom';
import ContestsHome from './ContestsHome';
import ContestHome from './ContestHome';
import ContestProblem from '../questionpage/Questiondrawer';
import Navbar from '../Navbar';
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";

class Contests extends Component {


    
  DynamicRoutes = (
    
    this.props.data.map((contest, index) => (
        <>
        <Route exact path={"/contests/"+contest.name+"/"} component={ContestHome} />
        <Route exact path={"/contests/"+contest.name+"/questions/"} component={ContestProblem} />
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
    };
  };
  
  const mapStateToProps = (state) => {
    return {
      token: state.auth.token,
      data: state.contest.contestdata,
    };
  };



  export default connect(mapStateToProps, mapDispatchToProps)(Contests);