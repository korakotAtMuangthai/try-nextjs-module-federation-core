import i18n, { InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";

const LANGUAGES = ["en", "th"];

let intializedI18n = false;
function intializI18next() {
  if (!intializedI18n && process.browser) {
    i18n.use(initReactI18next).init<InitOptions>({
      lng: LANGUAGES[0],
      supportedLngs: LANGUAGES,
      resources: {},
    });

    i18n.store.on("added", function (lng, ns) {
      i18n.changeLanguage(i18n.language);
    });

    const ns = "common";
    fetch(`http://localhost:3011/api/translation?languages=${LANGUAGES.join(",")}&ns=${ns}`)
      .then((res) => res.json())
      .then((data) => {
        for (const lang of LANGUAGES) {
          i18n.addResources(lang, ns, data[lang]);
        }
      });

    intializedI18n = true;
  }
}
intializI18next();

export default i18n;
