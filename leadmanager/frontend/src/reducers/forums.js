import {GET_FORUMS} from '../actions/types';


const initialState = {
    forums: [],
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case GET_FORUMS:
        return {
          ...state,
          forums : action.payload,
        };
      
      default:
        return state;
    }
  }
  