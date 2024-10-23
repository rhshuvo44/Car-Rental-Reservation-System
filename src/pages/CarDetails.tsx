import { useState } from "react";
import { Link } from "react-router-dom";

// src/carData.js
const carDetails = {
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
const CarDetails = () => {
  const [selectedImage, setSelectedImage] = useState(carDetails.images[0]);
  const [additionalFeatures, setAdditionalFeatures] = useState({
    insurance: false,
    gps: false,
    childSeat: false,
  });

  const handleFeatureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setAdditionalFeatures((prevFeatures) => ({
      ...prevFeatures,
      [name]: checked,
    }));
  };

 

  return (
    <div className="container w-full  mx-auto p-12 mt-10">
      <h1 className="text-3xl font-bold mb-4">{carDetails.name}</h1>
      <p className="text-lg mb-2">Type: {carDetails.type}</p>
      <p className="text-lg mb-4">Price: ${carDetails.price}</p>
      <p className="text-lg mb-2">Availability: {carDetails.availability}</p>
      <p className="text-md mb-4">{carDetails.description}</p>

      {/* Image Gallery with Zoom Functionality */}
      <div className="flex mb-4">
        <img
          src={selectedImage}
          alt={carDetails.name}
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {carDetails.images.map((image) => (
          <img
            key={image}
            src={image}
            alt={carDetails.name}
            className="cursor-pointer w-full h-24 object-cover rounded-lg"
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {/* Features Section */}
      <h2 className="text-2xl font-bold mb-2">Features:</h2>
      <ul className="list-disc list-inside mb-4">
        {carDetails.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      {/* Additional Features Options */}
      <h2 className="text-2xl font-bold mb-2">Choose Additional Features:</h2>
      <div className="flex flex-col mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="insurance"
            checked={additionalFeatures.insurance}
            onChange={handleFeatureChange}
            className="mr-2"
          />
          Insurance
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="gps"
            checked={additionalFeatures.gps}
            onChange={handleFeatureChange}
            className="mr-2"
          />
          GPS
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="childSeat"
            checked={additionalFeatures.childSeat}
            onChange={handleFeatureChange}
            className="mr-2"
          />
          Child Seat
        </label>
      </div>

      {/* Reviews Section */}
      <h2 className="text-2xl font-bold mb-2">Customer Reviews:</h2>
      {carDetails.reviews.length > 0 ? (
        <ul className="list-disc list-inside mb-4">
          {carDetails.reviews.map((review, index) => (
            <li key={index}>
              <strong>{review.user}:</strong> {review.comment} (Rating:{" "}
              {review.rating} ★)
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet.</p>
      )}

      {/* Book Now Button */}
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        <Link to={`/booking/${carDetails.id}`}>Book Now</Link>
      </button>
    </div>
  );
};

export default CarDetails;
