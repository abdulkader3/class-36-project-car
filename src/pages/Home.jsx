import React, { useEffect, useState } from "react";
import alldata from "../components/Projectedata";

const Home = () => {
  const [data, updateData] = useState(alldata);

  // Animation start
  const resetAnimation = () => {
    let cardOne = document.querySelectorAll(".card");
    cardOne.forEach((item) => {
      item.classList.remove("animetion");
      void item.offsetWidth;
      item.classList.add("animetion");
    });
  };
  // Animation end

  // Filter function
  const navigate = (category) => {
    const filteredCategory = alldata.filter(
      (item) => item.category === category
    );
    updateData(filteredCategory);
    resetAnimation();
  };

  useEffect(() => {
    resetAnimation();
  }, [data]);

  return (
    <>
      <div className="flex flex-col items-center w-full min-h-screen p-5">
        <div className="flex justify-end w-4/5 h-20 bg-gradient-to-r from-green-400 to-blue-600 mt-2.5 p-2.5 rounded-lg">
          <ul className="flex items-center gap-5  list-none">
            <li>
              <button
                onClick={() => {
                  updateData(alldata);
                  resetAnimation();
                }}
                className="bg-transparent text-[#23e072] border-none cursor-pointer text-lg font-medium transition-all  hover:text-white"
              >
                All
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navigate("EV");
                  resetAnimation();
                }}
                className="bg-transparent border-none cursor-pointer text-lg font-medium transition-all text-[#23e072] hover:text-white"
              >
                EV
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navigate("Hybrid");
                  resetAnimation();
                }}
                className="bg-transparent border-none cursor-pointer text-lg font-medium transition-all text-[#23e072] hover:text-white"
              >
                Hybrid
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navigate("Gas");
                  resetAnimation();
                }}
                className="bg-transparent border-none cursor-pointer text-lg font-medium transition-all text-[#23e072] hover:text-white"
              >
                Gas Car
              </button>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-5 justify-center w-4/5 p-5 mt-5 bg-gradient-to-r from-yellow-400 to-red-600 rounded-lg">
          {data.map((car, index) => (
            <div
              key={index}
              className="card relative animetion w-[450px] h-96 bg-gradient-to-r from-purple-300 to-indigo-500 rounded-2xl flex flex-col items-center p-5 shadow-lg"
            >
              { car.discount_price && <div className="absolute top-7 flex justify-center items-center text-white font-semibold left-0 -rotate-45 w-[90px] h-[30px] bg-gradient-to-r from-yellow-400 to-red-600">
                In Sale
              </div>}
              <img
                src={car.image}
                alt={`${car.name}`}
                className="w-[200px] rounded-lg"
              />
              <h2 className="text-[25px] text-[#fff067] font-medium text-center mt-2.5">
                {car.name}
              </h2>
              <p className="text-gray-300 text-center mt-1">
                Brand: {car.brand}
              </p>
              <p className="text-gray-300 text-center mt-1">
                Engine: {car.engine}
              </p>
              <p className="text-gray-300 text-center mt-1">
                Cylinder: {car.cylinder}
              </p>
              <p className="text-gray-300 text-center mt-1">
                Top Speed: {car.top_speed} mph
              </p>
              <div className="flex gap-2.5 mt-auto">
                <p className="text-xl text-white font-medium">
                  {car.price.toLocaleString()}$
                </p>
                {car.discount_price && <p className="text-xl text-[#99ff32] font-medium">
                  {  car.price.toLocaleString()}$
                </p>}
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
