// components/SearchFilter.tsx
import { useState } from "react";

interface Props {
  onSearch: (query: string) => void;
  onLanguageChange: (lang: string) => void;
}

const SearchFilter = ({ onSearch, onLanguageChange }: Props) => {
  const [query, setQuery] = useState("");

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 items-center justify-between bg-white rounded-xl shadow-lg mb-6">
      <input
        type="text"
        placeholder="Search News..."
        className="border p-2 rounded w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch(query)}
      />

      <select
        onChange={(e) => onLanguageChange(e.target.value)}
        className="border p-2 rounded w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="en">🌐 English</option>
        <option value="ur">🇵🇰 Urdu</option>
        <option value="fr">🇫🇷 French</option>
        <option value="es">🇪🇸 Spanish</option>
      </select>

      <button
        onClick={() => onSearch(query)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
      >
        Search
      </button>
    </div>
  );
};

export default SearchFilter;
