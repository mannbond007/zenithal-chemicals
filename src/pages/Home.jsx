import React from "react";
import { TestTube, Atom, Zap, Shield, Cpu, Beaker } from "lucide-react"; // added safe icons

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1757922072342-14526b437a8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY0fHxjaGVtaWNhbCUyMGNvbXBuYXl8ZW58MHx8MHx8fDA%3D')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content on top of overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
            Zenithal Chemicals
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl text-white">
            Providing high-quality chemical solutions for industries worldwide.
          </p>
        </div>
      </div>

      {/* Services / Cards Section */}
      <section className="py-20 bg-gray-100 text-gray-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Innovative Chemical Solutions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center mb-4 mx-auto">
                <TestTube size={28} className="text-white" />
              </div>
              <h3 className="font-semibold text-xl mb-2">
                Laboratory Research
              </h3>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-green-400 to-teal-500 flex items-center justify-center mb-4 mx-auto">
                <Atom size={28} className="text-white" />
              </div>
              <h3 className="font-semibold text-xl mb-2">
                Industrial Solutions
              </h3>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-500 to-red-500 flex items-center justify-center mb-4 mx-auto">
                <Zap size={28} className="text-white" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Safety Standards</h3>
            </div>

            {/* New Cards */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 flex items-center justify-center mb-4 mx-auto">
                <Shield size={28} className="text-white" />
              </div>
              <h3 className="font-semibold text-xl mb-2">
                Environmental Safety
              </h3>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-400 to-indigo-500 flex items-center justify-center mb-4 mx-auto">
                <Cpu size={28} className="text-white" />
              </div>
              <h3 className="font-semibold text-xl mb-2">
                Research Automation
              </h3>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-red-400 to-pink-500 flex items-center justify-center mb-4 mx-auto">
                <Beaker size={28} className="text-white" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Chemical Analysis</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
