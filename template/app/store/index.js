import AsyncStorage from "@react-native-community/async-storage";
import {applyMiddleware, createStore} from "redux";
import {persistReducer, persistStore} from "redux-persist";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

// Middleware: Redux Persist Config
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: [],
  whitelist: [
    "settings",
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(
    thunk,
    // createLogger(),
  ),
);

const persistor = persistStore(store);

export {store, persistor};
