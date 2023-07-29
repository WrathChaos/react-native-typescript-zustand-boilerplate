import LocalizedStrings from "react-native-localization";

import trTranslations from "./tr.localization";
import enTranslations from "./en.localization";
export const translations = new LocalizedStrings({
  en: enTranslations,
  tr: trTranslations,
});
