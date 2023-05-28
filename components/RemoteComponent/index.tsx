import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import "twin.macro";

export default function RemoteComponent({
  text = "(Remote) Current Path",
  color = "#000",
}: {
  text?: string;
  color?: string;
}) {
  const router = useRouter();

  const id = router.query.id;

  return (
    <div className={styles.container}>
      <div
        className={styles.inner}
        style={{
          color,
        }}
      >
        <span tw="font-bold underline">
          {text} - {router.asPath}
        </span>
      </div>
      {id && (
        <div>
          <Link href="/">Back to HOME</Link>
        </div>
      )}
    </div>
  );
}
