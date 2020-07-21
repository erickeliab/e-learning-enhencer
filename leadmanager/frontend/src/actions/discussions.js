import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfigElearning, tokenConfig, discussions_row } from './auth';

import { GET_DISCUSSIONS, GET_SAVED_DISCUSSIONS , ADD_SAVED_DISCUSSIONS , UPDATE_SAVED_DISCUSSIONS} from './types';

// GET DISCUSSIONS
export const getDiscussions = (id) => (dispatch, getState) => {

    let url = `http://localhost/moodle/webservice/restful/server.php/mod_forum_get_forum_discussions`;
  axios
    .post(url, discussions_row(id), tokenConfigElearning(getState))
    .then((res) => {
     
      dispatch({
        type: GET_DISCUSSIONS,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));


};

export const getSavedDisscusions = () => (dispatch, getState) => {
  axios
    .get('/api/discussions/', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_SAVED_DISCUSSIONS,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const updateSavedDisscusions = (id,updates) => (dispatch, getState) => {
  axios
    .put(`/api/discussions/${id}/`, updates, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addLead: 'Discussion Updated' }));
      dispatch({
        type: UPDATE_SAVED_DISCUSSIONS,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};



// ADD 
export const addSavedDisscusions = (saves) => (dispatch, getState) => {
  
axios
  .post('/api/discussions/', saves, tokenConfig(getState))
  .then((res) => {
    dispatch(createMessage({ addLead: 'Discussion Synced' }));
    dispatch({
      type: ADD_SAVED_DISCUSSIONS,
      payload: res.data,
    });
  })
  .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};