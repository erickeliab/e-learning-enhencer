import axios from 'axios';
import { returnErrors } from './messages';

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  GET_STUDENT
} from './types';

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
  // User Loading
  dispatch({ type: USER_LOADING });

  axios
    .get('/api/auth/user', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

// LOGIN USER
export const login = (username, password) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Request Body
  const body = JSON.stringify({ username, password });

  axios
    .post('/api/auth/login', body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      }) })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

// REGISTER USER
export const register = ({ username, password, email }) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Request Body
  const body = JSON.stringify({ username, email, password });

  axios
    .post('/api/auth/register', body, config)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
  axios
    .post('/api/auth/logout/', null, tokenConfig(getState))
    .then((res) => {
      dispatch({ type: 'CLEAR_LEADS' });
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// Setup config with token - helper function
export const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  return config;
};


export  const discussions_row = (id) =>  JSON.stringify({ 
  forumid : 1,
  });


export const courses_row = (getState) => {

  // const user_id = getState().user;
  // if(typeof (getState().user.users[0]) == 'undefined'){
  // console.log('123');

  // }else {
  //   console.log(getState().user.users[0].id);

  // }
  
  //return user_id;
  return JSON.stringify(
    {
        "userlist": [{
            "userid": 3,
            "courseid" : 1
  
        } ]
            });
}


// Setup config with token - helper function



  export const tokenConfigCourses = (getState) => {
    // Get token from state
    const token = getState().user.token_value;
  
   // Request Body
    const tk = 'b629eb6c7d6e3f34b50b199217a05559';
    const tk2 = 'b629eb6c7d6e3f34b50b199217a05559';
  
    //if (!token) console.log('token not found');
    // Headers
    const config = {
     
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'b629eb6c7d6e3f34b50b199217a05559',
        }
     
    };

  // If token, add to headers config
  // if (token) {
  //   config.headers['Authorization'] = `Token ${token}`;
  // }

  return config;
};

export const tokenConfigElearning = (getState) => {


  const config = {
   
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': '51a719c9803f1afffe4f86f4af0a9cf5',
      }
   
  }
  return config;
};