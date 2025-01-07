const About = () => {
  return (
    <div className="h-[110vh]">
      <section className="dark:bg-gray-800 py-16 px-5">
        <div className="container mx-auto flex flex-col items-center md:flex-row">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <img
              src="https://img.stablecog.com/insecure/1920w/aHR0cHM6Ly9iLnN0YWJsZWNvZy5jb20vZGYzMTNkM2QtZTA2MS00ZjcwLWEyMjgtNTU1OGFhODY4OTczLmpwZWc.webp"
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="md:w-1/2 md:pl-10">
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
              className="p-2 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition duration-300 dark:bg-gray-300 dark:text-black dark:hover:bg-gray-100"
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
