 "use client";
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from './firebase/config'; // Adjust the path if needed

export default function Home() {
  const [netID, setNetID] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const email = `${netID}@utdallas.edu`; // Convert NetID to email format
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Retrieve user role from Firestore
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists()) {
        const role = userDoc.data().role;
        // Redirect based on role
        if (role === 'admin') {
          router.push('/admins'); // Redirect to the admin dashboard
        } else if (role === 'member') {
          router.push('/members'); // Redirect to the member dashboard
        } else {
          setError('Unknown role. Contact support.');
        }
      } else {
        setError('User data not found.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Invalid login credentials. Please try again.');
    }
  };

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
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <input
                className="border p-4 w-[450px] rounded-full focus:outline-none focus:placeholder-transparent"
                type="text" 
                placeholder="Enter your NETID"
                value={netID}
                onChange={(e) => setNetID(e.target.value)}
              />
            </div>
            <div>
              <input
                className="border p-4 w-[450px] rounded-full focus:outline-none focus:placeholder-transparent"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Login
            </button>
          </form>
        </h2>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        <h3>
          Don't have a user pin? <a href="mailto:officer@example.com" className="text-blue-600 underline">Contact an Officer</a>
        </h3>
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