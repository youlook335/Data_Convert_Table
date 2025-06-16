// components/BlogCard.tsx
import { motion } from "framer-motion";
import { Blog } from "../types/Blog";

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transition hover:scale-[1.01] hover:shadow-2xl"
    >
      <img src={blog.image} alt={blog.title} className="w-full h-52 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          {blog.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {blog.description.slice(0, 100)}...
        </p>
        <div className="mt-4 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
          <a
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Read More →
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
