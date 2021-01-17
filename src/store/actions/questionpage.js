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
    questiondata:data
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
    
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    };

    axios
      .post(
        process.env.PUBLIC_API_URL+'/rest-auth/login/',
        axiosConfig
      )
      .then((res) => {
        console.log('Questions Get ', res);
        
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
      dispatch(postQuestionsStart());
      var postData = JSON.stringify({
        data:data,
      });
  
      let axiosConfig = {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
        },
      };
  
      axios
        .post(
          process.env.PUBLIC_API_URL+'/rest-auth/login/',
          postData,
          axiosConfig
        )
        .then((res) => {
          console.log('Questions Posted ', res);
          
          dispatch(
            postQuestionsSuccess(res.status)
          );
        })
        .catch((err) => {
          dispatch(postQuestionsFail(err))
        });
    };
  };