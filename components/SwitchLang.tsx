import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function SwitchLang() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const locale = router.locale;
  const anotherLocale = router.locales?.find((l) => l !== locale) || "";
  return (
    <button
      onClick={() => {
        router.push({ pathname, query }, asPath, { locale: anotherLocale });
      }}
    >
      Switch Lang: {t("title")}
    </button>
  );
}
