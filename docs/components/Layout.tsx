import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { ThemeToggle } from "./ThemeToggle";

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold">Date Time Picker</h1>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              href="https://github.com/ahmedalatawi/react-date-picker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 flex gap-8">
        <Navigation />
        <main className="flex-1 max-w-4xl">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
