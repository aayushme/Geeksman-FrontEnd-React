import React,{Component} from 'react';
import { Route } from 'react-router-dom';
import ContestsHome from './ContestsHome';
import ContestHome from './ContestHome';
import ContestProblem from '../questionpage/Questiondrawer';
import Navbar from '../Navbar';
import Loader from '../Loader/Loader'
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";

class Contests extends Component {

   componentDidMount(){
   console.log('first time')
   this.props.getContest()
  }
  render(){
    return (
        <div>
          {this.props.loading&&(
            <Loader/>
          )}
         <div className="contests-container">
          
          <div className="contests">
              <Navbar />
               {/* {!this.props.loading&&( */}
               <ContestsHome/>
               {/* )} */}
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
      getUserContest: (uid) => {
        dispatch(actions.getUserContest(uid));
      },
      getContest:()=>{
        dispatch(actions.getContest());
      }

    };
  };
  const mapStateToProps = (state) => {
    return {
      contestdata:state.contest.contestdata,
      token: state.auth.token,
      data: state.contest.contestdata,
      userid:localStorage.getItem("userid"),
      loading:state.contest.loading
    };
  };



  export default connect(mapStateToProps, mapDispatchToProps)(Contests);