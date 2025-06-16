// components/Navbar.tsx
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => setOpen(!open);

    return (
        <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">📰 GNews Blog</h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-4">
                    <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Home</Link>
                    <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">About</Link>
                    <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Contact</Link>
                    <ThemeToggle />
                </div>

                {/* Mobile Toggle Button */}
                <div className="md:hidden flex items-center gap-2">
                    <ThemeToggle />
                    <button onClick={toggleMenu}>
                        {open ? <X className="text-gray-800 dark:text-white" /> : <Menu className="text-gray-800 dark:text-white" />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer Menu */}
            {open && (
                <div className="md:hidden px-4 pb-4 bg-white dark:bg-gray-900 transition">
                    <Link to="/" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-500">Home</Link>
                    <Link to="/about" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-500">About</Link>
                    <Link to="/contact" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-500">Contact</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
