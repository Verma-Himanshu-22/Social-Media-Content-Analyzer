import React from "react";
import { SunIcon, MoonIcon } from "./icons/Icons.jsx";

export const Header = ({ darkMode, onToggleTheme }) => (
  <header className="flex items-center justify-between mb-6">
    <h1 className="text-3xl sm:text-4xl font-bold text-center flex-grow">
      Social Media Content Analyzer
    </h1>
    <button
      onClick={onToggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-all duration-300 shadow-md hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900"
      aria-label="Toggle dark mode"
      type="button"
    >
      {darkMode ? <SunIcon /> : <MoonIcon />}
    </button>
  </header>
);
