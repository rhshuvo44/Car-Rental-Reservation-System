import React, { useState } from "react";
const initialUserInfo = {
  name: "John Doe",
  email: "johndoe@example.com",
  phone: "123-456-7890",
  bookings: [
    { id: 1, car: "Toyota Camry", date: "2024-10-20", status: "Upcoming" },
    { id: 2, car: "Honda Civic", date: "2024-09-15", status: "Completed" },
  ],
};
const Overview = () => {
  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedInfo, setUpdatedInfo] = useState({ ...initialUserInfo });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfileUpdate = () => {
    // Logic to update the profile (API call)
    setUserInfo(updatedInfo); // Update userInfo state with new data
    setIsEditing(false); // Exit edit mode
    alert("Profile updated!"); // Feedback message
  };

  return (
    <div className="p-6 w-full bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">User Dashboard</h2>

      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
        {isEditing ? (
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={updatedInfo.name}
              onChange={handleInputChange}
              className="border rounded p-2 w-full mb-2"
            />
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={updatedInfo.email}
              onChange={handleInputChange}
              className="border rounded p-2 w-full mb-2"
            />
            <label className="block mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={updatedInfo.phone}
              onChange={handleInputChange}
              className="border rounded p-2 w-full mb-2"
            />
            <button
              onClick={handleProfileUpdate}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save Changes
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="mt-4 ml-4 text-gray-500 border border-gray-300 px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <p>
              <strong>Name:</strong> {userInfo.name}
            </p>
            <p>
              <strong>Email:</strong> {userInfo.email}
            </p>
            <p>
              <strong>Phone:</strong> {userInfo.phone}
            </p>
            <button
              onClick={() => setIsEditing(true)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Edit Profile
            </button>
          </div>
        )}
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Booking History</h3>
        <ul>
          {userInfo.bookings.map((booking) => (
            <li key={booking.id} className="flex justify-between mb-2">
              <span>
                {booking.car} - {booking.date} ({booking.status})
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Overview;
