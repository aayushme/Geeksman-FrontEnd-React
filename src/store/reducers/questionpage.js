import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
  postquestionstatus:false,
  posterror: null,
  geterror:null,
  getloading:null,
  postloading: false,
  questionsdata:[{
    id: "1",
    question: "what ifadsfasdfadsfads",
    options: {
      opt1: {
        option:"are you ok1",
        value:"1"
      },
      opt2: {
        option:"are you ok2",
        value:"2"
      },
      opt3: {
        option:"are you ok3",
        value:"3"
      },
      opt4: {
        option:"are you ok4",
        value:"4"
      },
    },
  },
  {
    id: "2",
    question: "what is Geeksman",
    options: {
      opt1: {
        option:"are you ok1",
        value:"1"
      },
      opt2: {
        option:"are you ok2",
        value:"2"
      },
      opt3: {
        option:"are you ok3",
        value:"3"
      },
      opt4: {
        option:"are you ok4",
        value:"4"
      },
    },
  },
  {
    id: "3",
    question: "what is manan",
    options: {
      opt1: {
        option:"are you ok1",
        value:"1"
      },
      opt2: {
        option:"are you ok2",
        value:"2"
      },
      opt3: {
        option:"are you ok3",
        value:"3"
      },
      opt4: {
        option:"are you ok4",
        value:"4"
      },
    },
  },
  {
    id: "4",
    question: "what is audition",
    options: {
      opt1: {
        option:"are you ok1",
        value:"1"
      },
      opt2: {
        option:"are you ok2",
        value:"2"
      },
      opt3: {
        option:"are you ok3",
        value:"3"
      },
      opt4: {
        option:"are you ok4",
        value:"4"
      },
    },
  },
  {
    id: "5",
    question: "what is geek",
    options: {
      opt1: {
        option:"are you ok1",
        value:"1"
      },
      opt2: {
        option:"are you ok2",
        value:"2"
      },
      opt3: {
        option:"are you ok3",
        value:"3"
      },
      opt4: {
        option:"are you ok4",
        value:"4"
      },
    },
  },
  {
    id: "6",
    question: "what is shubham",
    options: {
      opt1: {
        option:"are you ok1",
        value:"1"
      },
      opt2: {
        option:"are you ok2",
        value:"2"
      },
      opt3: {
        option:"are you ok3",
        value:"3"
      },
      opt4: {
        option:"are you ok4",
        value:"4"
      },
    },
  },

  
  ]
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
