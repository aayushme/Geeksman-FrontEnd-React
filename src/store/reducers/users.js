import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
  token: null,
  error: null,
  loading: false,
  getuserdata:[],
  postUserStatus:null,
};


const getUserSuccess = (state, action) => {
  return updateObject(state, {
    getuserdata:action.userdata
  });
};

const getUserFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const postUserSuccess = (state, action) => {
    return updateObject(state, {
      postUserStatus:action.poststatus
    });
  };
  
  const postUserFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false,
    });
  };

  const verifyUserSuccess = (state, action) => {
    return updateObject(state, {
      token: action.token,
      verifystatus:action.verifystatus,
      error:null
    });
  };
  
  const verifyUserFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false,
    });
  };



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_SUCCESS:
      return getUserSuccess(state, action);
    case actionTypes.GET_USER_FAIL:
      return getUserFail(state, action);
    case actionTypes.POST_USER_SUCCESS:
      return postUserSuccess(state, action);
    case actionTypes.POST_USER_FAIL:
      return postUserFail(state, action);
    case actionTypes.VERIFY_USER_SUCCESS:
      return verifyUserSuccess(state, action);
    case actionTypes.VERIFY_USER_FAIL:
      return verifyUserFail(state, action);
    default:
      return state;
  }
};

export default reducer;