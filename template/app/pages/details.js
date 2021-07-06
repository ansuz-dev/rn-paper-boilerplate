import React from "react";
import {useTranslation} from "react-i18next";
import {StyleSheet, View} from "react-native";

import {Text, Button} from "react-native-paper";
import {useDispatch} from "react-redux";
import BasePage from "../components/basepage";

import * as Actions from "../store/actions/settings.action";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const DetailsPage = () => {
  const {t} = useTranslation("common");
  const dispatch = useDispatch();

  return (
    <BasePage>
      <View style={styles.container}>
        <Text>{t("Details page!")}</Text>
        <Button
          onPress={() => dispatch(Actions.setDarkTheme(true))}
        >
          {t("Set dark theme")}
        </Button>
        <Button
          onPress={() => dispatch(Actions.setDarkTheme(false))}
        >
          {t("Set light theme")}
        </Button>
      </View>
    </BasePage>
  );
};

export default DetailsPage;
