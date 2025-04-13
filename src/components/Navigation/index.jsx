import React, { useState } from 'react';
import { CgMenuRightAlt } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoRocketSharp } from "react-icons/io5";
import Categorypanel from './Categorypanel';

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
  const [isFashionOpen, setIsFashionOpen] = useState(false);

  const openCatPanel = () => {
    setIsOpenCatPanel(true);
  };

  const toggleFashionMenu = () => {
    setIsFashionOpen(prev => !prev);
  };

  return (
    <>
      <nav className='py-2 relative z-20 bg-white'>
        <div className='container mx-auto flex items-center justify-between'>
          {/* Left: Category Button */}
          <div className='col_1 w-[20%] p-2'>
            <button
              onClick={openCatPanel}
              className='text-black font-bold w-full flex items-center justify-between py-2 rounded-md hover:bg-orange-300'
            >
              <div className='flex items-center gap-2'>
                <CgMenuRightAlt className='text-[18px] mt-1' />
                <span>Shop By category</span>
              </div>
              <FaAngleDown className='text-[18px] mt-2' />
            </button>
          </div>

          {/* Center: Navigation Links */}
          <div className='col_2 w-[55%] relative'>
            <ul className='flex gap-8 p-4'>
              <li className='list-none'>
                <Link to='/' className='hover:text-orange-500 text-[14px] font-semibold'>
                  Home
                </Link>
              </li>

              <li className='list-none relative'>
                <button
                  onClick={toggleFashionMenu}
                  className='hover:text-orange-500 text-[14px] font-semibold'
                >
                  Fashion
                </button>

                {isFashionOpen && (
                  <div className='absolute top-full left-0 mt-2 bg-white shadow-lg p-4 grid grid-cols-1 gap-6 min-w-[100px]'>
                    <ul className='space-y-2'>
                      <li><Link to='/fashion/mens' className='hover:text-orange-500 text-sm'>Mens</Link></li>
                      <li><Link to='/fashion/womens' className='hover:text-orange-500 text-sm'>Womens</Link></li>
                      <li><Link to='/fashion/kids' className='hover:text-orange-500 text-sm'>Kids</Link></li>
                    
                      <li><Link to='/fashion/shoes' className='hover:text-orange-500 text-sm'>Shoes</Link></li>
                      <li><Link to='/fashion/watches' className='hover:text-orange-500 text-sm'>Watches</Link></li>
                      <li><Link to='/fashion/accessories' className='hover:text-orange-500 text-sm'>Accessories</Link></li>
                    </ul>
                  </div>
                )}
              </li>

              <li className='list-none'>
                <Link to='/electronics' className='hover:text-orange-500 text-[14px] font-semibold'>
                  Electronics
                </Link>
              </li>
              <li className='list-none'>
                <Link to='/bags' className='hover:text-orange-500 text-[14px] font-semibold'>
                  Bags
                </Link>
              </li>
              <li className='list-none'>
                <Link to='/footwear' className='hover:text-orange-500 text-[14px] font-semibold'>
                  Footwear
                </Link>
              </li>
              <li className='list-none'>
                <Link to='/groceries' className='hover:text-orange-500 text-[14px] font-semibold'>
                  Groceries
                </Link>
              </li>
              <li className='list-none'>
                <Link to='/beauty' className='hover:text-orange-500 text-[14px] font-semibold'>
                  Beauty
                </Link>
              </li>
              <li className='list-none'>
                <Link to='/wellness' className='hover:text-orange-500 text-[14px] font-semibold'>
                  Wellness
                </Link>
              </li>
              <li className='list-none'>
                <Link to='/jewelleries' className='hover:text-orange-500 text-[14px] font-semibold'>
                  Jewelleries
                </Link>
              </li>
            </ul>
          </div>

          {/* Right: Delivery Message */}
          <div className='col-3 w-[18%] p-4'>
            <p className='text-[14px] font-semibold flex items-center gap-1'>
              <IoRocketSharp className='mt-1 text-[18px]' />
              Free International Delivery
            </p>
          </div>
        </div>
      </nav>

      {/* Category Drawer */}
      <Categorypanel isOpen={isOpenCatPanel} setIsOpen={setIsOpenCatPanel} />
    </>
  );
};

export default Navigation;
