import {combineReducers} from "redux";

import settingsReducer from "./settings.reducer";

// Redux: Root Reducer,
const rootReducer = combineReducers({
  settings: settingsReducer,
});

export default rootReducer;
