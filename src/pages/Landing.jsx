  export default function Landing() {
    return (
      <div className="min-h-screen bg-[#f5f1e3] flex flex-col">
        {/* ✅ Remove the duplicate header here */}

        {/* Hero Section */}
        <main className="flex flex-1 flex-col md:flex-row items-center justify-between px-12 py-16">
          {/* Left Content */}
          <div className="max-w-xl">
            <h2 className="text-5xl font-extrabold text-[#1c2412] leading-tight">
              Unlock Knowledge, <br /> Anytime, Anywhere
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              Discover books, save them to your workspace, and get instant AI-powered help while you read.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex space-x-4">
              <a
                href="/signup"
                className="px-6 py-3 bg-[#1c2412] text-white rounded-lg font-medium shadow-md hover:bg-[#2e3a20] transition"
              >
                Get Started
              </a>
              <a
                href="/explore"
                className="px-6 py-3 border border-[#1c2412] text-[#1c2412] rounded-lg font-medium hover:bg-[#1c2412] hover:text-white transition"
              >
                Explore Library
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="mt-10 md:mt-0">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2972/2972235.png"
              alt="Library Illustration"
              className="w-96 h-auto drop-shadow-lg"
            />
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-[#1c2412] text-white text-center py-4 mt-auto">
          <p>© 2025 Public Library | Built with ❤️ by Redify</p>
        </footer>
      </div>
    );
  }
