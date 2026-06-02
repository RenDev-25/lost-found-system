import { Link, useLocation } from 'react-router-dom';

const adminLinks = [
  { label: 'Dashboard', path: '/admin' },
  { label: 'Manage Items', path: '/admin/items' },
  { label: 'Manage Claims', path: '/admin/claims' },
  { label: 'Manage Users', path: '/admin/users' },
];

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="w-60 bg-gray-900 text-gray-300 min-h-screen flex flex-col">

      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-800">
        <span className="text-white font-bold text-sm">
          Admin Panel
        </span>
      </div>

      {/* Links */}
      <nav className="flex-1 p-3 space-y-1">
        {adminLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={
              pathname === link.path
                ? 'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium bg-blue-600 text-white'
                : 'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-800'
            }
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Back to site */}
      <div className="p-4 border-t border-gray-800">
        <Link to="/" className="text-xs text-gray-500 hover:text-gray-300">
          ← Back to Site
        </Link>
      </div>

    </aside>
  );
}