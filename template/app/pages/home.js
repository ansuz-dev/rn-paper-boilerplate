import React from "react";
import {useTranslation} from "react-i18next";
import {StyleSheet, View} from "react-native";
import {useDispatch} from "react-redux";
import {useNavigation} from "@react-navigation/native";

import {Button, Text} from "react-native-paper";
import BasePage from "../components/basepage";

import * as Actions from "../store/actions/settings.action";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const HomePage = () => {
  const {t} = useTranslation("common");
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <BasePage>
      <View style={styles.container}>
        <Text>{t("Hello world!")}</Text>
        <Button
          mode="text"
          uppercase={false}
          onPress={() => navigation.navigate("Details")}
        >
          {t("Go to Details")}
        </Button>
        <Button
          onPress={() => dispatch(Actions.setLanguage("vi"))}
        >
          {t("Vietnamese")}
        </Button>
        <Button
          onPress={() => dispatch(Actions.setLanguage("en"))}
        >
          {t("English")}
        </Button>
      </View>
    </BasePage>
  );
};

export default HomePage;
