import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfigCourses, courses_row } from './auth';

import {    GET_COURSES } from './types';

// GET DISCUSSIONS
export const getCourses = () => (dispatch, getState) => {

   let url = `http://localhost/moodle/webservice/restful/server.php/core_user_get_course_user_profiles`;
  axios
    .post(url, courses_row(getState), tokenConfigCourses(getState))
    .then((res) => {
      dispatch({
        type: GET_COURSES,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));


};

