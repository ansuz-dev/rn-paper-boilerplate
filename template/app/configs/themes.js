import {Platform} from "react-native";

export const fonts = {
  light: Platform.OS === "ios" ? {
    fontFamily: "Roboto",
    fontWeight: "300",
  } : {
    fontFamily: "Roboto_Light",
    fontWeight: "normal",
  },
  medium: Platform.OS === "ios" ? {
    fontFamily: "Roboto",
    fontWeight: "500",
  } : {
    fontFamily: "Roboto_Medium",
    fontWeight: "normal",
  },
  regular: {
    fontFamily: "Roboto",
    fontWeight: "normal",
  },
  thin: Platform.OS === "ios" ? {
    fontFamily: "Roboto",
    fontWeight: "100",
  } : {
    fontFamily: "Roboto_Thin",
    fontWeight: "normal",
  },
};

export const defaultConfigTheme = {
  colors: {
    // navigation
    primary: "rgb(255, 45, 85)",
    background: "rgb(242, 242, 242)",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
    // paper
    accent: "#03dac4",
    surface: "#ffffff",
    error: "#B00020",
    onSurface: "#000000",
    disabled: "#d0d0d0",
    placeholder: "#d0d0d0",
    backdrop: "#d0d0d0",
  },
  // paper
  roundness: 4,
  fonts,
};

export const darkConfigTheme = {
  colors: {
    // navigation
    primary: "#D9E756",
    background: "rgb(46, 46, 46)",
    card: "rgb(32, 32, 32)",
    text: "rgb(246, 246, 246)",
    border: "rgb(40, 40, 40)",
    notification: "rgb(255, 69, 58)",
    // paper
    accent: "#03dac4",
    surface: "#ffffff",
    error: "#B00020",
    onSurface: "#000000",
    disabled: "#d0d0d0",
    placeholder: "#d0d0d0",
    backdrop: "#d0d0d0",
  },
  // paper
  roundness: 4,
  fonts,
};
