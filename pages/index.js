import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <Head>
        <title>Reactime | Home</title>
        <meta name='keywords'content='reactime'/>
    </Head>
    <div className={styles.title}>
      <h1>HomePage</h1>
      <p className={styles.text}>This is my homepage</p>
      <Link href="/reactime">
        <a className={styles.btn}>Back to Home</a>
      </Link>
    </div>
    </>
  )
}
