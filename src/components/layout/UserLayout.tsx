import { NavLink, Outlet } from "react-router-dom";

const UserLayout = () => {
  const menu = (
    <>
      <li className="mx-2">
        <NavLink to="overview" className="font-sans font-bold text-lg">
          Overview
        </NavLink>
      </li>
      <li className="mx-2">
        <NavLink
          to="booking-managements"
          className="font-sans font-bold text-lg"
        >
          Booking Management
        </NavLink>
      </li>
      <li className="mx-2">
        <NavLink
          to="payment-managements"
          className="font-sans font-bold text-lg"
        >
          Payment Management
        </NavLink>
      </li>
      <li className="mx-2">
        <NavLink to="admin-overview" className="font-sans font-bold text-lg">
          Admin Overview
        </NavLink>
      </li>
      <li className="mx-2">
        <NavLink to="manage-car" className="font-sans font-bold text-lg">
          Manage Car
        </NavLink>
      </li>
      <li className="mx-2">
        <NavLink
          to="bookings-managements"
          className="font-sans font-bold text-lg"
        >
          Bookings Managements
        </NavLink>
      </li>
      <li className="mx-2">
        <NavLink to="user-management" className="font-sans font-bold text-lg">
          User Management
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="drawer lg:drawer-open">
      <input id="dashboard" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="dashboard"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          {menu}
        </ul>
      </div>
    </div>
  );
};

export default UserLayout;
