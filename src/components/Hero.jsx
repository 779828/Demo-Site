const Hero = () => {
  return (
    <div className="flex items-center flex-col md:h-[30em] dark:bg-gray-800 bg-inherit">
      <div className="mt-10 md:mt-20 px-4 md:px-12 py-4">
        <h1 className="py-6 text-3xl md:text-5xl font-bold text-gray-800 flex justify-center text-center dark:text-gray-300">
          Explore the Possibilities <br /> of AI Chatting with Brainwave
        </h1>
        <p className="py-4 text-lg md:text-2xl font-medium flex justify-center text-center text-gray-700 dark:text-gray-400">
          Unleash the power of AI with Brainwave. Upgrade your productivity{" "}
          <br className="hidden md:block" />
          using the open AI chat app tailored for you.
        </p>
        <div className="pt-4 md:w-full flex justify-center space-x-4">
          <button className="uppercase bg-gray-800 text-white transition duration-300 rounded-xl px-4 py-2 hover:bg-gray-600 dark:bg-gray-300 dark:text-black hover:dark:bg-gray-200">
            Get Started
          </button>
          <button className="uppercase bg-transparent border-2 border-gray-800 text-gray-800 transition duration-300 rounded-xl px-4 py-2 hover:bg-gray-800 hover:text-white dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-300 dark:hover:text-black">
            Learn More
          </button>
        </div>
      </div>
      <div className="mt-10 flex flex-wrap justify-center items-center">
        <div className="w-full p-4 md:w-52 text-center">
          <img
            src="https://www.guava.blue/wp-content/uploads/2021/09/iStock-1307309168-1170x658.jpg"
            alt="AI powered"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
          <p className="text-sm md:text-base mt-2 text-gray-600 dark:text-gray-400">
            AI-powered solutions
          </p>
        </div>
        <div className="w-full p-4 md:w-52 text-center">
          <img
            src="https://media.licdn.com/dms/image/C5112AQF_gWyWqQC8OQ/article-cover_image-shrink_720_1280/0/1572754452905?e=2147483647&v=beta&t=_OpNlNf-AVwqlM6ITWY3CMUX8iVckqAvQ1dTcWoEqiY"
            alt="Productivity booster"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
          <p className="text-sm md:text-base mt-2 text-gray-600 dark:text-gray-400">
            Productivity boosters
          </p>
        </div>
        <div className="w-full p-4 md:w-52 text-center">
          <img
            src="https://blog.lifeqisystem.com/hubfs/Security%20Reliability%20Flexibility%20-%2001.png"
            alt="Secure and reliable"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
          <p className="text-sm md:text-base mt-2 text-gray-600 dark:text-gray-400">
            Secure & reliable
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
