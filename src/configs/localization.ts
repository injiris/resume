import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Texts } from "../constants/Texts";

export default async function configLocalization() {
  await i18n.use(initReactI18next).init({
    resources: {
      "pt-BR": {
        resume: Texts["pt-BR"],
      },
      en: {
        resume: Texts["en"],
      },
    },
    lng: "pt-BR",
    fallbackLng: "pt-BR",
    defaultNS: "profile",
    interpolation: {
      escapeValue: false,
    },
  });
}
