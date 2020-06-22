import { GET_USER } from '../actions/types';
import { GET_USER_TOKEN, GET_USER_TOKEN_FAIL } from '../actions/types';

const initialState = {
    users: [],
    token_value : '',
    token_status : ""
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case GET_USER:
        return {
          ...state,
          users: action.payload.users.filter(user => user.email === 'erickemma@gmail.com'),
        };
        case GET_USER_TOKEN:
        localStorage.setItem('token_value', action.payload.token)
            return {
              ...state,
              token_value: action.payload.token
         };
         case GET_USER_TOKEN_FAIL:
            return {
            ...state,
            token_status: 'Not fetched'
        };
      
      default:
        return state;
    }
  }
  

