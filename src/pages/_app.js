import '../styles/tailwind.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
        <title>Community</title>
        <meta name="description" content="Material" />
        <link rel="icon" href="/logo.jpg" />
    </Head>
    <main>

      <Component {...pageProps} />
    </main>
    
  </>
}

export default MyApp
