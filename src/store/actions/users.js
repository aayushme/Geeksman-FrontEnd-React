import * as actionTypes from './actionsTypes';
import axios from 'axios';

export const getUserSuccess = (userdata) => {
  return {
    type: actionTypes.GET_USER_SUCCESS,
    userdata:userdata
  };
};

export const getUserError = (error) => {
  return {
    type: actionTypes.GET_USER_FAIL,
    error: error,
  };
};



export const getUser = (token) => {
  return (dispatch) => {
    

    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    };

    axios
      .get(
        process.env.PUBLIC_API_URL+'/rest-auth/login/',
        axiosConfig
      )
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res);
        
        dispatch(
          getUserSuccess(res.data)
        );
      })
      .catch((err) => {
        dispatch(getUserError(err));
      });
  };
};


/*============Redux Signup===========*/

export const postUserSuccess = (poststatus) => {
    return {
      type: actionTypes.POST_USER_SUCCESS,
      poststatus:poststatus
    };
  };
  
  export const postUserError = (error) => {
    return {
      type: actionTypes.POST_USER_FAIL,
      error: error,
    };
  };
  
  
  
  export const postUser = (data) => {
    return (dispatch) => {
      
  
      let axiosConfig = {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
        },
      };
  
      axios
        .post(
          process.env.PUBLIC_API_URL+'/rest-auth/login/',
          axiosConfig,
          data
        )
        .then((res) => {
          console.log('RESPONSE RECEIVED: ', res);
          
          dispatch(
            postUserSuccess(res.status)
          );
        })
        .catch((err) => {
          dispatch(postUserError(err));
        });
    };
  };
  


  
/*============Verify User===========*/

export const verifyUserSuccess = (token,verifystatus) => {
    return {
      type: actionTypes.POST_USER_SUCCESS,
      verifystatus:verifystatus,
      token:token
    };
  };
  
  export const verifyUserError = (error) => {
    return {
      type: actionTypes.POST_USER_FAIL,
      error: error,
    };
  };
  
  
  
  export const verifyUser = (data) => {
    return (dispatch) => {
      
      let axiosConfig = {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
        },
      };
  
      axios
        .post(
          process.env.PUBLIC_API_URL+'/rest-auth/login/',
          axiosConfig,
          data
        )
        .then((res) => {
          console.log('RESPONSE RECEIVED: ', res);
          
          dispatch(
            verifyUserSuccess(res.status)
          );
        })
        .catch((err) => {
          dispatch(verifyUserError(err));
        });
    };
  };
  