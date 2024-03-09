import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ResumeTexts } from "../constants/ResumeTexts";

export default async function configLocalization() {
  await i18n.use(initReactI18next).init({
    resources: {
      "pt-BR": {
        resume: ResumeTexts["pt-BR"],
      },
      en: {
        resume: ResumeTexts["en"],
      },
    },
    lng: "pt-BR",
    fallbackLng: "pt-BRs",
    defaultNS: "resume",
    interpolation: {
      escapeValue: false,
    },
  });
}
