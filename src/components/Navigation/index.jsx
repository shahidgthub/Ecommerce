import React from 'react'
import { CgMenuRightAlt } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa6";

const Navigation = () => {
  return (
    <nav className='py-2'>
        <div className='container mx-auto  flex item-center justify-end'>
            <div className='col1 w-[30%] flex gap-2 p-2 rounded-md cursor-pointer hover:bg-blue-300 bg-inline'>
                <CgMenuRightAlt className='mt-1 text-18px'/>
                <button className='text-black  font-bold'>Shop By category</button>
                <FaAngleDown className='text-18px mt-2 '/>

            </div>
            <div className='col1 w-[70%]'>
                <button className='text-blue-400  hover-text-blue-700'>Shop By category</button>

            </div>

        </div>
    </nav>
  )
}

export default Navigation
