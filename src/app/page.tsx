import Image from 'next/image'
import styles from './page.module.css'

export default async function Home() {
  const res = await fetch("https://api.github.com/repos/joy-ling/view-counter", {next: {revalidate: 5}});
  const data = await res.json();
  console.log(data);

  return (
    <main className={styles.main}>
        {data.stargazers_count}
    </main>
  )
}
