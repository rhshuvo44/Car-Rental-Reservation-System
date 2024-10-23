import { useState } from "react";
const initialUserInfo = {
  name: "John Doe",
  email: "johndoe@example.com",
  phone: "123-456-7890",
  bookings: [
    {
      id: 1,
      car: "Toyota Camry",
      date: "2024-10-20",
      status: "Upcoming",
      canModify: true,
    },
    {
      id: 2,
      car: "Honda Civic",
      date: "2024-09-15",
      status: "Completed",
      canModify: false,
    },
    {
      id: 3,
      car: "Ford Explorer",
      date: "2024-11-05",
      status: "Approved",
      canModify: false,
    },
  ],
};
const BookingManagement = () => {
  const [userInfo, setUserInfo] = useState(initialUserInfo);

  const handleCancelBooking = (bookingId: number) => {
    // Logic to cancel booking (API call)
    setUserInfo((prev) => ({
      ...prev,
      bookings: prev.bookings.filter((booking) => booking.id !== bookingId),
    }));
    alert(`Booking ${bookingId} canceled!`);
  };

  return (
    <div className="p-6 w-full bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">User Dashboard</h2>
      {/* Booking Management Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Booking Management</h3>
        <ul>
          {userInfo.bookings.map((booking) => (
            <li key={booking.id} className="flex justify-between mb-2">
              <span>
                {booking.car} - {booking.date} ({booking.status})
              </span>
              <div>
                {booking.canModify && booking.status === "Upcoming" && (
                  <button
                    onClick={() => handleCancelBooking(booking.id)}
                    className="text-red-500 mr-4"
                  >
                    Cancel
                  </button>
                )}
                {booking.canModify && booking.status === "Upcoming" && (
                  <button
                    onClick={() => alert(`Modify booking ${booking.id}`)} // Placeholder for modify logic
                    className="text-blue-500"
                  >
                    Modify
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookingManagement;
