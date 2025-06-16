// pages/Contact.tsx
const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
        Contact Us
      </h1>
      <form className="grid gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
