import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-84 bg-gray-800 text-white min-h-screen p-4">
      <h2 className="text-xl font-semibold mb-6 text-center">Ecommerce</h2>
      <ul>
        <li className="mb-4">
          <Link
            to="myaccount"
            className="block py-2 px-4 rounded hover:bg-blue-600"
          >
            My Account
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="mymember"
            className="block py-2 px-4 rounded hover:bg-blue-600"
          >
            My Member
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="myprofile"
            className="block py-2 px-4 rounded hover:bg-blue-600"
          >
            My Profile
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="signout"
            className="block py-2 px-4 rounded hover:bg-blue-600"
          >
            Sign Out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
