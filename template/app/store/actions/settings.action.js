export const SETTINGS_SET_LANGUAGE = "SETTINGS_SET_LANGUAGE";
export const SETTINGS_SET_DARK_THEME = "SETTINGS_SET_DARK_THEME";

export const setDarkTheme = isDarkTheme => dispatch => {
  dispatch({
    type: SETTINGS_SET_DARK_THEME,
    payload: isDarkTheme,
  });
};

export const setLanguage = language => dispatch => {
  dispatch({
    type: SETTINGS_SET_LANGUAGE,
    payload: language,
  });
};
