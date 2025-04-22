import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';

const ProductItem = () => {
  const value = 4; // Static rating value

  return (
    <>
    <div className="productItem">
      <div className="w-full h-full  rounded-md bg-gray-100 shadow hover:shadow-md transition duration-300 py-  border-black">
        <img 
          src="https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg" 
          alt="Men Shirt"
          className="h-[250px] w-full object-cover rounded-t-md"
        />
        <div className='border-2 border-gray-200'>
          <h6 className="text-[14px]  py-2 hover:text-orange-500 px-2">Soylent Green</h6>
          <h1 className="text-[16px] font-medium  leading-tight hover:text-orange-500  px-2">
            <Link to="" className="link">Men Alias-N Regular Fit Spread Collar Shirt</Link>
          </h1>
          <div className=" py-2 px-2">
            <Rating name="read-only" value={value} readOnly size="small" />
          </div>
        </div>
      </div>
      
    </div>
    {/* 2 */}
    <div className="productItem">
      <div className="w-full h-full  rounded-md bg-gray-100 shadow hover:shadow-md transition duration-300 py-  border-black">
        <img 
          src="https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg" 
          alt="Men Shirt"
          className="h-[250px] w-full object-cover rounded-t-md"
        />
        <div className='border-2 border-gray-200'>
          <h6 className="text-[14px]  py-2 hover:text-orange-500 px-2">Soylent Green</h6>
          <h1 className="text-[16px] font-medium  leading-tight hover:text-orange-500  px-2">
            <Link to="" className="link">Men Alias-N Regular Fit Spread Collar Shirt</Link>
          </h1>
          <div className=" py-2 px-2">
            <Rating name="read-only" value={value} readOnly size="small" />
          </div>
        </div>
      </div>
      
    </div>
    </>
  );
};

export default ProductItem;
