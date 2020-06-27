import { GET_COURSES } from '../actions/types.js';

const initialState = {
  courses: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COURSES:
      return {
        ...state,
        courses : action.payload[0].enrolledcourses,
      };
    
    default:
      return state;
  }
}
