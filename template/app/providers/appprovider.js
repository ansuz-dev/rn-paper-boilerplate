import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";

import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";

import merge from "deepmerge";

import {useSelector} from "react-redux";

import i18n from "../../i18n";
import {defaultConfigTheme, darkConfigTheme} from "../configs/themes";

const defaultTheme = merge.all([
  PaperDefaultTheme,
  NavigationDefaultTheme,
  defaultConfigTheme,
]);

const darkTheme = merge.all([
  PaperDarkTheme,
  NavigationDarkTheme,
  darkConfigTheme,
]);

const AppProvider = ({children}) => {
  const {language, isDarkTheme} = useSelector(({settings}) => settings);

  useEffect(() => {
    if (language) {
      i18n.changeLanguage(language.toLowerCase());
    }
  }, [language]);

  const theme = isDarkTheme ? darkTheme : defaultTheme;

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        {children}
      </NavigationContainer>
    </PaperProvider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
