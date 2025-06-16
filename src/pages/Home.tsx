import { useEffect, useState } from "react";
import axios from "axios";
import { Blog } from "../types/Blog";
import BlogCard from "../components/BlogCard";
import SearchFilter from "../components/SearchFilter";

const API_KEY = "a73eba6b2c2783ba65bd9e24abbb942c"; // 👈 یہاں اپنا GNews API Key ڈالیں

const Home = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [query, setQuery] = useState("technology");
    const [lang, setLang] = useState("en");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchNews = async () => {
        setLoading(true);
        setError("");
        try {
            const res = await axios.get(
                `https://gnews.io/api/v4/search?q=${query}&lang=${lang}&max=100&token=${API_KEY}`
            );
            setBlogs(res.data.articles);
        } catch (err) {
            setError("Failed to fetch news articles.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNews();
    }, [query, lang]);

    return (
        <div className="max-w-6xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
                🌍 GNews Blog App
            </h1>


            <SearchFilter
                onSearch={(q) => setQuery(q)}
                onLanguageChange={(l) => setLang(l)}
            />

            {loading && <p className="text-center text-blue-500">Loading...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog, idx) => (
                    <BlogCard key={idx} blog={blog} />
                ))}
            </div>

            {!loading && blogs.length === 0 && (
                <p className="text-center text-gray-500 mt-10">No articles found.</p>
            )}
        </div>
    );
};

export default Home;
