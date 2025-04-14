import React, { useState } from 'react';
import { CgMenuRightAlt } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoRocketSharp } from "react-icons/io5";
import Categorypanel from './Categorypanel';

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
  const [isFashionOpen, setIsFashionOpen] = useState(false);
  const [isElectronicOpen, setIsElectronicOpen] = useState(false);

  const openCatPanel = () => setIsOpenCatPanel(true);
  const toggleFashionMenu = () => setIsFashionOpen(prev => !prev);
  const toggleElectronicMenu = () => setIsElectronicOpen(prev => !prev);

  return (
    <>
      <nav className='py-2 relative z-20 bg-white'>
        <div className='container mx-auto flex items-center justify-between flex-wrap'>

          {/* Left: Category Button */}
          <div className='w-full sm:w-auto p-2'>
            <button
              onClick={openCatPanel}
              className='text-black font-bold lg:w-full flex items-center justify-between py-2 rounded-md hover:bg-orange-300'
            >
              <div className='flex items-center gap-4'>
                <CgMenuRightAlt className='text-[18px] mt-1' />
                <span>Shop By Category</span>
              </div>
              <FaAngleDown className='text-[18px] mt-1' />
            </button>
          </div>

          {/* Center: Navigation Links */}
          <div className='w-full sm:w-auto'>
            <ul className='lg:flex flex-wrap gap-6 p-4 hidden'>

              <li>
                <Link to='/' className='hover:text-orange-500 text-[14px] font-semibold'>
                  Home
                </Link>
              </li>

              <li className='relative'>
              <li
  className='relative'
  onMouseEnter={() => setIsFashionOpen(true)}
  onMouseLeave={() => setIsFashionOpen(false)}
>
  <button className='hover:text-orange-500 text-[14px] font-semibold'>
    Fashion
  </button>

  {isFashionOpen && (
    <div className='absolute top-full left-0 mt-2 bg-white shadow-lg p-4 grid grid-cols-1 gap-2 min-w-[150px] z-50'>
      <ul className='space-y-1'>
        <li><Link to='/fashion/mens'>Mens</Link></li>
        <li><Link to='/fashion/womens'>Womens</Link></li>
        <li><Link to='/fashion/kids'>Kids</Link></li>
        <li><Link to='/fashion/shoes'>Shoes</Link></li>
        <li><Link to='/fashion/watches'>Watches</Link></li>
        <li><Link to='/fashion/accessories'>Accessories</Link></li>
      </ul>
    </div>
  )}
</li>
              </li>

             {/* Electronics Dropdown */}
             <li
                className='relative'
                onMouseEnter={() => setIsElectronicOpen(true)}
                onMouseLeave={() => setIsElectronicOpen(false)}
              >
                <button className='hover:text-orange-500 text-[14px] font-semibold'>
                  Electronics
                </button>
                {isElectronicOpen && (
                  <div className='absolute top-full left-0 mt-2 bg-white shadow-lg p-4 grid grid-cols-1 gap-2 min-w-[150px] z-50'>
                    <ul className='space-y-1'>
                      <li><Link to='/electronics/mobiles'>Mobiles</Link></li>
                      <li><Link to='/electronics/laptops'>Laptops</Link></li>
                      <li><Link to='/electronics/tvs'>TVs</Link></li>
                      <li><Link to='/electronics/cameras'>Cameras</Link></li>
                      <li><Link to='/electronics/speakers'>Speakers</Link></li>
                    </ul>
                  </div>
                )}
              </li>

              <li><Link to='/bags' className='hover:text-orange-500 text-[14px] font-semibold'>Bags</Link></li>
              <li><Link to='/footwear' className='hover:text-orange-500 text-[14px] font-semibold'>Footwear</Link></li>
              <li><Link to='/groceries' className='hover:text-orange-500 text-[14px] font-semibold'>Groceries</Link></li>
              <li><Link to='/beauty' className='hover:text-orange-500 text-[14px] font-semibold'>Beauty</Link></li>
              <li><Link to='/wellness' className='hover:text-orange-500 text-[14px] font-semibold'>Wellness</Link></li>
              <li><Link to='/jewelleries' className='hover:text-orange-500 text-[14px] font-semibold'>Jewelleries</Link></li>
            </ul>
          </div>

          {/* Right: Delivery Info */}
          <div className='w-full sm:w-auto p-4'>
            <p className='text-[14px] font-semibold flex items-center gap-2 justify-center sm:justify-start'>
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
