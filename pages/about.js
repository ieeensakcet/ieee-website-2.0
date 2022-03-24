import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer/Footer'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IEEE NSAKCET</title>
        <meta name="description" content="IEEE NSAKCET About" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">About page!</a>
        </h1>
      </main>

      <Footer />
    </div>
  )
}
