import "@fortawesome/fontawesome-free/css/all.min.css";

const Bento = () => {
  return (
    <div className="bg-inherit mt-10 md:mt-40 py-10 px-5 relative">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold dark:text-gray-400 mb-4">
            Our Amazing Products
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Discover the power of our product line designed to enhance
            productivity and innovation.
          </p>
        </div>

        <div className="grid sm:grid-cols-12 grid-cols-2 gap-6">
          <div className="col-span-1 sm:col-span-6 md:col-span-4 rounded-lg shadow-lg overflow-hidden relative group">
            <img
              src="https://sru.edu.in/assets/schools/cse/ai-ml-banner.png"
              alt="Product 1"
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <i className="fas fa-cogs text-xl"></i>
            </div>
            <div className="absolute bottom-4 right-4">
              <button className="bg-gray-300 border-gray-800 text-gray-800 transition duration-300 rounded-xl px-4 py-2 group-hover:bg-gray-800 group-hover:text-white dark:bg-transparent dark:text-gray-300 dark:group-hover:bg-gray-300 dark:group-hover:text-black">
                Explore More
              </button>
            </div>
          </div>

          <div className="col-span-1 sm:col-span-6 md:col-span-4 rounded-lg shadow-lg overflow-hidden relative group">
            <img
              src="https://media.istockphoto.com/id/1473211827/photo/concept-of-ai-and-computer-technology.jpg?s=612x612&w=0&k=20&c=EPuzqCx7R3_wA2fOj3YFgjNs0tjDee7FZDkXLO9S4Ro="
              alt="Product 2"
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <i className="fas fa-cogs text-xl"></i>
            </div>
            <div className="absolute bottom-4 right-4">
              <button className="bg-gray-300 border-gray-800 text-gray-800 transition duration-300 rounded-xl px-4 py-2 group-hover:bg-gray-800 group-hover:text-white dark:bg-transparent dark:text-gray-300 dark:group-hover:bg-gray-300 dark:group-hover:text-black">
                Explore More
              </button>
            </div>
          </div>

          <div className="col-span-1 sm:col-span-6 md:col-span-4 rounded-lg shadow-lg overflow-hidden relative group">
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/1*0Pe2QKywp07z4lPCcb1Q2Q@2x.jpeg"
              alt="Product 3"
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <i className="fas fa-cogs text-xl"></i>
            </div>
            <div className="absolute bottom-4 right-4">
              <button className="bg-gray-300 border-gray-800 text-gray-800 transition duration-300 rounded-xl px-4 py-2 group-hover:bg-gray-800 group-hover:text-white dark:bg-transparent dark:text-gray-300 dark:group-hover:bg-gray-300 dark:group-hover:text-black">
                Explore More
              </button>
            </div>
          </div>

          <div className="col-span-1 sm:col-span-6 md:col-span-4 rounded-lg shadow-lg overflow-hidden relative group">
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/1*er5uoPoOmLkfuxjTAy2zwQ.jpeg"
              alt="Product 4"
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <i className="fas fa-cogs text-xl"></i>
            </div>
            <div className="absolute bottom-4 right-4">
              <button className="bg-gray-300 border-gray-800 text-gray-800 transition duration-300 rounded-xl px-4 py-2 group-hover:bg-gray-800 group-hover:text-white dark:bg-transparent dark:text-gray-300 dark:group-hover:bg-gray-300 dark:group-hover:text-black">
                Explore More
              </button>
            </div>
          </div>

          <div className="col-span-1 sm:col-span-6 md:col-span-4 rounded-lg shadow-lg overflow-hidden relative group">
            <img
              src="https://bsmedia.business-standard.com/_media/bs/img/article/2021-01/14/full/1610640588-3918.jpg?im=FeatureCrop,size=(826,465)"
              alt="Product 5"
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <i className="fas fa-cogs text-xl"></i>
            </div>
            <div className="absolute bottom-4 right-4">
              <button className="bg-gray-300 border-gray-800 text-gray-800 transition duration-300 rounded-xl px-4 py-2 group-hover:bg-gray-800 group-hover:text-white dark:bg-transparent dark:text-gray-300 dark:group-hover:bg-gray-300 dark:group-hover:text-black">
                Explore More
              </button>
            </div>
          </div>

          <div className="col-span-1 sm:col-span-6 md:col-span-4 rounded-lg shadow-lg overflow-hidden relative group">
            <img
              src="https://karnavatiuniversity.edu.in/wp-content/uploads/2024/02/cse-with-specialization-in-ai-ml-mobile-banner-img.jpg"
              alt="Product 6"
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <i className="fas fa-cogs text-xl"></i>
            </div>
            <div className="absolute bottom-4 right-4">
              <button className="bg-gray-300 border-gray-800 text-gray-800 transition duration-300 rounded-xl px-4 py-2 group-hover:bg-gray-800 group-hover:text-white dark:bg-transparent dark:text-gray-300 dark:group-hover:bg-gray-300 dark:group-hover:text-black">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bento;
