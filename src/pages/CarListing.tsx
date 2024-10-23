// src/CarListing.js
import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetAllCarQuery } from "../redux/features/admin/carApi";
import { TCar } from "../types/types";
// const cars = [
//   {
//     id: 1,
//     name: "2023 Honda CR-V",
//     type: "SUV",
//     price: 30000,
//     description: "Spacious SUV with excellent fuel efficiency.",
//     imageUrl: "https://via.placeholder.com/300x200.png?text=Honda+CR-V",
//   },
//   {
//     id: 2,
//     name: "2023 Toyota Camry",
//     type: "Sedan",
//     price: 25000,
//     description: "Reliable sedan with a smooth ride.",
//     imageUrl: "https://via.placeholder.com/300x200.png?text=Toyota+Camry",
//   },
//   {
//     id: 3,
//     name: "2023 Tesla Model 3",
//     type: "Hybrid",
//     price: 45000,
//     description: "Electric sedan with advanced technology.",
//     imageUrl: "https://via.placeholder.com/300x200.png?text=Tesla+Model+3",
//   },
//   {
//     id: 4,
//     name: "2023 Ford Explorer",
//     type: "SUV",
//     price: 40000,
//     description: "Family-friendly SUV with plenty of space.",
//     imageUrl: "https://via.placeholder.com/300x200.png?text=Ford+Explorer",
//   },
//   // Add more car entries as needed
// ];

const CarListing = () => {
  const [selectedType, setSelectedType] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100000]); // Adjust as necessary

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(event.target.value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value.split(",").map(Number);
    setPriceRange(value);
  };
  const { data } = useGetAllCarQuery(undefined);
  // Filter cars based on type and price range
  const filteredCars = data?.filter((car: TCar) => {
    const isTypeMatch = selectedType ? car.name === selectedType : true;
    const isPriceMatch =
      car.pricePerHour >= priceRange[0] && car.pricePerHour <= priceRange[1];
    return isTypeMatch && isPriceMatch;
  });

  return (
    <div className="container mx-auto p-5 px-12 mt-20 h-screen">
      <h1 className="text-2xl font-bold mb-5">Available Cars</h1>

      {/* Filters */}
      <div className="flex flex-wrap mb-5">
        <select onChange={handleTypeChange} className="border p-2 mr-4">
          <option value="">All Types</option>
          <option value="SUV">SUV</option>
          <option value="Sedan">Sedan</option>
          <option value="Hybrid">Hybrid</option>
        </select>

        <select onChange={handlePriceChange} className="border p-2">
          <option value="0,100000">All Prices</option>
          <option value="0,30000">Under $30,000</option>
          <option value="30000,50000">$30,000 - $50,000</option>
          <option value="50000,100000">Over $50,000</option>
        </select>
      </div>

      {/* Car Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCars && filteredCars.length > 0 ? (
          filteredCars.map((car: TCar) => (
            <div
              key={car._id}
              className="border rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={car.imageUrl}
                alt={car.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="font-bold text-xl">{car.name}</h2>
                <p className="text-gray-600">{car.description}</p>
                <p className="text-lg font-semibold">
                  ${car.pricePerHour} Per Hour
                </p>
                <Link to={`/car/${car._id}`}>
                  <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div>No cars available at the moment.</div> // Handle empty data case
        )}
      </div>
    </div>
  );
};

export default CarListing;
