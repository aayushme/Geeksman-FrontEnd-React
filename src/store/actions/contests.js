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

export const getContest = () => {
  return (dispatch) => {   

    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    };

    axios
      .get(
        process.env.REACT_APP_PUBLIC+'/contests',
        axiosConfig
      )
      .then((res) => {
        
        dispatch(getContestSuccess(res.data.contests));

      })
      .catch((err) => {
        dispatch(getContestFail(err));
      });
  };
};


/*============Redux Signup===========*/



export const postContestSuccess = (status) => {
  return {
    type: actionTypes.REGISTER_CONTEST_SUCCESS,
  };
};

export const postContestFail = (error) => {
  return {
    type: actionTypes.REGISTER_CONTEST_FAIL,
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
       
        dispatch(
          postContestSuccess(res.data.token, res.data.designation, res.data.full_name)
        );
      })
      .catch((err) => {
        dispatch(postContestFail(err));
      });
  };
};


/*=============== Register Contests ===================*/

export const registerContestSuccess = (data) => {
  return {
    type: actionTypes.REGISTER_CONTEST_SUCCESS,
    registeruserdata:data
  };
};

export const registerContestFail = (error) => {
  return {
    type: actionTypes.REGISTER_CONTEST_FAIL,
    error: error,
  };
};



export const registerContest = (uid,cid) => {
  return (dispatch) => {
    
    axios({
      method: 'post',
      url: `${process.env.REACT_APP_PUBLIC}/registerforcontest`,
      data:{
        uid,
        cid
      }
    })
      .then((res) => {
        
        dispatch(
          registerContestSuccess(res.data)
        );
      })
      .catch((err) => {
        dispatch(registerContestFail(err));
      });
  };
};


/*=================Get Test Token================*/
export const getContestTokenSuccess = (token) => {
  return {
    type: actionTypes.GET_CONTEST_TOKEN_SUCCESS,
    contesttoken:token
  };
};

export const getContestTokenFail = (error) => {
  return {
    type: actionTypes.GET_CONTEST_TOKEN_FAIL,
    error: error,
  };
};



export const getContestToken = (uid,cid) => {
  return (dispatch) => {
    

    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    };

    axios
      .get(
        process.env.REACT_APP_PUBLIC+"/gettesttoken/"+cid,
        axiosConfig
      )
      .then((res) => {
        console.log(res.data)
        dispatch(
          
          getContestTokenSuccess(res.data.token)
        );
      })
      .catch((err) => {
        dispatch(getContestTokenFail(err));
      });
  };
};
