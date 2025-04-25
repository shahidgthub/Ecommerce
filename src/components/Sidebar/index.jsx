import React from 'react'

const Sidebar = () => {
  return (
    <div>
 <aside className=" w-84 p-4   h-screen hidden md:block">
 <h1 className='text-2xl font-bold text-center '>Ecommerce</h1>

          <nav className='flex justify-center pt-6'>
            <ul className="space-y-8 text-2xl font-semibold">
              <li><a href="#" className="hover:text-blue-400">My Account</a></li>
              <li><a href="#" className="hover:text-blue-400">My Member </a></li>
              <li><a href="#" className="hover:text-blue-400">My Profile</a></li>
              <li><a href="#" className="hover:text-blue-400">Sign Out</a></li>
              <li><a href="#" className="hover:text-blue-400">Support Issue</a></li>


            </ul>
          </nav>
        </aside>      
    </div>
  )
}

export default  Sidebar
