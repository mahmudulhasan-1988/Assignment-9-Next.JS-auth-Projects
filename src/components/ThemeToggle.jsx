"use client";

import { useEffect, useState } from "react";

import { FiMoon, FiSun } from "react-icons/fi";

const ThemeToggle = () => {

    const [darkMode, setDarkMode] = useState(false);

    // LOAD SAVED THEME
    useEffect(() => {

        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {

            document.documentElement.classList.add("dark");

            setDarkMode(true);

        }

    }, []);

    // TOGGLE THEME
    const toggleTheme = () => {

        if (darkMode) {

            document.documentElement.classList.remove("dark");

            localStorage.setItem("theme", "light");

            setDarkMode(false);

        } else {

            document.documentElement.classList.add("dark");

            localStorage.setItem("theme", "dark");

            setDarkMode(true);

        }

    };

    return (

        <button
            onClick={toggleTheme}
            className="w-12 h-12 rounded-full flex items-center justify-center bg-white dark:bg-[#09142b] border border-gray-300 dark:border-gray-700 shadow-lg transition-all duration-300"
        >

            {
                darkMode ? (
                    <FiSun className="text-yellow-400 text-2xl" />
                ) : (
                    <FiMoon className="text-black text-2xl" />
                )
            }

        </button>

    );
};

export default ThemeToggle;