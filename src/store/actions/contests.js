import * as actionTypes from './actionsTypes';
import axios from 'axios';

export const getContestSuccess = (data) => {
  return {
    type: actionTypes.GET_CONTESTS_SUCCESS,
    contestdata:data
  };
};

export const getContestFail = (error) => {
  return {
    type: actionTypes.GET_CONTESTS_FAIL,
    error: error,
  };
};


export const getContest = (token) => {
  return (dispatch) => {
    

    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    };

    axios
      .post(
        process.env.PUBLIC_API_URL+'/rest-auth/login/',
        axiosConfig
      )
      .then((res) => {
        console.log("GETTED CONTESTS"+res.data);
        dispatch(getContestSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getContestFail(err));
      });
  };
};


/*============Redux Signup===========*/



export const postContestSuccess = (status) => {
  return {
    type: actionTypes.POST_CONTESTS_SUCCESS,
  };
};

export const postContestFail = (error) => {
  return {
    type: actionTypes.POST_CONTESTS_FAIL,
    error: error,
  };
};



export const postContest = (user_name, pwd) => {
  return (dispatch) => {
    var postData = JSON.stringify({
      username: user_name,
      password: pwd,
    });

    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    };

    axios
      .post(
        'https://mis2020.herokuapp.com/rest-auth/login/',
        postData,
        axiosConfig
      )
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res);
        
        dispatch(
          postContestSuccess(res.data.token, res.data.designation, res.data.full_name)
        );
      })
      .catch((err) => {
        dispatch(postContestFail(err));
      });
  };
};