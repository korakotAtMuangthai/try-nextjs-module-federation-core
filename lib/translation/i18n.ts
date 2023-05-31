import i18n from "i18next";
import { initReactI18next } from "react-i18next";

let intializedI18n = false;
function intializI18next() {
  if (!intializedI18n && process.browser) {
    i18n
      .use(initReactI18next) // bind react-i18next to the instance
      .init({
        lng: "en", // if you're using a language detector, do not define the lng option
        supportedLngs: ["en", "th"],
        resources: {
          en: {
            common: {
              title: "hello world from remote",
            },
          },
          th: {
            common: {
              title: "สวัสดีโลกจาก รีโมท",
            },
          },
        },
      });

    intializedI18n = true;
  }
}
intializI18next();

export default i18n;
