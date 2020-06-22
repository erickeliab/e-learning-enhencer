import { GET_DISCUSSIONS } from '../actions/types.js';

const initialState = {
  discussions: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DISCUSSIONS:
      return {
        ...state,
        discussions: action.payload,
      };
    
    default:
      return state;
  }
}
