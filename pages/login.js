import Head from 'next/head'
import Footer from '../components/footer/Footer'
import styles from '../styles/Home.module.css'
import SignIn from '../components/signIn/SignIn'

export default function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <SignIn />
      </main>

      <Footer />
    </div>
  )
}
