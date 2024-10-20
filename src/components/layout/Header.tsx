import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";
const Header = () => {
  const menu = (
    <>
      <li className="mx-2 ">
        <NavLink to="/" className="text-orange-300">
          Home
        </NavLink>
      </li>
      <li className="mx-2">
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li className="mx-2">
        <NavLink to="/booking">Booking</NavLink>
      </li>
      <li className="mx-2">
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );
  // Home, About Us, Booking, Contact.
  return (
    <div className="navbar bg-base-100 shadow-xl px-12">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {menu}
          </ul>
        </div>
        <Link to="/" className="">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menu}</ul>
      </div>
      <div className="navbar-end">
        <Link to="" className="btn">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
