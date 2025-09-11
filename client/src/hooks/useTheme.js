import { useState, useEffect } from "react";

export const useTheme = () => {
  // Initialize state from localStorage or default to true (dark mode)
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const savedMode = localStorage.getItem("darkMode");
      return savedMode ? JSON.parse(savedMode) : true;
    } catch (error) {
      console.error("Could not parse darkMode from localStorage", error);
      return true;
    }
  });

  // Effect to apply the theme class to the root element and save to localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    try {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    } catch (error) {
      console.error("Could not save darkMode to localStorage", error);
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prevMode) => !prevMode);

  return [darkMode, toggleTheme];
};
