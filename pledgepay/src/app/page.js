import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>PledgePay</title>
        <meta name="description" content="A simple Next.js app" />
        <link rel="icon" href="/logo.ico" />

      </Head>

      <main>
        <h1>Welcome to PledgePay</h1>
          <h2 className="flex justify-center items-center">
            <form className="space-y-4">
              <div>
                <input className="border p-4 w-[450px] rounded-full focus:outline-none focus:placeholder-transparent"
                  type="text"
                  placeholder="Enter your User Pin to get started" />
              </div>
            </form>
          </h2>
          <h3>Don't have a user pin? Contact an Officer</h3>
          <img src ='/logo.png'/>
      </main>

      <footer>
        <div>
          <img src='/wave2.svg'/>
          <img src='/wave3.svg'/>
          <img src='/wave1.svg'/>
          <img src='/lines lul.svg'/>
        </div>
      </footer>
    </div>
  )
}