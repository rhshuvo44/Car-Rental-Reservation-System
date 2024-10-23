import { createBrowserRouter } from "react-router-dom";
import BookingConfirmation from "../components/BookingConfirmation";
import BookingForm from "../components/BookingForm";
import MainLayout from "../components/layout/MainLayout";
import UserLayout from "../components/layout/UserLayout";
import About from "../pages/About";
import Booking from "../pages/Booking";
import CarDetails from "../pages/CarDetails";
import CarListing from "../pages/CarListing";
import Contact from "../pages/Contact";
import AdminOverview from "../pages/Dashboard/admin/AdminOverview";
import BookingsManagement from "../pages/Dashboard/admin/BookingsManagement";
import ManageCars from "../pages/Dashboard/admin/ManageCars";
import UserManagement from "../pages/Dashboard/admin/UserManagement";
import BookingManagement from "../pages/Dashboard/user/BookingManagement";
import Overview from "../pages/Dashboard/user/Overview";
import PaymentManagement from "../pages/Dashboard/user/PaymentManagement";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/booking/:id",
        element: <BookingForm />,
      },
      {
        path: "/booking-confirmation",
        element: <BookingConfirmation />,
      },
      {
        path: "/cars",
        element: <CarListing />,
      },
      {
        path: "/car/:id",
        element: <CarDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <UserLayout />,
    children: [
      { index: true, element: <Overview /> },
      { path: "overview", element: <Overview /> },

      {
        path: "booking-managements",
        element: <BookingManagement />,
      },
      {
        path: "payment-managements",
        element: <PaymentManagement />,
      },
      {
        path: "bookings-managements",
        element: <BookingsManagement />,
      },
      {
        path: "admin-overview",
        element: <AdminOverview />,
      },
      {
        path: "manage-car",
        element: <ManageCars />,
      },
      {
        path: "user-management",
        element: <UserManagement />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
