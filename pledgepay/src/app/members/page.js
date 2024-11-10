import Head from 'next/head';
import Link from 'next/link';

export default function Members() {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-6">
      <Head>
        <title>Members | PledgePay</title>
        <meta name="description" content="PledgePay Members Dashboard" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      {/* Header with logo and navigation buttons */}
      <header className="flex justify-between items-center p-4 relative w-full max-w-screen-xl">
        <img src="/logo.png" alt="PledgePay Logo" className="w-16 h-16" />
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center w-full flex-1 text-center mt-8">
        <h1 className="text-3xl font-semibold text-blue-800 mb-6">
          Welcome, {'<member>'}! Please choose an option below to get started
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-4xl">
          <OptionCard
            title="Pay Dues"
            description="This semester, dues are $50. Please click below to pay through PayPal."
            buttonText="Click here"
          />
          <OptionCard
            title="Donate"
            description="Want to help us fundraise? Drop some $$ below!"
            buttonText="Click here"
          />
          <OptionCard
            title="History"
            description="Click below to see your payment history."
            buttonText="Click here"
          />
          <OptionCard
            title="Pending"
            description="Look at any pending amounts below."
            buttonText="Click here"
          />
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
}

// OptionCard component
const OptionCard = ({ title, description, buttonText }) => (
  <div className="bg-blue-100 border border-blue-300 rounded-lg p-6 text-center shadow-md">
    <h2 className="text-lg font-bold text-blue-700">{title}</h2>
    <p className="text-sm text-blue-600 mt-2 mb-4">{description}</p>
    <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
      {buttonText}
    </button>
  </div>
);
