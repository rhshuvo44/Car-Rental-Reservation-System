import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import About from "../pages/About";
import Booking from "../pages/Booking";
import CarListing from "../pages/CarListing";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import CarDetails from "../pages/CarDetails";

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
        path: "/cars",
        element: <CarListing />,
      },
      {
        path: "/car/:id",
        element: <CarDetails />,
      },
    ],
  },
]);
