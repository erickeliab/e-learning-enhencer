import { GET_SETTINGS , CREATE_SETTINGS ,  DELETE_SETTINGS , UPDATE_SETTINGS} from '../actions/types';
import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';



// GET SETTINGS
export const getSettings = () => (dispatch, getState) => {
  axios
    .get('/api/settings', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_SETTINGS,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE 
export const deleteSetting = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/settings/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteLead: 'Settings Deleted' }));
      dispatch({
        type: DELETE_SETTINGS,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

//update
export const updateSetting = (id,settings,current) => (dispatch, getState) => {
    settings.updatetime = settings.updatetime != '' ? settings.updatetime : current.updatetime,
    settings.phone = settings.phone != '' ? settings.phone : current.phone,

    axios
      .put(`/api/settings/${id}/`,settings, tokenConfig(getState))
      .then((res) => {
        dispatch(createMessage({ deleteLead: 'Settings Updated' }));
        dispatch({
          type: UPDATE_SETTINGS,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

// ADD 
export const addSettings = (settings) => (dispatch, getState) => {
    console.log(settings);
    
  axios
    .post('/api/settings/', settings, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addLead: 'Settings Added' }));
      dispatch({
        type: CREATE_SETTINGS,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};
