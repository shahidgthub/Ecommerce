import React from 'react'
import { IoNotificationsOutline } from "react-icons/io5";


const Topbar = () => {
  return (
    <div>
<header className="  p-4">
    <div className='flex justify-between'>
        <h1 className="text-2xl font-bold">My Account</h1>
        <div className='flex gap-6'>
            <div className='bg-orange-50 w-[40px] h-[40px] rounded-xl flex  justify-center'>
        <IoNotificationsOutline className='text-[32px] mt-2 text-yellow-400 ' />
        </div>
        <div className='w-[50px] h-[50px] rounded-full'>
        <img
  src="https://marvellex.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favator.4b47422a.jpg&w=64&q=75"
  alt="Avatar"
  className=" object-cover"
/>
        </div>
        </div>
        </div>
      </header>
    </div>
  )
}

export default Topbar
