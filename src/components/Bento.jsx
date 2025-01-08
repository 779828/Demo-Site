const Bento = () => {
  const blocks = [
    {
      title: "Large Block",
      description: "This block spans 8 columns on large screens.",
      //   bgColor: "bg-blue-500",
      img: "https://via.placeholder.com/600x300",
      span: "lg:col-span-8",
    },
    {
      title: "Medium Block",
      description: "This block spans 4 columns on large screens.",
      //   bgColor: "bg-green-500",
      img: "https://via.placeholder.com/400x300",
      span: "lg:col-span-4",
    },
    {
      title: "Small Block 1",
      description: "This block spans 4 columns on medium screens.",
      //   bgColor: "bg-red-500",
      img: "https://via.placeholder.com/300x300",
      span: "md:col-span-4",
    },
    {
      title: "Small Block 2",
      description: "This block spans 4 columns on medium screens.",
      //   bgColor: "bg-yellow-500",
      img: "https://via.placeholder.com/300x300",
      span: "md:col-span-4",
    },
    {
      title: "Small Block 3",
      description: "This block spans 4 columns on medium screens.",
      //   bgColor: "bg-purple-500",
      img: "https://via.placeholder.com/300x300",
      span: "md:col-span-4",
    },
  ];

  return (
    <div className="bg-inherit min-h-screen py-10 px-5">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center dark:text-gray-400 mb-10">
          Products
        </h2>

        <div className="grid grid-cols-12 gap-6">
          {blocks.map((block, index) => (
            <div
              key={index}
              className={`col-span-12 sm:col-span-6 ${block.span} rounded-lg shadow-lg overflow-hidden`}
            >
              <img
                src={block.img}
                alt={block.title}
                className="w-full h-48 object-cover"
              />
              <div
                className={`p-6 ${block.bgColor} text-white flex flex-col justify-between`}
              >
                <h3 className="text-xl font-bold mb-2">{block.title}</h3>
                <p>{block.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bento;
