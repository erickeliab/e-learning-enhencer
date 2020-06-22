import { GET_USER, GET_USER_TOKEN } from './types';
import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfigElearning, discussions_row } from './auth';


// GET DISCUSSIONS
export const getUser = () => (dispatch, getState) => {

    const users_row = JSON.stringify({ 
        
        criteria:[]
        });

    let url = `http://localhost/moodle/webservice/restful/server.php/core_user_get_users`;
  axios
    .post(url, users_row, tokenConfigElearning(getState))
    .then((res) => {
      dispatch({
        type: GET_USER,
        payload: res.data,
      });
    })
    .catch((err) => console.log('failed to get users token from e-learning'));


};


export const fetchToken = (username, password) => (dispatch) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json'
      },
    };
  
    // Request Body
    const body = JSON.stringify({ username, password });
  
    axios
      .post(` http://localhost/moodle/login/token.php?username=${username}&password=${password}&service=students_api`, config)
      .then((res) => {
        dispatch({
          type: GET_USER_TOKEN,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
          type: GET_USER_TOKEN_FAIL,
        });
      });
  };

