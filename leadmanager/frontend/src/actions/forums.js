import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfigCourses } from './auth';

import { GET_FORUMS } from './types';


const forums_row = (id) => {


  return JSON.stringify(
    {
    
        "courseids":[
            id
        ]
    
        });
}



// GET DISCUSSIONS
export const getForums = (id) => (dispatch, getState) => {


   let url = `http://localhost/moodle/webservice/restful/server.php/mod_forum_get_forums_by_courses`;
  axios
    .post(url, forums_row(id), tokenConfigCourses(getState))
    .then((res) => {
      dispatch({
        type: GET_FORUMS,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));


};


export default getForums;