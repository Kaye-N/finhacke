import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>PledgePay</title>
        <meta name="description" content="A simple Next.js app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to PledgePay</h1>
      </main>

      <footer>
        <div>
          <img src='/wave2.svg'/>
          <img src='/wave3.svg'/>
          <img src='/wave1.svg'/>
        </div>
      </footer>
    </div>
  )
}