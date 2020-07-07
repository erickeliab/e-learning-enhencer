 import { GET_SETTINGS } from "../actions/types";
 import { CREATE_SETTINGS, DELETE_SETTINGS, UPDATE_SETTINGS } from '../actions/types';

const initialState = {
  settings : [],
  updatedSetting : {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    
    case GET_SETTINGS:
                    return {
                        ...state,
                        settings: action.payload,
                    };
    case CREATE_SETTINGS:
                   return {
                ...state,
             settings: [...state.settings, action.payload],
      };

      case DELETE_SETTINGS:
        return {
          ...state,
          settings: state.settings.filter((settings) => settings.id !== action.payload),
        };
    case UPDATE_SETTINGS:
            return {
            ...state,
             updatedSetting: action.payload,
         };
    
    default:
      return state;
  }
}
