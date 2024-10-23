// src/components/SearchResults.tsx
import { Link } from "react-router-dom";

interface Car {
  id: number;
  name: string;
  image: string;
  pricePerDay: number;
  description: string;
}

const cars: Car[] = [
  {
    id: 1,
    name: "Toyota Prius",
    image: "/cars/prius.jpg",
    pricePerDay: 50,
    description: "Hybrid vehicle, fuel-efficient.",
  },
  {
    id: 2,
    name: "Ford Explorer",
    image: "/cars/explorer.jpg",
    pricePerDay: 80,
    description: "Spacious SUV, ideal for family trips.",
  },
];

const SearchResults = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {cars.map((car) => (
        <div key={car.id} className="p-4 border rounded-lg shadow-md">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-40 object-cover rounded-md"
          />
          <h3 className="text-lg font-bold mt-4">{car.name}</h3>
          <p className="mt-2">{car.description}</p>
          <p className="mt-4 font-semibold">
            Price per day: ${car.pricePerDay}
          </p>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
            <Link to={`/booking/${car.id}`}>Book Now</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
