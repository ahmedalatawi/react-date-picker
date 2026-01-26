import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/getting-started', label: 'Getting Started' },
  { to: '/installation', label: 'Installation' },
  { to: '/examples', label: 'Examples' },
  { to: '/api', label: 'API' },
  { to: '/themes', label: 'Themes' },
  { to: '/accessibility', label: 'Accessibility' },
];

export const Navigation: React.FC = () => {
  return (
    <nav className="w-64 space-y-1">
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg text-sm font-medium transition-colors
            ${
              isActive
                ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800/50'
            }`
          }
          end
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
};