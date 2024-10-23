// src/components/BookingDetails.tsx
import React from "react";

interface Booking {
  id: number;
  customerName: string;
  car: string;
  pickUpDate: string;
  dropOffDate: string;
  status: "pending" | "approved" | "canceled";
}

const bookingsData: Booking[] = [
  {
    id: 1,
    customerName: "John Doe",
    car: "Toyota Prius",
    pickUpDate: "2024-10-30",
    dropOffDate: "2024-11-05",
    status: "pending",
  },
  {
    id: 2,
    customerName: "Jane Smith",
    car: "Ford Explorer",
    pickUpDate: "2024-10-25",
    dropOffDate: "2024-10-28",
    status: "approved",
  },
];
interface BookingDetailsProps {
  bookingId: number;
}

const BookingDetails: React.FC<BookingDetailsProps> = ({ bookingId }) => {
  const booking = bookingsData.find((b) => b.id === bookingId);

  if (!booking) return <p>Booking not found</p>;

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Booking Details</h2>
      <p>
        <strong>Customer Name:</strong> {booking.customerName}
      </p>
      <p>
        <strong>Car:</strong> {booking.car}
      </p>
      <p>
        <strong>Pick-Up Date:</strong> {booking.pickUpDate}
      </p>
      <p>
        <strong>Drop-Off Date:</strong> {booking.dropOffDate}
      </p>
      <p>
        <strong>Status:</strong> {booking.status}
      </p>
      {/* Additional customer contact and details would go here */}
    </div>
  );
};

export default BookingDetails;
