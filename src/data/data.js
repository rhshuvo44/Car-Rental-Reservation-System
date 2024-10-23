// src/carData.js
export const cars = [
  {
    id: 1,
    name: "2023 Honda CR-V",
    type: "SUV",
    price: 30000,
    description: "Spacious SUV with excellent fuel efficiency.",
    imageUrl: "https://via.placeholder.com/300x200.png?text=Honda+CR-V",
  },
  {
    id: 2,
    name: "2023 Toyota Camry",
    type: "Sedan",
    price: 25000,
    description: "Reliable sedan with a smooth ride.",
    imageUrl: "https://via.placeholder.com/300x200.png?text=Toyota+Camry",
  },
  {
    id: 3,
    name: "2023 Tesla Model 3",
    type: "Hybrid",
    price: 45000,
    description: "Electric sedan with advanced technology.",
    imageUrl: "https://via.placeholder.com/300x200.png?text=Tesla+Model+3",
  },
  {
    id: 4,
    name: "2023 Ford Explorer",
    type: "SUV",
    price: 40000,
    description: "Family-friendly SUV with plenty of space.",
    imageUrl: "https://via.placeholder.com/300x200.png?text=Ford+Explorer",
  },
  // Add more car entries as needed
];
export const carDetailsData = {
  id: 1,
  name: "2023 Honda CR-V",
  type: "SUV",
  price: 30000,
  availability: "Available",
  description: "Spacious SUV with excellent fuel efficiency.",
  features: [
    "All-Wheel Drive",
    "Leather Seats",
    "Sunroof",
    "Bluetooth Connectivity",
    "Backup Camera",
  ],
  reviews: [
    { user: "John Doe", comment: "Great car for families!", rating: 5 },
    {
      user: "Jane Smith",
      comment: "Very comfortable and spacious.",
      rating: 4,
    },
  ],
  images: [
    "https://via.placeholder.com/600x400.png?text=Honda+CR-V+1",
    "https://via.placeholder.com/600x400.png?text=Honda+CR-V+2",
    "https://via.placeholder.com/600x400.png?text=Honda+CR-V+3",
  ],
};