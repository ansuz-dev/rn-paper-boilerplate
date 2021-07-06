import * as Actions from "../actions/settings.action";

const initialState = () => ({
  language: "vi",
  isDarkTheme: false,
});

export const migrations = {
  0: () => initialState,
};

// eslint-disable-next-line default-param-last
const settingsReducer = (state = initialState(), action) => {
  switch (action.type) {
    case Actions.SETTINGS_SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case Actions.SETTINGS_SET_DARK_THEME:
      return {
        ...state,
        isDarkTheme: action.payload,
      };
    default:
      return state;
  }
};

export default settingsReducer;
