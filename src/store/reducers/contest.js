import * as actionTypes from "../actions/actionsTypes";
import { updateObject } from "../utility";

const initialState = {
  contestdata: [
    {
      id: "1",
      name: `<Hello World/>`,
      starttime: "09:00:00",
      endtime: "21:00:00",
      startdate: "2021-01-22",
      enddate: "2021-01-23",
      prize: "Selection in club",
      registeredusers: {
        id: "1",
        name: "aayush",
        slot: "1",
      },
      contestdetails: "This contest is for auditions of GeeksmanClub 2021",
      rules: "1. Dont cheat 2.Dont Copy 3.Dont Hesitate 4.Dont Complete",
      upcoming: "true",
      previous: "false",
      ongoing: "false",
    },
    
  ],
  loading: false,
  registeruserdata:null,
  contesttoken:null
};

const getContestSuccess = (state, action) => {
  return updateObject(state, {
    contestdata: action.contestdata,
    error: null,
  });
};

const getContestFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const postContestSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    name: action.name,
    designation: action.designation,
    error: null,
    loading: false,
  });
};

const postContestFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const registerContestSuccess = (state, action) => {
  return updateObject(state, {
    registeruserdata:action.registeruserdata,
    error: null,
    loading: false,
  });
};

const registerContestFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const getContestTokenSuccess = (state, action) => {
  return updateObject(state, {
    contesttoken:action.contesttoken,
    error: null,
    loading: false,
  });
};

const getContestTokenFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CONTESTS_SUCCESS:
      return getContestSuccess(state, action);
    case actionTypes.GET_QUESTIONS_FAIL:
      return getContestFail(state, action);
    case actionTypes.POST_CONTESTS_SUCCESS:
      return postContestSuccess(state, action);
    case actionTypes.POST_QUESTIONS_FAIL:
      return postContestFail(state, action);
    case actionTypes.REGISTER_CONTEST_SUCCESS:
      return registerContestSuccess(state, action);
    case actionTypes.REGISTER_CONTEST_FAIL:
      return registerContestFail(state, action);
    case actionTypes.GET_CONTEST_TOKEN_SUCCESS:
      return getContestTokenSuccess(state, action);
    case actionTypes.GET_CONTEST_TOKEN_FAIL:
      return getContestTokenFail(state, action);
    default:
      return state;
  }
};

export default reducer;
