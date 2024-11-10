import React from "react";
import Link from "next/link";
import Head from "next/head";

const HistoryPage = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-6">
      <Head>
        <title>Payment History | PledgePay</title>
        <meta name="description" content="PledgePay Payment History" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      {/* Header with logo */}
      <header className="flex justify-between items-center p-4 relative w-full max-w-screen-xl">
        <img src="/logo.png" alt="PledgePay Logo" className="w-16 h-16" />
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-start w-full flex-1 text-center mt-8">
        <h1 className="text-3xl font-semibold text-blue-800 mb-6">
          Payment History
        </h1>

        <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">
            Select a Semester to View Your Payment History
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* History Links */}
            <HistoryLink
              title="Fall 2024"
              link="/fall2024"
            />
            <HistoryLink
              title="Spring 2024"
              link="/spring2024"
            />
            <HistoryLink
              title="Fall 2023"
              link="/fall2023"
            />
            <HistoryLink
              title="Spring 2023"
              link="/spring2023"
            />
          </div>

          {/* Back Button */}
          <div className="flex justify-center mt-8">
            <Link href="/members">
              <button className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
                Back
              </button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer with Waves */}
      <footer className="w-full mt-12 bg-blue-100 py-6">
        <div className="flex justify-center space-x-4">
          <img src="/wave2.svg" alt="Wave" className="w-16" />
          <img src="/wave3.svg" alt="Wave" className="w-16" />
          <img src="/wave1.svg" alt="Wave" className="w-16" />
        </div>
        <div className="mt-4 flex justify-center">
          <img src="/lines-lul.svg" alt="Lines" className="w-32" />
        </div>
      </footer>
    </div>
  );
};

const HistoryLink = ({ title, link }) => (
  <Link href={link}>
    {/* No need for <a> anymore; use a button or div directly inside Link */}
    <button className="py-3 text-lg font-medium text-center text-gray-800 border rounded-md border-gray-300 hover:bg-blue-50 w-full">
      {title}
    </button>
  </Link>
);

export default HistoryPage;
