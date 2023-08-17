import Image from 'next/image'
import styles from './page.module.css'
import { kv } from "@vercel/kv";

export default async function Home() {
  // See how many people like us on Github
  const res = await fetch("https://api.github.com/repos/joy-ling/view-counter", {next: {revalidate: 5}}); // Second param revalidates every 5 seconds
  const data = await res.json();

  // See how many times this page has been viewed
  const pageViews = await kv.incr("views")

  return (
    <main className={styles.main}>
        <p>{pageViews}</p>
        <span>⭐ {data.stargazers_count} ⭐</span>
    </main>
  )
}
