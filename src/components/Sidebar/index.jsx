import React from 'react';
import { Link } from 'react-router-dom';
import { MdAccountCircle } from "react-icons/md";
import { MdOutlineRememberMe } from "react-icons/md";



const Sidebar = () => {
  return (
    <div className="w-84  min-h-screen p-4">
      <h2 className="text-xl font-bold font-semibold mb-6 text-center">Ecommerce</h2>
      <ul className=''>
        <li className="mb-4 flex gap-6">
        <MdAccountCircle  className='text-[24px] mt-2'/>

          <Link
            to="myaccount"
            className="block py-2 px-4 text-lg font-bold rounded hover:bg-blue-600"
          >
            My Account
          </Link>
        </li>
        <li className="mb-8 text-lg font-bold flex gap-3">
          <MdOutlineRememberMe className='text-[24px] mt-2'/>
          <Link
            to="mymember"
            className="block py-2 px-4 rounded hover:bg-blue-600"
          >
            My Member
          </Link>
        </li>
        <li className="mb-8 text-lg font-bold flex gap-3">
        <MdAccountCircle  className='text-[24px] mt-2'/>

          <Link
            to="myprofile"
            className="block py-2 px-4 rounded hover:bg-blue-600"
          >
            My Profile
          </Link>
        </li>
        <li className="mb-8 text-lg font-bold">
          
          <Link
            to="signout"
            className="block py-2 px-4 rounded hover:bg-blue-600 text-lg font-bold"
          >
            Sign Out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
