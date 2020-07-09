import { GET_DISCUSSIONS, GET_SAVED_DISCUSSIONS , UPDATE_SAVED_DISCUSSIONS, ADD_SAVED_DISCUSSIONS } from '../actions/types.js';

const initialState = {
  discussions: [],
  savedDiscussions:[]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DISCUSSIONS:
      return {
        ...state,
        discussions: action.payload,
      };
    case GET_SAVED_DISCUSSIONS:
      return {
        ...state,
        savedDiscussions: action.payload,
      }
      case UPDATE_SAVED_DISCUSSIONS:

        let temp = state.savedDiscussions.filter((dis) => dis.id !== action.payload.id)
        return {
          ...state,
         savedDiscussions: [...state.savedDiscussions.filter((dis) => dis.id !== action.payload.id),action.payload],
        }
  
          case ADD_SAVED_DISCUSSIONS:
            return {
              ...state,
              savedDiscussions: [...state.savedDiscussions,action.payload],
            }
    default:
      return state;
  }
}
