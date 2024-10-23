import { useState } from "react";
import {
  FaCar,
  FaDollarSign,
  FaExclamationCircle,
  FaListAlt,
} from "react-icons/fa";
// Sample data for the dashboard (replace with API call)
const initialDashboardData = {
  totalBookings: 120,
  availableCars: 25,
  totalRevenue: 50000, // in USD
  pendingBookings: 8,
};

const AdminOverview = () => {
  const [dashboardData, setDashboardData] = useState(initialDashboardData);
  return (
    <div className="p-6 w-full bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Bookings */}
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <FaListAlt className="text-2xl text-blue-600 mx-auto mb-2" />
          <h3 className="text-lg font-semibold mb-2">Total Bookings</h3>
          <p className="text-3xl font-bold text-blue-600">
            {dashboardData.totalBookings}
          </p>
        </div>

        {/* Available Cars */}
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <FaCar className="text-2xl text-blue-600 mx-auto mb-2" />

          <h3 className="text-lg font-semibold mb-2">Available Cars</h3>
          <p className="text-3xl font-bold text-green-600">
            {dashboardData.availableCars}
          </p>
        </div>

        {/* Total Revenue */}
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <FaDollarSign className="text-2xl text-blue-600 mx-auto mb-2" />

          <h3 className="text-lg font-semibold mb-2">Total Revenue</h3>
          <p className="text-3xl font-bold text-yellow-600">
            ${dashboardData.totalRevenue.toLocaleString()}
          </p>
        </div>

        {/* Pending Bookings */}
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <FaExclamationCircle className="text-2xl text-blue-600 mx-auto mb-2" />

          <h3 className="text-lg font-semibold mb-2">Pending Bookings</h3>
          <p className="text-3xl font-bold text-red-600">
            {dashboardData.pendingBookings}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;
