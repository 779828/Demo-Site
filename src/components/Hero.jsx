const Hero = () => {
  return (
    <div className="flex items-center flex-col h-[50vh] dark:bg-gray-800">
      <div className="mt-20 px-12 py-4">
        <h1 className="py-6 text-5xl font-bold text-gray-600 flex justify-center text-center dark:text-gray-400 ">
          Explore the Possibilities <br /> of AI Chatting with Brainwave
        </h1>
        <p className="py-4 text-2xl font-bold flex justify-center text-center dark:text-gray-300">
          Unleash the power of AI within Brainwave. Upgrade your productivity
          with Brainwave, the open AI chat app.
        </p>
        <div className="pt-4 md:w-full flex justify-center">
          <button className="uppercase bg-gray-800 text-white transition duration-300 rounded-xl p-2 hover:bg-gray-500 dark:bg-gray-300 dark:text-black hover:dark:bg-gray-100">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
