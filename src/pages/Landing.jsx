import React from "react";
import { BookOpen, Brain, PenTool } from "lucide-react";

const HERO_IMG = "https://cdn-icons-png.flaticon.com/512/2972/2972235.png";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f5f1e3] via-[#fff6e0] to-[#dde7d6] font-sans overflow-hidden">
      {/* Floating blurred backgrounds */}
      <div className="fixed top-[-200px] left-[-100px] w-[500px] h-[500px] bg-[#ffd37b] opacity-20 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed right-[-150px] bottom-[-180px] w-[400px] h-[400px] bg-[#e3e7fc] opacity-30 rounded-full blur-2xl pointer-events-none z-0" />

      {/* Header */}
      <header className="z-20 sticky top-0 flex items-center justify-between px-6 sm:px-10 py-5 bg-white/70 backdrop-blur-md border-b border-[#e3e7fc] shadow-sm">
        <span className="text-2xl font-black text-[#283522]">
          <span className="bg-gradient-to-r from-[#84c784] via-[#ffd37b] to-[#f77672] bg-clip-text text-transparent">
            Redify Library
          </span>
        </span>
        <nav className="flex items-center gap-x-6">
          <a
            href="/explore"
            className="text-base font-semibold text-[#283522] hover:text-[#6eccaf] transition"
          >
            Explore
          </a>
          <a
            href="/signup"
            className="px-6 py-2 bg-gradient-to-r from-[#283522] to-[#77c98a] text-white font-semibold rounded-xl shadow-md hover:scale-105 transition-all duration-200"
          >
            Get Started
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-1 items-center justify-center px-6 py-10">
        <div className="bg-white/70 backdrop-blur-lg shadow-2xl rounded-2xl flex flex-col md:flex-row w-full max-w-6xl overflow-hidden relative border border-[#e3e7fc]">
          {/* Left Content */}
          <div className="flex-1 p-8 md:p-14 flex flex-col justify-center z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#283522] leading-tight mb-6">
              Unlock Knowledge, <br /> Anytime, Anywhere
            </h1>
            <p className="text-lg md:text-xl text-[#49513e] mb-8 max-w-xl">
              Discover books, publish notes, save favorites, and let{" "}
              <span className="font-semibold text-[#283522]">Redify’s AI</span>{" "}
              solve your doubts—your personalized study companion.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="/signup"
                className="px-7 py-3 bg-gradient-to-br from-[#6eccaf] to-[#283522] text-white font-bold rounded-lg shadow-lg hover:scale-105 active:scale-95 transition-all"
              >
                Get Started
              </a>
              <a
                href="/explore"
                className="px-7 py-3 bg-white border-2 border-[#283522] text-[#283522] font-bold rounded-lg hover:bg-[#f5f1e3] hover:border-[#6eccaf] transition-all"
              >
                Explore Library
              </a>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              <div className="flex flex-col items-start gap-2">
                <span className="p-3 bg-[#fffaf1] rounded-full shadow">
                  <PenTool className="text-[#283522]" />
                </span>
                <h4 className="font-semibold text-[#283522]">Workspace</h4>
                <p className="text-sm text-gray-600">Write notes, bookmark and stay organized.</p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <span className="p-3 bg-[#dbf3e0] rounded-full shadow">
                  <Brain className="text-[#283522]" />
                </span>
                <h4 className="font-semibold text-[#283522]">AI Assistant</h4>
                <p className="text-sm text-gray-600">Solve doubts instantly with AI-powered help.</p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <span className="p-3 bg-[#e3e7fc] rounded-full shadow">
                  <BookOpen className="text-[#283522]" />
                </span>
                <h4 className="font-semibold text-[#283522]">Rich Library</h4>
                <p className="text-sm text-gray-600">Access curated books, PDFs & notes anytime.</p>
              </div>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="flex-1 flex items-center justify-center bg-gradient-to-tr from-[#dde7d6] via-[#e3e7fc] to-[#fff6e0] p-6">
            <img
              src={HERO_IMG}
              alt="Digital Library"
              className="w-72 lg:w-[25rem] drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              draggable={false}
            />
          </div>
        </div>
      </main>

      {/* Mini About Section */}
      <section className="max-w-5xl mx-auto text-center py-12 px-6">
        <h2 className="text-3xl font-bold text-[#283522] mb-4">Why Choose Redify?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Redify is more than a library—it’s your personal study hub. With AI-driven support, 
          collaborative tools, and a rich library, we make learning accessible, interactive, 
          and future-ready.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-[#283522] text-white py-8 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center px-6">
          <p>© 2025 Redify Public Library. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-[#77c98a]">About</a>
            <a href="#" className="hover:text-[#77c98a]">Contact</a>
            <a href="#" className="hover:text-[#77c98a]">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
