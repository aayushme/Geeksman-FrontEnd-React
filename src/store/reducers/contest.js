import * as actionTypes from "../actions/actionsTypes";
import { updateObject } from "../utility";

const initialState = {
  contestdata: [
    {
      id: "1",
      name: `<Hello World/>`,
      starttime: "09:00:00",
      endtime: "21:00:00",
      startdate: "2021-01-20",
      enddate: "2021-01-22",
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
    {
      id: "2",
      name: "Auditions 2",
      starttime: "09:00:00",
      endtime: "21:00:00",
      startdate: "2021-01-20",
      enddate: "2021-01-22",
      prize: "Selection in club",
      registeredusers: {
        id: "1",
        name: "aayush",
        slot: "1",
      },
      contestdetails: "This contest is for auditions of GeeksmanClub 2021",
      rules: "1. Dont cheat 2.Dont Copy 3.Dont Hesitate 4.Dont Complete",
      upcoming: "false",
      previous: "false",
      ongoing: "true",
    },
    {
      id: "3",
      name: "Auditions3",
      starttime: "09:00:00",
      startdate: "2021-01-20",
      enddate: "2021-01-22",
      enddate: "18/01/2021",
      prize: "Selection in club",
      registeredusers: {
        id: "1",
        name: "aayush",
        slot: "1",
      },
      contestdetails: "This contest is for auditions of GeeksmanClub 2021",
      rules: "1. Dont cheat \n Dont Copy \n Dont Hesitate \n Dont Complete",
      upcoming: "false",
      previous: "true",
      ongoing: "false",
    },
  ],
  loading: false,
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
    default:
      return state;
  }
};

export default reducer;
