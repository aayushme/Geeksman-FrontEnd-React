import * as actionTypes from './actionsTypes';
import axios from 'axios';


export const getMemberSuccess = (data) => {
  return {
    type: actionTypes.GET_MEMBER_SUCCESS,
    memberdata:data
  };
};

export const getMemberFail = (error) => {
  return {
    type: actionTypes.GET_MEMBER_FAIL,
    error: error,
  };
};


export const getMember = () => {
  return (dispatch) => {
   
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    };

    axios
      .get(
        process.env.REACT_APP_MEMBER+'/members',
        axiosConfig
      )
      .then((res) => {
        console.log("Members"+res)
        dispatch(
          getMemberSuccess(res.data.members)
        );
      })
      .catch((err) => {
        dispatch(getMemberFail(err));
      });
  };
};

