import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
  postquestionstatus:false,
  posterror: null,
  geterror:null,
  getloading:null,
  postloading: false,
  questionsdata:null
};

const getQuestionsStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};

const getQuestionsSuccess = (state, action) => {
  return updateObject(state, {
    questionsdata:action.questionsdata
  });
};

const getQuestionsFail = (state, action) => {
  return updateObject(state, {
    geterror: action.error,
    getloading: false,
  });
};


const postQuestionsStart = (state, action) => {
    return updateObject(state, { error: null, loading: true });
  };
  
  const postQuestionsSuccess = (state, action) => {
    return updateObject(state, {
        postquestionstatus:action.postquestionsresponse
    });
  };
  
  const postQuestionsFail = (state, action) => {
    return updateObject(state, {
      posterror: action.error,
      loading: false,
    });
  };



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_QUESTIONS_START:
      return getQuestionsStart(state, action);
    case actionTypes.GET_QUESTIONS_SUCCESS:
      return getQuestionsSuccess(state, action);
    case actionTypes.GET_QUESTIONS_FAIL:
      return getQuestionsFail(state, action);
    case actionTypes.POST_QUESTIONS_START:
      return postQuestionsStart(state, action);
    case actionTypes.POST_QUESTIONS_SUCCESS:
      return postQuestionsSuccess(state, action);
    case actionTypes.POST_QUESTIONS_FAIL:
      return postQuestionsFail(state, action);
    
    default:
      return state;
  }
};

export default reducer;
