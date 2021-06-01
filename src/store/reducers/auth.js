import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
  token: null,
  userid: null,
  autherror:null,
  error: null,
  name: null,
  designation: null,
  loading: false,
  authRedirectPath: '/',
  forgetstatus:""
};

const authStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    name: action.name,
    userid:action.userid,
    error: null,
    loading: false,
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    autherror: action.error,
    loading: false,
  });
};

const authlogout=(state,action)=>{
return updateObject(state,{
  token:null,
  name:null,
  userid:null,
})
}

const forgetSuccess = (state, action) => {
  return updateObject(state, {
    forgetstatus:action.forgetstatus,
    loading:false
  });
};

const forgetFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};


const authLogout = (state, action) => {
  return updateObject(state, { token: null, userId: null });
};

const setAuthRedirectPath = (state, action) => {
  return updateObject(state, { authRedirectPath: action.path });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    case actionTypes.SET_AUTH_REDIRECT_PATH:
      return setAuthRedirectPath(state, action);
    case actionTypes.CHANGE_PWD_SUCCESS:
      return forgetSuccess(state, action);
    case actionTypes.CHANGE_PWD_FAIL:
      return forgetFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authlogout(state,action);
    default:
      return state;
  }
};

export default reducer;
