import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';

const ProductItem = () => {
  const value = 4; // Static rating value

  return (
    <div className="productItem">
      <div className="w-[250px] h-full px-2 rounded-md bg-gray-100 shadow hover:shadow-md transition duration-300 py-3">
        <img 
          src="https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg" 
          alt="Men Shirt"
          className="h-[250px] w-full object-cover rounded-t-md"
        />
        <div>
          <h6 className="text-[14px] px-2 py-2 hover:text-orange-500">Soylent Green</h6>
          <h1 className="text-[16px] font-medium px-2 leading-tight hover:text-orange-500 ">
            <Link to="" className="link">Men Alias-N Regular Fit Spread Collar Shirt</Link>
          </h1>
          <div className="px-2 py-2">
            <Rating name="read-only" value={value} readOnly size="small" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
