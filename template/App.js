import React from "react";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";

import {persistor, store} from "./app/store";
import RootNavigator from "./app/navigators/rootnavigator";
import AppProvider from "./app/providers/appprovider";

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppProvider>
        <RootNavigator />
      </AppProvider>
    </PersistGate>
  </Provider>
);

export default App;
