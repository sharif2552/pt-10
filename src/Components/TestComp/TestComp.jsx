import React, { useState } from "react";

const data = [
  {
    title: "Title 1",
    description: "Short description 1",
    detailedDescription: "Detailed description for item 1.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Title 2",
    description: "Short description 2",
    detailedDescription: "Detailed description for item 2.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Title 3",
    description: "Short description 3",
    detailedDescription: "Detailed description for item 3.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Title 4",
    description: "Short description 4",
    detailedDescription: "Detailed description for item 4.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Title 5",
    description: "Short description 5",
    detailedDescription: "Detailed description for item 5.",
    image: "https://via.placeholder.com/150",
  },
];

const App = () => {
  const [selectedData, setSelectedData] = useState(null);

  const handleClick = (item) => {
    setSelectedData(item);
  };

  const closePopup = () => {
    setSelectedData(null);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="border p-4 cursor-pointer"
            onClick={() => handleClick(item)}
          >
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {selectedData && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500"
              onClick={closePopup}
            >
              &times;
            </button>
            <img
              src={selectedData.image}
              alt={selectedData.title}
              className="mb-4"
            />
            <h2 className="text-2xl font-bold mb-4">{selectedData.title}</h2>
            <p>{selectedData.detailedDescription}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
