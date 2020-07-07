import { SET_THEME } from '../actions/types';

const today = new Date();
const hour = today.getHours();
var time = ['light','dark'];
if (hour < 7){
  time = ['dark','light'];
}else if (hour > 18) {
  time = ['dark','light'];
}

const initialState = {
    theme: time
  };
  

  export default function (state = initialState, action) {


    switch (action.type) {
      case SET_THEME:
        return {
          ...state,
          theme: action.payload,
        };
      
      default:
        return state;
    }
  }
  