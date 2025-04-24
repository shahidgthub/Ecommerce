import React from 'react'

const Sidebar = () => {
  return (
    <div>
 <aside className=" w-100 p-4   h-screen hidden md:block">
 <h1 className='text-2xl font-bold text-center '>Ecommerce</h1>

          <nav className='flex justify-center pt-6'>
            <ul className="space-y-4 text-2xl font-semibold">
              <li><a href="#" className="hover:text-blue-400">Overview</a></li>
              <li><a href="#" className="hover:text-blue-400">Activities</a></li>
              <li><a href="#" className="hover:text-blue-400">Settings</a></li>
            </ul>
          </nav>
        </aside>      
    </div>
  )
}

export default  Sidebar
