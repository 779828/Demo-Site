import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="bg-gray-300 dark:bg-gray-800 py-16">
      <div className="container mx-auto flex flex-col-reverse lg:flex-col items-center px-6 lg:px-12">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-300 leading-tight mb-6 mt-12">
            Welcome to{" "}
            <span className="text-blue-900 dark:text-gray-100">My Project</span>
          </h1>
          <p className="text-gray-700 text-lg mb-6 dark:text-gray-300">
            Step into the future of intelligent conversations with Brainwave,
            your ultimate AI companion designed to redefine how you interact
            with technology. Whether you're seeking quick answers, meaningful
            insights, or creative ideas, Brainwave is here to make your
            experience seamless and engaging.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/main"
              className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition dark:bg-gray-300 dark:text-gray-800 dark:hover:bg-gray-100"
            >
              Get Started
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 border border-black hover:text-gray-100 hover:bg-gray-800 dark:border-white dark:text-gray-100 font-semibold rounded-lg dark:hover:text-gray-800 dark:hover:bg-gray-100 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-24">
          <img
            src="https://digitalaptech.com/wp-content/uploads/2024/12/Banner.png"
            alt="Hero"
            className="max-w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
