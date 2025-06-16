// components/ThemeToggle.tsx
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        if (dark) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [dark]);

    return (
        <button
            onClick={() => setDark(!dark)}
            className="ml-auto px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-sm font-medium text-gray-800 dark:text-white transition"
        >
            {dark ? "🌙 Dark" : "☀️ Light"}
        </button>
    );
};

export default ThemeToggle;
