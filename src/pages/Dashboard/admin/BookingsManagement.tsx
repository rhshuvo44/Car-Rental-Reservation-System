import { useState } from "react";

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

const BookingsManagement = () => {
  const [bookings, setBookings] = useState<Booking[]>(bookingsData);

  // Handle Approve Booking
  const handleApprove = (id: number) => {
    setBookings(
      bookings.map((booking) =>
        booking.id === id ? { ...booking, status: "approved" } : booking
      )
    );
  };

  // Handle Cancel Booking
  const handleCancel = (id: number) => {
    setBookings(
      bookings.map((booking) =>
        booking.id === id ? { ...booking, status: "canceled" } : booking
      )
    );
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Manage Bookings</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b-2">Customer</th>
            <th className="py-2 px-4 border-b-2">Car</th>
            <th className="py-2 px-4 border-b-2">Pick-Up Date</th>
            <th className="py-2 px-4 border-b-2">Drop-Off Date</th>
            <th className="py-2 px-4 border-b-2">Status</th>
            <th className="py-2 px-4 border-b-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td className="py-2 px-4 border-b">{booking.customerName}</td>
              <td className="py-2 px-4 border-b">{booking.car}</td>
              <td className="py-2 px-4 border-b">{booking.pickUpDate}</td>
              <td className="py-2 px-4 border-b">{booking.dropOffDate}</td>
              <td className="py-2 px-4 border-b">{booking.status}</td>
              <td className="py-2 px-4 border-b">
                {booking.status === "pending" && (
                  <>
                    <button
                      onClick={() => handleApprove(booking.id)}
                      className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleCancel(booking.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Cancel
                    </button>
                  </>
                )}
                {booking.status !== "pending" && (
                  <span
                    className={`px-3 py-1 rounded ${
                      booking.status === "approved"
                        ? "bg-green-100"
                        : "bg-red-100"
                    }`}
                  >
                    {booking.status.charAt(0).toUpperCase() +
                      booking.status.slice(1)}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingsManagement;
