import * as actionTypes from './actionsTypes';
import axios from 'axios';

/*============Get Questions===========*/

export const getQuestionsStart = () => {
  return {
    type: actionTypes.GET_QUESTIONS_START,
  };
};

export const getQuestionsSuccess = (data) => {
  return {
    type: actionTypes.GET_QUESTIONS_SUCCESS,
    questionsdata:data
  };
};

export const getQuestionsFail = (error) => {
  return {
    type: actionTypes.GET_QUESTIONS_FAIL,
    error: error,
  };
};



export const getQuestions = (token) => {
  return (dispatch) => {
    dispatch(getQuestionsStart());
        axios({
        method: 'post',
        url: `${process.env.REACT_APP_PUBLIC}/testquestions/`,
        headers: {
          'Authorization': 'Bearer '+token
        }
      })
      .then((res) => {
        console.log('Questions Get ', res.data);
        
        dispatch(
          getQuestionsSuccess(res.data)
        );
      })
      .catch((err) => {
        dispatch(getQuestionsFail(err));
      });
  };
};



/*============Post Questions===========*/

export const postQuestionsStart = () => {
    return {
      type: actionTypes.POST_QUESTIONS_START,
    };
  };
  
  export const postQuestionsSuccess = (response) => {
    return {
      type: actionTypes.POST_QUESTIONS_SUCCESS,
      postquestionsresponse:response
    };
  };
  
  export const postQuestionsFail = (error) => {
    return {
      type: actionTypes.POST_QUESTIONS_FAIL,
      error: error,
    };
  };
  
  
  
  export const postQuestions = (token,data) => {
    return (dispatch) => {
    
  
      axios({
        method: 'post',
        url: `${process.env.REACT_APP_PUBLIC}/submit`,
        data:{
          data
        }
       })
        .then((res) => {
          console.log('Questions Posted ', res);
          localStorage.clear(["submissions"])
          dispatch(
            postQuestionsSuccess(res.status)
          );
        })
        .catch((err) => {
          localStorage.clear(["submissions"])
          dispatch(postQuestionsFail(err))
        });
    };
  };