import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-2">
              Uni Lost & Found
            </h3>
            <p className="text-sm">
              Secure platform for university students and staff.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3 uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/browse" className="hover:text-white">Browse Items</Link></li>
              <li><Link to="/report-lost" className="hover:text-white">Report Lost</Link></li>
              <li><Link to="/report-found" className="hover:text-white">Report Found</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
            </ul>
          </div>

          {/* Access */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3 uppercase">
              Access
            </h4>
            <p className="text-sm">
              Restricted to verified university accounts only.
            </p>

            <div className="flex gap-3 mt-4">
              <Link to="/login" className="text-sm text-blue-400 hover:text-blue-300">
                Login
              </Link>
              <Link to="/register" className="text-sm text-blue-400 hover:text-blue-300">
                Register
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} Mini University Lost & Found System.
        </div>

      </div>
    </footer>
  );
}