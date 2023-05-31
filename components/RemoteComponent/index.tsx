import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import "twin.macro";
import SwitchLang from "../SwitchLang";
import { useTranslation } from "react-i18next";

export default function RemoteComponent({
  text = "(Remote) Current Path",
  color = "#000",
}: {
  text?: string;
  color?: string;
}) {
  const router = useRouter();

  const id = router.query.id;
  const locale = router.locale;
  const { t } = useTranslation("common");

  return (
    <div className={styles.container}>
      <div className="text-3xl font-bold">TITLE REMOTE: {t("title")}</div>
      <div
        className={styles.inner}
        style={{
          color,
        }}
      >
        <span tw="font-bold underline">
          {text} - {router.asPath}
        </span>
        <br />
        <span>locale: {locale}</span>
      </div>
      {id && (
        <div>
          <Link href="/">Back to HOME</Link>
        </div>
      )}
      <div>
        <SwitchLang />
      </div>
    </div>
  );
}
