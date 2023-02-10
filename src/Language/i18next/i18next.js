import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { EN, RU, UZ } from "../locale";
import HttpApi from "i18next-http-backend"

const resources = {
  en: {
    translation: EN,
  },
  ru: {
    translation: RU,
  },
  uz: {
    translation: UZ,
  },
};

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    lng: "ru",
    supportedLngs: ["en", "uz", "ru"],
    debug: false,
    fallbackLng: "ru",

    detection: {
      // order: ['cookie', 'htmlTag', 'localStorage', 'subdomain', 'path'],
      caches: ["cookie"],
    },
    resources,
    lowerCaseLng: true,
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
  });

export default i18next;