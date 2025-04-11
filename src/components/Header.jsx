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
    <header className='container mx-auto'>
      {/* Top Strip */}
      <div className='top-strip py-2 border-t border-b border-gray-300 mt-2'>
        <div className=''>
          <div className='flex items-center justify-between'>
            <div className='w-[50%]'>
              <p className='text-[14px] font-semibold'>
                Get up to 50% off new season style – limited time only
              </p>
            </div>
            <div className='flex justify-end items-center py-2'>
              <ul className='flex items-center gap-4'>
                <li className='list-none'>
                  <Link to="/help-center" className='text-[14px] hover:text-orange-500 font-semibold'>
                    Help Center
                  </Link>
                </li>
                <li className='list-none'>
                  <Link to="/order-tracking" className='text-[14px] hover:text-orange-500 font-semibold'>
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className='header py-4 shadow-sm'>
        <div className='container mx-auto flex items-center justify-between'>
          <div className=' col-1 text-xl font-bold w-[30%] '>
            <Link to="/">Ecommerce</Link>
          </div>
          <div className='col-2  w-[45%]'>
            {/* Future nav / search / etc. */}
            <Search/>
          </div>
          <div className='col-3 w-[30%] flex items-center justify-end'>
          <ul className='flex items-center gap-6'>
  {/* Login & Register in one list item */}
  <li className='list-none '>
    <Link to="/login" className='text-[16px] font-semibold hover:text-orange-500'>Login</Link>
    <span>|</span>
    <Link to="/register" className='text-[16px] font-semibold hover:text-orange-500'>Register</Link>
  </li>

  {/* Cart icon in a separate list item */}
  
  <li className='list-none'>
  <Tooltip title="Compare">
    <Badge
      badgeContent={4}
      sx={{
        '& .MuiBadge-badge': {
          backgroundColor: '#f97316', // Tailwind's orange-500

          color: 'white', // optional: color of the number
        }
      }}
    >
      <IoIosGitCompare className='text-[20px] text-gray-700 hover:text-orange-500 cursor-pointer' />
    </Badge>
  </Tooltip>
</li>

<Tooltip title="Wishlist">
  <li className='list-none'>
    <Badge
      badgeContent={4}
      sx={{
        '& .MuiBadge-badge': {
          backgroundColor: '#f97316', // Tailwind's orange-500
          color: 'white',
        },
      }}
    >
      <FaCartPlus className='text-[20px] text-gray-700 hover:text-orange-500 cursor-pointer' />
    </Badge>
  </li>
</Tooltip>

<Tooltip title="Cart">
  <li className='list-none'>
    <Badge
      badgeContent={4}
      sx={{
        '& .MuiBadge-badge': {
          backgroundColor: '#f97316', // Tailwind's orange-500
          color: 'white',
        },
      }}
    >
      <FaRegHeart className='text-[20px] text-gray-700 hover:text-orange-500 cursor-pointer' />
    </Badge>
  </li>
</Tooltip>

 
</ul>
          </div>
        </div>
      </div>
      <Navigation/>
    </header>
   
    </>
  )
}

export default Header
