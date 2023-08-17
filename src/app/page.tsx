import Image from 'next/image'
import styles from './page.module.css'

export default async function Home() {
  const res = await fetch("https://api.github.com/repos/joy-ling/view-counter");
  const data = await res.json();
  console.log(data);

  return (
    <main className={styles.main}>
        <p>0</p>
    </main>
  )
}
