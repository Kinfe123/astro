import Link from "next/link";

const title = "Astro";
const description = "Astro is the all-in-one web framework designed for speed — build fast sites with less JavaScript.";

export default function HomePage() {
  return (
    <main style={{ padding: 32 }}>
      <h1>{title}</h1>
      <p>{description}</p>
      <Link href="/docs">Open docs</Link>
    </main>
  );
}
