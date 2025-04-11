import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import { IoIosClose } from "react-icons/io";
import { FaRegSquarePlus } from "react-icons/fa6";

const Categorypanel = ({ isOpen, setIsOpen }) => {
  const toggleDrawer = (newOpen) => () => {
    setIsOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <h1 className='text-center font-bold p-3 flex tems-center justify-between'>Shop by category <IoIosClose onClick={toggleDrawer(false)} className='cursor-pointer text-[20px]'/></h1>
      <div className='scroll'>
      <ul className='w-full'>
  <li className='list-none flex items-center relative px-3 py-2'>
    <button className='text-blue-300 hover:text-orange-500 font-semibold text-[14px]'>
      Fashion
    </button>
    <FaRegSquarePlus className='absolute top-2 right-2 text-gray-500 hover:text-orange-500 cursor-pointer' />
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

export default Categorypanel;
