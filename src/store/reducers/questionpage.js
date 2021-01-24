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
    question: "What is the name of capital of India?",
    options: {
      opt1: {
        option:"New Delhi",
        value:"1"
      },
      opt2: {
        option:"Chennai",
        value:"2"
      },
      opt3: {
        option:"Faridabad",
        value:"3"
      },
      opt4: {
        option:"Manali",
        value:"4"
      },
    },
  },
  {
    id: "2",
    question: "what is Geeksman?",
    options: {
      opt1: {
        option:"Coding Society",
        value:"1"
      },
      opt2: {
        option:"Dance Society",
        value:"2"
      },
      opt3: {
        option:"Music Society",
        value:"3"
      },
      opt4: {
        option:"Drama Society",
        value:"4"
      },
    },
  },
  {
    id: "3",
    question: "what is full form of WHO?",
    options: {
      opt1: {
        option:"World Health Organisation",
        value:"1"
      },
      opt2: {
        option:"World Health Organisation",
        value:"2"
      },
      opt3: {
        option:"World Health Organisation",
        value:"3"
      },
      opt4: {
        option:"World Health Organisation",
        value:"4"
      },
    },
  },
  {
    id: "4",
    question: "What is past form of verb of seen",
    options: {
      opt1: {
        option:"saw",
        value:"1"
      },
      opt2: {
        option:"seen",
        value:"2"
      },
      opt3: {
        option:"sawed",
        value:"3"
      },
      opt4: {
        option:"seein",
        value:"4"
      },
    },
  },
  {
    id: "5",
    question: "what is geek?",
    options: {
      opt1: {
        option:"Person",
        value:"1"
      },
      opt2: {
        option:"Computer",
        value:"2"
      },
      opt3: {
        option:"Intelligent Person",
        value:"3"
      },
      opt4: {
        option:"Weak Person",
        value:"4"
      },
    },
  },
  {
    id: "6",
    question: "What is capital of USA?",
    options: {
      opt1: {
        option:"Washington DC",
        value:"1"
      },
      opt2: {
        option:"New York",
        value:"2"
      },
      opt3: {
        option:"Hawai",
        value:"3"
      },
      opt4: {
        option:"California",
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
