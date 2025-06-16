// components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-center py-6 mt-10 text-sm text-gray-600 dark:text-gray-300">
      <p>© {new Date().getFullYear()} GNews Blog. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
