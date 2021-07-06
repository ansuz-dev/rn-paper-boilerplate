import React from "react";
import PropTypes from "prop-types";
import {SafeAreaView, StatusBar, StyleSheet} from "react-native";
import {useTheme} from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const BasePage = ({children}) => {
  const theme = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated
        barStyle={theme.dark ? "light-content" : "dark-content"}
        backgroundColor={theme.colors.card}
      />
      {children}
    </SafeAreaView>
  );
};

BasePage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BasePage;
