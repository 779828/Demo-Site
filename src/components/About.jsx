const About = () => {
  return (
    <div className="px-6 py-8 mt-12 min-h-screen">
      <section className="dark:bg-gray-800 bg-inherit py-12">
        <div className="container mx-auto flex flex-col items-center md:flex-row md:items-start">
          <div className="mb-8 md:mb-0 md:w-1/2 flex justify-center">
            <img
              src="https://img.stablecog.com/insecure/1920w/aHR0cHM6Ly9iLnN0YWJsZWNvZy5jb20vZGYzMTNkM2QtZTA2MS00ZjcwLWEyMjgtNTU1OGFhODY4OTczLmpwZWc.webp"
              alt="About Us"
              className="w-full max-w-sm rounded-lg shadow-lg object-cover md:w-3/4"
            />
          </div>

          <div className="md:w-1/2 md:pl-10 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              About Us
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
              We are a team of passionate individuals dedicated to delivering
              exceptional services and solutions. Our goal is to help businesses
              achieve their potential with innovative ideas and state-of-the-art
              technology.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
              With years of experience and a commitment to excellence, we strive
              to create impactful experiences for our clients and their
              customers.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition duration-300 dark:bg-gray-300 dark:text-black dark:hover:bg-gray-100 uppercase"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
