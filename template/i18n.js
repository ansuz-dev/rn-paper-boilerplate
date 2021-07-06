import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import appConfig from "./app/i18n/app.config";

const resources = {};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    initImmediate: false,
  })
  .then(() => {
    appConfig(i18n);
  });

export default i18n;
