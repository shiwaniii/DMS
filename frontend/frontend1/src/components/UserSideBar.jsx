import React from "react";
import { FaHome, FaUser, FaBook, FaCalendar, FaColumns} from "react-icons/fa";
import { Link } from "react-router-dom";

function UserSideBar() {
  return (
    <>
      <nav className="w-64 bg-blue-700 h-screen py-4 px-4">
        <ul className="space-y-4">
          <p className="p-4 text-xl font-bold bg"> User Panel</p>
          <li className="bg-white rounded-xl font-bold flex p-4 mt-24">
            <FaHome size={20} />{" "}
            <span className="ml-3 font-semibold hover:underline hover:decoration-3">
              DashBoard
            </span>
          </li>
          <Link
            to="/display-user"
            className="bg-white rounded-xl font-bold flex p-4"
          >
            <FaCalendar size={20} />{" "}
            <span className="ml-3 font-semibold hover:underline hover:decoration-3">
              Year Listing
            </span>
          </Link>

          <Link
            to="/displayallbooks"
            className="bg-white rounded-xl font-bold flex p-4"
          >
            <FaColumns size={20} />{" "}
            <span className="ml-3 font-semibold hover:underline hover:decoration-3">
              Document Category
            </span>
          </Link>

          <Link
            to="/displayallbooks"
            className="bg-white rounded-xl font-bold flex p-4"
          >
            <FaBook size={20} />{" "}
            <span className="ml-3 font-semibold hover:underline hover:decoration-3">
              Section Listing
            </span>
          </Link>

          <Link
            to="/displayallbooks"
            className="bg-white rounded-xl font-bold flex p-4"
          >
            <FaBook size={20} />{" "}
            <span className="ml-3 font-semibold hover:underline hover:decoration-3">
              User Management
            </span>
          </Link>

          <Link
            to="/displayallbooks"
            className="bg-white rounded-xl font-bold flex p-4"
          >
            <FaBook size={20} />{" "}
            <span className="ml-3 font-semibold hover:underline hover:decoration-3">
              Reports
            </span>
          </Link>

        </ul>
      </nav>
    </>


  );
}
export default UserSideBar;