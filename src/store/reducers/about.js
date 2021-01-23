import * as actionTypes from "../actions/actionsTypes";
import { updateObject } from "../utility";

const initialState = {
  memberdata:[
      {
          id:1,
          name:"Aayush Tyagi",
          post:"Jsec",
          image:null,
          github:""
      },
      {
        id:2,
        name:"Rishabh",
        post:"Jsec",
        image:null
    },
    {
        id:3,
        name:"Nitika",
        post:"Jsec",
        image:null
    },
    {
      id:4,
      name:"Parag",
      post:"2nd yr",
      image:null
  }
  ]
};

const getMemberSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
    memberdata: action.memberdata,
  });
};

const getMemberFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_MEMBER_SUCCESS:
      return getMemberSuccess(state, action);
    case actionTypes.GET_MEMBER_FAIL:
      return getMemberFail(state, action);

    default:
      return state;
  }
};

export default reducer;
