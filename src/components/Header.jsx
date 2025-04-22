import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import { FaCartPlus } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation';
// import DeleteIcon from '@mui/icons-material/Delete';
// import IconButton from '@mui/material/IconButton';
const Header = () => {
  return (
    <>
    <header className="container mx-auto px-4">
  {/* Top Strip */}
  <div className="top-strip py-2 border-t border-b border-gray-300 mt-2">
    <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
      <p className="text-[14px] font-semibold w-full md:w-auto">
        Get up to 50% off new season style – limited time only
      </p>
      <ul className="flex items-center gap-4 mt-2 md:mt-0">
        <li>
          <Link to="/help-center" className="text-[14px] hover:text-orange-500 font-semibold">
            Help Center
          </Link>
        </li>
        <li>
          <Link to="/order-tracking" className="text-[14px] hover:text-orange-500 font-semibold">
            Order Tracking
          </Link>
        </li>
      </ul>
    </div>
  </div>

  {/* Main Header */}
  <div className="header py-4 shadow-sm">
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      
      {/* Logo */}
      <div className="w-full md:w-[30%] text-center md:text-left">
        <Link to="/">
          <img
            src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/logo-1691412328.jpg"
            className="mx-auto md:mx-0 max-h-[60px]"
            alt="Logo"
          />
        </Link>
      </div>

      {/* Search */}
      <div className="w-full md:w-[45%]">
        <Search />
      </div>

      {/* Icons and Auth Links */}
      <div className="w-full md:w-[25%] flex justify-center md:justify-end">
        <ul className="flex items-center justify-center gap-4 flex-wrap">
          <li>
            <Link to="/login" className="text-[16px] font-semibold hover:text-orange-500">Login 
 
</Link>
            <span className="mx-1">|</span>
            <Link to="/register" className="text-[16px] font-semibold hover:text-orange-500">Register</Link>
          </li>
    
         

          <li>
            <Tooltip title="Compare">
              <Badge badgeContent={2} sx={{ '& .MuiBadge-badge': { backgroundColor: '#f97316', color: 'white' } }}>
                <IoIosGitCompare className="text-[26px] text-gray-700 hover:text-orange-500 cursor-pointer" />
              </Badge>
            </Tooltip>
          </li>

          <li>
            <Tooltip title="Wishlist">
              <Badge badgeContent={1} sx={{ '& .MuiBadge-badge': { backgroundColor: '#f97316', color: 'white' } }}>
                <FaCartPlus className="text-[26px] text-gray-700 hover:text-orange-500 cursor-pointer" />
              </Badge>
            </Tooltip>
          </li>

          <li>
            <Tooltip title="Cart">
              <Badge badgeContent={3} sx={{ '& .MuiBadge-badge': { backgroundColor: '#f97316', color: 'white' } }}>
                <FaRegHeart className="text-[26px] text-gray-700 hover:text-orange-500 cursor-pointer" />
              </Badge>
            </Tooltip>
          </li>
        </ul>
      </div>
    </div>
  </div>

  {/* Navigation */}
  <Navigation />
</header>

   
    </>
  )
}

export default Header
