
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
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

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white">
            Lost Something?
            <span className="block text-yellow-400">Found Something?</span>
          </h1>

          <p className="mt-6 text-gray-200">
            Help reconnect items with their owners.
          </p>

          <div className="mt-8 flex gap-4">
            <Link to="/browse" className="px-6 py-3 bg-red-800 text-white rounded-lg">
              Browse Items →
            </Link>

            <Link to="/report-found" className="px-6 py-3 border border-white text-white rounded-lg">
              Report Item
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}