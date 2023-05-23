import Link from "next/link";
import { useRouter } from "next/router";

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
    <div>
      <div
        className="pb-3 color"
        style={{
          color,
        }}
      >
        {text} - {router.asPath}
      </div>
      {id && (
        <div>
          <Link href="/">Back to HOME</Link>
        </div>
      )}
    </div>
  );
}
