import * as actionTypes from './actionsTypes';
import axios from 'axios';

export const getUserSuccess = (userdata) => {
  return {
    type: actionTypes.GET_USER_SUCCESS,
    userdata:userdata
  };
};

export const getUserError = (error) => {
  return {
    type: actionTypes.GET_USER_FAIL,
    error: error,
  };
};



export const getUser = (userid) => {
  return (dispatch) => {

    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    };
    console.log(userid)

    axios
      .get(
        process.env.REACT_APP_PUBLIC+'/users/getuser/'+userid,
        axiosConfig,
        
      )
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res);
        
        dispatch(
          getUserSuccess(res.data.user)
        );
      })
      .catch((err) => {
        dispatch(getUserError(err));
      });
  };
};

/*============GET USERS CONTESTS=======================*/
export const getUserContestSuccess = (userdata) => {
  return {
    type: actionTypes.GET_USER_CONTEST_SUCCESS,
    usercontestdata:userdata
  };
};

export const getUserContestFail = (error) => {
  return {
    type: actionTypes.GET_USER_CONTEST_FAIL,
    error: error,
  };
};



export const getUserContest = (uid) => {
  return (dispatch) => {
    
    let axiosConfig = {
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "multipart/form-data"
      },
      
    };

    axios
      .get(
        process.env.REACT_APP_PUBLIC+'/getusercontests/'+uid,
        axiosConfig,
        
      )
      .then((res) => {
        console.log('USER DATA IS: ', res);
        
        dispatch(
          getUserContestSuccess(res.data)
        );
      })
      .catch((err) => {
        dispatch(getUserContestFail(err));
      });
  };
};


/*============Redux Signup===========*/

export const postUserSuccess = (poststatus) => {
    return {
      type: actionTypes.POST_USER_SUCCESS,
      poststatus:poststatus
    };
  };
  
  export const postUserError = (error) => {
    return {
      type: actionTypes.POST_USER_FAIL,
      error: error,
    };
  };
  
  
  
  export const postUser = (name,email,password) => {
    return (dispatch) => {
      
      axios({
        method: 'post',
        responseType: 'json',
        url: `${process.env.REACT_APP_PUBLIC}/signup`,
        data: {
          name,
          email,
          password
          
        }
      })
       .then(response => {
         console.log(response)
         dispatch(postUserSuccess(response));
       })
       .catch(error => {
       console.log(error)
       });
    };
  };


/*============Patch Users===========*/

export const patchUserSuccess = (poststatus) => {
  return {
    type: actionTypes.PATCH_USER_SUCCESS,
    patchStatus:poststatus
  };
};

export const patchUserError = (error) => {
  return {
    type: actionTypes.PATCH_USER_FAIL,
    error: error,
  };
};



export const patchUser = (userid,college,year,Branch,phoneno) => {
  return (dispatch) => {
    
    
    axios({
      method: 'patch',
      responseType: 'application/json;charset=UTF-8',
      url: `${process.env.REACT_APP_PUBLIC}/users/updateuser/${userid}`,
      data: {
        college,
        year,
        Branch,
        phoneno
      }
    })
     .then(response => {
       console.log(response)
       alert("details Updated Successfully")
       dispatch(postUserSuccess(response.status));
       window.location.reload()
     })
     .catch(error => {
     console.log(error)
    

     });
  };
};

  
