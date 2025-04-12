import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import { IoIosClose } from "react-icons/io";
import { FaRegSquarePlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MdOutlineIndeterminateCheckBox } from "react-icons/md";

const CategoryPanel = ({ isOpen, setIsOpen }) => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerMenuIndex, setInnerMenuIndex] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    setIsOpen(newOpen);
  };

  const openSubmenu = (index) => {
    setSubmenuIndex((prev) => (prev === index ? null : index));
    setInnerMenuIndex(null); // optional: reset inner
  };

  const openInnerMenu = (index) => {
    setInnerMenuIndex((prev) => (prev === index ? null : index));
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <h1 className='text-center font-bold p-3 flex items-center justify-between'>
        Shop by category
        <IoIosClose onClick={toggleDrawer(false)} className='cursor-pointer text-[20px]' />
      </h1>

      <div className='scroll'>
        <ul>
          <li className='list-none relative px-3 py-2'>
            <div className='flex items-center justify-between'>
              <Link to=" ">
                <button className='hover:text-orange-500 font-semibold text-[14px] w-full text-left'>
                  Fashion
                </button>
              </Link>
              {submenuIndex === 0 ? (
                <MdOutlineIndeterminateCheckBox
                  className='text-gray-500 hover:text-orange-500 cursor-pointer'
                  onClick={() => openSubmenu(0)}
                />
              ) : (
                <FaRegSquarePlus
                  className='text-gray-500 hover:text-orange-500 cursor-pointer'
                  onClick={() => openSubmenu(0)}
                />
              )}
            </div>

            {submenuIndex === 0 && (
              <ul className="mt-2 ml-4">
                <li className='list-none relative flex justify-between items-center'>
                  <button
                    className='hover:text-orange-500 font-semibold text-[14px] text-left w-full'
                    onClick={() => openInnerMenu(0)}
                  >
                    Apparel
                  </button>
                  {innerMenuIndex === 0 ? (
                    <MdOutlineIndeterminateCheckBox
                      className='text-gray-500 hover:text-orange-500 cursor-pointer'
                      onClick={() => openInnerMenu(0)}
                    />
                  ) : (
                    <FaRegSquarePlus
                      className='text-gray-500 hover:text-orange-500 cursor-pointer'
                      onClick={() => openInnerMenu(0)}
                    />
                  )}
                </li>

                {innerMenuIndex === 0 && (
                  <>
                    <li className='list-none relative px-2 mb-1'>
                      <Link to='/' className='hover:text-orange-500 text-[14px] w-full'>
                        Smart Tablet
                      </Link>
                    </li>
                    <li className='list-none relative px-2 mb-1'>
                      <Link to='/' className='hover:text-orange-500 text-[14px] w-full'>
                        Crepe T-Shirt
                      </Link>
                    </li>
                    <li className='list-none relative px-2 mb-1'>
                      <Link to='/' className='hover:text-orange-500 text-[14px] w-full'>
                        Leather Watch
                      </Link>
                    </li>
                    <li className='list-none relative px-2 mb-1'>
                      <Link to='/' className='hover:text-orange-500 text-[14px] w-full'>
                        Rolling Diamond
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <Drawer open={isOpen} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
};

export default CategoryPanel;
