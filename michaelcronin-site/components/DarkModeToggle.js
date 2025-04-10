"use client";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  // Initialize theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const root = document.documentElement;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      root.classList.add("dark");
      setIsDark(true);
    } else {
      root.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;

    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 p-3 bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white rounded-full shadow-lg hover:scale-105 transition"
      aria-label="Toggle dark mode"
    >
      {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-500" />}
    </button>
  );
}
