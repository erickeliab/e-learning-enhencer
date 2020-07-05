import { SET_THEME } from './types';

// GET DISCUSSIONS
export const changeTheme = (theme) => (dispatch, getState) => {
    const navtheme = theme == 'light' ? 'dark' : 'light';
    dispatch({
        type: SET_THEME,
        payload: [theme,navtheme]
      });

};

