import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfigCourses } from './auth';

import {    GET_COURSES } from './types';


const courses_row = (userid) => {


  return JSON.stringify(
    {
        "userlist": [{
            "userid": userid,
            "courseid" : 1
  
        } ]
            });
}


// Setup config with token - helper function



// const tokenConfigCourses = (tk) => {
//     // Get token from state
//   //  const token = getState().user.token_value;
  
//    // Request Body
//     const tk1 = 'b629eb6c7d6e3f34b50b199217a05559';
//     const tk2 = 'b629eb6c7d6e3f34b50b199217a05559';
  
//     //if (!token) console.log('token not found');
//     // Headers
//     const config = {
     
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
      
//         }
     
//     }

//       // If token, add to headers config
//   if (true) {
//     config.headers['Authorization'] = tk2;
//   }

//   return config;
//   }



// GET DISCUSSIONS
export const getCourses = (token,id) => (dispatch, getState) => {
//console.log(id + 'this is the users id');

   let url = `http://localhost/moodle/webservice/restful/server.php/core_user_get_course_user_profiles`;
  axios
    .post(url, courses_row(id), tokenConfigCourses(getState))
    .then((res) => {
      dispatch({
        type: GET_COURSES,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));


};

