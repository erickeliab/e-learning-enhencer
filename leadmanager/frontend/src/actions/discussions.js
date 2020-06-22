import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfigElearning, discussions_row } from './auth';

import { GET_DISCUSSIONS } from './types';

// GET DISCUSSIONS
export const getDiscussions = () => (dispatch, getState) => {

    let url = `http://localhost/moodle/webservice/restful/server.php/mod_forum_get_forum_discussions`;
  axios
    .post(url, discussions_row, tokenConfigElearning(getState))
    .then((res) => {
      dispatch({
        type: GET_DISCUSSIONS,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));


};

