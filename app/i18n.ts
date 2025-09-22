"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import ko from "./locales/ko.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ko: { translation: ko },
  },
  fallbackLng: "en",
  ns: ["translation"],
  defaultNS: "translation",
  interpolation: { escapeValue: false },
});

export default i18n;
