import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  function handlePurchaseClick() {
    window.adstart.createEvent('Purchase', [{ name: 'Nike Air Max', price: '100' }])
  }

  function handleLoginUser() {
    let email = "vinicius@adstart.com.br"

    window.adstart.loginUser({ 
      email,
      other_unique_identifier: 'UUID_DOS_GURI_DO_GREMIO',
      phone: "+55 47 9 99 99999 999999",
      gender: 'male',
      first_name: 'Joao',
      last_name: 'Kepsler',
      zip_code: '90050000',
      state: 'SC',
      birthday: new Date().toISOString(),
      country: 'BR',
    }, () => { })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the AdStart Pixel tester
        </h1>

        <div className={styles.grid}>

          <button className={styles.card}>
            <h2>AddToCart</h2>

          </button>

          <button onClick={handlePurchaseClick} className={styles.card}>
            <h2>Purchase</h2>

          </button>

          <button
            onClick={handleLoginUser}
            className={styles.card}
          >
            <h2>Login</h2>

          </button>

          <button
            className={styles.card}
          >
            <h2>AddPaymentInfo</h2>
          </button>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
