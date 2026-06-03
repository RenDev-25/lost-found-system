import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Search, ShieldCheck, MapPin } from 'lucide-react';

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative min-h-screen flex items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-800/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-white/10 text-xs text-white mb-6">
              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
              OFFICIAL UNIVERSITY SYSTEM
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight text-white">
              Lost Something?
              <span className="block text-yellow-400">Found Something?</span>
            </h1>

            <p className="mt-6 text-gray-200 text-base sm:text-lg max-w-xl">
              Help reconnect items with their owners. A secure university system for reporting and recovering lost belongings on campus.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/browse"
                className="px-6 py-3 rounded-lg bg-red-800 text-white hover:bg-red-700 transition-all"
              >
                Browse Items →
              </Link>

              <Link
                to="/report-found"
                className="px-6 py-3 rounded-lg border border-white text-white hover:bg-white/10 transition-all"
              >
                Report Item
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest text-red-800 mb-3">
              WHY UNIFIND
            </p>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900">
              A reliable system, built for campus.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-white">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-semibold mt-6 mb-3">
                Easy Reporting System
              </h3>
              <p className="text-gray-600">
                File lost or found item reports in under a minute with a clean, guided form.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-white">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-semibold mt-6 mb-3">
                Fast Item Search
              </h3>
              <p className="text-gray-600">
                Filter by category, location, status, and date to quickly locate belongings.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-white">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-semibold mt-6 mb-3">
                Secure Claim Process
              </h3>
              <p className="text-gray-600">
                Identity verification and staff review keep returns safe and accountable.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-white">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-semibold mt-6 mb-3">
                Campus-Wide Support
              </h3>
              <p className="text-gray-600">
                Coverage across all colleges, libraries, gyms, and administrative buildings.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CHATBOT */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">

        {chatOpen && (
          <div className="w-72 h-96 bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col border border-gray-200">
            <div className="bg-blue-950 text-white p-4 flex justify-between">
              <span>Mini University Assistant</span>
              <button onClick={() => setChatOpen(false)}>×</button>
            </div>

            <div className="flex-1 p-4 text-sm text-gray-600 bg-gray-50">
              Hi there! Need help finding or reporting items?
            </div>
          </div>
        )}

        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="w-14 h-14 rounded-full bg-red-800 text-white shadow-lg hover:bg-red-700"
        >
          {chatOpen ? '✕' : '💬'}
        </button>

      </div>
    </>
  );
}