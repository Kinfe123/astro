import Link from "next/link";

const title = "Astro";
const description = "Astro is a modern site builder with web best practices, performance, and DX front-of-mind.";

export default function HomePage() {
  return (
    <main style={{ padding: 32 }}>
      <h1>{title}</h1>
      <p>{description}</p>
      <Link href="/docs">Open docs</Link>
    </main>
  );
}
