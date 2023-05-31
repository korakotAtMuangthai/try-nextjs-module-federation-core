import { useEffect } from "react";
import { useRouter } from "next/router";
import i18n from "../i18n";

export default function useSyncTranslation() {
  const router = useRouter();
  const locale = router?.locale;
  useEffect(() => {
    if (!locale) return;
    i18n.changeLanguage(locale);
  }, [locale]);
}
