// src/ManageCars.tsx
import React, { useState } from "react";
import CarForm from "../../../components/dashboard/admin/CarForm";

interface Car {
  id: number;
  name: string;
  model: string;
  year: number;
  features: string[];
  pricePerHour: number;
  imageUrl: string;
}

const initialCars: Car[] = [
  {
    id: 1,
    name: "Toyota Camry",
    model: "2022",
    year: 2022,
    features: ["GPS", "Automatic"],
    pricePerHour: 15,
    imageUrl: "/images/camry.jpg",
  },
  {
    id: 2,
    name: "Honda Accord",
    model: "2021",
    year: 2021,
    features: ["Sunroof", "Bluetooth"],
    pricePerHour: 12,
    imageUrl: "/images/accord.jpg",
  },
];

const ManageCars: React.FC = () => {
  const [cars, setCars] = useState(initialCars);
  const [editingCar, setEditingCar] = useState<Car | null>(null);

  const handleAddCar = (carData: Omit<Car, "id">) => {
    setCars((prevCars) => [
      ...prevCars,
      {
        ...carData,
        id: prevCars.length + 1,
        features: carData.features.split(",").map((f) => f.trim()),
      },
    ]);
  };

  const handleUpdateCar = (updatedCar: Car) => {
    setCars((prevCars) =>
      prevCars.map((car) => (car.id === updatedCar.id ? updatedCar : car))
    );
    setEditingCar(null);
  };

  const handleDeleteCar = (carId: number) => {
    setCars((prevCars) => prevCars.filter((car) => car.id !== carId));
  };

  return (
    <div className="p-6 w-full bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Manage Cars</h2>

      <CarForm
        onSubmit={editingCar ? handleUpdateCar : handleAddCar}
        defaultValues={
          editingCar
            ? { ...editingCar, features: editingCar.features.join(", ") }
            : undefined
        }
      />

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Car Listings</h3>
        <ul>
          {cars.map((car) => (
            <li
              key={car.id}
              className="flex justify-between items-center bg-white p-4 mb-2 rounded-lg shadow-md"
            >
              <div>
                <h4 className="font-bold text-lg">
                  {car.name} ({car.model})
                </h4>
                <p>
                  Year: {car.year} | Price: ${car.pricePerHour}/hour
                </p>
                <p>Features: {car.features.join(", ")}</p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => setEditingCar(car)}
                  className="text-blue-500 mr-4"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteCar(car.id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageCars;
