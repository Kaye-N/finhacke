import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>PledgePay</title>
        <meta name="description" content="A simple Next.js app" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      {/* Header with buttons positioned in the top-right corner */}
      <header className="flex justify-between items-center p-4 relative">
        
        <div className="absolute top-7 right-40 space-x-5">
          {/* Members Button */}
          <Link href="/members">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Members
            </button>
          </Link>

          {/* Admins Button */}
          <Link href="/admins">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Admins
            </button>
          </Link>
        </div>
      </header>

      <main className="text-center mt-8">
        <h1>Welcome to PledgePay</h1>
        <h2 className="flex justify-center items-center">
          <form className="space-y-4">
            <div>
              <input
                className="border p-4 w-[450px] rounded-full focus:outline-none focus:placeholder-transparent"
                type="text" 
                placeholder="Enter your User Pin to get started"
              />
            </div>
          </form>
        </h2>
        <h3>Don't have a user pin? <a href="mailto:officer@example.com">Contact an Officer</a></h3>
        <img src="/logo.png" alt="PledgePay Logo" />
      </main>

        <div>
          <img src="/wave2.svg" alt="Wave" />
          <img src="/wave3.svg" alt="Wave" />
          <img src="/wave1.svg" alt="Wave" />
          <img src="/lines-lul.svg" alt="Lines" />
          <img src="/logo.png" alt="PledgePay Logo" className="w-16 h-16" />
        </div>
    </div>
  );
}
