const Newsletter = () => {
  return (
    <section className="py-12 bg-gray-800 rounded bg-opacity-70 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Stay Updated with food<span className="text-red-500">Beast</span>
        </h2>
        <p className="text-lg mb-8">
          Subscribe to our newsletter to get the latest updates and offers.
        </p>
        <form className="flex flex-col md:flex-row justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-l-lg w-full md:w-1/3 mb-4 md:mb-0"
          />
          <button
            type="submit"
            className="bg-red-500 text-white px-6 py-2 rounded-r-lg hover:bg-red-600"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
