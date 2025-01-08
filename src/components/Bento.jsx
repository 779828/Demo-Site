const Bento = () => {
  return (
    <div className="bg-inherit py-10 px-5">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center dark:text-gray-400 mb-10">
          Products
        </h2>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 lg:col-span-8 bg-blue-500 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-xl font-bold">Large Block</h3>
            <p>This block spans 8 columns on large screens.</p>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-green-500 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-xl font-bold">Medium Block</h3>
            <p>This block spans 4 columns on large screens.</p>
          </div>

          <div className="col-span-12 sm:col-span-6 md:col-span-4 bg-red-500 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-lg font-bold">Small Block 1</h3>
            <p>This block spans 4 columns on medium screens.</p>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4 bg-yellow-500 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-lg font-bold">Small Block 2</h3>
            <p>This block spans 4 columns on medium screens.</p>
          </div>
          <div className="col-span-12 md:col-span-4 bg-purple-500 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-lg font-bold">Small Block 3</h3>
            <p>This block spans 4 columns on medium screens.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bento;
