import React from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="prose dark:prose-invert">
      <h1>Date Time Picker</h1>
      <p className="lead">
        A beautiful, customizable date and time picker component for React with multiple themes and localization support.
      </p>
      
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg p-6 my-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">✨ Works Everywhere</h3>
        <p className="text-gray-700 dark:text-gray-300">
          Works perfectly with or without Tailwind CSS. Built-in styles provide beautiful defaults, while Tailwind integration offers unlimited customization.
        </p>
      </div>
      
      <div className="mt-8 flex gap-4">
        <Link
          to="/getting-started"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Get Started
        </Link>
        <Link
          to="/examples"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 dark:text-indigo-300 dark:bg-indigo-900/50 dark:hover:bg-indigo-900"
        >
          View Examples
        </Link>
      </div>

      <h2>Features</h2>
      <ul>
        <li>Multiple selection modes (single date, date range, week range)</li>
        <li>Time picker with 12/24-hour format support</li>
        <li>Internationalization support with date-fns locales</li>
        <li>Multiple built-in themes (Modern, Material, Gradient, Hotel Booking)</li>
        <li>Fully customizable styling with Tailwind CSS</li>
        <li>Responsive and mobile-friendly design</li>
        <li>Accessibility-friendly with full keyboard navigation</li>
        <li>TypeScript support</li>
        <li>Date notes and annotations support</li>
        <li>Confirmation mode with OK button</li>
        <li>Standalone time picker component</li>
        <li>Tree-shakeable and lightweight</li>
        <li>Works with or without Tailwind CSS</li>
        <li>Built-in beautiful default styles</li>
      </ul>
    </div>
  );
};