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
      <a href="/" className="inline-block">
        <img src="/logo.png" alt="PledgePay Logo" className="w-16 h-16" />
      </a>

      <focus>
      <main className="flex flex-col items-center justify-start w-full flex-1 text-center mt-8">
        <h1 className="text-3xl font-semibold text-blue-800 mb-6">
          Welcome, {'<member>'}! Please choose an option below to get started
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-md mx-auto">
          <OptionCard
            title="Pay Dues"
            description="This semester, dues are $50."
            buttonText="Click here"
            link="/pay-duesM"  // Adjust the link if needed
          />
          <OptionCard
            title="Reimbursement"
            description="Click to send a reimbursement request."
            buttonText="Click here"
            link="/reimbursementM"  // Adjust the link if needed
          />
        </div>
          
      </main>
      </focus>


      {/* Footer with Waves */}
      <footer className="w-full mt-12 py-6">
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
const OptionCard = ({ title, description, buttonText, link }) => (
  <div className="bg-white border border-blue-300 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between h-64">
    <h2 className="text-lg font-bold text-blue-700">{title}</h2>
    <p className="text-sm text-blue-600 mt-2 mb-4">{description}</p>
    {/* Center the button */}
    <div className="flex justify-center mt-auto">
      <Link href={link}>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
          {buttonText}
        </button>
      </Link>
    </div>
  </div>
);

