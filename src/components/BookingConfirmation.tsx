// src/components/BookingConfirmation.tsx
import React from "react";
import { Link } from "react-router-dom";

const BookingConfirmation: React.FC = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg px-12 mt-20">
      <h2 className="text-2xl font-bold mb-4">Booking Confirmation</h2>
      <p>
        Your booking has been successfully submitted. You will receive a
        confirmation email shortly with your booking details.
      </p>

      <h3 className="text-xl font-semibold mt-4">Booking Details</h3>
      <ul className="list-disc ml-6 mt-2">
        <li>Car: Toyota Prius</li>
        <li>Pick-Up Date: 2024-10-30</li>
        <li>Drop-Off Date: 2024-11-05</li>
        <li>Price: $350</li>
      </ul>

      <button className="mt-6 bg-green-500 text-white px-4 py-2 rounded">
        <Link to="dashboard">Go to Dashboard</Link>
      </button>
    </div>
  );
};

export default BookingConfirmation;
