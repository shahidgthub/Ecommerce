import React, { useState } from 'react';
import { CgMenuRightAlt } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoRocketSharp } from "react-icons/io5";
import Categorypanel from './Categorypanel';

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openCatPanel = () => {
    setIsOpenCatPanel(true);
  };

  return (
    <>
      <nav className='py-2'>
        <div className='container mx-auto flex items-center justify-between'>
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

          <div className='col_2 w-[55%]'>
            <ul className='flex gap-8 p-4'>
              {[
                'Home',
                'Fashion',
                'Electronics',
                'Bags',
                'Footwear',
                'Groceries',
                'Beauty',
                'Wealness',
                'Jewleries'
              ].map((item, idx) => (
                <li key={idx} className='list-none'>
                  <Link to='' className='hover:text-orange-500 text-[14px] font-semibold'>
                    {item === 'Home' ? (
                      <button className='text-blue-500 hover:text-orange-500'>{item}</button>
                    ) : (
                      item
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

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
