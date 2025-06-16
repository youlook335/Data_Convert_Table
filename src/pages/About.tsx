// pages/About.tsx
const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
        About GNews Blog
      </h1>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        GNews Blog is a modern news aggregator built using GNews API, React, TypeScript, and Tailwind CSS.
        Our goal is to deliver trending news articles from around the world in a clean, fast, and user-friendly interface.
      </p>
      <p className="mt-4 text-gray-700 dark:text-gray-300">
        Features include keyword search, language filtering, dark/light mode, responsive layout, and smooth animations.
        Stay updated with the latest happenings in tech, politics, sports, and more!
      </p>
    </div>
  );
};

export default About;
