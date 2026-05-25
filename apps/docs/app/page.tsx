import Link from "next/link";

const title = "Astro";
const description = "The all-in-one web framework designed for speed. Build fast sites with your favorite UI framework — or none at all.";

export default function HomePage() {
  return (
    <main style={{ padding: 32 }}>
      <h1>{title}</h1>
      <p>{description}</p>
      <Link href="/docs">Open docs</Link>
    </main>
  );
}
