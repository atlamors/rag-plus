import Link from "next/link";
import IndexDoc from "../content/index.mdx";

export default function HomePage() {
  return (
    <main>
      <IndexDoc />
      <hr />
      <p>
        See the <Link href="/pdr">Project Decision Record</Link>.
      </p>
    </main>
  );
}
