import * as actionTypes from './actionsTypes';
import axios from 'axios';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (tokenId, full_nameId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: tokenId,
    name: full_nameId,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('full_name');
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const reduxLogin = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    var postData = JSON.stringify({
      email: email,
      password: password,
    });

    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    };

    axios
      .post(
        process.env.PUBLIC_API_URL+'/rest-auth/login/',
        postData,
        axiosConfig
      )
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('full_name', res.data.full_name);
        dispatch(
          authSuccess(res.data.token, res.data.designation, res.data.full_name)
        );
      })
      .catch((err) => {
        dispatch(authFail(err));
      });
  };
};

export const authCheckStatus = () => {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    const full_name = localStorage.getItem('full_name');
    if (!token) {
      dispatch(logout());
    } else {
      dispatch(authSuccess(token, full_name));
    }
  };
};

/*============Redux Signup===========*/


export const verifyUserSuccess = (tokenId, full_nameId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: tokenId,
    name: full_nameId,
  };
};

export const verifyUserFail = (tokenId, full_nameId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: tokenId,
    name: full_nameId,
  };
};



export const changePwd = (user_name, pwd) => {
  return (dispatch) => {
    dispatch(authStart());
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
          verifyUserSuccess(res.data.token, res.status)
        );
      })
      .catch((err) => {
        dispatch(verifyUserFail(err));
      });
  };
};

