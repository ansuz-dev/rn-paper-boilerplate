import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import HomePage from "../pages/home";
import DetailsPage from "../pages/details";

const Stack = createStackNavigator();

const RootNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomePage} />
    <Stack.Screen name="Details" component={DetailsPage} />
  </Stack.Navigator>
);

export default RootNavigator;
